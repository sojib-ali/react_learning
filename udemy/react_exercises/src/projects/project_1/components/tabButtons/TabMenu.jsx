const TabMenu = ({ children, buttons, buttonWrapper, ...props }) => {
  const ButtonWrapper = buttonWrapper;
  return (
    <div>
      <ButtonWrapper {...props}>{buttons}</ButtonWrapper>
      {children}
    </div>
  );
};

export default TabMenu;
