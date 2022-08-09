
import { useState } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './App.css';
import SimpleQuestion from './question';
import dataQ from './Data.json'
function App() {
  
  
  const [data,setdata] = useState(dataQ)

  console.log(data.length)
  return (

    
    <div className="App">
      <div className='Container'>
        <div className='Card'>
          <div className='left'>
            <h3 className='Tittle'>Question And Answer (Faq)</h3>
          </div>
          <div className='right'>
{dataQ.map((datas) => { 

  return(

    <SimpleQuestion key={datas.id} {...datas} datas={datas} ></SimpleQuestion>
   
  )

})}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
