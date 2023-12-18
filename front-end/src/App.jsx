import { Routes, Route } from "react-router-dom";

/*****************************************
 * Import pages                          *
 *****************************************/
import Home from "./pages/Home/Home";
import Error404 from "./pages/Errors/Error404";

/*****************************************
 * Import components                     *
 *****************************************/
import Header from "./components/Header";
import LateralBar from "./components/LateralBar";

function App() {
  return (
    <div className="App">
      <Header />
      <LateralBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*****************************************
         * Routes to errors pages                 *
         ******************************************/}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
