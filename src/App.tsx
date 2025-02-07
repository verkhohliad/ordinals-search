import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import DetailsPage from "@/pages/details";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<DetailsPage />} path="/inscription/:address/:id" />
    </Routes>
  );
}

export default App;
