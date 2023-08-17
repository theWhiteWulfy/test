// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SubtractIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 47"}
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
          "M23.345 47c12.893 0 23.344-10.521 23.344-23.5S36.238 0 23.345 0 0 10.521 0 23.5 10.452 47 23.345 47zm0-11.75c6.446 0 11.672-5.26 11.672-11.75S29.79 11.75 23.344 11.75 11.672 17.01 11.672 23.5s5.226 11.75 11.672 11.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
