import { SkeletonLoadProps } from '@components/SkeletonLoad/types.ts';
import { FC } from 'react';
import { Skeleton } from '@mui/material';

const SkeletonLoad: FC<SkeletonLoadProps> = ({
  variant,
  animation,
  height,
  width,
}) => {
  return (
    <Skeleton
      variant={variant}
      animation={animation}
      height={height}
      width={width}
    />
  );
};
export default SkeletonLoad;
