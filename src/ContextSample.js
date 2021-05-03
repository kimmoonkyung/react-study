import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');


function Child() {
    const text = useContext(MyContext);
    return <div>안녕안녕 {text} </div>
}

function Parent( { text } ) {
    return <Child />
}

function GrandParent( { text } ) {
    return <Parent />
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return (
        <MyContext.Provider value ={value ? "9ood" : "BAD"}>
            <GrandParent/>
            <button onClick={() => setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
    )
}

export default ContextSample;