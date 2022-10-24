import logoIron from '../images/ironhack-logo-xs.png'
import menuLogo from '../images/menu-top-xs.png'

function Header(){
    return (
        <header className='App-header'>
           
            <div className='logoIr'>
                <img width="50" src={logoIron} alt="logo ironhack" />
            </div>
            <div className='logoMenu'>
                <img width="50" src={menuLogo} alt="logo menu" />
            </div>

           
            
        </header>
    );
}

export default Header;