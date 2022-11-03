import classes from '../../assets/styles/outGoingGoods.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import ScanIcon from '../../assets/imgs/scan.png'
import ScanLogo from '../../assets/imgs/barcode-scanner-icon-21.jpg'
import { useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import { useEffect, useState } from 'react';
import DateSlider from '../../Components/DateSlider/dateSlider';
import pipes from '../../assets/imgs/pipes.png'



const ScanProductInfo = () => {
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

        if(scan !== true){
            setTimeout(() => {
                setData('15236662')
            }, 2500);

            setTimeout(() => {
                navigate('/Transfer/TransferConfirm')
            }, 3500);


        } else if(scan === true){
            setData('Empty')
        }
    }

    return ( 
        <>
            <section className={classes.outGoingGoods}>
                <div className={classes.topHeader}>
                        <div className={classes.arrowIcon}>
                            <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                        </div>

                        <div className={classes.title}>
                            <span>AZS Nails</span>
                        </div>

                        {/* <div className={classes.scanIcon}>
                            <button><img src={ScanIcon} alt="Scan Icon" /></button>
                        </div> */}
                </div>


                <div className={classes.productDetails}>
                    <div className={classes.detailsContent}>
                        <p>Details</p>

                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                    </div>

                    <div className={classes.areaDetails}>
                        <p>Log Number <br/> <span>12000AB</span></p>
                        <p>Area <br/> <span>Line c Row B</span></p>
                    </div>
                </div>

                <div className={classes.scanProduct}>
                    <p>Scan the QR Code on the product to confirm</p>
                    {scan ? null : <div>
                            <img src={ScanLogo} alt="Scan Logo" />
                        </div>}

                        <div className={classes.scanBtn}>

                            {scan ? <QrReader
                                    onResult={(result, error) => {
                                        if (result) {
                                        setData(result?.text);
                                        }
                            
                                        if (error) {
                                        }
                                    }}
                                    style={{ width: '100%' }}
                                /> : null}


                            {scan ? 
                                <button onClick={toggleScan}>
                                    Cancel
                                </button>
                                :
                                <button onClick={toggleScan}>
                                    Scan Product
                                </button>  
                            }
                        </div> 
                </div>
            </section>
        </>
    );
}

export default ScanProductInfo;