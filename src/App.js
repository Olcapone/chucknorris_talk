import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Wrapper />
      <ToastContainer />
    </>
  );
}

export default App;
