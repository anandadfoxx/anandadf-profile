import React from "react";

export default function DatePosted({ date }) {
  date = new Date(date);
  const dateParsed = {
    day: date.getDate(),
    month: date.toLocaleDateString('short', { month: 'long' }),
    year: date.getFullYear()
  };

  return (
    <p className="mb-8 text-xl text-white">Posted on <span className="font-bold text-light-beige">{`${dateParsed.day} ${dateParsed.month} ${dateParsed.year}`}</span></p>
  )
}