import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  const { user, signIn, signOut } = useContext(UserContext);

  // Imagen de encabezado o slider
  const masthead = (
    <div
      id="encabslider"
      style={{ marginTop: "0px"}}
      className="container"
    >
      <img src="./mastehead3.png" alt="Descripción de la imagen" />
    </div>
  );

  return <>{masthead}</>;
};

export default Home;
