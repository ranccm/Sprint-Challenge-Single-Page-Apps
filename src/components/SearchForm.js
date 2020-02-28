import React, { useState } from "react";

export default function SearchForm(props) {
  const [search, setSearch] = useState('')
 
  const handleChanges = e => {
    setSearch(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const searchedChar = props.characters.filter(char =>(
      char.name.toLowerCase().includes(search.toLowerCase())
    ))

    props.handleSearch(searchedChar)
  }

  return (
    <section className="search-form">
      <label>
        Search for your favorite character!
        <form onSubmit={handleSubmit}>
          <input
          onChange={handleChanges}
          value={search}
          type="text"
          placeholder="rick 🔍"
          />
        </form>
      </label>
    </section>
  );
}
