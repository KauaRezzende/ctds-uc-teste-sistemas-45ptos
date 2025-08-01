// src/components/CadastroGeral.jsx

import React, { useState } from 'react';

const CadastroGeral = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setMensagem('Todos os campos devem estar preenchidos');
      return;
    }
    if (nome.length < 2) {
        setMensagem('Nome muito curto')
        return;
    }
    if (!email.includes('@')) {
        setMensagem('O email deve conter o @')
        return;
    }

    if (!email.includes('.com')){
        setMensagem('O email deve ter dominio como ".com" ou ".br"')
        return
    }
    if (senha.length < 5){
        setMensagem('A senha deve conter no minimo 6 caracteres')
        return
    }

    if (nome.length > 50 || email.length > 50) {
        setMensagem('O limite de caracteres foi atingido')
        return
    }

    setMensagem('Cadastro realizado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder=" "
            
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            
          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder=" "
            
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroGeral