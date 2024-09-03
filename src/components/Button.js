const Button = ({ text, isActive, setIsActive, index }) => {
  const handleClick = () => {
    setIsActive(index);
  };

  return (
    <button
      type="button"
      className={index === isActive ? "is-active" : ""}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;
