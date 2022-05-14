import Navbar from '../Navbar';
import './form.css'
const Login = () => {
    return (
        <>
            <Navbar />

            <div className='login_main_div'>
                <form>
                    <h2 className='form_heading'>LOGIN</h2>
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
                    <button className='form_button'>LOGIN</button>
                </form>

            </div>
        </>
    );
};
export default Login;