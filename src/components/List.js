const List = (props) => {
  return <ul className={`list ${props.className}`}>{props.children}</ul>;
};
export default List;
