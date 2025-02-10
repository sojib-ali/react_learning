import { Link } from "react-router-dom";
import "../styles/home.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
const Lesson_titles = () => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  return (
    <>
      {/* <div className="lessons">
        <h3>Extracting State Logic into a Reducer</h3>
        <Link to="/task-app" className="nav-link">
          Task App
        </Link>
        <Link to="/messenger-with-reducer" className="nav-link">
          Challenge-1: Dispatch actions from event handlers
        </Link>
        <Link to="/context-image-list" className="nav-link">
          Replace prop drilling with context
        </Link>
        <IoIosArrowDropdownCircle />
        
      </div> */}
      {/* -------------------- topic - 2 ---------------------*/}
      <div className="lesson-title">
        <h3>Adding interactivity</h3>
        <span>
          <IoIosArrowDropdown
            onClick={() => {
              setCurrentTopic(currentTopic === 1 ? null : 1);
            }}
          />
        </span>
      </div>
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -2: State: A Component's Memory</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 2 ? null : 2);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 2 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/next-gallery" className="nav-link">
              Next Gallery app
            </Link>
            <Link to="/input-form" className="nav-link">
              Input form
            </Link>
            <Link to="/textarea-msg" className="nav-link">
              Textarea alert message
            </Link>
            <Link to="/alert-input" className="nav-link">
              Alert input
            </Link>
          </div>
        </>
      )}
      {/* -------------------- lesson - 3 ---------------------*/}
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -3: Render and commit</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 3 ? null : 3);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 3 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/current-time" className="nav-link">
              current-time
            </Link>
            <Link to="/input-form" className="nav-link">
              Input form
            </Link>
          </div>
        </>
      )}
      {/* -------------------- lesson - 4 ---------------------*/}
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -4: State as a Snapshot</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 4 ? null : 4);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 4 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/select-form" className="nav-link">
              select-form
            </Link>
            <Link to="/signal-color" className="nav-link">
              Signal color
            </Link>
          </div>
        </>
      )}
      {/* -------------------- lesson - 5 ---------------------*/}
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -5: Queueing a series of state updates</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 5 ? null : 5);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 5 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/request-tracker" className="nav-link">
              Track your request
            </Link>
          </div>
        </>
      )}
      {/* -------------------- lesson - 6 ---------------------*/}
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -6: Updating objects in state</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 6 ? null : 6);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 6 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/moving-dot" className="nav-link">
              moving dot
            </Link>
            <Link to="/object-form" className="nav-link">
              Object form
            </Link>
            <Link to="/object-spread" className="nav-link">
              Object spread
            </Link>
            <Link to="/scoreboard" className="nav-link">
              challenge - 1
            </Link>
            <Link to="/drag-canvas" className="nav-link">
              challenge - 2
            </Link>
          </div>
        </>
      )}
      {/* -------------------- lesson - 7 ---------------------*/}
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -7: Updating Arrays in state</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 7 ? null : 7);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 7 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/add-array" className="nav-link">
              adding to an array
            </Link>
            <Link to="/remove-array" className="nav-link">
              removing from an array
            </Link>
            <Link to="/shape-editor" className="nav-link">
              transforming an array
            </Link>
            <Link to="/counter-list" className="nav-link">
              Replacing items in an array
            </Link>
            <Link to="/insert_array" className="nav-link">
              Inserting into an array
            </Link>
            <Link to="/reverse-list" className="nav-link">
              Reversing an array of list
            </Link>
            <Link to="/bucket-list" className="nav-link">
              Select bucket list
            </Link>
            <Link to="/shopping-cart" className="nav-link">
              Challenge-1: lesson:7 - shopping cart
            </Link>
            <Link to="/add-todo" className="nav-link">
              Challenge-2: lesson:7 - Add todo list
            </Link>
          </div>
        </>
      )}

      {/* ---- topic 3--- */}
      <div className="lesson-title">
        <h3>Managing state</h3>
        <span>
          <IoIosArrowDropdown
            onClick={() => {
              setCurrentTopic(currentTopic === 2 ? null : 2);
            }}
          />
        </span>
      </div>
      {currentTopic === 2 && (
        <div className="lesson-title">
          <h4>lesson -1: Reacting to Input with state</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 8 ? null : 8);
              }}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default Lesson_titles;
