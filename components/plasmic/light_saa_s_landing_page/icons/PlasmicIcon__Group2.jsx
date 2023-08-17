// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 13"}
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
          "M9.98 5.139c.003.015.005.03.005.046V7.47l.757 1.554a.63.63 0 01-.566.905H.63a.63.63 0 01-.557-.922l.538-1.025V5.17a7.238 7.238 0 010-.229v-.008C.663 1.717 2.741 0 5.297 0c2.529 0 4.59 1.975 4.684 5.139z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.27 10.547c0 .409-.208.8-.578 1.09-.37.289-.872.451-1.395.451s-1.025-.162-1.395-.451c-.37-.29-.578-.681-.578-1.09H7.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
