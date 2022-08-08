
import { useState } from 'react';
import './App.css';

function App() {
  
  const [button,setbuttonpls] = useState(false)
  
  return (

    
    <div className="App">
      <div className='Container'>
        <div className='Card'>
          <div className='left'>
            <h3 className='Tittle'>Question And Answer (Faq)</h3>
          </div>
          <div className='right'>

            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus'>+</button>
            </div>
            </div>

            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus'>+</button>
            </div>
            </div>
            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus'>+</button>
            </div>
            </div>
            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus'>+</button>
            </div>
            </div>
            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus'>+</button>
            </div>
            </div>
            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus'>+</button>
            </div>
            </div>
            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus'>+</button>
            </div>
            </div>
            <div className='card-item-Contaier'>
            <div className='Row'>
            <p className='list-item'> Do I have to allow the use of cookies ? </p>
            <button className='buttonplus' onClick={ () => setbuttonpls(!button)}>
              {button ? "+" : "-" }
            </button>
            </div>
            </div>
            




          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
