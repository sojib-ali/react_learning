import styles from "../../styles/Alert.module.css";
import { useState } from "react";
type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};
function Prop_alert({
  type = "information",
  heading,
  children,
  closable,
  onClose,
}: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handle_close_click() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div className={` ${styles.container} ${styles[type]}`}>
      <div className={styles.header}>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
          className={styles.header_icon}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span className={styles.header_text}>{heading}</span>
        {closable && (
          <button
            aria-label="Close"
            onClick={handle_close_click}
            className={styles.close_button}
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
export default function Alert() {
  return (
    <div className="container">
      <Prop_alert heading="Success" closable>
        Everything is really good!
      </Prop_alert>
    </div>
  );
}
