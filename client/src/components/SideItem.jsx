import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../redux/slices/sidebarSlice";
import clsx from "clsx";

const SideItem = (props) => {
  const { Icon, text, color } = props;
  const dispatch = useDispatch();
  const type = useSelector((state) => state.sideBar.selected);

  const selected = clsx(
    "flex items-center gap-3 p-2 rounded-xl w-48 hover:bg-red-800 hover:text-red-800 transition-all duration-300 ",
    (type === "random" ? "home" : type) === text.toLowerCase() &&
      "border-none bg-red-800 text-white",
  );

  const selectedIcon = clsx(
    (type === "random" ? "home" : type) === text.toLowerCase()
      ? "white"
      : color,
  );

  const handleClick = () => {
    if (text === "Home") {
      const newText = "random";
      dispatch(select(newText));
    } else {
      dispatch(select(text.toLowerCase()));
    }
  };

  return (
    <button onClick={() => handleClick()} className={selected}>
      <Icon
        size={24}
        className="text-white cursor-pointer"
        color={selectedIcon}
      />
      <p className="text-white text-sm">{text}</p>
    </button>
  );
};

// validate props:
SideItem.propTypes = {
  // Icon is a component:
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

SideItem.defaultProps = {
  color: "red",
};
export default SideItem;
