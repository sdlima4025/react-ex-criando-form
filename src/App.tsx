import React, {useState} from 'react';

const App = () => {
const [nome, setName] = useState('');
const [sobreNome, setsobreNome] = useState('');
const [idade, setIdade] = useState('');

const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
}
const handlesobreInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  setsobreNome(event.target.value);
}
const handleidadeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  setIdade(event.target.value);
}

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={nome} onChange={handlerInput} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobreNome} onChange={handlesobreInput}/>
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleidadeInput} />
      </div>

      <hr/>

      Olá {nome}{sobreNome}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;