import Navbar from "./Navbar"
import '../components/forms/courses.css'


const Courses = () => {
    return(

        <>
        <Navbar />
        <div className="courses_div">
        <div className="column_all">Web Development<br/>
        <button className="apply_button">Apply</button></div>
        <div className="column_all">CCNA <br/><button className="apply_button">Apply</button></div>
        <div className="column_all">CCA <br/><button className="apply_button">Apply</button></div>
        <div className="column_all">CCP <br/><button className="apply_button">Apply</button></div>
        <div className="column_all">python <br/><button className="apply_button">Apply</button></div>
        <div className="column_all">Grapic Designing <br/><button className="apply_button">Apply</button></div>
        </div>
        </>
    )
}

export default Courses;