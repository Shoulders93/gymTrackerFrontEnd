import React from "react";
import ReactPlayer from "react-player";
import './GettingStarted.css'

const GettingStarted = () => {
    return(
        <div>
            <h1>Getting Started</h1> <br/>

            <h5>So you've commited yourself to start going to the gym. Now what?</h5> <br/>

            <h6>That's where this page comes in. Here I will give you a simple action plan for what exercises you can start doing when you are first starting out.</h6> <br/>

            <h6>If you already know what exercises you want to be doing, then that is okay. This page is specifically for newcomers who aren't sure what they need 
            to be doing in the gym, specifically when it comes to weight training. That doesn't mean you can't take advantage of the other features on this page by tracking
            your exercises, meals, and other miscellaneous markers like sleep, bodyweight, and additional notes.</h6> <br/>

            <h6>The first step to this program is laying out what body parts you will be targeting, and how often. </h6> <br/>

            <h6>When starting out I recommend exercising three days a week, Typically Monday, Wednesday, Friday. This ensures you are building the habit of making it
                to the gym without getting burned out. If you feel like you want to hit the gym more often you could do two days in a row, then rest day, two days 
                again, rest day, and so on. Just as long you are not hitting the same body part two days in a row.</h6> <br/>

            <h6>For weight training I personally recommend following a plan that looks like this: </h6>
            <h6>Day 1: Chest, Shoulders, Triceps <br/> Day 2: Back, Abs, Biceps <br/> Day 3: Legs</h6> <br/>
            <h6>Day 1 exercises: <br/>
                Barbell Bench Press (Warning! Please use a Spotter if you are attempting to lift weight near your max!) <br/>
                Cable Flys <br/>
                Dumbbell Shoulder Press <br/>
                Cable Rope Face Pulls <br />
                Tricep Rope Pushdown - Cable <br />
                Tricep Extension - Machine <br />
                Do 3 sets of 10 repetitions each <br />
                Check out the video below on bench press tips and form. Below that are images showing how to do the other exercises<br />
            </h6> <br/>
            <div className="video" >
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=4T9UQ4FBVXI"
                    width='auto'
                    height='600px'
                    />
            </div> <br/>
            <table>
                <thead>
                    <tr  className='image'>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8UBvEjvFXuetovwEmRkc8QHaIb%26pid%3DApi&f=1" alt='' height="200" width="200" /></th> 
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qvYc6-0XUxAyiVA-evDKFQHaFe%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IggMPj6iGx7BLIzLvh4Q8wHaEL%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0VgJYVvrWdPJCab9oVETSwHaGF%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BDkJ7BLxjUdnyiO28-XPfQHaEj%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                    </tr>
                </thead>
            </table> <br/> <br/>
            <h6>Day 2 exercises: <br/>
                Cable Lat Pulldowns (Replace this exercise with pull-ups if you are able to do them)<br/>
                Single Arm Dumbbell Row <br/>
                Seated Row Machine <br/>
                EZ bar curls <br />
                Dumbbell Curls <br />
                Bosu ball Ab Crunch <br />
                Do 3 sets of 10 repetitions each <br />
                Below that are images showing how to do the other exercises<br />
            </h6> <br/>
            <table>
                <thead>
                    <tr>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Drp__EE-iY32T-Z6T6AWpAHaD4%26pid%3DApi&f=1" alt='' height="200" width="200" /></th> 
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QWKWArbIms6TIZUFC8tjQQHaE8%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZWkdFNlibMexcr5FqZ5uvwAAAA%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oMh8xzRnIuVIbB_XnGdcHwAAAA%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.R7vVnVa5VN-asuzboMufHgAAAA%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7E3iilZo8QpNhorcb7M6HwHaCe%26pid%3DApi&f=1" alt='' height="200" width="300" /></th>
                    </tr>
                </thead>
            </table> <br/> <br/>
            <div>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=nhoikoUEI8U"
                    />
            </div> <br/>
            <h6>Day 3 exercises: <br/>
                Squat (See video above for proper form)<br/>
                Deadlift (See video below for proper form)<br/>
                Machine Leg Extension <br/>
                Machine Leg Curl<br />
                Calf Raises <br />
                Do 3 sets of 10 repetitions each <br />
                Below that are images showing how to do the other exercises<br />
            </h6> <br/>
            <table>
                <thead>
                    <tr>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jO0IR7PITQdXJfGbNV_98gHaE8%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8o_uEyb2xo7sztqQ3BO5TgHaDQ%26pid%3DApi&f=1" alt='' height="200" width="200" /></th> 
                        <th><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vw9bTqjEdIAuVp0sPN_QOgHaD4%26pid%3DApi&f=1" alt='' height="200" width="200" /></th>
                    </tr>
                </thead>
            </table> <br/> <br/>
            <div>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=4AObAU-EcYE"
                    />
            </div> <br/>
        </div>
    )
}

export default GettingStarted;