const Background = ({ position }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          backgroundColor: "rgba(200, 200, 0, 0.2)",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </>
  );
};

export default Background;
