import { useReducer } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { authenticate, User } from "./api/authenticate";
import { authorize } from "./api/authorize";
// import { Statement } from "typescript";

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};
const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};
type Action =
  | {
      type: "authenticate";
    }
  | {
      type: "authenticated";
      user: User | undefined;
    }
  | {
      type: "authorize";
    }
  | {
      type: "authorized";
      permissions: string[];
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "authenticate":
      return { ...state, loading: true };

    case "authenticated":
      return { ...state, loading: false, user: action.user };

    case "authorize":
      return { ...state, loading: true };

    case "authorized":
      return { ...state, loading: false, permissions: action.permissions };
    default:
      return state;
  }
}

export function Prop_drilling() {
  const [{ user, permissions, loading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function handleSignInClick() {
    dispatch({ type: "authenticate" });
    const authenticateUser = await authenticate();
    dispatch({ type: "authenticated", user: authenticateUser });

    if (authenticateUser != undefined) {
      dispatch({ type: "authorize" });
      const authorizedPermissions = await authorize(authenticateUser.id);
      dispatch({ type: "authorized", permissions: authorizedPermissions });
    }
  }

  return (
    <div>
      <Header user={user} onSignInClick={handleSignInClick} loading={loading} />
      <Main user={user} permissions={permissions} />
    </div>
  );
}
