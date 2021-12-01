import { useState } from "react";
import "./App.css";
import FoodList from "./foods.json";
import FoodBox from "./components/FoodBox";
//import { Card, Row, Col, Divider, Input, Button } from "antd";
//import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import ShowForm from './components/ShowForm'


function App() {
  const [foods, setFoods] = useState(FoodList)
  const [filteredFoods, setfilteredFoods] = useState(FoodList)

  function createFood(body) {
    body._id = Math.random()
    setFoods([body, ...foods])
    setfilteredFoods([body, ...foods])
  }

  function filterFoodsCB(letter) {
    if(letter==="") setfilteredFoods(foods.filter(food => food))
    else {
      setfilteredFoods(foods.filter(food => food.name.toLowerCase().includes(letter.toLowerCase())))
    }
  }

  function deleteButton(index) {
    filteredFoods.forEach(food=> {
      if (food.name === index) {
        setfilteredFoods(filteredFoods.filter(food=> food.name !== index))
        setFoods(foods.filter(food=> food.name !== index))
      }
    })
  }

  return (
  <div className="App">
    
    <ShowForm createFood={createFood} filterFoodsCB={filterFoodsCB}/>
    <Search filterFoodsCB={filterFoodsCB} />
    <div className="flex">
    {
    filteredFoods.length === 0 ? (<h1>No foods</h1>) : filteredFoods.map((food,index)=>{return (<FoodBox index={food.name} food={food} deleteButton={deleteButton} />)})
    }
    </div>
  </div>
  )
}
export default App;
