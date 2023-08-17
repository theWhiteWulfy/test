// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UnionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".99"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.896.947H13v.018C11.728.497 10.445.133 9.118.133c-4.51 0-8.244 7.5-8.586 12.142-.05.68-.133 1.416-.218 2.175-.494 4.425-1.082 9.68 4.029 9.68 1.167 0 2.565-1.281 4.095-3.222-.002.059-.004.086-.001.086.004.001.022-.07.08-.186.169-.217.34-.442.512-.674.517-.489 1.481-1.062 3.274-1.363h6.876c2.142.297 3.276.91 3.878 1.377 1.983 2.584 3.803 4.31 5.116 4.026 5.346-1.16 4.476-7.558 3.481-11.877C30.66 7.978 27.588 0 23.47 0c-1.207 0-2.397.407-3.573.947zm-9.752 17.824h-.139l-.169.243c.098-.08.2-.162.308-.243zm.65-12.044a1.08 1.08 0 00-2.16-.001v2.347H6.328a1.08 1.08 0 000 2.16h2.303v2.085a1.08 1.08 0 002.159.001v-2.086h2.394a1.08 1.08 0 000-2.16h-2.392V6.727zm10.843-.908a1.178 1.178 0 100 2.356 1.178 1.178 0 000-2.356zm1.964 4.322a1.178 1.178 0 112.355 0 1.178 1.178 0 01-2.355 0zm-1.963 1.962a1.178 1.178 0 100 2.356 1.178 1.178 0 000-2.356zm-4.32-1.962a1.178 1.178 0 112.356 0 1.178 1.178 0 01-2.355 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
