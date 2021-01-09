import React from 'react';
import './HomeComponent.css';
import Item from './ItemComponent';

function Home() {
    return(
        <div className="home">
            <div className="home_container">
                <img className="home_background" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM2NjhmNDMt/YmM2NjhmNDMt-YzA3YTVhNzkt-w1500._CB412266598_.jpg" alt="home background" />
                <div className="home_row">
                    <Item id="a" title="Android Tablet" price={108.99} rating={4} image="https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_UY218_.jpg" />
                    <Item id="b" title="Apple MacBook Air" price={999.99} rating={4.5} image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg" />
                </div>
                <div className="home_row">
                    <Item id="c" title="Oculus Quest 2 VR Headset" price={779.00} rating={5} image="https://m.media-amazon.com/images/I/61HNS-AarlL._AC_UY218_.jpg" />
                    <Item id="d" title="Facebook Portal" price={149.00} rating={5} image="https://m.media-amazon.com/images/I/610ZW5rIv-L._AC_UY218_.jpg" />
                    <Item id="e" title="Apple Watch Series 3" price={169.00} rating={5} image="https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UY218_.jpg" />
                </div>
                <div className="home_row">
                    <Item id="f" title="Nest Learning Thermostat" price={247.00} rating={4.5} image="https://m.media-amazon.com/images/I/41iTMJvp32L._AC_UL320_.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Home;