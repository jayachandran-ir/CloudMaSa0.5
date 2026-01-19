// src/components/ui/ResponsiveBox.tsx
import React, { useState, useEffect } from "react";

/* ==============================
   Screen Type Definition
   ============================== */
type ScreenType = "mobile" | "tablet" | "laptop" | "desktop";

/* ==============================
   Hook: Detect screen type
   ============================== */
const useScreenType = (): ScreenType => {
  const getType = (): ScreenType => {
    if (typeof window === "undefined") return "desktop";

    const width = window.innerWidth;

    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    if (width < 1440) return "laptop";
    return "desktop";
  };

  const [type, setType] = useState<ScreenType>(getType);

  useEffect(() => {
    const handleResize = () => {
      setType(getType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return type;
};

/* ==============================
   ResponsiveBox Component
   ============================== */
type ResponsiveBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = ({
  children,
  className = "",
}) => {
  const type = useScreenType();

  /* ==============================
     Width rules (NO overflow)
     ============================== */
  const maxWidthClass: Record<ScreenType, string> = {
    mobile: "max-w-full",
    tablet: "max-w-[960px]",
    laptop: "max-w-[1200px]",
    desktop: "max-w-[1400px]",
  };

  /* ==============================
     Padding rules
     ============================== */
  const paddingClass: Record<ScreenType, string> = {
    mobile: "px-4",
    tablet: "px-6",
    laptop: "px-8",
    desktop: "px-12",
  };

  return (
    <div
      className={`
        w-full
        mx-auto
        ${maxWidthClass[type]}
        ${paddingClass[type]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
