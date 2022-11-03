// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import classes from '../assets/styles/home.module.css'
import orders from '../assets/imgs/image 31.png'
import icc from '../assets/imgs/image 32.png'
import transfer from '../assets/imgs/image 33.png'
import pcl from '../assets/imgs/image 34.png'
import rpo from '../assets/imgs/image 35.png'
import cp from '../assets/imgs/image 36.png'
import {Link} from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <section className={classes.operations}>

                    <Link to="/Orders/pickorder" className={classes.orders + " " + classes.optCard}>

                        <div className={classes.optIcon}>
                            <span>
                                {/* <FontAwesomeIcon icon={faFileLines} /> */}
                                <img src={orders} alt="Orders" />
                            </span>
                        </div>

                        <div className={classes.optCount}>
                            <span>300</span>
                        </div>

                        <div className={classes.optTitle}>
                            <p>orders</p>
                        </div>
                    </Link>

                    <Link to="/ICC/InventoryCycleCount" className={classes.icc + " " + classes.optCard}>

                    <div className={classes.optIcon}>
                        <span>
                            <img src={icc} alt="Inventory cycle count" />
                        </span>
                    </div>

                    <div className={classes.optCount}>
                        <span>10</span>
                    </div>

                    <div className={classes.optTitle}>
                        <p>Inventory cycle count</p>
                    </div>
                    </Link>

                    <Link to="/Transfer" className={classes.transfer + " " + classes.optCard}>

                    <div className={classes.optIcon}>
                        <span>
                            <img src={transfer} alt="Transfer" />
                        </span>
                    </div>

                    <div className={classes.optCount}>
                        <span>20</span>
                    </div>

                    <div className={classes.optTitle}>
                        <p>Transfer</p>
                    </div>
                    </Link>

                    <Link to="/PCL/PalletCaseLablling" className={classes.pcl + " " + classes.optCard}>

                    <div className={classes.optIcon}>
                        <span>
                            <img src={pcl} alt="Pallet & case Lablling" />
                        </span>
                    </div>

                    <div className={classes.optCount}>
                        <span>20</span>
                    </div>

                    <div className={classes.optTitle}>
                        <p>Pallet & case Lablling</p>
                    </div>
                    </Link>

                    <Link to="/RPO/ReceivingPurchaseOrder" className={classes.rpo + " " + classes.optCard}>

                    <div className={classes.optIcon}>
                        <span>
                            <img src={rpo} alt="Receiving Purchase Order" />
                        </span>
                    </div>

                    <div className={classes.optCount}>
                        <span>20</span>
                    </div>

                    <div className={classes.optTitle}>
                        <p>Receiving Purchase Order</p>
                    </div>
                    </Link>

                    <Link to="/Scans/QRScan" className={classes.cp + " " + classes.optCard}>

                        <div className={classes.optIcon}>
                            <span>
                                <img src={cp} alt="Checking Product" />
                            </span>
                        </div>

                        <div className={classes.optCount}>
                            <span>40</span>
                        </div>

                        <div className={classes.optTitle}>
                            <p>Checking Product</p>
                        </div>
                    </Link>

            </section>
        </>
    );
}

export default Home;