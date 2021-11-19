import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import vistaHomepage from "./views/vistaHomepage"
import vistaContrato from "./views/vistaContrato"
import pruebita from "./views/pruebita";
import vistaLogin from "./views/vistaLogin";
import vistaAdmin from "./views/vistaAdmin";
import createApartament from './views/createApartament'


function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={vistaHomepage} exact />
        <Route path="/contrato" component={vistaContrato}  />
        <Route path="/prueba" component={pruebita}  />
        <Route path="/Login" component={vistaLogin}  />
        <Route path="/admin" component={vistaAdmin}  />
        <Route path="/create-apartament" component={createApartament}  />
        
        
      </Router>
    </div>
  );
}

export default App;
