import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

//1. "/" : 모든 일기를 조회하는 홈페이지
//2. "/new" : 새로운 일기를 작성하는 new 페이지
//3. "/diary" : 일기를 상세히 조회하는 다이어리 페이지

function App() {
  return (
    <>
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/new"}> New </Link>
        <Link to={"/diary"}> Diary </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
