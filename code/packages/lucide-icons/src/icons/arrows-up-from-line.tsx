import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <Path d="m4 6 3-3 3 3" stroke={color} />
      <Path d="M7 17V3" stroke={color} />
      <Path d="m14 6 3-3 3 3" stroke={color} />
      <Path d="M17 17V3" stroke={color} />
      <Path d="M4 21h16" stroke={color} />
    </Svg>);

};

Icon.displayName = 'ArrowsUpFromLine';

export const ArrowsUpFromLine = React.memo<IconProps>(themed(Icon));