import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer"; // ✅ ADDED

// MAIN PAGES
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import Suggestions from "./pages/Suggestions";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

// EXTRA PAGES
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

// COVER LETTER PAGES
import CoverBuilder from "./pages/CoverBuilder";
import CoverTemplates from "./pages/CoverTemplates";
import CoverExamples from "./pages/CoverExamples";
import CoverFormat from "./pages/CoverFormat";
import CoverGuide from "./pages/CoverGuide";
import CoverHelp from "./pages/CoverHelp";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* 🌐 PUBLIC PAGES */}

        <Route
          path="/about"
          element={
            <>
              <Header />
              <div className="p-4">
                <About />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/pricing"
          element={
            <>
              <Header />
              <div className="p-4">
                <Pricing />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <div className="p-4">
                <Contact />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/reviews"
          element={
            <>
              <Header />
              <div className="p-4">
                <Reviews />
              </div>
              <Footer />
            </>
          }
        />

        {/* ✍️ COVER LETTER PAGES */}

        <Route
          path="/cover-builder"
          element={
            <>
              <Header />
              <div className="p-4">
                <CoverBuilder />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/cover-templates"
          element={
            <>
              <Header />
              <div className="p-4">
                <CoverTemplates />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/cover-examples"
          element={
            <>
              <Header />
              <div className="p-4">
                <CoverExamples />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/cover-format"
          element={
            <>
              <Header />
              <div className="p-4">
                <CoverFormat />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/cover-guide"
          element={
            <>
              <Header />
              <div className="p-4">
                <CoverGuide />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/cover-help"
          element={
            <>
              <Header />
              <div className="p-4">
                <CoverHelp />
              </div>
              <Footer />
            </>
          }
        />

        {/* 🧠 MAIN APP (WITH SIDEBAR) */}

        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                  <Dashboard />
                </div>
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/analysis"
          element={
            <>
              <Header />
              <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                  <Analysis />
                </div>
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/suggestions"
          element={
            <>
              <Header />
              <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                  <Suggestions />
                </div>
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/upload"
          element={
            <>
              <Header />
              <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                  <Upload />
                </div>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
