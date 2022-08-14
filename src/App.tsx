import {Provider } from "react-redux";
import { store } from "./store/store";
import Todo from "./renderTodo"
function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Todo/>
      </Provider>
    </>
  );
}
export default App;
