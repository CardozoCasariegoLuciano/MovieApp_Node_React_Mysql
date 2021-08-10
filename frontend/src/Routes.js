import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Imports from "./pages/ImportsPage";
import Mainlayout from "./layout/Mainlayout";

function Routes() {
  return (
    <BrowserRouter>
      <Mainlayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddEdit} />
          <Route exact path="/edit/:id" component={AddEdit} />
          <Route exact path="/import" component={Imports} />
        </Switch>
      </Mainlayout>
    </BrowserRouter>
  );
}

export default Routes;
