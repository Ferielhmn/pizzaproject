
import styles from"../styles/Navbar.module.css";

const Navbar = () => {

    return(
        <div className={styles.container}>
            <div className={styles.item}>
            <div className={styles.callButton}>
                <img src="/img/telephonee.png" alt="" width="32" height="32" />
            </div>
<div className={styles.texts}>
<div className={styles.text}>ORDER NOW!</div>
<div className={styles.text}>012 368 340</div>
</div>
</div>
    <div className={styles.item}>
        <ul className={styles.list}>
                <li className= {styles.listitem}>Homepage</li>
                <li className= {styles.listitem}>Prodect</li>
                <li className= {styles.listitem}>Menu</li>
                <img src="/img/"alt="" width=" 150px" height="69px"/>
                <li className= {styles.listitem}>Events</li>
                <li className= {styles.listitem}>Blogs</li>
                <li className= {styles.listitem}>Contact</li>
        </ul>
    </div>
       <div className={styles.items}> 
<div className={styles.cart}>
<img src="/img/logoo.png"alt="" width="30px" height="20px"/>
<div className={styles.counter}>2</div>

     </div>
       </div>
     
        </div>
    );
};
export default Navbar