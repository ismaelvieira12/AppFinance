import React from "react";
import Svg, { Path } from "react-native-svg";

export const Waves = () => {
  return (
    <Svg
      width="100%"
      height="100"
      viewBox="0 0 1440 320"
      style={{ position: "absolute", bottom: 0 }}
    >
      {/* 🌊 Primeira onda - esquerda → direita */}
      <Path
        fill="#0A1D3F"
        fillOpacity="1"
        d="M0,224 C360,300 1080,150 1440,260 L1440,320 L0,320 Z"
      />

      {/* 🌊 Segunda onda - direita → esquerda (mais clara) */}
      <Path
        fill="#153B75"
        fillOpacity="0.7"
        d="M0,250 C500,180 940,340 1440,220 L1440,320 L0,320 Z"
      />

      {/* 🌊 Terceira onda - meio mais alto */}
      <Path
        fill="#1E5CB8"
        fillOpacity="0.5"
        d="M0,260 C360,120 1080,120 1440,260 L1440,320 L0,320 Z"
      />
    </Svg>
  );
}
