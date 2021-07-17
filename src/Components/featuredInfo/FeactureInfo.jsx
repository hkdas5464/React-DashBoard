import React from 'react';
import './FeactureInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

function FeactureInfo() {
    return (
        <div className="featured">
            <div className="featuredIten">
                <span className="featuredTitle">Revanue</span>
                <div className="freaturedmoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                        </span>

                </div>
                <span className="featuredSub">Compare to last months</span>
            </div>

            <div className="featuredIten">
                <span className="featuredTitle">Sales</span>
                <div className="freaturedmoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative" /></span>

                </div>
                <span className="featuredSub">Compare to last months</span>
            </div>

            <div className="featuredIten">
                <span className="featuredTitle">Cost</span>
                <div className="freaturedmoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">+11.4 <ArrowUpward  className="featuredIcon positive"/></span>

                </div>
                <span className="featuredSub">Compare to last months</span>
            </div>
        </div>
    )
}

export default FeactureInfo
