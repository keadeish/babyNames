import Babies from "./babyNames.json";

const babies2 = [...Babies].sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(babies2);

function MapBabyNames(): JSX.Element {
  const babiesMapped = babies2.map((baby) => {
    if (baby.sex === "f") {
      return (
        <button className="girls" key={baby.id}>
          {baby.name}
        </button>
      );
    } else {
      return (
        <button className="boyz" key={baby.id}>
          {baby.name}
        </button>
      );
    }
  });
  return <b>{babiesMapped}</b>;
}

export default MapBabyNames;
