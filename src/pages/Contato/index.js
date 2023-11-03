import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Spinner from "../../components/Spinner";
import { api } from "../../contexts/auth";

const Contato = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [contatos, setContatos] = useState([]);

  useEffect( () => {

    api.defaults.headers.common = {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    api.get('/cadastros').then(function (response) {
      setContatos(response.data.data);
    });
  }, []);

  return (
    <C.Container>
      <C.Title>Página Listagem dos Contatos</C.Title>
        <ul>
          {contatos.map((contato) => (
            <li key={contato.id}>
              <strong>Nome:</strong> {contato.nome}<br />
              <strong>Endereço:</strong> {contato.endereco}<br />
              <strong>Telefone:</strong> {contato.telefone}<br />
            </li>
          ))}
        </ul>
      <hr/>
      <Link to={'/home'}>Home</Link>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Contato;
