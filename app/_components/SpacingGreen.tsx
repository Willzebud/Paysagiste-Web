import { cn } from "@/lib/utils";

export type SapacingProps = {
  size?: "sm" | "md" | "lg";
  color?: string;
};

export const SpacingGreen = ({
  size = "md",
  color = "#f1fff6",
}: SapacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-16 lg:h-24": size === "md",
        "h-24 lg:h-32": size === "lg",
      })}
      style={{
        backgroundColor: color,
      }}
    />
  );
};
