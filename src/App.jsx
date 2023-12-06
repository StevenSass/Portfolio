import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
