// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 26"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"15.504"}
        cy={"5.63"}
        rx={"5.758"}
        ry={"5.63"}
        fill={"currentColor"}
      ></ellipse>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.904 14.388l-1.121 1.971 1.151 7.367c1.04-1.056 3.16-4.242 3.443-8.638 3.083.952 5.13 2.632 5.13 4.545v5.886H4.5v-5.886c0-1.964 2.158-3.683 5.38-4.62.235 4.435 2.135 7.651 3.065 8.713l1.023-7.367-.99-1.958a22.432 22.432 0 014.926-.013z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5Icon;
/* prettier-ignore-end */
