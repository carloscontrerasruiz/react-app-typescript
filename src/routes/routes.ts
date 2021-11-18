import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyModule = lazy(() => {
  return import(
    /* webpackChunkName: "LazyModule" */ "../01-lazyload/layout/LazyLayout"
  );
});

export const routes: Route[] = [
  { path: "/lazyload", Component: LazyModule, name: "Lazyload module" },
  { path: "/no-lazyload", Component: NoLazy, name: "No lazy loading" },
];
