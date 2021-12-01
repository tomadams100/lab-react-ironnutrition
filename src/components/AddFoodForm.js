import { useState } from "react";
import { Input } from "antd";

export default function AddFoodForm(props) {
  const [formState, setFormState] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    props.createFood(formState);
    setFormState({});
  }

  function handleInput(event) {
    let { name, value, type, checked } = event.target;
    if (type === "checkbox") value = checked;
    setFormState(Object.assign({}, formState, { [name]: value }));
  }

  return (
    <div className="add-food">
    <h4>Add Food</h4>
      <form onSubmit={handleSubmit} className="form">
        <label>Name:</label>
        <Input
          value={formState.name || ""}
          type="text"
          name="name"
          onChange={handleInput}
        />
        <label>Image:</label>
        <Input
          value={formState.image || ""}
          type="text"
          name="image"
          onChange={handleInput}
        />
        <label>Calories:</label>
        <Input
          value={formState.calories || ""}
          type="number"
          name="calories"
          onChange={handleInput}
        />
        <label>Servings:</label>
        <Input
          value={formState.servings || ""}
          type="number"
          name="servings"
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
