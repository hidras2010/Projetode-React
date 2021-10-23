import React from "react";
import LayoutSite from "../../componentes/LayoutSite";
import ContactItem from "./components/ContactItem";

const HomePage = ({ contatos }) => {
  return (
    <LayoutSite>
      {contatos.map((contact) => (
        <ContactItem
          name={contact.name}
          urlImg={contact.url_img}
          email={contact.email}
          contato={Contact.contato}
        />
      ))}
    </LayoutSite>
  );
};

export default HomePage;
