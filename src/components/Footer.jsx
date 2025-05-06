import styles from "../styles/Footer.module.css";
const Footer = () =>{
return (
<div className={styles.container}>
    <div className={styles.item}>
<img src="/img/motto.jpg" alt="" width={"590"} height={"527"}/>
    </div>
    <div className={styles.item}>
    <div className={styles.card}>
        <h2 className={styles.motto}>
        Gather around good food, good people, and great pizza - the way it should be.
        </h2>
    </div>
    <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <p className={styles.text}>
        Rue des Frères Benali,
        <br />Quartier El Madania,
        <br />16075 Alger, Algérie
        </p>
        <p className={styles.text}>
        7, Rue Ahmed Bey,
        <br />Quartier Kouba,
        <br />16050 Alger, Algérie
        </p>
       
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
        SUNDAY - THURSDAY
        <br /> 11:00 AM – 10:30 PM
        </p>
        <p className={styles.text}>
        FRIDAY - SATURDAY
        <br /> 11:00 AM - 1:00 AM
        </p>
        
    </div>
    <div className={styles.card}></div>
    
</div>


</div>

);


};
export default Footer