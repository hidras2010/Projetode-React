import React from "react";
import Layout from "./LayoutAdmin";
import { Card } from "react-bootstrap";
import FormContact from "./FormContact";

class AddContato extends React.Component {
  //criando configuraçoes
  state = {
    name: "",
    email: "",
    contato: "",
    linkdin: "",
    url_img: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Os dois primeiros campos são obrigatórios");
      return;
    }
    //mostrar dados organizados quando adicionado
    this.props.novoContato(this.state);

    //limpando informacoes depois de adicionado
    this.setState({ name: "", email: "", contato: "", linkdin: "", url_img: "" });

    //depois de adicionado queremos voltar para a nossa lista
    this.props.history.push("/admin");
  };

  changeValues = (newValue) => {
    this.setState(newValue);
  };

  render() {
    return (
      <Layout title="Agregar Contatos">
        <Card>
          <Card.Header>Informar Contatos</Card.Header>
          <Card.Body>
            <FormContact
              values={this.state}
              changeValues={this.changeValues}
              onSubmit={this.add}
            />
          </Card.Body>
        </Card>
      </Layout>
    );
  }
}

export default AddContato;
