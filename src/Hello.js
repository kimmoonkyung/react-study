import React, { Component } from 'react';

//function Hello(props) {
// function Hello({ color, name, isSpecial }) {
//     return (
//             <div 
//                 style={{color}}>
//                 {isSpecial && <b>*</b>}
//                 안녕 나는 짐승내! {name} 
//             </div>
//             );
// }

// Hello.defaultProps = {
//     name : '짐승균'
// }

class Hello extends Component {
    static defaultProps = {
        name : '짐승네요'
    };
    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

export default Hello;