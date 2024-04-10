import vendorbitcoin from '../assets/vendor-bitcoin.svg';
import vendorevil from '../assets/vendor-evil.svg';
import vendorninja from '../assets/vendor-ninja.svg';
import vendorblockchain from '../assets/vendor-blockchain.svg';
import './Vendors.scss';

function Vendors() {
    return (
    <div className='vendors'>
    <h2>VENDORS</h2>
    <ul>
        <li><img className='vendorbitcoin' src={vendorbitcoin} alt="" /><span>BITCOIN</span></li>
        <li><img  className='vendorbitcoin' src={vendorninja} alt="" /><span>NINJA BANK</span></li>
        <li><img  className='vendorbitcoin' src={vendorblockchain} alt="" /><span>BLOCK CHAIN INC</span></li>
        <li><img  className='vendorbitcoin' src={vendorevil} alt="" /><span>EVIL CORP</span></li>
    </ul>
    </div>
    
    )
}

export default Vendors; 