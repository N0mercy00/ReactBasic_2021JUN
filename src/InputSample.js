import React,{useState} from 'react';

function InputSample(){
    //상태관리
    const [text,setText]=useState('');
    
    //입력값 반영
    const onChange=(e)=>{
        setText(e.target.value);
    }

    //초기화 이벤트
    const onReset=()=>{
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>reset</button>
            <div>
                <b>value : </b> {text}
            </div>
        </div>
    )
}

export default InputSample;