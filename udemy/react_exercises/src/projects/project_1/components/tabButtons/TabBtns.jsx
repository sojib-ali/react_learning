const TabBtns = ({ children, onSelect }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabBtns;
