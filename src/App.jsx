import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
