import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import im from "../imagens/contato.png";

const ContatoCard = ({ handleDeleteById, contato }) => {
  const { id, name, email, contato, linkdin, url_img } = contato;

  return (
    <tr>
      <td>
        <img width="65px" src={url_img} alt="contato" />
      </td>
      <td>
        <Link to={{ pathname: `admin/contato/${id}`, state: { contato: contato } }}>
          <div className="header">{name}</div>
        </Link>
      </td>
      <td>{email}</td>
      <td>{contato}</td>
      <td>{linkdin}</td>
      <td>
        <Button variant="danger" onClick={() => handleDeleteById(id)}>
          Delete
        </Button>
        <Link to={{ pathname: `/admin/edit`, state: { contato } }}>
          <Button>Editar</Button>
        </Link>
      </td>
    </tr>
  );
};

export default ContatoCard;
