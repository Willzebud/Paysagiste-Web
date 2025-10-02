export function InstaOutline({
  size = 36,
  strokeWidth = 1.5,
  withCircle = false,
  ...props
}: React.ComponentProps<"svg"> & { size?: number; strokeWidth?: number; withCircle?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      {withCircle && <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth={strokeWidth} />}
      <rect x="7" y="7" width="10" height="10" rx="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="15.5" cy="8.5" r="0.9" fill="currentColor" />
    </svg>
  );
}
