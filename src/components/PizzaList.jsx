import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import { Link } from "react-router-dom";
const pizzaData = [
    {
      image: "/img/menup1.png",
      title: "Margherita",
      price: "300 DA",
      desc: "Tomato sauce, mozzarella & basil.",
    },
    {
      image: "/img/menup2.png",
      title: "Beef & Mushroom Pizza",
      price: "400 DA",
      desc: "Tomato, mozzarella, beef slices, mushrooms.",
    },
    {
      image: "/img/menup3.png",
      title: "4 Fromages",
      price: "450 DA",
      desc: "Mozzarella, parmesan, gorgonzola, goat cheese.",
    },
    {
      image: "/img/menup4.png",
      title: " Portuguese Pizza",
      price: "420 DA",
      desc: "Tomato, mozzarella, ham, onions, black olives, boiled egg.",
    },
    {
      image: "/img/menup5.png",
      title: "MeatPizza",
      price: "370 DA",
      desc:"Tomato, mozzarella, ground meat, onions, peppers.",
    },
    {
      image: "/img/menup6.png",
      title: "BBQ Chicken",
      price: "500 DA",
      desc: "BBQ sauce, chicken, onions, cheese.",
    },
    {
      image: "/img/menup7.png",
      title: "Végétarienne",
      price: "350 DA",
      desc:"Tomato, mozzarella, peppers, mushrooms, olives.",
    },
    {
      image: "/img/menup8.png",
      title: "Seafood Pizza",
      price: "480 DA",
      desc: "Goat cheese, honey, mozzarella, walnuts.",
    },
    {
      image: "/img/menup9.png",
      title: "Italian Pizza",
      price: "450 DA",
      desc: "Tomato, mozzarella, olives, oregano, basil.",
    },
  ];
const PizzaList =() =>{
return(

    <div className={styles.containerr}>
<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
<p className={styles.desc}>
Welcome to [Restaurant Name]! We serve delicious, freshly made pizzas with the finest ingredients. 
From classic favorites to unique creations, there's a perfect pizza for everyone. Order online or visit us today and enjoy a slice of happiness!
</p>
    <div className ={styles.wrapper}>
{pizzaData.map((pizza, index) => (
  <Link
  to={`/pizza/${index}`}
  key={index}
  style={{ textDecoration: "none", color: "inherit" }}
>

          <PizzaCard
            key={index}
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
export default PizzaList