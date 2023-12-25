import React from "react";

export default function LineDivider(props) {
  return (
    <hr id="line-div" className={`w-full border-solid border-[#EADABB]/[.12] ${props.className}`} />
  );
;}