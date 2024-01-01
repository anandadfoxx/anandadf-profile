import React from "react";
import Markdown from "react-markdown";

export default function BlogDescription({ description }) {
  return (
    <Markdown className="prose text-xl text-justify">{description}</Markdown>
  )
}