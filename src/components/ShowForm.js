import { useState } from "react"
import AddFoodForm from "./AddFoodForm"

export default function ShowForm(props) {
    const [showOrNot, setShowOrNot] = useState(true)
    function showHide() {
        setShowOrNot(!showOrNot)
    }
    if (showOrNot) {
        return (
            <div>
            <button onClick={showHide}>Hide Form</button>
            <AddFoodForm createFood={props.createFood} />
       </div>
       )
    } else {
        return (
        <div>
            <button onClick={showHide}>Show Form</button>
        </div>
        )
    }
}