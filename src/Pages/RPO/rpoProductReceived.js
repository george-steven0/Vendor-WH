import classes from '../../assets/styles/rpoProductReceived.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import ScanIcon from '../../assets/imgs/scan.png'
import ScanLogo from '../../assets/imgs/scanLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import { useEffect, useState } from 'react';
import DateSlider from '../../Components/DateSlider/dateSlider';
import pipes from '../../assets/imgs/pipes.png'
import confirm from '../../assets/imgs/confirm.svg'
import ConfirmSlider from '../../Components/DateSlider/ConfirmSlider'

const ProductReceived = () => {

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
                navigate('/RPO/ProductReceived')
            }, 3500);


        } else if(scan === true){
            setData('Empty')
        }


    }

    return ( 
        <>
            <section className={classes.rpoProduct}>
                <div className={classes.topheader}>

                    <div className={classes.prevIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt='Previous Page' /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Products Received </span>
                    </div>

                    <div className={classes.scanIcon}>
                        <img src={ScanLogo} alt='Scan' />
                    </div>

                </div>
                
                <div style={{textAlign : 'left',fontWeight:"600",marginBottom : "5px",marginTop : "55px" ,marginLeft : "20px"}}>
                    <p>Tom jeffery Products</p>
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
                        <p>Received <span className={classes.avSp}>20</span></p>
                        <div className={classes.logNumCont}>
                            <p>Log Number <br/> <span>12000AB</span></p>
                            <p>Area <br/> <span>Line c Row B</span></p>
                        </div>
                        <p>Purchase order Quantity <span className={classes.poq}>20</span></p>
                    </div>
                </div>

                <div className={classes.notice}>
                    <span>No mismatch between Received Product and Purchase Order</span>
                </div>

                <div className={classes.scanProduct}>
                    <Link to="/Scans/ScanProductReceived">
                        Next
                    </Link>
                </div>
            </section>
        </>
    );
}

export default ProductReceived;