const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <form>
      <label htmlFor="location">
        <input id="location" value={location} placeholder="Location" />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchParams;
