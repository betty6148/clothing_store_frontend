import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { HomePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 所有頁面都套用 MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        {/* <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
