const Section = ({ ...props }) => {
  return (
    <section {...props}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
