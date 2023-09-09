import React from "react";
import "../index.css"


export default function Header() {
  return (
    <header className="flex h-16 justify-between pl-10 pr-14 pt-5 ">
      <p className="text-white text-xl">Recipes</p>

      <div className="text-white flex space-x-10">
        <p>Home</p>
        <p>Explore</p>
        <p>Help</p>
      </div>

    </header>
  )
}
