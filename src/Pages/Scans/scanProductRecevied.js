import classes from '../../assets/styles/rposcan.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import ScanLogo from '../../assets/imgs/barcode-scanner-icon-21.jpg'
import report from '../../assets/imgs/reportIcon.svg'
import { Link, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';

import { useEffect, useState } from 'react';


const ScanProductReceived = () => {

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
                navigate('/RPO/ProductReceivedConfirm')
            }, 3500);


        } else if(scan === true){
            setData('Empty')
        }

    }
    return ( 
        <>
            <section className={classes.qrscan}>
                <div className={classes.topHeader}>
                    <div className={classes.arrowIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Scan Product</span>
                    </div>

                    <div className={classes.reportIcon}>
                        <Link to="/ReceivingPurchaseOrder"><img src={report} alt="Report" /></Link>
                    </div>
                </div>

                <div style={{
                        width : "90%",
                        marginTop : "-30px",
                        marginBottom : "30px",
                        marginLeft : "auto",
                        marginRight : "auto",
                        textAlign : "center",
                        fontSize : "12px"
                    }}>
                        <span>Scan Existing Purchase Order within the warehouse against product recieved</span>
                    </div>

                <div className={classes.qrContent}>
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
                                onScan={(e)=>{console.log(e);}}
                                /> : null}


                        {scan ? 
                            <button onClick={toggleScan}>
                                Cancel
                            </button>
                            :
                            <button onClick={toggleScan}>
                                Scan
                            </button>  
                        }    

                        {/* <Link to="/OGGoods">Scan</Link> */}

                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default ScanProductReceived;