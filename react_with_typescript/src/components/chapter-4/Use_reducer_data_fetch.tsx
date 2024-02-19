import { useEffect, useReducer } from "react";
type Person = {
  name: string;
};

function get_person_3(): Promise<Person> {
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
export default function Person_Score_3() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });
  useEffect(() => {
    get_person_3().then(({ name }) => dispatch({ type: "initialize", name }));
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button onClick={() => dispatch({ type: "increment" })}>Add</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
