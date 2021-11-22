import { LazyExoticComponent } from "react";
//import { LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  { path: "/Shopping", Component: ShoppingPage, name: "Shopping page" },
  { path: "/About", Component: ShoppingPage, name: "No lazy loading" },
];
