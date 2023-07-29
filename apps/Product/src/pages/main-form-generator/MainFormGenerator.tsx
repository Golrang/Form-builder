import React, { useState } from "react";
import { ReactFormBuilder, ReactFormGenerator } from "form-builder-custom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useGetMainFormGeneratorById } from "./hooks/useGetMainFormGenerator";
import Spinner from "~/components/spinner/Spinner";

export const MainFormGenerator = () => {
  const { formData, isLoadingFormData, errorFormData } =
    useGetMainFormGeneratorById(20);

  if (isLoadingFormData) return <Spinner />;
  if (formData)
    return (
      <>
        <ReactFormGenerator
          locale="fa" // Set the locale, you can use "en" for English
          data={formData} // Pass your form data to the ReactFormGenerator
          // onLoad={handleLoad} // Handle form data loaded event
          // onPost={handlePost} // Handle form data submitted event
        />
      </>
    );
  else return null;
};
