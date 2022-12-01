import React, {useState} from "react";
import "./App.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { estiloBotao } from "./App";

const Cadastro = () => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [publishingCompany,setPublishingCompany] = useState("")
    const [state,setState] = useState("")
    const [releaseYear,setReleaseYear] = useState("")
    const [pages,setPages] = useState("")

    const navigate = useNavigate()

    function AlertaCadastro()
    {
    var r=window.confirm("Cadastro realizado com sucesso!\nQue tal cadastrar outro livro?");
    if (r===false)
      {return navigate('/Lista')}
    }

    const AdicionarLivro = async () => {
        let formField = new FormData()

        formField.append('title', title)
        formField.append('author', author)
        formField.append('publishingCompany', publishingCompany)
        formField.append('state', state)
        formField.append('releaseYear', releaseYear)
        formField.append('pages', pages)

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8080/books/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            AlertaCadastro();
            //alert('Cadastro realizado com sucesso!')
            
        }).catch((error) => {
            alert('Cadastro não realizado!\nVerifique os dados digitados e tente novamente.')
        }) 
    }

  const estiloCampos = {
    borderRadius: 6, 
    padding: 10,
    border: "none",
    fontSize: 16,
    width: 400,
    marginTop: 8,
  }

    return(
        
        <div>
            <p style={{ fontFamily: "garamond", fontSize:20, marginLeft:20}}>
                Para realizar o cadastro do livro é necessário preencher todos os campos abaixo:
            </p>
            <h2 style={{textAlign: "center"}}>
                
                <input style={estiloCampos} type="text" name="title" placeholder="Titulo do livro"
                value={title} onChange={(e) => setTitle(e.target.value)}/><br />
                <input style={estiloCampos} type="text" name="author" placeholder="Autor do livro"
                value={author} onChange={(e) => setAuthor(e.target.value)}/><br />
                <input style={estiloCampos} type="text" name="publishingCompany" placeholder="Editora de publicação"
                value={publishingCompany} onChange={(e) => setPublishingCompany(e.target.value)}/><br />
                <input style={estiloCampos} type="text" name="state" placeholder="Estado do livro (ex. Novo, Usado etc.)"
                value={state} onChange={(e) => setState(e.target.value)}/><br />
                <input style={{...estiloCampos, width: 184}} type="number" name="releaseYear" placeholder="Ano de lançamento"
                value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)}/>
                <input style={{...estiloCampos, width: 184, marginLeft:12}} type="number" name="pages" placeholder="Número de páginas"
                value={pages} onChange={(e) => setPages(e.target.value)} /><br />
                
                <button type="submit" style={{...estiloBotao, marginTop:12}} onClick={AdicionarLivro}>Realizar cadastro</button>
            </h2>   
        </div>
    )
}

export default Cadastro;