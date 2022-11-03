import classes from '../../assets/styles/PCLConfirm.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import Scan from '../../assets/imgs/scan.png'
import ScanLogo from '../../assets/imgs/scanLogo.svg'
import qrLogo from '../../assets/imgs/qrCodeLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import { useEffect, useState } from 'react';
import DateSlider from '../../Components/DateSlider/dateSlider';
import pipes from '../../assets/imgs/pipes.png'
import confirm from '../../assets/imgs/confirm.svg'
import ConfirmSlider from '../../Components/DateSlider/ConfirmSlider'

const CPConfirm = () => {

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
            <section className={classes.PCLDetails}>
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

                <div className={classes.prcNotice}>
                    <span>Product matched inventory QR Code and location</span>
                </div>
                
                <div style={{textAlign : 'left',fontWeight:"600",marginBottom : "5px",marginTop : "25px" ,marginLeft : "20px"}}>
                    
                </div>

                <div className={classes.productDetails}>
                    <p>Tom jeffery Products</p>
                    <div className={classes.detailsContent}>
                        <p>Order Details</p>

                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>


                    </div>

                    <div className={classes.areaDetails}>
                        <p>Received <span className={classes.avSp}>20</span></p>
                        <p>Purchase order Quantity <span className={classes.poq}>20</span></p>
                    </div>

                    <div className={classes.PCLQr}>
                        <p>Bin Location available for product</p>
                        <div>
                            <span>Log Number</span>
                            <span>12000AB</span>
                        </div>

                        <div>
                            <span>Area</span>
                            <span>Line c Row B</span>
                        </div>
                        
                        <div>
                            <span>QR Code</span>
                            <span><img src={qrLogo} alt="QR Code" /></span>
                        </div>
                    </div>
                </div>

                <div className={classes.scanProduct}>
                    <Link to="/">
                        Done
                    </Link>
                </div>
            </section>
        </>
    );
}

export default CPConfirm;