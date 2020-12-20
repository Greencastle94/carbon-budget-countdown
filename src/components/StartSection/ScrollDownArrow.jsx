import React from "react";
import styled from "@emotion/styled";
import arrowImg from "../../../static/arrow-down.svg";

export default function ScrollDownArrow() {
  return (
    <img
      style={{
        width: "20px",
        display: "block",
        margin: "auto",
        marginBottom: "20px",
      }}
      src={arrowImg}
      alt=""
    />
  );
}
