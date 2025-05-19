import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Ubication from "./components/ubication";
import Menu from "./components/Menu";
import Initial from "./components/Initial";
import OrdenWrapper from "./components/OrdenWrapper";
import Perfil from "./components/Perfil";
import EditarPerfil from "./components/EditarPerfil";
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/ubication" element={<Ubication />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/orden" element={<OrdenWrapper />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/perfil/editar" element={<EditarPerfil />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />



          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
