import React from "react";
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    return(
        <div>
            <Line
                data={{
                    // labels: [allMisc.data],
                    labels: ['10/8/2021', '10/9/2021', '10/13/2021', '10/14/2021'],
                    datasets: [{
                        label: 'Days in a week',
                        data: [7, 7, 6, 8],
                        backgroundColor: 'green',

                    }]
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y:{beginAtZero: true}
                        }
                    }}
                    />
        </div>
    )
}

export default LineChart;