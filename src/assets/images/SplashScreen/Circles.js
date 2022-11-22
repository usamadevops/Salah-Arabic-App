import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={1400}
    height={2100}
    xmlSpace="preserve"
    {...props}
  >
    <Circle
      style={{
        stroke: "#000",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: 0,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        fill: "snow",
        fillRule: "nonzero",
        opacity: 0.63,
      }}
      vectorEffect="non-scaling-stroke"
      r={35}
      transform="matrix(8 0 0 8 700 1050)"
    />
    <Circle
      style={{
        stroke: "#000",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: 0,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        fill: "#fff",
        fillRule: "nonzero",
        opacity: 0.41,
      }}
      vectorEffect="non-scaling-stroke"
      r={35}
      transform="matrix(8 0 0 8 1069.48 970.83)"
    />
  </Svg>
)

export default SvgComponent
