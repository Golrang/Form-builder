// eslint-disable-next-line no-unused-vars
import { ReactFormBuilder } from "./index";
import * as variables from "../variables";

const url = "/api/formdata";
const saveUrl = "/api/formdata";

import "../scss/application.scss";

export const AppForm = () => (
  <ReactFormBuilder
    variables={variables}
    url={url}
    saveUrl={saveUrl}
    locale="en"
    saveAlways={false}
    //toolbarItems={items}
  />
);
