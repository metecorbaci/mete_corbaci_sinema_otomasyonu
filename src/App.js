import "./App.css";
import Anasayfa from "./view/Anasayfa/Anasayfa";
import BiletEkrani from "./view/BiletEkrani/BiletEkrani";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./view/AdminPanel/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/bilet/:id" element={<BiletEkrani />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
