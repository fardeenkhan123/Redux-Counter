// import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
      <Provider store={store}>
      <div className="App">
        <Button />
      </div>
    </Provider>
  );
}

export default App;
