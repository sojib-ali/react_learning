import { useState } from "react";
import TabButton from "./TabButton";

const Tabs = ({ children, buttons }) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};

export default Tabs;
