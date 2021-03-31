import React, { useState } from "react";
import "./RenderForm.css";
import { addPokemonService } from "../services/pokemon";

export const RenderForm = ({
  formIsVisible,
  pokemonSelect,
  addPokemonEvolution,
  labelBtn,
  typeForm,
  onPressAddEvolution,
  evolutions,
  onSubmitFinish,
}) => {
  const [errors, setError] = useState({});

  const [form, setForm] = useState({
    number: "",
    name: "",
    type: "",
    color: "",
  });

  const addPokemon = () => {
    addPokemonService(form, evolutions)
      .then(() => {
        onSubmitFinish();
        setError([]);
      })
      .catch((error) => {
        setError(error.response.data.errors);
      });
    return;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const getErrorForField = (field) => {
    if (errors.length === undefined) return null;
    const errorFound = errors.find((err) => err.field === field);
    console.log(errorFound);
    if (!errorFound) {
      return null;
    }

    return errorFound.message;
  };

  const controlAction = () => {
    if (!pokemonSelect?.id) {
      addPokemon();
      return;
    }
    addPokemonEvolution();
    return;
  };

  if (formIsVisible === false) {
    return null;
  }
  return (
    <div className="RenderForm">
      <div>
        <div style={{ float: "left" }}>
          {pokemonSelect?.id
            ? `Cadastrar Evolução para : ${pokemonSelect.name}`
            : null}
          <div>
            <label>{"Numero"}</label>
            <br />
            <input
              type="text"
              name={"number"}
              placeholder={"Numero"}
              value={form.number}
              onChange={handleInputChange}
            />
            {errors.length ? (
              <p style={{ color: "red" }}>{getErrorForField("id")}</p>
            ) : null}
          </div>
          <div>
            <label>{"Nome"}</label>
            <br />
            <input
              type="text"
              name={"name"}
              placeholder={"Nome"}
              value={form.name}
              onChange={handleInputChange}
            />
            {errors.length ? (
              <p style={{ color: "red" }}>{getErrorForField("name")}</p>
            ) : null}
          </div>
          <div>
            <label>{"Tipo"}</label>
            <br />
            <input
              type="text"
              name={"type"}
              placeholder={"Tipo"}
              value={form.type}
              onChange={handleInputChange}
            />
            {errors.length ? (
              <p style={{ color: "red" }}>{getErrorForField("type")}</p>
            ) : null}
          </div>
          <div>
            <label>{"Color"}</label>
            <br />
            <input
              type="text"
              name={"color"}
              placeholder={"Color"}
              value={form.color}
              onChange={handleInputChange}
            />
            {errors.length ? (
              <p style={{ color: "red" }}>{getErrorForField("color")}</p>
            ) : null}
          </div>
        </div>

        <div>
          <button
            onClick={() =>
              typeForm === "add_pokemon"
                ? addPokemon()
                : onPressAddEvolution(form)
            }
          >
            {labelBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
