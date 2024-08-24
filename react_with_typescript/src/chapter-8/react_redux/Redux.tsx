import { Provider } from "react-redux";
import { store } from "./store/store";
import { Red_header } from "./Red_header";
import { Red_main } from "./Red_main";

export default function Redux() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Provider store={store}>
        <Red_header />
        <Red_main />
      </Provider>
    </div>
  );
}
