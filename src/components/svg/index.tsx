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
