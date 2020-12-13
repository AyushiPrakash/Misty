import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = (props) => {
  const { location, setLocation, searchFunction } = props;

  return (
    <header>
      <div className="search">
        <AiOutlineSearch className="searchIcon" size={20} />
        <input
          className="searchInput"
          type="text"
          placeholder="Enter City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={(e) => {
            var keyPress = e.keyCode || e.which;
            if (keyPress === 13 && location.length > 0) {
              searchFunction();
            }
          }}
        />
        <button className="button" onClick={searchFunction}>Go</button>
      </div>
    </header>
  );
};

export default Searchbar;
