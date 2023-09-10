import React from "react";
import "../index.css"


export default function Header() {
  return (
    <header className=" w-4/5  flex h-16 justify-between items-center pl-10 pr-14 pt-1 ">
      <p className="text-primary text-5xl not-italic font-semibold">Recipes</p>

      <div className="text-white flex space-x-10 pt-3">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Help</a>
      </div>

    </header>
  )
}
