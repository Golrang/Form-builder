import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Main = lazy(() =>
  import("layout/main/Main").then((module) => ({ default: module.Main }))
);
const MainFormBuilder = lazy(() =>
  import("pages/main-form-builder").then((module) => ({
    default: module.MainFormBuilder,
  }))
);

const MainFormGenerator = lazy(() =>
  import("pages/main-form-generator").then((module) => ({
    default: module.MainFormGenerator,
  }))
);

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "main-form-builder", element: <MainFormBuilder /> },
        { path: "main-form-generator", element: <MainFormGenerator /> },
      ],
    },
  ],
  {
    basename: "/dtsg/SitePages/formbuilder.aspx",
  }
);
