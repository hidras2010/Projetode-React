import React from "react";
import { FormControl, FormGroup, Button } from "react-bootstrap";

const FormContact = ({ values, changeValues, onSubmit }) => {
  return (
    <form className="" onSubmit={onSubmit}>
      <FormGroup>
        <label>Nome do Contato</label>
        <FormControl
          type="text"
          name="name"
          placeholder="hidras tuala"
          value={values.name}
          onChange={(e) => changeValues({ name: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label>Email do contato</label>
        <FormControl
          type="text"
          name="name"
          placeholder="hidras@gmail.com"
          value={values.email}
          onChange={(e) => changeValues({ email: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label>contato do contato</label>
        <FormControl
          type="text"
          name="name"
          placeholder="Bento"
          value={values.contato}
          onChange={(e) => changeValues({ contato: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label>linkdin do contato</label>
        <FormControl
          type="text"
          name="name"
          placeholder="https://www.linkedin.com/in/hidras-tuala-ht-0b1646124/"
          value={values.linkdin}
          onChange={(e) => changeValues({ linkdin: e.target.value })}
        />
      </FormGroup>

      <FormGroup style={{ marginBottom: 18 }}>
        <label>Url Img</label>
        <FormControl
          type="text"
          name="url_img"
          placeholder="Img"
          value={values.url_img}
          onChange={(e) => changeValues({ url_img: e.target.value })}
        />
      </FormGroup>
      <Button type="submit" className="ui button blue">Adicionar</Button>
    </form>
  );
};

export default FormContact;
