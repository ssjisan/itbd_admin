import { BrowserRouter } from "react-router-dom";
import Theme from "./Theme/index";
import MainRouter from "./Components/MainRouter";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
