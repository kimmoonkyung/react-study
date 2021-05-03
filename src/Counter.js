// import React, { useState } from 'react';

// function Counter() {
//     const [number, setN] = useState(10);

    // const onIncrease = () => {
    //     // setNumber(number + 1);
    //     setN(prevNumber => prevNumber + 1); // 함수형 업데이트
    // }
//     const onDecrease = () => {
//         setN(number - 1);
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }

// export default Counter;

// useState -> useReducer 로 변경
// import React, { useReducer } from 'react';

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT' :
//             return state + 1;
//         case 'DECREMENT' :
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// };

// function Counter() {

//     const [number, dispatch] = useReducer(reducer, 0);

//     const onIncrease = () => {
//         dispatch({
//             type : 'INCREMENT'
//         })
//     }
//     const onDecrease = () => {
//         dispatch({
//             type : 'DECREMENT'
//         })
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }

// 클래스형 컴포넌트
import React, {Component} from 'react';

class Counter extends Component {
    
    // constructor(props){
    //     super(props);
    //     // this.handleIncrease = this.handleIncrease.bind(this);
    //     // this.handleDecrease = this.handleDecrease.bind(this);
    //     this.state = {
    //         counter: 0
    //     };
    // }

    // 클래스 프로퍼티문법 아래의 핸들인크리즈/디크리즈도 클래스 프로퍼티 문법이다.
    state = {
        counter: 0,
        fixed : 1,
        updateMe : {
            toggleMe : false,
            dontChangeMe: 1,
        }
    }
    
    handleIncrease = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }
    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;