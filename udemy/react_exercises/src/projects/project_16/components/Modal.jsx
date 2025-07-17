const Modal = ({ children, shouldShow, setShouldShow }) => {
  return (
    <>
      {shouldShow && (
        // to make hide the modal when clicked on the background
        <div className="modal-background" onClick={() => setShouldShow(false)}>
          {/* to stop the bubbling so cliking on this should not be like cliking on the background  */}
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={() => setShouldShow(false)}>hide</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
