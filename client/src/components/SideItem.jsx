import PropTypes from "prop-types";
const SideItem = (props) => {
  const { Icon, text } = props;
  return (
    <button className="flex items-center gap-3 p-2 border border-[#272727] bg-[#272727] rounded-lg w-48 hover:border-green-bold transition-all duration-300 ">
      <Icon className="text-white cursor-pointer" />
      <p className="text-white ml-8">{text}</p>
    </button>
  );
};
// validate props:
SideItem.propTypes = {
  // Icon is a component:
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};
export default SideItem;
