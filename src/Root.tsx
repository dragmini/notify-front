import { BrowserRouter } from "react-router-dom";
import { RouterContainer } from "./router";

function Root() {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}

export default Root;
