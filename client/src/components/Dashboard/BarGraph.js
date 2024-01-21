import React from "react";
// import Transanctions from "../../assests/data/transactions";
import Plot from 'react-plotly.js'
function BarGraph({ duration, type, Transanctions }) {
    let data = { data: [] }
    // console.log(props.type);
    if (duration === "Annualy") {
        const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const monthDataExpense = [];
        const monthDataIncome = [];
        monthArr.forEach((element, index) => {
            let incomeThisMonth = 0;
            let expenseThisMonth = 0;
            Transanctions.forEach(item => {
                if (parseInt(item.date.substring(6, 8)) === index + 1) {
                    if (item.isCredited) {
                        incomeThisMonth += parseInt(item.amount);
                    } else {
                        expenseThisMonth += parseInt(item.amount);
                    }
                }
            })
            monthDataExpense.push(expenseThisMonth);
            monthDataIncome.push(incomeThisMonth);
        });
        data.data = [{
            x: monthArr,
            y: monthDataIncome,
            name: "Income",
            type: type

        },
        {
            x: monthArr,
            y: monthDataExpense,
            name: "Expense",
            type: type
        }
        ]
    } else if (duration === "Weekly") {
        var weekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var date = new Date();
        var today = date.getDay();
        var todayDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
        todayDate = new Date(todayDate);
        let incomeArr = [0, 0, 0, 0, 0, 0, 0];
        let expenseArr = [0, 0, 0, 0, 0, 0, 0];
        Transanctions.forEach(trans => {
            var transdate = new Date(trans.date);
            var dayDiff = todayDate.getTime() - transdate.getTime();
            dayDiff = dayDiff / (1000 * 3600 * 24);
            if (dayDiff < 7) {
                if (trans.isCredited) {
                    incomeArr[transdate.getDay()] += parseInt(trans.amount);

                } else {
                    expenseArr[transdate.getDay()] += parseInt(trans.amount);

                }
            }
        })
        for (let i = 0; i < 6 - today; i++) {
            weekArr.unshift(weekArr.pop());
            incomeArr.unshift(incomeArr.pop());
            expenseArr.unshift(expenseArr.pop());
        }
        // console.log(incomeArr, expenseArr);
        data.data = [{
            x: weekArr,
            y: incomeArr,
            name: "Income",
            type: type

        },
        {
            x: weekArr,
            y: expenseArr,
            name: "Expense",
            type: type
        }
        ]
    }
    else if (duration === "Monthly") {
        date = new Date()
        today = date.getDate();
        const monthArr = [];
        var incomeArr = [];
        var expenseArr = [];
        todayDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
        todayDate = new Date(todayDate);
        for (var i = 1; i <= today; i++) {
            monthArr.push(i);
            incomeArr.push(0);
            expenseArr.push(0);
        }
        Transanctions.forEach(item => {
            var transdate = new Date(item.date);
            var dayDiff = todayDate.getTime() - transdate.getTime();
            dayDiff = dayDiff / (1000 * 3600 * 24);
            dayDiff++;
            if (dayDiff <= today) {
                if (item.isCredited) {
                    incomeArr[today - dayDiff] += parseInt(item.amount);
                } else {
                    expenseArr[today - dayDiff] += parseInt(item.amount);
                }
            }
        })
        data.data = [{
            x: monthArr,
            y: incomeArr,
            name: "Income",
            type: type

        },
        {
            x: monthArr,
            y: expenseArr,
            name: "Expense",
            type: type
        }
        ]

    }
    return (<>
        <Plot
            data={data.data}
            layout={{ width: 980, height: 400 }}
        />

    </>)
}
export default BarGraph