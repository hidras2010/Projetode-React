import React from "react";
import { Card } from "react-bootstrap";

import Layout from "./LayoutAdmin";
import FormContato from "./FormContato";

class EditContato extends React.Component {
  //criando configuraçoes
  constructor(props) {
    super(props);
    const { id, name, email, contato, linkdin, url_img } =
      props.location.state.contato;

    this.state = {
      id: id,
      name: name,
      email: email,
      contato: contato,
      linkdin: linkdin,
      url_img: url_img,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Os dois primeiros campos são obrigatórios");
      return;
    }
    //mostrar dados organizados quando adicionado
    this.props.updateContato(this.state);

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
      <Layout title={`Atualizar ${this.state.name}`}>
        <Card>
          <Card.Header>Informar Contatos</Card.Header>
          <Card.Body>
            <FormContato
              values={this.state}
              changeValues={this.changeValues}
              onSubmit={this.update}
            />
          </Card.Body>
        </Card>
      </Layout>
    );
  }
}

export default EditContato;
