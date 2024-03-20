import * as React from 'react';
import Svg, { Circle, G, Path, Rect, SvgProps } from 'react-native-svg';
import { SVGProps } from './type';

const calculatePathTransform = ({
  size,
  height,
  width,
  y,
  x,
}: {
  size: number;
  height: number;
  width: number;
  y: number;
  x: number;
}) => {
  const translateY = (size - height) / 2 - y - 2;
  const translateX = (size - width) / 2 - x - 2;
  //tính toán bounding của path để điều chỉnh vị trí
  return `translate(${translateX}, ${translateY})`;
};

export const ChartIcon = (props: SvgProps) => (
  <Svg height="100%" width="100%" fill={props.color} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 21.375H2.25v6.375H6.5v-6.375Zm10.625-8.5h-4.25V27.75h4.25V12.875ZM27.75 2.25H23.5v25.5h4.25V2.25ZM23.5.125a2.125 2.125 0 0 0-2.125 2.125v25.5a2.125 2.125 0 0 0 2.125 2.125h4.25a2.125 2.125 0 0 0 2.125-2.125V2.25A2.125 2.125 0 0 0 27.75.125H23.5Zm-12.75 12.75a2.125 2.125 0 0 1 2.125-2.125h4.25a2.125 2.125 0 0 1 2.125 2.125V27.75a2.125 2.125 0 0 1-2.125 2.125h-4.25a2.125 2.125 0 0 1-2.125-2.125V12.875Zm-10.625 8.5A2.125 2.125 0 0 1 2.25 19.25H6.5a2.125 2.125 0 0 1 2.125 2.125v6.375A2.125 2.125 0 0 1 6.5 29.875H2.25A2.125 2.125 0 0 1 .125 27.75v-6.375Z"
      fill={props.color}
    />
  </Svg>
);

export const CreditCardIcon = (props: SvgProps) => (
  <Svg height="100%" width="100%" fill={props.color} {...props}>
    <Path
      fillRule="evenodd"
      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
    />
    <Path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
  </Svg>
);

export const ProfileIcon = (props: SvgProps) => (
  <Svg height="100%" width="100%" fill={props.color} {...props}>
    <Path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
  </Svg>
);

export const BellIcon = (props: SVGProps) => {
  const tranform = calculatePathTransform({
    height: 18.959640502929688,
    width: 20.416709899902344,
    x: 9.7916898727417,
    y: 8.332059860229492,
    size: props.size,
  });

  return (
    <Svg height="100%" width="100%" {...props}>
      <Rect
        width={props.size}
        height={props.size}
        fill="#fff"
        fillOpacity={0.06}
        rx={6.667}
      />
      <G transform={tranform}>
        <Path
          fill="#fff"
          d="M20 31.667a2.917 2.917 0 0 0 2.917-2.917h-5.834A2.917 2.917 0 0 0 20 31.667Z"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="m20 11.13-1.162.235a5.836 5.836 0 0 0-4.671 5.718c0 .916-.196 3.204-.67 5.457-.233 1.119-.548 2.284-.967 3.293h14.94c-.419-1.009-.732-2.173-.967-3.293-.474-2.253-.67-4.54-.67-5.457a5.836 5.836 0 0 0-4.67-5.716L20 11.129v.001Zm9.07 14.703c.326.652.702 1.169 1.138 1.459H9.792c.436-.29.812-.807 1.137-1.459 1.313-2.625 1.78-7.466 1.78-8.75a7.294 7.294 0 0 1 5.84-7.147 1.457 1.457 0 0 1 2.043-1.479 1.458 1.458 0 0 1 .86 1.479 7.295 7.295 0 0 1 5.84 7.147c0 1.284.466 6.125 1.779 8.75Z"
          clipRule="evenodd"
        />
        <Circle cx={25.833} cy={14.167} r={4.167} fill="#FFAB7B" />
      </G>
    </Svg>
  );
};

export const CurvedIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M101.508 0H0c6.798.008 12.663 4.002 15.384 9.77C19.612 24.346 33.063 35 49.002 35h3.501c15.94 0 29.39-10.654 33.618-25.23C88.842 4.001 94.71.007 101.508 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ExchangeIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#FCFCFC"
      d="M10 28a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM6.16 14a.791.791 0 0 0 .3.05 1 1 0 0 0 1-.7A9.001 9.001 0 0 1 12 8v1a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2h2.42a11 11 0 0 0-5.92 6.7 1 1 0 0 0 .66 1.3ZM19 22a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-2.43a11.001 11.001 0 0 0 6.21-7.8 1.019 1.019 0 1 0-2-.4A9 9 0 0 1 20 24.05V23a1 1 0 0 0-1-1Z"
    />
  </Svg>
);

export const IncomeIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#FCFCFC"
      d="M23 14H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5Zm-7 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    />
    <Path
      fill="#FCFCFC"
      d="M16 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 2a1 1 0 0 0-1 1v5.59l-2.54-2.54a1 1 0 0 0-1.41 1.41l4.24 4.25c.092.09.2.161.32.21a1 1 0 0 0 .78 0 .998.998 0 0 0 .32-.21L21 7.46a1 1 0 0 0-1.41-1.41L17 8.59V3a1 1 0 0 0-1-1Z"
    />
  </Svg>
);

export const ExpenseIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#FCFCFC"
      d="M23 14H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5Zm-7 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    />
    <Path
      fill="#FCFCFC"
      d="M16 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16.71 2.29a1 1 0 0 0-1.42 0l-4.24 4.25A1.015 1.015 0 0 0 12.46 8L15 5.41V11a1 1 0 1 0 2 0V5.41L19.54 8a1 1 0 0 0 .7.29A1 1 0 0 0 21 8a1 1 0 0 0 0-1.41l-4.29-4.3Z"
    />
  </Svg>
);
