import React from "react";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword'
// se importan los estilos
import '../styles/global.css';


const App = () => {
  return(
    <Layout>
      <Login />
      <RecoveryPassword />
    </Layout>
  );
}

export default App;