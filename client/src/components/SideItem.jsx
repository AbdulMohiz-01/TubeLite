import PropTypes from "prop-types";
const SideItem = (props) => {
  const { Icon, text, color, funcReleasedOnClick } = props;
  return (
    <button
      onClick={() => funcReleasedOnClick(text.toLowerCase())}
      className="flex items-center gap-3 p-2 border border-background rounded-lg w-48 hover:border-red-800 hover:text-red-800 transition-all duration-300 "
    >
      <Icon className="text-white cursor-pointer" color={color} />
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
  funcReleasedOnClick: PropTypes.func.isRequired,
};

SideItem.defaultProps = {
  color: "red",
  funcReleasedOnClick: () => {},
};
export default SideItem;
