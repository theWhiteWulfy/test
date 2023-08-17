// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.153 0C5.382 0 4.69.375 4.26.95A2.364 2.364 0 002.369 0 2.375 2.375 0 000 2.382c0 .507.081.976.222 1.41C1.515 5.754 3.234 7.628 4.26 7.977c-.145.051.145.051 0 0 1.027-.35 2.877-2.223 4.04-4.185a4.55 4.55 0 00.221-1.41A2.375 2.375 0 006.152 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
