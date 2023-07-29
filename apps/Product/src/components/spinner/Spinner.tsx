const Spinner = () => {
  return (
    <div className="main ">
      <div className="flex">
        <div className="content opacity-70">
          <div className="flex items-center justify-center h-screen">
            {/* <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
            </div> 
             </div> */}
            <div className="flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 bg-blue-400 rounded-full mr-2"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full mr-2"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full mr-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
