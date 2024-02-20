import { useState } from "react";
interface Props {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}
export default function Old_alert({
  type = "information",
  heading,
  children,
  closable,
  onClose,
}: Props) {
  const [visible, setVisible] = useState(false);
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
    <div className={`container ${type}`}>
      <div className="header">
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
          className="header-icon"
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span className="header-text">{heading}</span>
        {closable && (
          <button
            aria-label="Close"
            onClick={handle_close_click}
            className="close-button"
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
