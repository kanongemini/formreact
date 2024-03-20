import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome enviado: ${nome}`);
  };

  return (
    <div className="App">
      <h1>Meu Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
          <span> E-mail</span>
          <input type="text" name="email"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;

     
     
