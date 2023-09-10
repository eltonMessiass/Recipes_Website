import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App bg-main pb-10">
        <Header/>
        <SearchBar/>
        <FilterBar/>
    </div>
  );
}

export default App;
