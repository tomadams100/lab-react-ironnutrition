import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function FoodBox(props) {
  function deleteButton() {
    props.deleteButton(props.index)
  }
    return(
          <Col>
            <Card
              title={props.food.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={props.food.image} height={60} />
              <p>Calories: {props.food.calories}</p>
              <p>Servings: {props.food.servings}</p>
              <p>
                <b>Total Calories: {props.food.calories * props.food.servings}</b> kcal
              </p>
              <button type="primary" onClick={deleteButton}> Delete </button>
            </Card>
          </Col>          
    )
}