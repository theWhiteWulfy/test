// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 26"}
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
          "M20.903 10.771a.523.523 0 01.008.087v4.787l1.586 3.256a1.319 1.319 0 01-1.185 1.896H1.32a1.318 1.318 0 01-1.167-1.931l1.126-2.146v-6.004a15.698 15.698 0 010-.252v-.133h.001C1.39 3.595 5.742 0 11.094 0c5.298 0 9.616 4.14 9.81 10.771z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.227 22.087c0 .856-.435 1.677-1.21 2.283-.775.605-1.827.945-2.923.945s-2.147-.34-2.922-.945c-.775-.606-1.21-1.427-1.21-2.284h8.265z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
