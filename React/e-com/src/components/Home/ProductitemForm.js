import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const ProductitemForm = (props) => {
  const cartCntx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = 1;
    cartCntx.addItem({ ...props.items, quantity: quantity });
    console.log("After:", cartCntx);
  };
  return (
    <Card.Footer>
      ${props.price}
      <Button
        input={{
          id: "amount_" + props.id,
        }}
        variant="outline-secondary"
        style={{ marginLeft: "20px" }}
        onClick={addItemToCart}
      >
        + Add
      </Button>
    </Card.Footer>
  );
};

export default ProductitemForm;
