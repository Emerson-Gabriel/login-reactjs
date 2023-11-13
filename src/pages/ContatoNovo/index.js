import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import { api } from "../../contexts/auth";
import './style.css';

const ContatoNovo = () => {
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
    <div className="container">
      <h2>Página Cadastro de Contato</h2>
        <br/>
        <Link to={'/contatos'}>Listar</Link>
        <form>
          
        </form>
      <hr/>
      <Link to={'/home'}>Home</Link>
      <br/>
      <button className="btn-primary" type="button" onClick={() => [signout(), navigate("/")]}>
        Sair
      </button>
    </div>
  );
};

export default ContatoNovo;