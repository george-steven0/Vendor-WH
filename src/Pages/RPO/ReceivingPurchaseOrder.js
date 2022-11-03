import classes from '../../assets/styles/receivingPurchase.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import scan from '../../assets/imgs/scan.svg'
import plus from '../../assets/imgs/plus.svg'
import OrderCard from '../../Components/OrderCard/orderCard';
import { useNavigate } from 'react-router-dom'
import DateSlider from '../../Components/DateSlider/dateSlider';

const ReceivingPurchase = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <section className={classes.rpo}>
                <div className={classes.topheader}>

                    <div className={classes.prevIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt='Previous Page' /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Receiving Dock Summary List </span>
                    </div>

                    {/* <div className={classes.scanIcon}>
                        <img src={scan} alt='Scan' />
                    </div> */}

                </div>

                <div className={classes.orderDetails}>

                    <div className={classes.actionBtn}>
                        <div>
                            <button><img src={plus} alt="Scan" />Add</button>
                        </div>

                        <div>
                            
                            <button><img src={scan} alt="Scan" /> scan</button>
                        </div>

                        <div>
                            <button>Track Mismatches</button>
                        </div>
                    </div>

                    <div className={classes.dateSlider}>
                        <DateSlider>
                            <div className={classes.today + " " + classes.date }>
                                Today
                            </div>

                            <div className={classes.date}>
                                <span>4</span> &nbsp;&nbsp;
                                <span>2/may</span>
                            </div>

                            <div className={classes.date}>
                                <span>2</span> &nbsp;&nbsp;
                                <span>2/may</span>
                            </div>

                            <div className={classes.date}>
                                <span>1</span> &nbsp;&nbsp;
                                <span>2/may</span>
                            </div>

                            <div className={classes.date}>
                                <span>3</span> &nbsp;&nbsp;
                                <span>2/may</span>
                            </div>

                            <div className={classes.date}>
                                <span>5</span> &nbsp;&nbsp;
                                <span>2/may</span>
                            </div>
                        </DateSlider>
                    </div>

                    <div className={classes.orderCards}>
                        <p>Lists of purchase order received</p>
                        <OrderCard  date={"1-5-2022"} scanned={true} rpo={true} />
                        <OrderCard  date={"1-5-2022"} scanned={true} rpo={true} />
                        <OrderCard  date={"1-5-2022"} scanned={true} rpo={true} />
                        <OrderCard  date={"1-5-2022"} scanned={true} rpo={true} />
                        <OrderCard  date={"1-5-2022"} scanned={true} rpo={true} />
                        <OrderCard  date={"1-5-2022"} scanned={true} rpo={true} />
                        <OrderCard  date={"1-5-2022"} scanned={true} rpo={true} />

                        <div className={classes.submitBtn}>
                            <button>Print</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default ReceivingPurchase;