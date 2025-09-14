import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { HomePage } from "./pages";
import styles from "./styles/page/_home.module.scss";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 所有頁面都套用 MainLayout */}
        <Route
          path="/"
          element={
            <div className={styles.home}>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </div>
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
