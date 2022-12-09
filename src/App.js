import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./admin/AdminHome";
import Medecin from "./admin/Medecin";
import New from "./admin/New";
import Single from "./admin/Single";
import Infirmier from "./admin/Infirmier";
import Pharmacie from "./admin/Pharmacie";
import Laboratoire from "./admin/Laboratoire";
import Departement from "./admin/Departement";
import Patient from "./admin/Patient";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AdminHome />} />
          </Route>
          {/* Pour le medecin */}
          <Route path="medecin">
            <Route index element={<Medecin />} />
            <Route path=":medecinId" element={<Single />} />
            <Route path="nouveau" element={<New />} />
          </Route>

          {/* Pour l'infirmier */}
          <Route path="infirmier">
            <Route index element={<Infirmier />} />
            <Route path=":infirmierId" element={<Single />} />
            <Route path="nouveau" element={<New />} />
          </Route>
           {/* Pour patient */}
           <Route path="patient">
            <Route index element={<Patient />} />
            <Route path=":patientId" element={<Single />} />
            <Route path="nouveau" element={<New />} />
          </Route>

          {/* Pour Pharmacien */}
          <Route path="pharmacien">
            <Route index element={<Pharmacie />} />
            <Route path=":pharmacieId" element={<Single />} />
            <Route path="nouveau" element={<New />} />
          </Route>

          {/* Pour laboratoire */}
          <Route path="laboratoire">
            <Route index element={<Laboratoire />} />
            <Route path=":laboratoireId" element={<Single />} />
            <Route path="nouveau" element={<New />} />
          </Route>

          {/* Pour Departement */}
          <Route path="departement">
            <Route index element={<Departement />} />
            <Route path=":departementId" element={<Single />} />
            <Route path="nouveau" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
