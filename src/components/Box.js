import classes from "./Box.module.css";
const Box = (props) => {
  const handleClick = () => {
    props.onClick(props.index);
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      {props.value}
    </button>
  );
};

export default Box;
