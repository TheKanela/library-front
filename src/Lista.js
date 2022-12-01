import React from "react";
import "./App.css";

function Lista() {
  const [books, setBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const estiloTableData = { fontWeight: "normal", fontSize: 16 };

  async function buscarLivros() {
    const resposta = await fetch("http://127.0.0.1:8080/books/");
    const livros = await resposta.json();
    setBooks(livros);
  }

  async function handleDelete(event, id) {
    event.preventDefault();

    try {
      setIsLoading(true);
      await fetch(`http://127.0.0.1:8080/books/${id}/`, {
        method: "DELETE",
      });

      buscarLivros();
    } catch (error) {
      alert("Falha ao deletar!");
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    buscarLivros();
  }, []);

  return (
    
    <div>
      {!isLoading && (
        <table
          style={{
            width: "100%",
            padding: 24,
            backgroundColor: "#e3e3e3",
            borderRadius: 12,
          }}
        >
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Condição</th>
            <th>Ano</th>
            <th>Paginas</th>
          </tr>
          {books.map((book) => (
            <tr key={book.bookID}>
              <th style={estiloTableData}>{book.title}</th>
              <th style={estiloTableData}>{book.author}</th>
              <th style={estiloTableData}>{book.publishingCompany}</th>
              <th style={estiloTableData}>{book.state}</th>
              <th style={estiloTableData}>{book.releaseYear}</th>
              <th style={estiloTableData}>{book.pages}</th>
              <th>
                <button
                  style={{
                    backgroundColor: "#ff0000",
                    borderRadius: 12,
                    padding: 20,
                    cursor: "pointer",
                    color: "#fff",
                    border: "none",
                    fontSize: 16,
                    height: 45,
                    marginRight: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={(event) => handleDelete(event, book.bookID)}
                >
                  Deletar
                </button>
              </th>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default Lista;