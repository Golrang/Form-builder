import React, { useState } from "react";
import { ReactFormBuilder, ReactFormGenerator } from "form-builder-custom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useGetMainFormGeneratorById } from "./hooks/useGetMainFormGenerator";
import Spinner from "~/components/spinner/Spinner";
import { useSubmitMainFormBuilder } from "../main-form-builder/hooks/useSubmitMainFormBuilder";
import { useRecoilValue } from "recoil";
import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import JalaliDatePickerAntd from "./containers/JalaliDatePicker";

// regg.register("JalaliDatePicker", JalaliDatePickerAntd);

// const TestComponent = () => <h2>Hello</h2>;
// regg.Registry.register("TestComponent", TestComponent);

// const items = [
//   {
//     key: "TestComponent",
//     element: "CustomElement",
//     component: TestComponent,
//     type: "custom",
//     field_name: "test_component",
//     name: "Something You Want",
//     icon: "fa fa-cog",
//     static: true,
//     props: { test: "test_comp" },
//     label: "Label Test",
//   },
// ];

export const MainFormGenerator = () => {
  const submitLoading = useRecoilValue(submitLoadingState);

  const { formData, isLoadingFormData, errorFormData } =
    useGetMainFormGeneratorById(20);

  const { onSubmit } = useSubmitMainFormBuilder();

  const handleUpdate = (data: any) => {
    debugger;
  };

  console.log(formData);
  if (isLoadingFormData) return <Spinner />;
  if (formData)
    return (
      <>
        <ReactFormGenerator
          onSubmit={onSubmit}
          onChange={handleUpdate}
          action_name={"ثبت"}
          back_name={"بازگشت"}
          hide_actions={submitLoading}
          back_action={"/dtsg/SitePages/formbuilder.aspx/main-form-builder"}
          locale="fa" // Set the locale, you can use "en" for English
          data={formData} // Pass your form data to the ReactFormGenerator
          // onLoad={handleLoad} // Handle form data loaded event
          // onPost={handlePost} // Handle form data submitted event
        />
      </>
    );
  else return null;
};
