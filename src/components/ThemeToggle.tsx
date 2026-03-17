"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-white/10 dark:border-white/10 hover:bg-white/5 transition-colors focus:outline-none overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          y: theme === "dark" ? 0 : -30,
          opacity: theme === "dark" ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="w-[18px] h-[18px] text-white" />
      </motion.div>
      <motion.div
        animate={{
          y: theme === "light" ? 0 : 30,
          opacity: theme === "light" ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="w-[18px] h-[18px] text-zinc-900" />
      </motion.div>
    </button>
  );
}

