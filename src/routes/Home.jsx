import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  const { user, signIn, signOut } = useContext(UserContext);

  // Imagen de encabezado o slider
  const masthead = (
    <div
      id="encabslider"
      style={{ marginTop: "0px" }}
      className="mx-auto w-full" // Quitamos "container"
    >
      <img src="./mastehead3.png" alt="Descripción de la imagen" />
    </div>
  );

  // DEVOCIONALES : VIRTUAL
  const virtualDevotionals = (
    <div className="container mt-5">
      <div className="row">
        {/* Conecta a Mmeet */}
        <div className="col-sm-5">
          <div id="accederadevocionales">
            <img
              style={{ width: "100%", cursor: "pointer", borderRadius: "30px" }}
              src="/conecta_meet.png"
              alt="conecta con nosotros meet"
            />
          </div>
          <div>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    borderRadius: "30px",
                    backgroundColor: "#ffefc7",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  href="https://meet.google.com/uty-jvtm-xdf"
                >
                  IVS
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* fin. Conecta a Mmeet */}

        {/* Devocionales en linea */}
        <div className="col-sm-7">
          <div>
            <img
              style={{ width: "100%", cursor: "pointer", borderRadius: "30px" }}
              src="/devocionalesenlinea.png"
              alt="devocionales online"
            />
            <a
              className="nav-link"
              style={{ width: "100%", cursor: "pointer" }}
              href="#"
            >
              <img
                style={{
                  width: "20%",
                  cursor: "pointer",
                  borderRadius: "30px",
                  float: "right",
                }}
                src="/iraencab.png"
                alt="ir a encab"
              />
            </a>
            <a
              className="nav-link"
              style={{ width: "100%", cursor: "pointer" }}
              href="#piepagina"
            >
              <img
                style={{
                  width: "20%",
                  cursor: "pointer",
                  borderRadius: "30px",
                  float: "right",
                }}
                src="./irapie.png"
                alt="ir a pie"
              />
            </a>
          </div>
        </div>
        {/* fin. Devocionales en linea */}
      </div>
    </div>
  );

  // Footer
  const footer = (
    <footer
      className="text-center text-white"
      style={{ marginTop: "50px", backgroundColor: "#f1f1f1" }}
      id="piepagina"
    >
      {/* Grid container */}
      <div>
        {/* Section: Social media */}
        <section id="about" className="bg-dark text-white">
          <div className="container">
            <div
              className="row"
              style={{
                paddingTop: "100px",
                paddingBottom: "80px",
                textAlign: "left",
              }}
            >
              <div className="col-md-2">
                <h6>
                  <b>Devocionales</b>
                </h6>
                <ul className="navbar-nav">
                  <li>
                    <a
                      className="nav-link"
                      href="#accederadevocionales"
                      style={{ textDecoration: "none", paddingRight: "15px" }}
                    >
                      Ivs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Grid container */}

        {/* Copyright */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="#">
            Iglesia Vida en Santidad
          </a>
          . Reservados todos los derechos.
        </div>
        {/* Copyright */}
      </div>
    </footer>
  );

  // ... Rest of the code

  // Render the components in the appropriate order
  return (
    <>
      {masthead}
      {virtualDevotionals}
      {footer}
    </>
  );
};

export default Home;
