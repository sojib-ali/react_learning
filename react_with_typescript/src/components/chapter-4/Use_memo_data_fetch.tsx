import { useEffect, useReducer, useRef, useMemo } from "react";
function s_Exp_function() {
  console.log("Executing silly function");
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}
type Person = {
  name: string;
};

function get_person_5(): Promise<Person> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Bob" }), 1000)
  );
}
type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};
type Action =
  | {
      type: "initialize";
      name: string;
    }
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
    };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "initialize":
      return {
        name: action.name,
        score: 0,
        loading: false,
      };
    case "increment":
      return {
        ...state,
        score: state.score + 1,
      };
    case "decrement":
      return {
        ...state,
        score: state.score - 1,
      };
    case "reset":
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
}
export default function Person_Score_5() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });
  const addButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    get_person_5().then(({ name }) => dispatch({ type: "initialize", name }));
  }, []);
  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);
  const expensive_calculation = s_Exp_function();
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <p>{expensive_calculation}</p>
      <button
        ref={addButtonRef}
        onClick={() => dispatch({ type: "increment" })}
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
