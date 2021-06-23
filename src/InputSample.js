import React,{useState, useRef} from 'react';

function InputSample(){
    //useState과 객체를 관리하도록
    const [inputs, setInputs]=useState({
        name:'',
        nickname:'',
    });
    
    //ref실습
    const nameInput = useRef();

    //비구조 할당으로 추출하기
    const {name,nickname}=inputs;

    //입력값 반영
    const onChange=(e)=>{
        //인풋박스에 입력된 내용과 인풋박스의 이름 추출
        const {name,value}= e.target;

        setInputs({
            ...inputs,
            [name]:value,
        });
    };

    //초기화 이벤트
    const onReset=()=>{
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
 
    };
    
    return (
        <div>
            <input 
            name="name"
            placeholder="name" 
            onChange={onChange} 
            value={name}  
            ref={nameInput}
            />

            <input 
            name="nickname" 
            placeholder="nickname" 
            onChange={onChange} 
            value={nickname}
            />

            <button onClick={onReset}>reset</button>
            <div>
                <b>value : </b> {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;