import React from 'react';

import { IconProps } from '../iconProps';

const Svg = ({ size, color, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill={color} />
  </svg>
);

export default Svg;
