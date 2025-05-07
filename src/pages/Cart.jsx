import styles from "../styles/Cart.module.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const Cart = ({ cart }) => {
    const navigate = useNavigate();
    useEffect(() => {
    if (!cart || cart.length === 0) {
        navigate("/");
      }
    }, [cart,navigate]);

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price[item.selectedSize] * item.quantity, 0);
  };

  const handleCheckout= () => {
    const order = {
      id: 124599,
      items: cart,
      total: getTotal(),
      customer: "Customer Name",
      address: "Rue Didouche Mourad,16000",
    };

    localStorage.setItem("currentOrder", JSON.stringify(order));
    navigate(`/orders/${order.id}`);
    
  };

  const totalAmount = getTotal();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className={styles.tr}>
                 <td>
                  <div className={styles.imgContainer}>
                    <img src={item.image } alt={item.title} />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{item.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>—</span> 
                </td>
                <td>
                  <span className={styles.price}>{item.price[item.selectedSize]} DZD</span>
                </td>
                <td>
                  <span className={styles.quantity}>{item.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    {item.price[item.selectedSize] * item.quantity} DZD
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> {getTotal()} DZD
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> 0.00 DZD
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> {getTotal()} DZD
          </div>
          <button className={styles.button}onClick={handleCheckout}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
