import React from 'react';

function Hello({name, color,isSpecial}){
    return (
        <div style={{
            color:color
        }}>
            {isSpecial?<b>*</b>:null}
            Hello my name is {name}  
        </div>
    ); 
}

Hello.defaultProps={
    name:'NONAME'
};

export default Hello;