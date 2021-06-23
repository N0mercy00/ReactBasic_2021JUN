import React, {useState} from 'react';

function Counter(){
    const [number,setNumber]=useState(0);
    const onIncrease=()=>{
        setNumber(number+1);
        console.log({number});
    }
    const onDecrese=()=>{
        setNumber(number-1);
        console.log({number});
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrese}>-1</button>
        </div>
    )

}

export default Counter;