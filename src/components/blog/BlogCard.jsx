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
        <h3 className="text-3xl md:text-4xl text-light-beige font-bold">{props.title}</h3>
        <p className="text-base md:text-lg text-white">Posted on <span className="font-bold text-light-beige">{`${dateParsed.day} ${dateParsed.month} ${dateParsed.year}`}</span></p>
        <p className="mt-3 text-white text-justify">{props.description.length > 225 ? `${props.description.substring(0, 225)} ...` : props.description} <span className="font-bold">Read more</span></p>
      </Link>
      {props.lineDiv && <LineDivider className="mt-3"/>}
    </div>
  );
};