import React from 'react';
import './WigitLg.css';

function WigitLg() {
    const Button = ({type})=>{
        return <button className={" widgetLgButton "+ type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3> 
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Custom</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                    <img src="https://avatars2.githubusercontent.com/u/63789292?v=4" alt="userimage" className="widgetLgImg" />
                      <span className="widgetLgName">Susan Carol</span> 
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgDate"><Button type="Apprroved"></Button></td>
               . </tr>

             
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                    <img src="https://avatars2.githubusercontent.com/u/63789292?v=4" alt="userimage" className="widgetLgImg" />
                      <span className="widgetLgName">Susan Carol</span> 
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgDate"><Button type="Decline"></Button></td>
               . </tr>
              
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                    <img src="https://avatars2.githubusercontent.com/u/63789292?v=4" alt="userimage" className="widgetLgImg" />
                      <span className="widgetLgName">Susan Carol</span> 
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgDate"><Button type="Pending"></Button></td>
               . </tr>

                   
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                    <img src="https://avatars2.githubusercontent.com/u/63789292?v=4" alt="userimage" className="widgetLgImg" />
                      <span className="widgetLgName">Susan Carol</span> 
                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmount">$122.00</td>
                      <td className="widgetLgDate"><Button type="Apprroved"></Button></td>
               . </tr>
            </table>

        </div>
    )
}

export default WigitLg
