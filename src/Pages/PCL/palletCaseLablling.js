import classes from '../../assets/styles/icc.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import scan from '../../assets/imgs/scan.png'
import OrderCard from '../../Components/OrderCard/orderCard';
import { useNavigate } from 'react-router-dom'
import DateSlider from '../../Components/DateSlider/dateSlider';

const PalletCaseLablling = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <section className={classes.icc}>
                <div className={classes.topheader}>

                    <div className={classes.prevIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt='Previous Page' /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Waiting List</span> <br/>
                        <span>Jobs to be done</span> <br/>
                    </div>

                    {/* <div className={classes.scanIcon}>
                        <img src={scan} alt='Scan' />
                    </div> */}

                </div>

                <div className={classes.orderDetails}>
                    {/* <div className={classes.dateSlider}>
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
                    </div> */}
                    <h4 style={{marginBottom:"30px"}}>Lists of pending pallet cases </h4>

                    <div className={classes.orderCards}>
                        <OrderCard pcl={true} scan={true} date="1-5-2022" />
                        <OrderCard pcl={true} scan={true} date="1-5-2022" />
                        <OrderCard pcl={true} scan={true} date="1-5-2022" />
                        <OrderCard pcl={true} scan={true} date="1-5-2022" />
                        <OrderCard pcl={true} scan={true} date="1-5-2022" />
                    </div>
                </div>

            </section>
        </>
    );
}

export default PalletCaseLablling;