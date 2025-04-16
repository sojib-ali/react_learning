const TabBtns = ({ children, onSelect, isSelect }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <button onClick={onSelect} className={isSelect ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
};

export default TabBtns;
