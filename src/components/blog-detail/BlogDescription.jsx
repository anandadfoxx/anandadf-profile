import React from "react";
import Markdown from "react-markdown";

export default function BlogDescription({ description }) {
  return (
    <Markdown className="text-light-beige text-xl text-justify">{description}</Markdown>
  )
}