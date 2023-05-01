import { Provider } from "react-redux";
import { creacteReduxStore } from "./store";

export function StoreProvider({ children }) {
  const store = creacteReduxStore();

  return <Provider store={store}>{children}</Provider>;
}
