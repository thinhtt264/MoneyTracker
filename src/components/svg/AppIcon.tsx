import * as React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Path,
  SvgProps,
} from 'react-native-svg';

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

export const BellIcon = (props: SvgProps) => (
  <Svg height="100%" width="100%" fill={props.color} {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 23.667a2.917 2.917 0 0 0 2.917-2.917H9.083A2.917 2.917 0 0 0 12 23.667Z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12 3.13-1.162.235a5.836 5.836 0 0 0-4.671 5.718c0 .916-.196 3.204-.67 5.457-.233 1.119-.548 2.284-.967 3.293h14.94c-.419-1.009-.732-2.173-.967-3.293-.474-2.253-.67-4.54-.67-5.457a5.836 5.836 0 0 0-4.67-5.716L12 3.129v.001Zm9.07 14.703c.326.652.702 1.169 1.138 1.459H1.792c.436-.29.812-.807 1.137-1.459 1.313-2.625 1.78-7.466 1.78-8.75a7.294 7.294 0 0 1 5.84-7.147A1.457 1.457 0 0 1 12.592.457a1.458 1.458 0 0 1 .86 1.479 7.295 7.295 0 0 1 5.84 7.147c0 1.284.466 6.125 1.779 8.75Z"
        fill="#fff"
      />
      <Circle cx={17.833} cy={6.167} r={4.167} fill={props.color} />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(.333 .333)"
          d="M0 0h23.333v23.333H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

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
