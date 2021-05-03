import React from 'react';

// App.js 에서 4개의 props를 받아온다.
function CreateUser( {username, email, onChange, onCreate} ) {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);