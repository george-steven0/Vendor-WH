import classes from '../../assets/styles/outGoingGoods.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import ScanIcon from '../../assets/imgs/scan.png'
import ScanLogo from '../../assets/imgs/barcode-scanner-icon-21.jpg'
import { useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import { useEffect, useState } from 'react';
import DateSlider from '../../Components/DateSlider/dateSlider';
import pipes from '../../assets/imgs/pipes.png'



const OutGoingGoods = () => {
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
        // if (scan !==true) {
        //     setTimeout(() => {
        //         navigate('/Scans/ScanLoading')
        //     }, 4000);
        // }

        if(scan !== true){
            setTimeout(() => {
                setData('15236662')
            }, 2500);

            setTimeout(() => {
                navigate('/Scans/ScanLoading')
            }, 4000);


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
                            <span>Out Going Goods Info</span>
                        </div>

                        <div className={classes.scanIcon}>
                            <button><img src={ScanIcon} alt="Scan Icon" /></button>
                        </div>
                </div>

                <div className={classes.oggContent}>
                    <div className={classes.productSlider}>
                        <h4>Iron Pipes</h4>
                        <DateSlider>
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
                        </DateSlider>
                    </div>
                </div>

                <div className={classes.productDetails}>
                    <div className={classes.detailsContent}>
                        <p>Details</p>

                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>

                        <p className={classes.weight}>Weight</p>
                        <span>121 KG</span>
                    </div>

                    <div className={classes.areaDetails}>
                        <p>Avaliable <span className={classes.avSp}>4</span></p>
                        <p>Quantity <span className={classes.qtSp}>20</span></p>
                        <p>Log Number <br/> <span>12000AB</span></p>
                        <p>Area <br/> <span>Line c Row B</span></p>
                    </div>
                </div>

                <div className={classes.scanProduct}>
                    <p>Scan Product</p>
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
                                    Scan
                                </button>  
                            }

                            <p>{data}</p>
                        </div> 
                </div>
            </section>
        </>
    );
}

export default OutGoingGoods;