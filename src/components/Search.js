import { useState } from "react";

export default function Search (props) {

    function handleSearch(event) {
        event.preventDefault()
        props.filterFoodsCB(event.target.value)
    }

    return (
        <form onChange={handleSearch} className="search">
        <input
        type="text"
        />
        </form>
    )
}