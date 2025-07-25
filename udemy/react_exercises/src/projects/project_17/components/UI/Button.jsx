import "./../../foodieTuts.css";

const Button = ({ children, textOnly, className, ...props }) => {
  let cssClasses = textOnly ? "text-button" : "button";
  //   cssClasses += " " + className;

  if (className) {
    cssClasses += " " + className;
  }

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
