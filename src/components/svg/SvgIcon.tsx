import React from 'react';
import * as Icons from '@assets/svg/assets';

type SvgIconProps = {
  name: keyof typeof Icons;
};
function SvgIcon({name}: SvgIconProps) {
  const Svg = Icons[name];
  return <Svg />;
}

export default SvgIcon;
