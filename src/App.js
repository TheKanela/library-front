import React from "react";
import "./App.css";
import { Routes,Route,Link } from "react-router-dom";
//import Routes from "./routes";
import Lista from "./Lista";
import Cadastro from "./Cadastro";

export const estiloBotao = {
  backgroundColor: "#069cc2",
  borderRadius: 12,
  padding: 16,
  cursor: "pointer",
  color: "#fff",
  border: "none",
  fontSize: 16,
  marginRight: 8,
  alignItems: "center",
  justifyContent: "center",
};

function App() {
  document.body.style.backgroundColor = "#afafaf"  
  return (    
    <>    
    
      <div>
        <div style={{ paddingRight: 24, paddingLeft: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontFamily: "garamond", fontSize:44 }}>Sistema do bibliotecário!</h1>
            <img src="https://www.riobrancofac.edu.br/Site/img/logo.png" alt="Logo Rio Branco"/>
          </div>
          <hr className="linha_site" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Link to="/">
            <button style={estiloBotao}>Pagina inicial</button>
          </Link>
          <Link to="/lista">
            <button style={estiloBotao}>Livros cadastrados</button>
          </Link>
          <Link to="/cadastro">
            <button style={estiloBotao}>Cadastrar livros</button>
          </Link>
          <a href="https://api.whatsapp.com/send?phone=5511973315964">
            <button style={estiloBotao}>Contato desenvolvedor</button>
          </a>
        </div>      
        <main>
          <Routes>
            {/* <Route path='/Home' element={<Home/>}/> */}
            <Route path='/Lista' element={<Lista/>}/>
            <Route path='/Cadastro' element={<Cadastro/>}/>
          </Routes>
        </main>
      </div>
    </>
  );
}


export default App;