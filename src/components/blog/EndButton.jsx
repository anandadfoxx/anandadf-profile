import React from "react";

export default function EndButton(props) {
  const btnText = () => {
    switch (props.type) {
      case 'no_data':
        return 'No more blogs';
      default:
        return 'Load More'
    }
  }

  return (
    <button onClick={
      () => {
        switch (props.type) {
          case 'get_new':
            props.fetchFunction()
            break;
          default:
            break;
        }
      }
    } className="mt-4 mb-6 rounded-md text-light-beige text-xl">{btnText()}</button>
  );
}