import { cn } from "@/lib/utils";

type GradientEdgeProps = {
  edge?: "top" | "bottom";
  /** tinggi dalam persen, default 30 */
  height?: number;
  /** 0-1 */
  opacity?: number;
  className?: string;
};

/** Padanan .gradient-edge-top / .gradient-edge-bottom (gradasi bg-dark-1 ke transparan). */
export function GradientEdge({
  edge = "bottom",
  height = 30,
  opacity = 1,
  className,
}: GradientEdgeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute z-[1] w-full",
        edge === "top"
          ? "top-0 bg-gradient-to-b from-dark-1 to-transparent"
          : "bottom-0 bg-gradient-to-t from-dark-1 to-transparent",
        className,
      )}
      style={{ height: `${height}%`, opacity }}
    />
  );
}
