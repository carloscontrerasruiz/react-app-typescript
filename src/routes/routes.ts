import { LazyExoticComponent } from "react";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
//import { LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  { path: "/register", Component: RegisterPage, name: "Register Page" },
];
