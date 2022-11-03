import './App.css';
import Main from './Pages/main';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import PickOrder from './Pages/Orders/pickorder';
import QRScan from './Pages/Scans/qrscan';
import OutGoingGoods from './Pages/Orders/outGoingGoods';
import ScanLoding from './Pages/Scans/ScLoading';
import OrderConfirm from './Pages/Orders/orderConfirm';
import ProductsBinLocation from './Pages/ICC/productsInBinLocation';
import BinLocationParticularGood from './Pages/ICC/binLocationOfParticularGoods';
import Snap from './Pages/ICC/snapShot';
import InventoryUpdate from './Pages/ICC/inventoryUpdate';
import InventoryCycleCount from './Pages/ICC/inventoryCycleCount';
import TransferDetails from './Pages/Transfer/transferDetails';
import ScanLogNumber from './Pages/Scans/scanLogNumber';
import ScanProductInfo from './Pages/Transfer/scanProductInfo';
import TransferConfirm from './Pages/Transfer/transferConfirm';
import TransferProducts from './Pages/Transfer/transferProducts';
import TransferQuantity from './Pages/Transfer/transferQuantity';
import TransferedAprroval from './Pages/Transfer/transferedApproval';
import ReceivingPurchase from './Pages/RPO/ReceivingPurchaseOrder';
import RPOScan from './Pages/Scans/rpoScan';
import ProductReceived from './Pages/RPO/rpoProductReceived';
import ScanProductReceived from './Pages/Scans/scanProductRecevied';
import ProductReceivedConfirm from './Pages/RPO/productReceivedConfirm';
import PalletCaseLablling from './Pages/PCL/palletCaseLablling';
import PCLInfo from './Pages/PCL/pclInfo';
import OrderScan from './Pages/Scans/orderScan';
import IccScan from './Pages/Scans/iccScan';
import IccScanLoading from './Pages/Scans/ICCScanLoading';
import InventorySummry from './Pages/ICC/inventorySummry';
import Transfer from './Pages/Transfer/transfer';
import CPDetails from './Pages/CP/CPDetails';
import CPConfirm from './Pages/CP/CPConfirm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/Orders/pickorder'  element={<PickOrder />} />
          <Route path='/Orders/OGGoods'  element={<OutGoingGoods />} />
          <Route path='/Orders/OrderConfirmation'  element={<OrderConfirm />} />

          <Route path='/Scans/QRScan'  element={<QRScan />} />
          <Route path='/Scans/OrderScan'  element={<OrderScan />} />
          <Route path='/Scans/OrderScan'  element={<OrderScan />} />
          <Route path='/Scans/ICCScan'  element={<IccScan />} />
          <Route path='/Scans/ScanLoading'  element={<ScanLoding />} />
          <Route path='/Scans/ICCScanLoading'  element={<IccScanLoading />} />
          <Route path='/Scans/ScanLogNumber'  element={<ScanLogNumber />} />
          <Route path='/Scans/RPOScan'  element={<RPOScan />} />


          <Route path='/ICC/InventoryCycleCount'  element={<InventoryCycleCount />} />
          <Route path='/ICC/BinLocationProducts'  element={<ProductsBinLocation />} />
          <Route path='/ICC/BinLocationOFParticularGood'  element={<BinLocationParticularGood />} />
          <Route path='/ICC/InventorySummry'  element={<InventorySummry />} />
          <Route path='/ICC/SnapShot'  element={<Snap />} />
          <Route path='/ICC/InventoryUpdate'  element={<InventoryUpdate />} />
          <Route path='/Scans/ScanProductReceived'  element={<ScanProductReceived />} />


          <Route path='/Transfer'  element={<Transfer />} />
          <Route path='/Transfer/TransferDetails'  element={<TransferDetails />} />
          <Route path='/Transfer/ScanProductInfo'  element={<ScanProductInfo />} />
          <Route path='/Transfer/TransferConfirm'  element={<TransferConfirm />} />
          <Route path='/Transfer/TransferProducts'  element={<TransferProducts />} />
          <Route path='/Transfer/TransferQuantity'  element={<TransferQuantity />} />
          <Route path='/Transfer/TransferedAprroval'  element={<TransferedAprroval />} />

          
          <Route path='/RPO/ReceivingPurchaseOrder'  element={<ReceivingPurchase />} />
          <Route path='/RPO/ProductReceived'  element={<ProductReceived />} />
          <Route path='/RPO/ProductReceivedConfirm'  element={<ProductReceivedConfirm />} />
          
          <Route path='/PCL/PalletCaseLablling'  element={<PalletCaseLablling />} />
          <Route path='/PCL/PCLInfo'  element={<PCLInfo />} />

          
          <Route path='/CP/CPDetails'  element={<CPDetails />} />
          <Route path='/CP/CPConfirm'  element={<CPConfirm />} />

        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
