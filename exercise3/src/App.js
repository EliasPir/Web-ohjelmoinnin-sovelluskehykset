import React from "react";
import ProductList from './components/ProductList';
//import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);


    this.state = {
      items:  [
        { id: 1, name: 'seagate', desc: 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)', review: 4.7, price: 59.99, oldprice: 99.99},
        { id: 2, name: 'sceptre', desc: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)', review: 4.6, price: 139.97},
        { id: 3, name: 'iphonecharger', desc: 'iPhone Charger, TAKAGI Lightning Cable 3PACK 6FT Nylon Braided USB Charging Cable High Speed Data Sync Transfer Cord Compatible with iPhone 13/12/11 Pro Max/XS MAX/XR/XS/X/8/7/Plus/6S/6/SE/5S/iPad', review: 4.4, price: 8.49, oldprice: 9.99},
        { id: 4, name: 'logitech', desc: 'Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black', review: 4.7, price: 69.00},
        { id: 5, name: 'roku', desc: 'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI® Cable', review: 4.7, price: 29.99, oldprice: 39.99},
        { id: 6, name: 'originalhp', desc: 'Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510, 4520 Series; HP OfficeJet 3830, 4650, 5200 Series | Eligible for Instant Ink | F6U64AN', review: 4.8, price: 41.89},
        { id: 7, name: 'samsung', desc: 'SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-V7S2T0B/AM)', review: 4.9, price: 199.99, oldprice: 499.99},
        { id: 8, name: 'hpmonitor', desc: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', review: 4.7, price: 224.99},
        { id: 9, name: 'hpmonitor', desc: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', review: 4.7, price: 224.99},
        { id: 10, name: 'hpmonitor', desc: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', review: 4.7, price: 224.99},
        { id: 11, name: 'hpmonitor', desc: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', review: 4.7, price: 224.99},
        { id: 12, name: 'hpmonitor', desc: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', review: 4.7, price: 224.99},
        { id: 13, name: 'hpmonitor', desc: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', review: 4.7, price: 224.99}
      ],searchText:''
    };

  }

  doSearch(event)
  {
    this.setState({searchText:event.target.value});
  }

  render()
  {
    var tempText = this.state.searchText;
    var filteredItems = this.state.items.filter(function(item){
      if(tempText)
      {
        return item.desc.toLowerCase().includes(tempText.toLowerCase());
        //return item.desc.indexOf(tempText)!= -1;
      }
      else
      {
        return true;
      }
    });

    return <div>
      <input type="text" onChange={this.doSearch.bind(this)} value={this.state.searchText}></input>
      <ProductList items={ filteredItems } />

    </div>
  }
}

export default App;