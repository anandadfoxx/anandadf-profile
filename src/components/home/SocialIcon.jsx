import { Link } from "react-router-dom";

export default function SocialIcon(props) {
  return (
    <div className="h-12 mx-2 p-3 rounded-full border-2 border-solid border-yellow-200 hover:bg-light-beige">
      <Link to={props.to}>
        <img className="fill-white h-full w-full" src={props.svgPath} alt={props.title} />
      </Link>
    </div>
  );
};