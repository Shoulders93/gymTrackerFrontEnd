import React from "react";

function DisplayFood(props) {
    console.log("Foods Tracker incoming props: ", props)
    if (props.allFoods === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        let foods = props.allFoods.map((food) => {
            return <tr key={food.id}>
                <td>{food.date}</td>
                <td>{food.breakfast}</td>
                <td>{food.lunch}</td>
                <td>{food.dinner}</td>
            </tr>
        })
        return (
            <div className="details">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                        </tr>
                    </thead>
                    <tbody className="prodbody">
                        {foods}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayFood;