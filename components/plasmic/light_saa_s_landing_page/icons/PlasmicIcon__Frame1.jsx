// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"9.404"}
        cy={"3.415"}
        rx={"3.492"}
        ry={"3.415"}
        fill={"currentColor"}
      ></ellipse>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.86 8.727l-.68 1.197.698 4.468c.63-.64 1.916-2.573 2.088-5.24 1.87.577 3.112 1.596 3.112 2.757v3.57H2.73v-3.57c0-1.192 1.309-2.234 3.263-2.803.142 2.69 1.295 4.642 1.859 5.286l.62-4.468-.6-1.189a13.464 13.464 0 012.988-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame1Icon;
/* prettier-ignore-end */
