const Box = ({ children, color }) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: color,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Box;
