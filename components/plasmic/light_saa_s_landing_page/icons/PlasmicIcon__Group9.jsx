// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M0 6.647A6.647 6.647 0 016.647 0h8.864a6.647 6.647 0 016.647 6.647v8.864a6.648 6.648 0 01-6.647 6.647H6.647A6.647 6.647 0 010 15.511V6.647zm5.54 4.432a5.54 5.54 0 1111.08 0 5.54 5.54 0 01-11.08 0zm2.077 0a3.467 3.467 0 003.462 3.462 3.467 3.467 0 003.462-3.462 3.466 3.466 0 00-3.462-3.462 3.466 3.466 0 00-3.462 3.462zm10.156-5.955a.738.738 0 11-1.477 0 .738.738 0 011.477 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
