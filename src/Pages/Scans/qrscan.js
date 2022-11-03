import classes from '../../assets/styles/qrscan.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import ScanLogo from '../../assets/imgs/barcode-scanner-icon-21.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';

import { useEffect, useState } from 'react';


const QRScan = () => {

    const navigate = useNavigate()
    const [scan, setScan] = useState(false);

   
    // const [logs, setLog] = useState([]);
    const [data, setData] = useState("Not Found");
    
    useEffect(() => {
        console.log(data);
    }, [scan])
    
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
                navigate('/CP/CPDetails')
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
                        <span>Scan Bin Location</span>
                    </div>
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

                        <p >{data}</p>

                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default QRScan;