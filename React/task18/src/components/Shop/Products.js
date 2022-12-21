import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY = [
  {
    id: "p1",
    price: 4,
    title: "Book12",
    description: "HEll NAw",
  },
  {
    id: "p2",
    price: 9,
    title: "fuck",
    description: " NAw",
  },
  {
    id: "p3",
    price: 12,
    title: "insas",
    description: "HElw",
  },
  {
    id: "p4",
    price: 43,
    title: "sas",
    description: "sadkaldnll NAw",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
