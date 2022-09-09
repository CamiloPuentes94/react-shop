import React from "react";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
// se importan los estilos
import '../styles/global.css';


const App = () => {
  return(
    <Layout>
      <Login />
    </Layout>
  );
}

export default App;