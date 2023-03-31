export interface ChevronProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  size?: number;
  fill?: string;
}

const Chevron = ({
  direction = 'right',
  size = 24,
  fill = '#000',
}: ChevronProps) => {
  let rotation = 0;
  switch (direction) {
    case 'up':
      rotation = -90;
      break;
    case 'down':
      rotation = 90;
      break;
    case 'left':
      rotation = 180;
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
        fill={fill}
        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
      />
    </svg>
  );
};

export default Chevron;
