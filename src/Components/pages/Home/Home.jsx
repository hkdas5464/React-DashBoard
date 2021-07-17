import React from 'react';
import FeactureInfo from '../../featuredInfo/FeactureInfo';
import './Home.css';
import Chart from '../../Chart/Chart';
import {userData} from './data';
import WigitLg from '../../WigitLg/WigitLg';
import WigitSm from '../../WigitSm/WigitSm';

function Home() {
    return (
        <div className="home">
           <FeactureInfo/>
           <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
           <div className="homeWidget">
           <WigitSm/>
               <WigitLg/>
               
           </div>
        </div>
    )
}

export default Home
