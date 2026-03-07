const fs = require('fs');

// 1. Fix App.tsx - remove the entire `<main>` block
const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const mainStart = appTsx.indexOf('{/* Hero Section */}');
const mainEndMatch = appTsx.substring(mainStart).match(/<\/main>/);
const mainEnd = mainStart + mainEndMatch.index + '</main>'.length;

const mainContent = appTsx.substring(mainStart, mainEnd);

const newAppTsx = appTsx.replace(mainContent, `
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookAppointment />} />
      </Routes>
`);

fs.writeFileSync('src/App.tsx', newAppTsx);

// 2. Fix Home.tsx - ensure it has the correct imports and ONLY the <main> block
const homeTsxContent = `import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, Globe, Sparkles, Zap, ArrowRight, Bot, BarChart, Link, Lock, Code } from "lucide-react";
import { MetallicObject3D } from "../components/MetallicObject3D";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const workflowRef = useRef<HTMLElement>(null);

  // Ensure page starts at top on every refresh
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

fs.writeFileSync('src/pages/Home.tsx', homeTsxContent);
