// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.946 0C6.95 0 6.06.484 5.503 1.227A3.054 3.054 0 003.06 0 3.067 3.067 0 000 3.076a5.9 5.9 0 00.286 1.822c1.67 2.533 3.89 4.953 5.217 5.404-.187.066.187.066 0 0C6.829 9.85 9.218 7.43 10.72 4.898a5.876 5.876 0 00.286-1.822c0-1.7-1.37-3.076-3.06-3.076z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
