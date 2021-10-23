import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import im from "../imagens/tdpro.jpg";
import Layout from "./LayoutAdmin";

const ContatoInfo = (props) => {
  const { name, email, contato, linkdin, url_img } = props.location.state.contato;

  return (
    <Layout title={name}>
      <Container>
        <Row>
          <Col sm="4">
          <Card>
            <Card.Img variant="top" src={url_img} />
            <Card.Body>
              <Card.Title>Nome: {name}</Card.Title>
              <Card.Text>Email: {email}</Card.Text>
              <Card.Text>Contato: {contact}</Card.Text>
              <Card.Text>linkdin: {linkdin}</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default ContatoInfo;
