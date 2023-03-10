export interface ChevronProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  size?: number;
  fill?: string;
}

const Arrow = ({
  direction = 'right',
  size = 24,
  fill = '#000',
}: ChevronProps) => {
  let rotation = 0;
  switch (direction) {
    case 'right':
      rotation = 180;
      break;
    case 'up':
      rotation = 90;
      break;
    case 'down':
      rotation = -90;
      break;
  }

  return (
    <svg
      width={size}
      height={size}
      style={{ transform: `rotateZ(${rotation}deg)` }}
      viewBox="0 0 24 24"
    >
      <path
        d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        fill={fill}
      />
    </svg>
  );
};

export default Arrow;
