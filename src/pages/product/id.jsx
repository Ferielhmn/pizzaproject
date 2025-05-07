import { useState } from "react";
import styles from "../../styles/Product.module.css"; // chemin relatif
import { useParams, useNavigate } from "react-router-dom";

const pizzaData = [
  { id: 0, image: "/img/menup1.png", title: "Margherita", price: [450.0, 800.0, 1200.0], desc: "Homemade tomato sauce, melted mozzarella, and fresh basil on a thin, crispy crust." },
  { id: 1, image: "/img/menup2.png", title: "Beef & Mushroom Pizza", price: [500.0, 850.0, 1200.0], desc: "Tomato, mozzarella, beef slices, mushrooms." },
  { id: 2, image: "/img/menup3.png", title: "4 Fromages", price: [550.0, 900.0, 1300.0], desc: "Mozzarella, parmesan, gorgonzola, goat cheese." },
  { id: 3, image: "/img/menup4.png", title: "Portuguese Pizza", price: [480.0, 850.0, 1200.0], desc: "Tomato, mozzarella, ham, onions, black olives, boiled egg." },
  { id: 4, image: "/img/menup5.png", title: "MeatPizza", price: [470.0, 820.0, 1150.0], desc: "Tomato, mozzarella, ground meat, onions, peppers." },
  { id: 5, image: "/img/menup6.png", title: "BBQ Chicken", price: [600.0, 950.0, 1300.0], desc: "BBQ sauce, chicken, onions, cheese." },
  { id: 6, image: "/img/menup7.png", title: "Végétarienne", price: [400.0, 750.0, 1100.0], desc: "Tomato, mozzarella, peppers, mushrooms, olives." },
  { id: 7, image: "/img/menup8.png", title: "Seafood Pizza", price: [520.0, 880.0, 1250.0], desc: "Goat cheese, honey, mozzarella, walnuts." },
  { id: 8, image: "/img/menup9.png", title: "Italian Pizza", price: [450.0, 800.0, 1200.0], desc: "Tomato, mozzarella, olives, oregano, basil." },
];

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const pizza = pizzaData[parseInt(id)];
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const navigate = useNavigate();

  if (!pizza) return <h1>Pizza not found</h1>;

  const handleExtraChange = (e) => {
    const { name } = e.target;
    
      setExtras((prev) => prev.filter((extra) => extra !== name));
  };

  const handleAddToCart = () => {
    const item = {
      ...pizza,
      selectedSize: size,
      selectedPrice: pizza.price[size],
      quantity: quantity,
      extras: extras,
    };
    addToCart(item);
    setTimeout(() =>{
    navigate("/cart");
  },100);
};

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={pizza.image} alt={pizza.title} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>DZD {pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <img src="/img/small.jpg" alt="" height="35" width="35" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <img src="/img/small.jpg" alt="" height="45" width="45" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <img src="/img/small.jpg" alt="" height="55" width="55" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" id="double" name="Double Ingredients" className={styles.checkbox} onChange={handleExtraChange} />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="cheese" name="Extra Cheese" className={styles.checkbox} onChange={handleExtraChange} />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="herissa" name="Herissa Sauce" className={styles.checkbox} onChange={handleExtraChange} />
            <label htmlFor="herissa">Herissa Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
