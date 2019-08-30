import React from 'react';

import Play from './svg/play';

import { IconProps } from './iconProps';
type Props = {
  name: string;
} & IconProps;

const Icon = ({ name, size = 24, color = '#fff', className }: Props) => {
  switch (name) {
    case 'play':
    default:
      return <Play size={size} color={color} className={className} />;
  }
};

export default Icon;
