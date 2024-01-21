import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PIECHART = ({ piedata }) => {
    return (
        <PieChart className="piechart" data={piedata} animate={"True"} radius={50} startAngle={270} center={[50, 50]} label={(piedata) => piedata.dataEntry.title} labelStyle={{ fontSize: "9px", backgroundColor: "white" }}>
        </PieChart>
    )
}

export default PIECHART
