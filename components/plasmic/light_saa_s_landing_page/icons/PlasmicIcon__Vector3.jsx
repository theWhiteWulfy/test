// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.82 0c-.604 0-1.145.294-1.482.744A1.852 1.852 0 000 1.866c0 .397.063.764.174 1.105 1.013 1.536 2.36 3.004 3.164 3.278-.114.04.113.04 0 0 .804-.274 2.253-1.742 3.164-3.278.11-.34.174-.708.174-1.105A1.86 1.86 0 004.82 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
