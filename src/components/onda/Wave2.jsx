import React from "react";
import Svg, { Path } from "react-native-svg";

export function Wave2({ color = "#f62020" }) {
  return (
    <Svg
      height="200"
      width="100%"
      viewBox="0 0 1440 320"
      style={{ position: "absolute", bottom: 0 }}
    >
      <Path
        fill={color}
        fillOpacity="1"
        d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,202.7C672,224,768,256,864,245.3C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </Svg>


  );
}