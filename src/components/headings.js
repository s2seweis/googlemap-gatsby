import React from "react"

const Headings = ({ title, description }) => {
  // console.log(title);
  return (
    <header  className="container mt-8">
      <h1 className="text-6xl font-bold text-neutral-700"
      style={{ textAlign:"center", fontSize:"2rem", fontFamily:"Lobster Two" }}>{title}</h1>
      {description && (
        <p className="mt-4 text-2xl text-neutral-500">{description}</p>
      )}
    </header>
  )
}

export default Headings
