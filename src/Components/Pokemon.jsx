export const Pokemon = ({ data, children }) => {
  return (
    <div style={{ backgroundColor: data.color, marginLeft: 8 }}>
      <div className={"pokemonContainer"}>
        <h1>{data.name}</h1>
        {children}
        <div className="CircleContainer">
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.id}.png `}
            width="200"
            height="200"
          />
        </div>
      </div>

      <div className={"typeContainer"}>
        <p>{data.type}</p>
      </div>
    </div>
  );
};
