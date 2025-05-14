const Modals = ({ children, shouldShow, setShouldShow }) => {
//   const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      {/* <button
        onClick={() => setShouldShow(true)}
        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 text-white rounded-xl"
      >
        show modal
      </button> */}
      {shouldShow && ( 
        // to make hide the modal when clicked on the background
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-stone-900/90"
          onClick={() => setShouldShow(false)}
        >
          {/* to stop the bubbling so cliking on this should not be like cliking on the background  */}
          <div
            className="bg-white mx-auto my-10 px-5 py-5 w-1/2 text-black rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button onClick={() => setShouldShow(false)}>hide</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals