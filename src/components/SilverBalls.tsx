import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const FLOOR_Y = -2.0;
const GRAVITY = -7;
const DAMPING = 0.68;

interface BallProps {
    radius: number;
    startX: number;
}

const HERO_BALLS: BallProps[] = [
    { radius: 0.50, startX: 1.0 },
    { radius: 0.38, startX: 1.9 },
    { radius: 0.55, startX: 3.0 },
    { radius: 0.42, startX: 3.8 },
    { radius: 0.34, startX: 4.5 },
];

function HeroBall({ radius, startX }: BallProps) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const pos = useRef(new THREE.Vector3(startX, FLOOR_Y + radius, 0));
    const vel = useRef(new THREE.Vector3(0, 0, 0));
    const [hovered, setHovered] = useState(false);

    useFrame((_, delta) => {
        if (!meshRef.current) return;
        const dt = Math.min(delta, 0.05);

        vel.current.y += GRAVITY * dt;
        pos.current.addScaledVector(vel.current, dt);

        if (pos.current.y - radius < FLOOR_Y) {
            pos.current.y = FLOOR_Y + radius;
            const ySpd = Math.abs(vel.current.y);
            vel.current.y = ySpd < 0.5 ? 0 : ySpd * DAMPING;
            vel.current.x *= 0.85;
        }

        meshRef.current.position.copy(pos.current);
        meshRef.current.rotation.x += 0.3 * dt;
        meshRef.current.rotation.y += 0.5 * dt;
    });

    const handleClick = () => {
        vel.current.set(
            (Math.random() - 0.5) * 6,
            5 + Math.random() * 4,
            0
        );
    };

    return (
        <mesh
            ref={meshRef}
            position={[startX, FLOOR_Y + radius, 0]}
            onClick={handleClick}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            castShadow
        >
            <sphereGeometry args={[radius, 64, 64]} />
            <meshPhysicalMaterial
                color={hovered ? '#e0e0e0' : '#b0b0b0'}
                metalness={1}
                roughness={0.04}
                reflectivity={1}
                envMapIntensity={hovered ? 4.5 : 3}
                clearcoat={1}
                clearcoatRoughness={0.05}
            />
        </mesh>
    );
}

export function SilverBalls() {
    return (
        <div
            className="absolute inset-0 z-0"
            /* Canvas needs pointer-events to capture clicks */
            style={{ pointerEvents: 'none' }}
        >
            <Canvas
                camera={{ position: [3, -0.5, 8], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent', pointerEvents: 'auto' }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" castShadow />
                <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#cce0ff" />
                <pointLight position={[3, 3, 4]} intensity={2} color="#ffffff" />
                <Environment preset="studio" />

                {HERO_BALLS.map((b, i) => (
                    <HeroBall key={i} {...b} />
                ))}
            </Canvas>
        </div>
    );
}
