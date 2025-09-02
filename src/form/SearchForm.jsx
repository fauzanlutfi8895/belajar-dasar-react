const SearchForm = () => {
  return (
    <form>
      <input type="text" />
      <button onClick={e => (e.preventDefault(), alert("You search"))}>Search</button>
    </form>
  );
};

export default SearchForm;
