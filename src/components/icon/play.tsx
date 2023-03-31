export interface PlayProps {
  size?: number;
  fill?: string;
}

const Play = ({ size = 24, fill = '#000' }: PlayProps) => (
  <svg
    style={{
      width: `${size}px`,
      height: `${size}px`,
    }}
    viewBox={`0 0 ${size} ${size}`}
  >
    <path fill={fill} d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>
);

export default Play;
