import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import api from "./api/contatos";
import AdicionarContato from "./componentes/Addcontato";
import ListaContatos from "./componentes/ListContato";
import ContatoInfo from "./componentes/ContatoInfo";
import EditContato from "./componentes/Editcontato";
import HomePage from "./pages/Home";

function App() {
  const [contatos, setContacts] = useState([]);

  //recuperar produtos da fake api
  const recuperarContato = async () => {
    const resposta = await api.get("/contatos");
    return resposta.data;
  };
  //Cadastro de novos produtos
  const novoContato = async (contato) => {
    const request = {
      id: uuid(),
      ...contato,
    };
    //criando chamadas da api
    const resposta = await api.post("/contatos", request);

    setContacts([...contatos, resposta.data]);
  };

 
  const updateContato = async (contato) => {
    const resposta = await api.put(`/contatos/${contato.id}`, contato);

    const { id, name, email, contato, linkdin } = resposta.data;

    setContacts(
      contatos.map((contato) => {
        return contato.id === id ? { ...resposta.data } : contato;
      })
    );
  };

  //codigo para eliminar algo cadastrado
  const deleteContactById = async (id) => {
    await api.delete(`/contatos/${id}`);

    const nvContato = contatos.filter((contato) => {
      return contato.id !== id;
    });
    setContacts(nvContato);
  };

  //criando efeito de como os dados vão ser apresentados
  useEffect(() => {
    const getContatos = async () => {
      const todosContatos = await recuperarContato();
      if (todosContatos) {
        setContacts(todosContatos);
      }
    };
    getContatos();
  }, []);  

  return (
    <div className="">
      <Router>
        <Switch>
          <Route
            path="/admin/"
            exact
            render={(props) => (
              <ListaContatos
                {...props}
                contatos={contatos}
                deleteContactById={deleteContactById}
              />
            )}
          />
          <Route
            path="/admin/add"
            render={(props) => (
              <AdicionarContato {...props} novoContato={novoContato} />
            )}
          />
          <Route
            path="/admin/edit"
            render={(props) => (
              <EditContato {...props} updateContato={updateContato} />
            )}
          />
          <Route path="/admin/contato/:id" component={ContatoInfo} />
          <Route path="/" render={() => <HomePage contatos={contatos} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
