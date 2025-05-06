import styles from "../styles/PizzaCard.module.css";
const PizzaCard = ({image,title,price,desc}) =>{
return(
    <div className={styles.containerr}>
        <img src={image} alt={title}  width={"300"} height={"300"}/>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{price}</span>
        <p className={styles.desc}>{desc}</p>
        
    </div>
)

}
export default PizzaCard