import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const income = 1600;
const costs = 800;

const DashboardChart = () => {
    return (
        <Doughnut data={data}/>
    );
};

const data = {
    datasets: [{
        data: [income, costs],
        backgroundColor:[
            'white',
            'black'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Income',
        'Costs'
    ],
};




export default DashboardChart;