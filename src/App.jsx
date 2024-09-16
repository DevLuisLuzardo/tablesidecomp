import Sidebar, { SidebarItem } from "./components/Sidebar"
import { Home, Calendar, BookOpenText} from "lucide-react";

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
              <li onClick={() => handleComponenteChange('/BookOpenText')}>
                <SidebarItem
                  icon={<BookOpenText size={20} />}
                  text="Devocionales"
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
          {activeComponent === '/BookOpenText' && <div>Contenido Devocionales</div>}
          

          {/* Otros componentes : componenteSeleccionado */}

        </div>
        {/* ini Cont. principal */}


      </div>

    </>
  )
}

export default App
