// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroup2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 65 65"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"mhrFUwU92Ma"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"65"}
        height={"65"}
      >
        <circle
          cx={"32.5"}
          cy={"32.5"}
          r={"32.5"}
          fill={"currentColor"}
        ></circle>
      </mask>

      <g mask={"url(#mhrFUwU92Ma)"}>
        <ellipse
          cx={"32.5"}
          cy={"62.5"}
          rx={"22.5"}
          ry={"25.5"}
          fill={"currentColor"}
        ></ellipse>
      </g>
    </svg>
  );
}

export default MaskGroup2Icon;
/* prettier-ignore-end */
