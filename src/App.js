import React, { useState } from "react";
import axios from "axios";
// import { Card } from "./Components/Card";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    number: "",
    name: "",
    type: "",
    color: "",
  });

  const ref = React.useRef();

  const getAll = () => {
    const { number, name, type, color } = form;

    const Data = {
      pokemon: {
        id: number,
        name: name,
        type: type,
        color: color,
        evolutions: [],
      },
    };
    axios.post("http://localhost:3001/api/pokemon", Data).then((response) => {
      console.log(response);
    });
  };

  const handleChange = (event, inputName) => {
    setForm({ ...form, [inputName]: event.target.value }, () =>
      event.input.focus()
    );
    event.preventDefault();
  };

  const RenderInput = ({ label, inputName }) => {
    console.log(inputName);
    return (
      <div>
        <label>{label}</label>
        <br />
        <input
          ref={(inputName) => ref}
          type="text"
          name={inputName}
          placeholder={label}
          value={form[inputName]}
          onChange={(e) => handleChange(e, inputName)}
        />
      </div>
    );
  };

  return (
    <div className="Box">
      <div>
        {<RenderInput label={"Numero"} inputName={"number"} />}
        {<RenderInput label={"Nome"} inputName={"name"} />}
        {<RenderInput label={"Tipo"} inputName={"type"} />}
        {<RenderInput label={"Cor"} inputName={"color"} />}
      </div>
      <button onClick={() => getAll()}>Cadastrar</button>
    </div>
  );
}

export default App;
