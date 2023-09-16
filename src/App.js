import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div className="App bg-main pb-10">
        <Header/>
        <SearchBar/>
        <Hero/>
        <div className="flex gap-10">
          <FilterBar/>
          <RecipeCard/>
        </div>
    </div>
  );
}

export default App;
