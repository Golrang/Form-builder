import React, { useState } from "react";
import { ReactFormBuilder, ReactFormGenerator } from "form-builder-custom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSubmitMainFormBuilder } from "./hooks/useSubmitMainFormBuilder";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { submitLoadingState } from "~/recoil-store/general/submitLoading";

// const url = "/api/formdata";
// const saveUrl = "/api/formdata";

export const MainFormBuilder = () => {
  const navigateToFormGenerator = useNavigate();
  const [modalData, setModalData] = useState([]);
  const submitLoading = useRecoilValue(submitLoadingState);
  const { onSubmit } = useSubmitMainFormBuilder();

  const handlePost = (data: any) => {
    setModalData(data.task_data);
  };

  const showPreview = () => {
    navigateToFormGenerator("/main-form-generator");
  };

  const saveFormData = () => {
    if (modalData.length > 0) onSubmit(modalData);
  };

  return (
    <>
      {/* <DndProvider backend={HTML5Backend}> */}
      <ReactFormBuilder
        // variables={variables}
        // url={url}
        // saveUrl={saveUrl}
        locale="fa"
        // saveAlways={false}
        onPost={handlePost}
        //toolbarItems={items}
      />
      {/* </DndProvider> */}

      <div
        className="clearfix float-left"
        style={{ margin: "10px", width: "70%" }}
      >
        <button
          className="btn btn-primary float-right"
          style={{ marginRight: "10px" }}
          onClick={() => showPreview()}
          disabled={submitLoading}
        >
          Preview Form
        </button>
        <button
          className="btn btn-primary float-right"
          style={{ marginRight: "10px" }}
          onClick={() => saveFormData()}
          disabled={submitLoading}
        >
          Save Form
        </button>
      </div>
    </>
  );
};
