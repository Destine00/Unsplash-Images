import { useAppCtx } from "./Context";

const SearchForm = () => {
  const { setSearch } = useAppCtx();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (!searchValue) return;
    setSearch(searchValue)
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="cat"
          name="search"
          className="search-input form-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
