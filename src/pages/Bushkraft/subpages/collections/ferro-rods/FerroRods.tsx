import items from "../../../data/items";

const FerroRods = () => {
  const ferroRods = items.ferro_rods;
  console.log(ferroRods);

  return (
    <div>
      <h2>Ferro Rods</h2>
      <p>
        Every outdoorsman should have a good fire-starting tool in their
        survival kit. A ferro rod, also know as a spark rod or ferrocerium rod,
        can ignite in windy conditions, cold, or rain. It's the powerhouse
        capable of giving you the fire-starting momentum you need to stay warm
        and alive in the wilderness.
      </p>
    </div>
  );
};
export default FerroRods;
