import classes from "./Board.module.css";

import Box from "./Box";
const Board = (props) => {
  const handleClick = (index) => {
    props.onClick(index);
  };

  const boxes = props.value.map((item, i) => (
    <Box key={i} value={item} index={i} onClick={handleClick} />
  ));

  return <div className={classes.grid}>{boxes}</div>;
};

export default Board;
