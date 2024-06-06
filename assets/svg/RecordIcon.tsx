import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const RecordIcon = (props: SvgProps) => (
  <Svg
    //xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.6}
      strokeWidth={1.714}
      d="M16.285 2.572h2.571a1.714 1.714 0 0 1 1.715 1.715v17.142a1.714 1.714 0 0 1-1.715 1.715H5.142a1.714 1.714 0 0 1-1.714-1.715V4.287a1.714 1.714 0 0 1 1.714-1.715h2.571"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.6}
      strokeWidth={1.714}
      d="M9.427.857h5.143a1.714 1.714 0 0 1 1.714 1.715v.857a1.714 1.714 0 0 1-1.714 1.714H9.427A1.714 1.714 0 0 1 7.713 3.43v-.857A1.714 1.714 0 0 1 9.427.857Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.6}
      strokeWidth={1.206}
      d="M10.55 9.182A.622.622 0 0 1 10.99 9h2.02a.622.622 0 0 1 .621.62v1.75h1.747a.622.622 0 0 1 .622.62v2.016a.623.623 0 0 1-.622.623l-1.747-.008v1.757a.636.636 0 0 1-.182.44.65.65 0 0 1-.44.174h-2.018a.623.623 0 0 1-.622-.622v-1.746H8.622A.623.623 0 0 1 8 14v-2.01a.622.622 0 0 1 .622-.622h1.747V9.622c0-.165.065-.323.182-.44Z"
    />
  </Svg>
)
export default RecordIcon
