import React from "react";
// import LineChart from "../Charts/LineChart";
import {Line} from 'react-chartjs-2';

function DisplayMisc(props) {
    let dates_array =[]
    let sleep_array=[]
    let bodyweight_array=[]
    console.log("Misc Tracker incoming props: ", props)
    if (props.allMisc === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        let items = props.allMisc.map((item) => {
         
            dates_array.push(item.date)
            sleep_array.push(item.hours_slept)
            return <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.hours_slept}</td>
                <td>{item.bodyweight}</td>
                <td>{item.additional_notes}</td>
            </tr>
            
        })

    
        return (
            <div className="details">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Hours Slept</th>
                            <th>Bodyweight</th>
                            <th>Additional Notes</th>
                        </tr>
                    </thead>
                    <tbody className="prodbody">
                        {items}
                    </tbody>
                </table>
                <div>
            <Line
                data={{
                    labels: dates_array,
                    datasets: [{
                        label: 'Hours Slept',
                        data: sleep_array,
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
            </div>
        )
    }
}

export default DisplayMisc;