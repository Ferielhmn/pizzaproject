import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({cartCount}) => {
  return (
    <div className={styles.container}>
      {/* Left: Call button */}
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img src="/img/telephonee.png" alt="Call" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 368 340</div>
        </div>
      </div>

      {/* Center: Navigation list */}
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listitem}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Homepage</Link>
          </li>
          <li className={styles.listitem}>
            <Link to="/pizza/1" style={{ textDecoration: "none", color: "inherit" }}>Product</Link>
          </li>
           


           
          <img src="/img/Picture1.png" alt="Logo" width="150" height="130" />
         
          <li className={styles.listitem}>
            <a href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Right: Cart */}
      <div className={styles.items}>
        <div className={styles.cart}>
          <img src="/img/logoo.png" alt="Cart" width="30" height="20" />
          <div className={styles.counter}>{cartCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
