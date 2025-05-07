import styles from "../../styles/Order.module.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


const Ido = () => {

    const { id } = useParams(); 
    const status =0;
    const [orderData, setOrderData] = useState(null);

 // Incrémenter les ventes (sold)
 useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const productIndex = storedProducts.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      storedProducts[productIndex].sold += 1;
      localStorage.setItem("products", JSON.stringify(storedProducts));
    }
    const order = JSON.parse(localStorage.getItem("currentOrder"));
    if (order && order.id === parseInt(id)) {
      setOrderData(order);
    }
  }, [id]);


    const statusClass = (index) =>{
        if(index - status < 1) return styles.done;
        if(index - status ===  1) return styles.inProgres;
        if(index - status > 1) return styles.fail;
    }; 

    return (
        <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table  className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        
                            <td> 
                            <span className={styles.Ido}>{id}</span>
                            </td>
                            <td> 
                            <span className={styles.name}>
                            {orderData?.customer}
                            </span>
                             </td>
                             <td> 
                             <span className={styles.address}>Rue Didouche Mourad,16000</span> 
                             </td>
                             
                             <td>
                             <span className={styles.total}></span> 
                             </td>
                            </tr>
                            {orderData?.items?.map((item, index) => (
                            <tr  key={index}>
                        <td>
                         <div className={styles.imgContainer}>
                           <img src="/img/pizza.png" layout="fill"  alt=""/>
                           </div>
                            </td>
                            <td> 
                            <span className={styles.name}>{item.title}</span>
                            </td>
                            <td> 
                            <span className={styles.extras}>
                            Double ingredient, Garlic Sauce
                            </span>
                             </td>
                             <td> 
                             <span className={styles.price}>{item.price[item.selectedSize]} DZD</span> 
                             </td>
                             <td>
                             <span className={styles.quantity}>{item.quantity}</span> 
                             </td>
                             <td>
                             <span className={styles.total}> {item.price[item.selectedSize] * item.quantity} DZD</span> 
                             </td>
                            </tr>
                            ))}
                            </table>
                            </div>
            <div className={styles.row}>


                <div className={statusClass(0)}>
                    <img src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                    
                        <img className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <img src="/img/bake.png" width={30} height={30} alt=""/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                    
                        <img className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <img src="/img/bike.png" width={30} height={30} alt=""/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                    
                        <img className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <img src="/img/delivered.png" width={30} height={30} alt=""/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                    
                        <img className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
         <div className={styles.wrapper}>
                                <h2 className={styles.title}> CART TOTAL</h2>
                                <div className={styles.totalText}>
                                    <b className={styles.totalTextTitle}>Subtotal:</b>{orderData?.total}DZD
                                </div>
                                
                                <div className={styles.totalText}>
                                    <b className={styles.totalTextTitle}>Discount:</b>00.00 DZD
                                </div>

                                <div className={styles.totalText}>
                                    <b className={styles.totalTextTitle}>Total:</b>{orderData?.total} DZD
                                </div>
                                <button  className={styles.button}>PAID</button>
                            </div>
        </div>
        </div>
    )
}

export default Ido;