import "./App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/item/:itemid" element={<ItemDetailContainer />}></Route>
          <Route path="/category/:idCategory" element={<ItemListContainer />}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
