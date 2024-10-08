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

      <_Circle cx="9" cy="12" r="1" stroke={color} />
      <_Circle cx="9" cy="5" r="1" stroke={color} />
      <_Circle cx="9" cy="19" r="1" stroke={color} />
      <_Circle cx="15" cy="12" r="1" stroke={color} />
      <_Circle cx="15" cy="5" r="1" stroke={color} />
      <_Circle cx="15" cy="19" r="1" stroke={color} />
    </Svg>);

};

Icon.displayName = 'GripVertical';

export const GripVertical = React.memo<IconProps>(themed(Icon));