import Navbar from '../Navbar';
import './form.css'
const Signup = () => {
    return (
        <>
            <Navbar />

            <div className='login_main_div'>
                <form>
                    <h2 className='form_heading'>SIGNUP</h2>
                    <label>Email:</label>
                    <br />
                    <br />
                    <input type="email" className='input_widt' />
                    <br />
                    <br />
                    <label>Password:</label>
                    <br /><br />
                    <input type="password" className='input_widt' />
                    <br />
                    <button className='form_button'>SIGNUP</button>
                </form>

            </div>
        </>
    );
};
export default Signup;