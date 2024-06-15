export interface SkeletonLoadProps {
  variant: 'text' | 'rectangular' | 'circular';
  animation: 'pulse' | 'wave' | false;
  height?: number | string;
  width?: number | string;
}
