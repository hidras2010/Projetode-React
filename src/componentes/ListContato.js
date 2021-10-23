import React from "react";
import ContatCard from "./ContatCard";
import { Card, Table } from "react-bootstrap";
import Layout from "./LayoutAdmin";

const ListContato = ({ contatos: contacts, deleteContactById }) => {
  return (
    <Layout title="Lista dos contatos">
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Img</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Contato</th>
                <th>linkdin</th>
                <th>Metodo</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <ContatCard
                  contato={contact}
                  handleDeleteById={deleteContactById}
                  key={contact.id}
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Layout>
  );
};
export default ListContato;
