import { Link } from "react-router-dom";

export const HeaderPanel = () => {
  return (
    <>
      <div className="top-bar flex justify-center">
        {/* <div className="intro-x breadcrumb ml-auto sm:flex"> */}
        {/* <Link to="/" className="breadcrumb--active">
            گزارش
          </Link> */}
        {/* <a
            href="https://devsrv-dc1-g018.gig.holdings/ReportServer/Pages/ReportViewer.aspx?%2fSharePoint%2fGPI%2fProductSuggestion%2fProductSuggestion&rs:Command=Render"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary   inline-block ml-1 mb-2"
          >
            <ICClipboardData className="w-5 h-5 ml-1 inline-block" /> گزارش
          </a>
          <Link
            to="cartable"
            className="mr-3 btn btn-outline-primary inline-block ml-1 mb-2"
          >
            <ICHome className="w-5 h-5 ml-1 inline-block" />
            کارتابل
          </Link> */}
        {/* </div> */}
        {/* <div className="intro-x relative ml-3 sm:ml-6"> */}
        <h3 className="font-medium !text-black ">سامانه سیستم ساز </h3>
        {/* </div> */}
      </div>
    </>
  );
};
