import React from "react";
import arrowImg from "../../../static/arrow-down.svg";

import { scrollIntoView } from "../../utils/utils";

export default function ScrollDownArrow() {
  return (
    <img
      style={{
        width: "20px",
        display: "block",
        margin: "auto",
        padding: "20px",
        cursor: "pointer",
      }}
      src={arrowImg}
      alt="Arrow down icon"
      onClick={() => scrollIntoView("#emission-reductions")}
    />
  );
}
