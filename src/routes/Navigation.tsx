import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
// import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
// import { LazyPage2 } from "../01-lazyload/pages/LazyPage2";
// import { LazyPage3 } from "../01-lazyload/pages/LazyPage3";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import logo from "../logo.svg";
import { routes } from "./routes";

export default function Navigation() {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="REact logo" />
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink to={route.path} activeClassName="nav-active" exact>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                render={(props) => <route.Component />}
              />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}
