import * as React from 'react';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';
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

export const ArrowBoxDownIcon = (props: SVGProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Rect width={24} height={24} rx={12} fill="white" fillOpacity={0.15} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.22675 13.8517C8.279 13.7994 8.34107 13.7578 8.40941 13.7294C8.47775 13.7011 8.55101 13.6865 8.625 13.6865C8.69899 13.6865 8.77225 13.7011 8.84059 13.7294C8.90892 13.7578 8.971 13.7994 9.02325 13.8517L12 16.8296L14.9767 13.8517C15.0824 13.7461 15.2256 13.6868 15.375 13.6868C15.5244 13.6868 15.6676 13.7461 15.7732 13.8517C15.8789 13.9574 15.9382 14.1006 15.9382 14.25C15.9382 14.3994 15.8789 14.5426 15.7732 14.6482L12.3982 18.0232C12.346 18.0756 12.2839 18.1172 12.2156 18.1455C12.1472 18.1739 12.074 18.1885 12 18.1885C11.926 18.1885 11.8527 18.1739 11.7844 18.1455C11.7161 18.1172 11.654 18.0756 11.6017 18.0232L8.22675 14.6482C8.17436 14.596 8.1328 14.5339 8.10445 14.4656C8.07609 14.3972 8.06149 14.324 8.06149 14.25C8.06149 14.176 8.07609 14.1027 8.10445 14.0344C8.1328 13.9661 8.17436 13.904 8.22675 13.8517Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.8125C12.1492 5.8125 12.2923 5.87176 12.3977 5.97725C12.5032 6.08274 12.5625 6.22582 12.5625 6.375V16.5C12.5625 16.6492 12.5032 16.7923 12.3977 16.8977C12.2923 17.0032 12.1492 17.0625 12 17.0625C11.8508 17.0625 11.7077 17.0032 11.6023 16.8977C11.4968 16.7923 11.4375 16.6492 11.4375 16.5V6.375C11.4375 6.22582 11.4968 6.08274 11.6023 5.97725C11.7077 5.87176 11.8508 5.8125 12 5.8125Z"
      fill="white"
    />
  </Svg>
);

export const ArrowBoxUpIcon = (props: SVGProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Rect
      width={24}
      height={24}
      rx={12}
      transform="matrix(1 0 0 -1 0 24)"
      fill="white"
      fillOpacity={0.15}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.22675 10.1483C8.279 10.2006 8.34107 10.2422 8.40941 10.2706C8.47775 10.2989 8.55101 10.3135 8.625 10.3135C8.69899 10.3135 8.77225 10.2989 8.84059 10.2706C8.90892 10.2422 8.971 10.2006 9.02325 10.1483L12 7.17038L14.9767 10.1483C15.0824 10.2539 15.2256 10.3132 15.375 10.3132C15.5244 10.3132 15.6676 10.2539 15.7732 10.1483C15.8789 10.0426 15.9382 9.89937 15.9382 9.75C15.9382 9.60063 15.8789 9.45737 15.7732 9.35175L12.3982 5.97675C12.346 5.92437 12.2839 5.88281 12.2156 5.85445C12.1472 5.82609 12.074 5.8115 12 5.8115C11.926 5.8115 11.8527 5.82609 11.7844 5.85445C11.7161 5.88281 11.654 5.92437 11.6017 5.97675L8.22675 9.35175C8.17436 9.404 8.1328 9.46608 8.10445 9.53441C8.07609 9.60275 8.06149 9.67601 8.06149 9.75C8.06149 9.82399 8.07609 9.89725 8.10445 9.96559C8.1328 10.0339 8.17436 10.096 8.22675 10.1483Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18.1875C12.1492 18.1875 12.2923 18.1282 12.3977 18.0227C12.5032 17.9173 12.5625 17.7742 12.5625 17.625V7.5C12.5625 7.35082 12.5032 7.20774 12.3977 7.10225C12.2923 6.99676 12.1492 6.9375 12 6.9375C11.8508 6.9375 11.7077 6.99676 11.6023 7.10225C11.4968 7.20774 11.4375 7.35082 11.4375 7.5V17.625C11.4375 17.7742 11.4968 17.9173 11.6023 18.0227C11.7077 18.1282 11.8508 18.1875 12 18.1875Z"
      fill="white"
    />
  </Svg>
);
