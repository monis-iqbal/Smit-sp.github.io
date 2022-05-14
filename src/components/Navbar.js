import '../components/forms/form.css'
import Smit_pic from '../components/forms/Smit_pic.png'

const Navbar = () => {
    return (
        <div className='navbar_div'>
            <img src={Smit_pic} alt="saylani logo" className='navbar_smit_pic'></img>
            <div className='navbar_button_div'>
                <button className='navbar_button'>HOME</button>
                <button className='navbar_button'>Sign up</button>
                <button className='navbar_button'>Log in</button>
            </div>

        </div>
    )
};

export default Navbar;