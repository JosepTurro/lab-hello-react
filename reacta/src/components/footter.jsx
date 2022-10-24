import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

function Footter (){
    return(
        <footer className='fotterac'>
            <div className='icona'>
                <img src={icon1} alt="icona 1" />
                <h2>Declarative</h2>
                <p>aaaaaaaaaaaaa bbbb xxx cccc</p>
            </div>
            <div className='icona'>
                <img src={icon2} alt="icona 2" />
                <h2>Components</h2>
                <p>aaaaaaaaaaaaa bbbb xxx cccc</p>
            </div>
            <div className='icona'>
                <img src={icon3} alt="icona 3" />
                <h2>Single-Way</h2>
                <p>aaaaaaaaaaaaa bbbb xxx cccc</p>
            </div>
            <div className='icona'>
                <img src={icon4} alt="icona 4" />
                <h2>JSX</h2>
                <p>aaaaaaaaaaaaa bbbb xxx cccc</p>
            </div>

        </footer>
    );
};

export default Footter;