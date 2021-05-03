import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        boyFriend : '',
    });
    const nameInput = useRef();
    const {name, boyFriend} = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
    
        setInputs({
            ...inputs,
            [name] : value,
        });
    };
    const onReset = () => {
        setInputs({
            name:'',
            boyFriend:'',
        });
        nameInput.current.focus();
    };
    return(
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            />
            <input 
                name="boyFriend" 
                placeholder="남친이름" 
                onChange={onChange} 
                value={boyFriend}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({boyFriend})
            </div>
        </div>
    )
}

export default InputSample;