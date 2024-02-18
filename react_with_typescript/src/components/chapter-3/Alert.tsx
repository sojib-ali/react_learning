import { useState } from "react";
interface Props {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}
function Prop_alert({
  type = "information",
  heading,
  children,
  closable,
  onClose,
}: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return (
      <>
        <div>{children}</div>
        <div>{heading}</div>
        <div>{closable}</div>
        <div>Gone!</div>
      </>
    );
  }
}

export default function Alert() {
  return (
    <div>
      <Prop_alert heading="Success"> Everything is really good!</Prop_alert>
      <Prop_alert heading="Success" closable>
        Everything is really great
      </Prop_alert>
    </div>
  );
}
