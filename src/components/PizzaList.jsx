import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import { Link } from "react-router-dom";

const pizzaData = [
  { id: 0, image: "/img/menup1.png", title: "Margherita", price: "300 DZD", desc: "Tomato sauce, mozzarella & basil." },
  { id: 1, image: "/img/menup2.png", title: "Beef & Mushroom Pizza", price: "400 DZD", desc: "Tomato, mozzarella, beef slices, mushrooms." },
  { id: 2, image: "/img/menup3.png", title: "4 Fromages", price: "450 DZD", desc: "Mozzarella, parmesan, gorgonzola, goat cheese." },
  { id: 3, image: "/img/menup4.png", title: "Portuguese Pizza", price: "420 DZD", desc: "Tomato, mozzarella, ham, onions, black olives, boiled egg." },
  { id: 4, image: "/img/menup5.png", title: "MeatPizza", price: "370 DZD", desc: "Tomato, mozzarella, ground meat, onions, peppers." },
  { id: 5, image: "/img/menup6.png", title: "BBQ Chicken", price: "500 DZD", desc: "BBQ sauce, chicken, onions, cheese." },
  { id: 6, image: "/img/menup7.png", title: "Végétarienne", price: "350 DZD", desc: "Tomato, mozzarella, peppers, mushrooms, olives." },
  { id: 7, image: "/img/menup8.png", title: "Seafood Pizza", price: "480 DZD", desc: "Goat cheese, honey, mozzarella, walnuts." },
  { id: 8, image: "/img/menup9.png", title: "Italian Pizza", price: "450 DZD", desc: "Tomato, mozzarella, olives, oregano, basil." },
];

const PizzaList = () => {
  return (
    <div className={styles.containerr}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Welcome to PizzaMio! We serve delicious, freshly made pizzas with the finest ingredients.
      </p>
      <div className={styles.wrapper}>
        {pizzaData.map((pizza) => (
          <Link
            to={`/pizza/${pizza.id}`}
            key={pizza.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <PizzaCard
              id={pizza.id}
              image={pizza.image}
              title={pizza.title}
              price={pizza.price}
              desc={pizza.desc}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
