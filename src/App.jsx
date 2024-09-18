
import Sidebar, { SidebarItem } from "./components/Sidebar"
import { Home, Calendar, BookOpenText } from "lucide-react";

import { FaBars, FaDatabase } from 'react-icons/fa'; // Import the hamburger icon from the FontAwesome library
import { SiFirebase } from "react-icons/si"; // Import the hamburger icon from the FontAwesome library

import './styles.css'; // Importa tu archivo de estilos CSS
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Inicio from '../public/inicio1.png';
import Mision from '../public/mision1.png';
import Vision from '../public/vision1.png';
import Legalidad from '../public/legalidad1.png';
import Devocional from '../public/devocional1.png';
import Intercesion from '../public/intercesion1.png';
import Eventos from '../public/eventos1.png';
import Sedesasocia from '../public/sedesasocia1.png';
//import Vision from '../public/vision1.png';


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
                                                                        icon={<img src={Inicio} alt="Inicio" width="25" height="25" />}
                                                                        text="Inicio"
                                                                />
                                                        </li>

                                                        {/* elemento 2 :  */}
                                                        <li onClick={() => handleComponenteChange('/Mision')}>
                                                                <SidebarItem
                                                                        icon={<img src={Mision} alt="Mision" width="25" height="25" />}
                                                                        text="Misión"
                                                                />
                                                        </li>

                                                        {/* elemento 3 :  */}
                                                        <li onClick={() => handleComponenteChange('/Vision')}>
                                                                <SidebarItem
                                                                        icon={<img src={Vision} alt="Vision" width="25" height="25" />}                                                                     
                                                                        text="Visión"
                                                                />
                                                        </li>

                                                        {/* elemento 4 :  */}
                                                        <li onClick={() => handleComponenteChange('/Legalidad')}>
                                                                <SidebarItem
                                                                        icon={<img src={Legalidad} alt="Legalidad" width="25" height="25" />}
                                                                        text="Aspectos Legales"
                                                                />
                                                        </li>

                                                        {/* elemento 5 :  */}
                                                        <li onClick={() => handleComponenteChange('/Devocional')}>
                                                                <SidebarItem
                                                                        icon={<img src={Devocional} alt="Decocional" width="20" height="20" />}
                                                                        text="Devocionales"
                                                                />
                                                        </li>

                                                        {/* elemento 6 :  */}
                                                        <li onClick={() => handleComponenteChange('/Intercesion')}>
                                                                <SidebarItem
                                                                        icon={<img src={Intercesion} alt="Inicio" width="20" height="20" />}
                                                                        text="Intercesión"
                                                                />
                                                        </li>

                                                        {/* elemento 7 :  */}
                                                        <li onClick={() => handleComponenteChange('/Eventos')}>
                                                                <SidebarItem
                                                                        icon={<img src={Eventos} alt="Inicio" width="20" height="20" />}
                                                                        text="Eventos"
                                                                />
                                                        </li>

                                                        {/* elemento 8 :  */}
                                                        <li onClick={() => handleComponenteChange('/Sedesasocia')}>
                                                                <SidebarItem
                                                                        icon={<img src={Sedesasocia} alt="Sedes Asociadas" width="20" height="20" />}
                                                                        text="Sedes Asociadas"
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
                                        {activeComponent === '/Mision' && <div>Contenido Misión</div>}
                                        {activeComponent === '/Vision' && <div>Contenido Visión </div>}
                                        {activeComponent === '/Legalidad' && <div>Aspectos Legales </div>}
                                        {activeComponent === '/Devocional' && <div>Devocionales </div>}
                                        {activeComponent === '/Intercesion' && <div>Intercesión </div>}
                                        {activeComponent === '/Eventos' && <div>Eventos </div>}
                                        {activeComponent === '/Sedesasocia' && <div>Sedes Asociadas </div>}


                                        {/* Otros componentes : componenteSeleccionado */}

                                </div>
                                {/* ini Cont. principal */}


                        </div>

                </>
        )
}

export default App

