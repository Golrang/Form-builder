import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { RecoilRoot } from "recoil";
import FaIR from "antd/locale/fa_IR";
import "./app.css";

import { router } from "routes/routes";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import { Suspense } from "react";
import Spinner from "./components/spinner/Spinner";
const queryClient = new QueryClient();

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "IRANSansFaNum",
        },
      }}
      direction="rtl"
      locale={FaIR}
    >
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <RouterProvider router={router} />
            </Suspense>
          </ErrorBoundary>
        </QueryClientProvider>
      </RecoilRoot>
    </ConfigProvider>
  );
}

export default App;

// import React, { useState } from "react";
// import { ReactFormBuilder, ReactFormGenerator } from "form-builder-custom";
// // const url = "/api/formdata";
// // const saveUrl = "/api/formdata";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// const formData = [
//   {
//     id: "016492AC-9099-4D80-9384-1A14A5F1E2F3",
//     element: "TwoColumnRow",
//     text: "Two Column Row",
//     required: false,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "two_col_row_BAC485C1-B661-48B1-B518-1CFBBFD1C4E3",
//     childItems: [
//       "FD6BBA05-07B2-485E-942C-DF94CF18EC89",
//       "9D8EAA85-DDDD-4CD9-A7B0-61704A9E90F6",
//     ],
//     isContainer: true,
//   },
//   {
//     id: "BABB2738-BC41-44F2-8F57-A7844C4D2140",
//     element: "ThreeColumnRow",
//     text: "Three Columns Row",
//     required: false,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "three_col_row_837E36FE-D5D0-41FF-A0F5-BF0A69D99A07",
//     childItems: [
//       "1937D94E-ECB0-4436-ADCB-269CBFE0C9DB",
//       "32783933-A882-4734-BB7B-D795CF70796E",
//       "E1216DD0-7578-412F-9934-E64CC5D0B603",
//     ],
//     isContainer: true,
//   },
//   {
//     id: "FE660244-F81C-4F8D-A331-E7C438F6B79B",
//     element: "TextArea",
//     text: "چند خطی",
//     required: false,
//     canHaveAnswer: true,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "text_area_6F5DE066-92E4-48E3-8DD9-43977E24F4C2",
//     label: "سایر توضیحات ",
//     dirty: false,
//   },
//   {
//     id: "C32FAB37-AC0B-4028-B438-606D993A8CB6",
//     element: "RadioButtons",
//     text: "چند انتخابیe",
//     required: true,
//     canHaveAnswer: true,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "radiobuttons_42F4D27B-2976-41BC-80E1-400045BC39E6",
//     label: "وضعیت تاهل ",
//     options: [
//       {
//         value: "0",
//         text: "مجرد",
//         key: "radiobuttons_option_9E2942C7-3303-4FD7-99E0-205BDBA49563",
//       },
//       {
//         value: "1",
//         text: "متاهل",
//         key: "radiobuttons_option_FA4974EE-A8FD-4C63-9868-A0D226456EE5",
//       },
//     ],
//     dirty: false,
//   },
//   {
//     id: "FD6BBA05-07B2-485E-942C-DF94CF18EC89",
//     element: "TextInput",
//     text: "متنی",
//     required: true,
//     canHaveAnswer: true,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "text_input_4B321A2F-9531-4FD1-B215-C82F732273AF",
//     label: "نام ",
//     col: 0,
//     parentId: "016492AC-9099-4D80-9384-1A14A5F1E2F3",
//     parentIndex: 0,
//     dirty: false,
//   },
//   {
//     id: "9D8EAA85-DDDD-4CD9-A7B0-61704A9E90F6",
//     element: "TextInput",
//     text: "متنی",
//     required: true,
//     canHaveAnswer: true,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "text_input_CF1B8ADA-3729-41C6-9AE8-916586DF6FEF",
//     label: "نام خانوادگی ",
//     col: 1,
//     parentId: "016492AC-9099-4D80-9384-1A14A5F1E2F3",
//     parentIndex: 0,
//     dirty: false,
//   },
//   {
//     id: "1937D94E-ECB0-4436-ADCB-269CBFE0C9DB",
//     element: "DatePicker",
//     text: "تازیخ",
//     required: true,
//     readOnly: false,
//     defaultToday: true,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     dateFormat: "MM/dd/yyyy",
//     timeFormat: "hh:mm aa",
//     showTimeSelect: false,
//     showTimeSelectOnly: false,
//     showTimeInput: false,
//     field_name: "date_picker_579328CF-0E62-4E4B-9F03-71E240AB6E59",
//     label: "تاریخ تولد ",
//     col: 0,
//     parentId: "BABB2738-BC41-44F2-8F57-A7844C4D2140",
//     parentIndex: 1,
//     dirty: false,
//   },
//   {
//     id: "32783933-A882-4734-BB7B-D795CF70796E",
//     element: "NumberInput",
//     text: "عددی",
//     required: true,
//     canHaveAnswer: true,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "number_input_75FF7C33-5FBF-433A-9AF0-789DBA8DDFBD",
//     label: "سن ",
//     col: 1,
//     parentId: "BABB2738-BC41-44F2-8F57-A7844C4D2140",
//     parentIndex: 1,
//     dirty: false,
//   },
//   {
//     id: "E1216DD0-7578-412F-9934-E64CC5D0B603",
//     element: "EmailInput",
//     text: "ایمیل",
//     required: true,
//     canHaveAnswer: true,
//     canHavePageBreakBefore: true,
//     canHaveAlternateForm: true,
//     canHaveDisplayHorizontal: true,
//     canHaveOptionCorrect: true,
//     canHaveOptionValue: true,
//     canPopulateFromApi: true,
//     field_name: "email_input_41EB3DDB-E3A5-4826-A2A9-A1B990E512BF",
//     label: "ایمیل ",
//     col: 2,
//     parentId: "BABB2738-BC41-44F2-8F57-A7844C4D2140",
//     parentIndex: 1,
//     dirty: false,
//   },
// ];
// const App = () => {
//   const handlePost = (data: any) => {
//     console.log("data", data.task_data);
//     setModalData(data.task_data);
//   };
//   const [showModal, setShowModal] = useState(false);
//   const [modalData, setModalData] = useState([]);

//   const showPreview = () => {
//     setShowModal(!showModal);
//   };
//   const showShortPreview = () => {};
//   const showRoPreview = () => {};
//   const saveFormData = () => {};

//   return (
//     <>
//       <div className="clearfix" style={{ margin: "10px", width: "70%" }}>
//         <button
//           className="btn btn-primary float-right"
//           style={{ marginRight: "10px" }}
//           onClick={() => showPreview()}
//         >
//           Preview Form
//         </button>
//         <button
//           className="btn btn-default float-right"
//           style={{ marginRight: "10px" }}
//           onClick={() => showShortPreview()}
//         >
//           Alternate/Short Form
//         </button>
//         <button
//           className="btn btn-default float-right"
//           style={{ marginRight: "10px" }}
//           onClick={() => showRoPreview()}
//         >
//           Read Only Form
//         </button>
//         <button
//           className="btn btn-default float-right"
//           style={{ marginRight: "10px" }}
//           onClick={() => saveFormData()}
//         >
//           Save Form
//         </button>
//       </div>
//       {showModal && (
//         <ReactFormGenerator
//           locale="fa" // Set the locale, you can use "en" for English
//           data={modalData} // Pass your form data to the ReactFormGenerator
//           // onLoad={handleLoad} // Handle form data loaded event
//           onPost={handlePost} // Handle form data submitted event
//         />
//       )}
//       {/* <DndProvider backend={HTML5Backend}> */}
//       <ReactFormBuilder
//         // variables={variables}
//         // url={url}
//         // saveUrl={saveUrl}
//         locale="fa"
//         // saveAlways={false}
//         onPost={handlePost}
//         //toolbarItems={items}
//       />
//       {/* </DndProvider> */}
//     </>
//   );
// };

// export default App;
