const TabButton = ({ children, id, currentIndex, setIndex }) => {
  return (
    <li>
      <button
        onClick={() => setIndex(id)}
        className={currentIndex === id ? "active" : ""}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
