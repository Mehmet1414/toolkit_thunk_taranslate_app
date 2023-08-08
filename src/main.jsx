import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import Store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Provider store={Store}>
      <App />
    </Provider>
  
);
