import { useParams } from "react-router-dom";
import styles from "../styles/Product.module.css";


const Product = () => {
const pizza ={
id:1,
img:"/img/menup1.png",
name:" MARGHERITA",
price:[450.00, 800.00, 1200.00],
desc:"Homemade tomato sauce,melted mozzarella,and fresh basil on a thin,crispy crust.A simple and authentic recipe with classic Italian flavors.",
};


const Product = () => {
  const { id } = useParams(); // Get the pizza ID from the URL
  const pizza = pizzaData[id]; // Get the correct pizza based on the ID

  if (!pizza) return <h1>Pizza not found</h1>; // If pizza is not found, show an error message





    return(
        <div className={styles.container}>
              <div className={styles.left}>
              <div className={styles.imgContainer}>
                <img src={pizza.img} objectFit="contain" alt="" />
              </div>
              </div>
              <div className={styles.right}></div>
              <div className={styles.middle}></div>
              <h1 className={styles.title}>{pizza.name}</h1>
              
        </div>
        
    );
} ;
}
export default Product;