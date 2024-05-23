import './index.css'
import img from './park.png'
import img2 from './kalyanam.png'
import img3 from './medidesk.png'
import img4 from './git.png'
export default function Projects(){
    return(
        <div className='proj'>
           <div className="project"><h1>PROJECTS</h1></div>
           <div className='work'>
             <div>
                <section>
                    Workout Tracker
                <p>
                Built a workout tracker application using the MERN stack, enabling users to perform full CRUD operations for managing fitness activities.Designed and implemented features for exercise logging, goal-setting, and progress tracking with a responsive, user-friendly interface.
                </p>
                <button><a href='https://github.com/nihal8180/Workout-Tracker'>Github</a></button>
                </section>
             </div>
             <div>
             <section>
                    PARKING AUTOMATION
                <p>
                    This webapp provides easier parking access solutions.It helps users generate real time parking access reciet if the user holds a valid driving license.The verification of users license is done through opencv and face matching algorithms.
                </p>
                <button><a href='https://github.com/nihal8180/Parking-Registration'>Github</a></button>
                </section>
                <img src={img} style={{height:40+'%',width:50+'%'}}></img>
            </div>
           </div>
        </div>
    )
 }