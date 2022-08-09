import { useState } from 'react';



const SimpleQuestion = (datas) => 


{  
    
    const [button,setbuttonpls] = useState(true)
    
    return(
        <div >
 <div className='card-item-Contaier'>
<div className='Row'>
<p className='list-item'> {datas.question} </p>
<button className='buttonplus' onClick={ () => setbuttonpls(!button)}>
  {button ? "+" : "-" }
</button>
</div>

</div>
{button ?  '': <div className='info'>
<p>{datas.info}</p>
</div> }

        </div>
    )



}


export default SimpleQuestion;