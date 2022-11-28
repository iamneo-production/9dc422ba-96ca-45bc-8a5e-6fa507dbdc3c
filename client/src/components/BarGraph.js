import React from "react";
import BarChart from 'react-bar-chart';
import Transanctions from "./transactions";
function BarGraph() {
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const monthData = [];
    monthArr.forEach(element => {
        const d = {
            Expense: 0,
            income: 0
        }
        Transanctions.forEach(item => {
            if (item.date.substring(0, 3) === element) {
                if (item.isCredited) {
                    d.income += item.amount;
                } else {
                    d.Expense += item.amount;
                }
            }
        })
        monthData.push(d);
    });
    console.log(monthData);

    return (<>

    </>)
}
export default BarGraph