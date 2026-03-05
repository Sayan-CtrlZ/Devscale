import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const FLOOR_Y = -2.6;  // floor of the scene
const GRAVITY = -11;   // pull strength
const DAMPING = 0.58;  // energy kept on bounce

interface BallDef {
    id: number;
    radius: number;
    targetX: number;
    delay: number; // seconds after trigger before this ball drops
}

const BALLS: BallDef[] = [
    { id: 0, radius: 0.52, targetX: 0.6, delay: 0.0 },
    { id: 1, radius: 0.40, targetX: 1.65, delay: 0.45 },
    { id: 2, radius: 0.58, targetX: 2.8, delay: 0.9 },
    { id: 3, radius: 0.36, targetX: 3.7, delay: 1.35 },
    { id: 4, radius: 0.46, targetX: 4.7, delay: 1.8 },
];

function FallingBall({
    radius,
    targetX,
    delay,
    triggered,
}: BallDef & { triggered: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const pos = useRef(new THREE.Vector3(7, 6, 0)); // starts off-screen right
    const vel = useRef(new THREE.Vector3(0, 0, 0));
    const timer = useRef(0);
    const settled = useRef(false);
    const started = useRef(false);

    useFrame((_, delta) => {
        if (!meshRef.current || settled.current || !triggered) return;
        const dt = Math.min(delta, 0.05);
        timer.current += dt;
        if (timer.current < delay) return;

        if (!started.current) {
            // Initial kick toward targetX
            vel.current.set((targetX - 7) * 1.5, -1, 0);
            started.current = true;
        }

        // Gravity
        vel.current.y += GRAVITY * dt;
        // Drift toward targetX
        const dx = targetX - pos.current.x;
        vel.current.x += dx * 2.5 * dt;

        pos.current.addScaledVector(vel.current, dt);

        // Floor
        if (pos.current.y - radius < FLOOR_Y) {
            pos.current.y = FLOOR_Y + radius;
            const ySpeed = Math.abs(vel.current.y);
            if (ySpeed < 0.8) {
                // settle permanently
                vel.current.set(0, 0, 0);
                pos.current.x = targetX;
                settled.current = true;
            } else {
                vel.current.y = ySpeed * DAMPING;
                vel.current.x *= 0.72;
            }
        }

        meshRef.current.position.copy(pos.current);
        meshRef.current.rotation.x += 0.5 * dt;
        meshRef.current.rotation.y += 0.7 * dt;
    });

    return (
        <mesh ref={meshRef} position={[7, 6, 0]} castShadow>
            <sphereGeometry args={[radius, 64, 64]} />
            <meshPhysicalMaterial
                color="#c0c0c0"
                metalness={1}
                roughness={0.04}
                reflectivity={1}
                envMapIntensity={3.5}
                clearcoat={1}
                clearcoatRoughness={0.05}
            />
        </mesh>
    );
}

export function DroppingBalls() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTriggered(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
            {/* Only mount canvas once section is near viewport to save resources */}
            <Canvas
                camera={{ position: [2.5, 0.5, 9], fov: 55 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" castShadow />
                <directionalLight position={[-3, 5, -3]} intensity={0.6} color="#cce0ff" />
                <pointLight position={[2.5, 4, 4]} intensity={2} color="#ffffff" />
                <Environment preset="studio" />

                {BALLS.map((b) => (
                    <FallingBall key={b.id} {...b} triggered={triggered} />
                ))}
            </Canvas>
        </div>
    );
}
