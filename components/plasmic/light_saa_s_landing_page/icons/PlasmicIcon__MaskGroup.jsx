// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"MCM67AUnTVa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"32"}
        height={"32"}
      >
        <circle
          cx={"15.518"}
          cy={"15.518"}
          r={"15.518"}
          fill={"currentColor"}
        ></circle>
      </mask>

      <g mask={"url(#MCM67AUnTVa)"}>
        <ellipse
          cx={"15.518"}
          cy={"29.842"}
          rx={"10.743"}
          ry={"12.176"}
          fill={"currentColor"}
        ></ellipse>
      </g>
    </svg>
  );
}

export default MaskGroupIcon;
/* prettier-ignore-end */
