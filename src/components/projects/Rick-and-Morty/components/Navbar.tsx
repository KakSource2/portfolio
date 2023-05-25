const Navbar = ({
  displayChangers,
}: {
  displayChangers: {
    characters: () => void;
    locations: () => void;
    episodes: () => void;
  };
}) => {
  return (
    <div>
      <button onClick={() => displayChangers.characters()}>Characters</button>
      <button onClick={() => displayChangers.locations()}>Locations</button>
      <button onClick={() => displayChangers.episodes()}>Episodes</button>
    </div>
  );
};
export default Navbar;
