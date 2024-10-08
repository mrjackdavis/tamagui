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

      <Path d="M12 2v20" stroke={color} />
      <Path d="M2 5h20" stroke={color} />
      <Path d="M3 3v2" stroke={color} />
      <Path d="M7 3v2" stroke={color} />
      <Path d="M17 3v2" stroke={color} />
      <Path d="M21 3v2" stroke={color} />
      <Path d="m19 5-7 7-7-7" stroke={color} />
    </Svg>);

};

Icon.displayName = 'UtilityPole';

export const UtilityPole = React.memo<IconProps>(themed(Icon));