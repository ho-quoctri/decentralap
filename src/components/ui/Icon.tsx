import Image from 'next/image';
import React from 'react';

interface IconProps {
  name: string;             
  size?: number;             
  color?: string;           
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', ...props }) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
      width={size}
      height={size}
      style={{ color }}
      {...props}
    />
  );
};

export default Icon;