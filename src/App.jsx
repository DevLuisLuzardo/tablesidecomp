import Sidebar, { SidebarItem } from "./components/Sidebar";
import { Home, Calendar, BookOpenText } from "lucide-react";

import { FaBars, FaDatabase } from "react-icons/fa"; // Import the hamburger icon from the FontAwesome library
import { SiFirebase } from "react-icons/si"; // Import the hamburger icon from the FontAwesome library

import "./styles.css"; // Importa tu archivo de estilos CSS
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./routes/Home";
import Inicioimg from "../public/inicio1.png";

import Mision from "./routes/Mision";
import Misionimg from "../public/mision1.png";

import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      {/*</><div className="flex"> */}
      <div className="container m-0">
        {/* contenido sidebar */}
        <div className="sidebar">
          {/* ini. cont. sidebar */}
          <Sidebar>
            {/* elemento 1 :  */}
            <li>
              <Link to="/Home">
                <SidebarItem
                  icon={
                    <img src={Inicioimg} alt="Inicio" width="25" height="25" />
                  }
                  text="Inicio"
                />
              </Link>
            </li>
            {/* elemento 2 :  */}
            <li>
              <Link to="/Mision">
                <SidebarItem
                  icon={
                    <img src={Misionimg} alt="Mision" width="25" height="25" />
                  }
                  text="Misión"
                />
              </Link>
            </li>
          </Sidebar>
        </div>
        {/* fin. cont. sidebar */}

        {/* ini Cont. principal */}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                //<RequireAuth>
                <Homepage />
                //</RequireAuth>
              }
            />
            <Route path="/Home" element={<Homepage />} />
            <Route path="/Mision" element={<Mision />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* fin. Cont. principal */}

      </div>
    </>
  );
}

export default App;
