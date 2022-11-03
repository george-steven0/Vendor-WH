import classes from '../../assets/styles/scLoading.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import ScanLogo from '../../assets/imgs/barcode-scanner-icon-21.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import { useEffect, useState } from 'react';
import barcode from '../../assets/imgs/barcode.svg'

const ScanLoding = () => {

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
         <section className={classes.scanLoading}>
                <div className={classes.topHeader}>
                    <div className={classes.arrowIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Scanning QR code</span>
                    </div>

                </div>

                <div className={classes.barCodeIcon}>
                    <img src={barcode} alt="barcode icon" />
                </div>

                <div className={classes.scanTitle}><span>Scanning</span></div>
                
                <div className={classes.loadingBar}>
                    <div className={classes.loadingFill}></div>
                </div>

                <div className={classes.qrContent}>
                    <img src={ScanLogo} alt="Scan Logo" />

                    <div className={classes.scanBtn}>
                        <Link to={"/Orders/OrderConfirmation"}>Done</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ScanLoding;