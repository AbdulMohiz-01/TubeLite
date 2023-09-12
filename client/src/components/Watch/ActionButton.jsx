import PropTypes from "prop-types";
import clsx from "clsx";

const ActionButton = ({ Icon, text, flag = true, onClick, isLiked }) => {
  const classNames = clsx(
    flag ? "flex items-center gap-1 text-white px-3" : "comment-actions",
  );
  return (
    <>
      <button className={classNames} onClick={onClick}>
        <Icon size={20} color={isLiked ? "red" : "white"} />
        <span>{text}</span>
      </button>
    </>
  );
};

ActionButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  flag: PropTypes.bool,
  onClick: PropTypes.func,
  isLiked: PropTypes.bool,
};

export default ActionButton;
