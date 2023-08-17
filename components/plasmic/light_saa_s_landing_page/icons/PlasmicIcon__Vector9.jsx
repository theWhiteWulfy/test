// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.086 0H1.385C.619 0 0 .632 0 1.402v16.666c0 .775.623 1.403 1.385 1.403H18.08a1.4 1.4 0 001.39-1.403V1.402A1.395 1.395 0 0018.086 0zm-12.2 16.692H2.999V7.4H5.89v9.296h-.004v-.004zM4.445 6.128A1.676 1.676 0 012.77 4.453c0-.922.748-1.675 1.675-1.675.921 0 1.674.753 1.674 1.675a1.673 1.673 0 01-1.674 1.675zm12.26 10.564H13.82V12.17c0-1.078-.022-2.467-1.502-2.467-1.506 0-1.736 1.173-1.736 2.384v4.6H7.695V7.4h2.77v1.27h.039c.385-.732 1.328-1.502 2.735-1.502 2.92 0 3.466 1.926 3.466 4.431v5.094z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
