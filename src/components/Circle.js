import React from "react";

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);

function getOffset(val = 0, maxVal = 100) {
  return Math.round(((maxVal - Math.min(val, maxVal)) / maxVal) * diameter);
}

export default function Circle({
  maxVal,
  size,
  progress,
  lineWidth,
  progressColor,
  responsive,
}) {
  const strokeDashoffset = getOffset(progress, maxVal);
  const svgSize = responsive ? "100%" : size;

  return (
    <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <circle
        stroke={"black"}
        cx="175"
        cy="175"
        r="175"
        strokeWidth={lineWidth}
        fill="none"
        opacity="0.3"
      />
      <circle
        stroke={"#006AA7"}
        transform="rotate(-90 175 175)"
        cx="175"
        cy="175"
        r="175"
        strokeDasharray="1100"
        strokeWidth={lineWidth}
        strokeDashoffset="1100"
        strokeLinecap={"round"}
        fill="none"
        style={{ strokeDashoffset, filter: "url(#dropshadow)" }}
      />
      <circle
        stroke={"#FECC00"}
        transform="rotate(-93.25 175 175)"
        cx="175"
        cy="175"
        r="175"
        strokeDasharray="1100"
        strokeWidth={lineWidth / 3}
        strokeDashoffset={`${strokeDashoffset - 2 * (lineWidth / 3)}`}
        strokeLinecap={"round"}
        fill="none"
      />
      <circle
        stroke={"#FECC00"}
        transform="rotate(-60 175 175)"
        cx="175"
        cy="175"
        r="175"
        strokeDasharray="1100"
        strokeWidth={lineWidth}
        strokeDashoffset={`${strokeDashoffset + strokeDashoffset / 3}`}
        fill="none"
      />
    </svg>
  );
}
