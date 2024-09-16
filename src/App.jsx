import Sidebar, { SidebarItem } from "./components/Sidebar"
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";

import { FaBars, FaDatabase } from 'react-icons/fa'; // Import the hamburger icon from the FontAwesome library
import { SiFirebase } from "react-icons/si"; // Import the hamburger icon from the FontAwesome library

import './styles.css'; // Importa tu archivo de estilos CSS
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {

  {/* 1 */ }
  const [activeComponent, setActiveComponent] = useState('/');
  const handleComponenteChange = (path) => {
    setActiveComponent(path);
  };

  return (
    <>
      {/*</><div className="flex"> */}

      <div className="container">

        {/* contenido sidebar */}
        <div className="sidebar">
         <ul> 
            {/* ini. cont. sidebar */}
            <Sidebar>
              
              {/* elemento 1 :  */}
              <li onClick={() => handleComponenteChange('/')}>
                <SidebarItem
                  icon={<Home size={20} />}
                  text="Inicio"
                />
              </li>
              

              {/* elemento 2 :  */}
              <li onClick={() => handleComponenteChange('/Calendar')}>
                <SidebarItem
                  icon={<Calendar size={20} />}
                  text="Calendar"
                />
              </li>


            </Sidebar>
          </ul>
        </div>
        {/* fin. cont. sidebar */}


        {/* ini Cont. principal */}
        <div className="content">
          
          {/* Contenido dinámico */}
          {activeComponent === '/' && <div>Contenido Inicio</div>}
          {activeComponent === '/Calendar' && <div><SiFirebase /></div>}


          {/* Otros componentes : componenteSeleccionado */}

        </div>
        {/* ini Cont. principal */}


      </div>

    </>
  )
}

export default App
