import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App bg-main pb-10">
        <Header/>
        <SearchBar/>
        <Hero/>
        <FilterBar/>
    </div>
  );
}

export default App;
