import styles from "../styles/Featured.module.css";
import {useState} from "react";

const Featured =() =>{
    const [index,setIndex] = useState(0)
    const images=[ /*tabeau de images*/
       "/img/pizza1", 
       "/img/pizza2",
       "/img/pizza3",
    ];


return (
  <div className={styles.container}>
    <div className={styles.arrowContainer} styles={{right:0}}>
<img src="/img/pizzaoff.png" alt="" width ="550px" layout="fill" />
</div>
<div className={styles.wrapper}>
    {images.map((img ,i) => ( /*le i est un index pour les images de tableau*/
        <div className={styles.imgContainer} key={i}>
<img src={img}  alt="" />
</div>
))}
</div>
<div className={styles.arrowContainer} styles={{right:0}}>
<img src="/img/pizzahome.png" alt=""/>
</div>
  </div>  

);
};
export default Featured