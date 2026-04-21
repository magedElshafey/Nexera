"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null; // 👈 مهم جدا

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle
    </button>
  );
};

export default ThemeToggle;
