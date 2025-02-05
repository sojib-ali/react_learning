import { useState } from "react";
import TabButton from "./TabButton";

const Tabs = ({ children, buttons, buttonContainer }) => {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
