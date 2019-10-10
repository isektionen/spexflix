import React from 'react';

import Play from './svg/play';
import ArrowLeft from './svg/arrow-left';

import { IconProps } from './iconProps';
type Props = {
  name: string;
} & IconProps;

const Icon = ({ name, size = 24, color = '#fff', className }: Props) => {
  switch (name) {
    case 'arrowLeft':
      return <ArrowLeft size={size} color={color} className={className} />;
    case 'play':
    default:
      return <Play size={size} color={color} className={className} />;
  }
};

export default Icon;
