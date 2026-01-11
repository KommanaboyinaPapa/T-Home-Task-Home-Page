"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TiltProps = React.HTMLAttributes<HTMLDivElement> & {
  maxTilt?: number;
  scale?: number;
  disabled?: boolean;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function Tilt({
  className,
  children,
  maxTilt = 20,
  scale = 1.06,
  disabled,
  ...rest
}: TiltProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const isDisabledRef = React.useRef(false);

  React.useEffect(() => {
    if (disabled) {
      isDisabledRef.current = true;
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: coarse)")?.matches;

    isDisabledRef.current = Boolean(prefersReducedMotion || isCoarsePointer);
  }, [disabled]);

  const setVars = React.useCallback((
    rx: number,
    ry: number,
    gx: number,
    gy: number,
    targetScale?: number,
  ) => {
    const node = ref.current;
    if (!node) return;

    node.style.setProperty("--tilt-rx", `${rx}deg`);
    node.style.setProperty("--tilt-ry", `${ry}deg`);
    node.style.setProperty("--tilt-gx", `${gx}%`);
    node.style.setProperty("--tilt-gy", `${gy}%`);

    if (typeof targetScale === "number") {
      node.style.setProperty("--tilt-scale", String(targetScale));
    }
  }, []);

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isDisabledRef.current) return;

      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((e.clientY - rect.top) / rect.height, 0, 1);

      const rotateY = (x - 0.5) * (maxTilt * 2);
      const rotateX = (0.5 - y) * (maxTilt * 2);

      const gx = x * 100;
      const gy = y * 100;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setVars(rotateX, rotateY, gx, gy, scale);
      });
    },
    [maxTilt, scale, setVars],
  );

  const handlePointerLeave = React.useCallback(() => {
    if (isDisabledRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setVars(0, 0, 50, 50, 1);
  }, [setVars]);

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("tilt-root", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
