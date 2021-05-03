import { useState, useCallback } from 'react';

// function reducer(state, action) {
//     switch(action.type) {
//         case 'CHANGE' : 
//             return {
                
//             }
//         case 'RESET' :
//             return {

//             }
//         default :
//             throw new Error("에러");
//     }
// }



function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]:value }));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
};

export default useInputs;