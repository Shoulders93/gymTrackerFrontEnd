import React from "react";

function DisplayMisc(props) {
    console.log("Misc Tracker incoming props: ", props)
    if (props.allMisc === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        let items = props.allMisc.map((item) => {
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
            </div>
        )
    }
}

export default DisplayMisc;