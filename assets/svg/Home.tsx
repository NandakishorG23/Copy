import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HomeIcon = (props: SvgProps) => (
  <Svg
    //xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillOpacity={0.6}
      d="M10.74 2.445a2 2 0 0 1 2.52 0l7.628 6.18A2.998 2.998 0 0 1 22 10.953V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-6h-4v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9.046a3 3 0 0 1 1.112-2.332l7.628-6.178Zm8.89 7.732L12 4l-7.63 6.176a1 1 0 0 0-.37.778V20h4v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6h4v-9.046a1 1 0 0 0-.37-.778Z"
    />
  </Svg>
)
export default HomeIcon
