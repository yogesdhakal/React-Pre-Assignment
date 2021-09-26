import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={User} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
