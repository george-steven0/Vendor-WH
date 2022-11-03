import classes from '../../assets/styles/pickorder.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import scan from '../../assets/imgs/scan.png'
import OrderCard from '../../Components/OrderCard/orderCard';
import { useNavigate } from 'react-router-dom'
import DateSlider from '../../Components/DateSlider/dateSlider';

const PickOrder = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <section className={classes.pickorder}>
                <div className={classes.topheader}>

                    <div className={classes.prevIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt='Previous Page' /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Pick-Up Orders</span>
                    </div>

                    <div className={classes.scanIcon}>
                        <img src={scan} alt='Scan' />
                    </div>

                </div>

                <div className={classes.orderDetails}>
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
                        <OrderCard orderScan={true} count={20} scan={true} />
                        <OrderCard orderScan={true} count={22} scan={true} />
                        <OrderCard orderScan={true} count={24} scan={true} />
                        <OrderCard orderScan={true} count={28} scan={true} />
                        <OrderCard orderScan={true} count={23} scan={true} />
                        <OrderCard orderScan={true} count={2} scan={true} />
                        <OrderCard orderScan={true} count={50} scan={true}/>
                    </div>
                </div>

            </section>
        </>
    );
}

export default PickOrder;