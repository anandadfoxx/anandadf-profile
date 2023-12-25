import React from "react";
import { Link } from "react-router-dom";
import LineDivider from "./LineDivider";

export default function BlogCard(props) {
  const date = new Date(props.date);
  const dateParsed = {
    day: date.getDate(),
    month: date.toLocaleDateString('short', { month: 'long' }),
    year: date.getFullYear()
  };
  
  return (
    <div className="card my-3">
      <Link to={props.link}>
        <h3 className="text-4xl text-light-beige font-bold">{props.title}</h3>
        <p className="text-lg text-white">Posted on <span className="font-bold text-light-beige">{`${dateParsed.day} ${dateParsed.month} ${dateParsed.year}`}</span></p>
        <p className="mt-3 text-white">{props.description}</p>
      </Link>
      {props.lineDiv && <LineDivider className="mt-3"/>}
    </div>
  );
};