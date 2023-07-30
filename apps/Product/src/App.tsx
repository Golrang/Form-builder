import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { RecoilRoot } from "recoil";
import FaIR from "antd/locale/fa_IR";
import "moment/locale/fa"; // Import the Persian (fa) locale for moment-jalaali

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
