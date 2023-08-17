// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"12.005"}
        cy={"4.359"}
        rx={"4.458"}
        ry={"4.359"}
        fill={"currentColor"}
      ></ellipse>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.864 11.14l-.87 1.528.892 5.705c.806-.818 2.447-3.286 2.666-6.69 2.388.737 3.973 2.038 3.973 3.52v4.558H3.485v-4.558c0-1.522 1.67-2.852 4.165-3.578.182 3.434 1.653 5.926 2.373 6.748l.793-5.705-.767-1.516c.628-.072 1.283-.11 1.956-.11.638 0 1.26.034 1.859.099z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame4Icon;
/* prettier-ignore-end */
