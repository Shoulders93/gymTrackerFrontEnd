import React from "react";

function DisplayExercises(props) {
    console.log("Exercise Tracker incoming props: ", props)
    if (props.allExercises === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        console.log(props.exercises);
        let exercises = props.allExercises.map((exercise) => {
            return <tr key={exercise.id}>
                <td>{exercise.date}</td>
                <td>{exercise.exercise}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.reps}</td>
                <td>{exercise.weight}</td>
            </tr>
        })
        return (
            <div className="details">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody className="prodbody">
                        {exercises}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayExercises;





//     return (
//         <table className= 'center'>
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Exercise</th>
//                     <th>Sets</th>
//                     <th>Reps</th>
//                     <th>Weight</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {console.log(props)}
//                     {props.allExercises.map((exercise)=> {
//                         return(
//                             <tr key={exercise.id}>
//                                 <td>{exercise.date}</td>
//                                 <td>{exercise.exercise}</td>
//                                 <td>{exercise.sets}</td>
//                                 <td>{exercise.reps}</td>
//                                 <td>{exercise.weight}</td>
//                             </tr>
//                         )
//                     }  )}
//             </tbody>
//         </table>
//     )
// }

// export default DisplayExercises;