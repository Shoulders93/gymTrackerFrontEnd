 import React from "react";
 import AddExercise from "./AddExercise";
 import DisplayExercises from "./ExerciseTracker";

 const CreateDisplay = (props) => {
     console.log("CreateDisplay: ", props)
     return (
     <div>
         <AddExercise createNewExercise = {props.addUserExercise} />
         <DisplayExercises allExercises = {props.exercises} />
     </div>

     )
 }

 export default CreateDisplay;