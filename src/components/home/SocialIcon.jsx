import { Link } from "react-router-dom";

export default function SocialIcon(props) {
  const SvgComponents = props.svg;
  return (
    <Link to={props.to}>
      <div className="h-12 mx-2 p-3 rounded-full border-2 border-solid border-yellow-200 hover:bg-light-beige [&_svg]:fill-white [&:hover_svg]:fill-black ease-out duration-100">
        <SvgComponents width="20" height="20" />
      </div>
    </Link>
  );
};