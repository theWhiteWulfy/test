// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Subtract2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 60"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M29.802 60c16.459 0 29.801-13.431 29.801-30 0-16.569-13.342-30-29.801-30C13.342 0 0 13.431 0 30c0 16.569 13.343 30 29.802 30zm0-15c8.229 0 14.9-6.716 14.9-15 0-8.284-6.671-15-14.9-15-8.23 0-14.902 6.716-14.902 15 0 8.284 6.672 15 14.901 15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract2Icon;
/* prettier-ignore-end */
