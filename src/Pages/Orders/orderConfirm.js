import classes from '../../assets/styles/orderConfirm.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import ScanIcon from '../../assets/imgs/scan.png'
import ScanLogo from '../../assets/imgs/barcode-scanner-icon-21.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import { useEffect, useState } from 'react';
import DateSlider from '../../Components/DateSlider/dateSlider';
import pipes from '../../assets/imgs/pipes.png'
import confirm from '../../assets/imgs/confirm.svg'
import ConfirmSlider from '../../Components/DateSlider/ConfirmSlider'

const OrderConfirm = () => {

    const navigate = useNavigate()
    const [scan, setScan] = useState(false);

    useEffect(() => {

    }, [scan])
    
    // const [logs, setLog] = useState([]);
    const [data, setData] = useState("Not Found");
    

    // const Scan = (err, result)=>{
    //     if (result) {
    //         setLog([...logs, result.text]);
    //         setScan(false);
    //     }
    // }

    const toggleScan = ()=>{
        let start = scan
        setScan(!start)
    }

    return ( 
        <>
             <section className={classes.outGoingGoods}>
                <div className={classes.topHeader}>
                        <div className={classes.arrowIcon}>
                            <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                        </div>

                        <div className={classes.title}>
                            <span>Confirmed </span>
                            <img src={confirm} alt="Confirmed" /> 
                        </div>

                        {/* <div className={classes.scanIcon}>
                            <button><img src={ScanIcon} alt="Scan Icon" /></button>
                        </div> */}
                </div>
                
                <div style={{textAlign : 'center',fontWeight:"600",marginBottom : "30px"}}>
                    <p>Item desciption matched with scanned order</p>
                </div>

                <div className={classes.oggContent}>
                    <div className={classes.productSlider}>
                        <ConfirmSlider>
                            <div>
                                <img src={pipes} alt="Pipes" />
                            </div>
                            
                            <div>
                                <img src={pipes} alt="Pipes" />
                            </div>

                            <div>
                                <img src={pipes} alt="Pipes" />
                            </div>

                            <div>
                                <img src={pipes} alt="Pipes" />
                            </div>

                            <div>
                                <img src={pipes} alt="Pipes" />
                            </div>

                            <div>
                                <img src={pipes} alt="Pipes" />
                            </div>
                        </ConfirmSlider>
                    </div>
                </div>

                <div className={classes.productDetails}>
                    <div className={classes.detailsContent}>
                        <p>Order Details</p>

                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                    </div>

                    <div className={classes.areaDetails}>
                        <p>Quantity <span className={classes.qtSp}>20</span></p>
                    </div>
                </div>

                <div className={classes.scanProduct}>
                    <Link to='/'>
                        Pick On Order
                    </Link>
                </div>
            </section>
        </>
    );
}

export default OrderConfirm;