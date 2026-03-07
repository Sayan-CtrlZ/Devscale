const fs = require('fs');
const homePath = 'src/pages/Home.tsx';

let data = fs.readFileSync(homePath, 'utf8');

const mainStart = data.indexOf('<main className="relative w-full flex flex-col items-center">');
const mainEndMatch = data.substring(mainStart).match(/<\/main>/);

if (mainStart !== -1 && mainEndMatch) {
  const mainEnd = mainStart + mainEndMatch.index + '</main>'.length;
  const mainContent = data.substring(mainStart, mainEnd);

  const newHomeContent = `import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, Globe, Sparkles, Zap, ArrowRight, Bot, BarChart, Link as LinkIcon, Lock, Code } from "lucide-react";
import { MetallicObject3D } from "../components/MetallicObject3D";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const workflowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      ${mainContent}
    </>
  );
}
`;

  fs.writeFileSync(homePath, newHomeContent);
  console.log("Home.tsx sanitized!");
} else {
  console.log("Could not find main block in Home.tsx");
}
