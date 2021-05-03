import React, {useContext} from 'react';
import { UserDispatch } from './App.js';

const User = React.memo(function User({ user }) {
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);
    // <div>
    //      <b>{user.username}</b> <span>({user.email})</span>
    //      <button onClick={() => onRemove(user.id)}>삭제</button>
    // </div>

    return(
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={ () => dispatch({
                                    type : 'TOGGLE_USER',
                                    id
                                }) 
                }
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
            {/* <button onClick={onRemove(id)}>삭제</button -> 이렇게 사용하면 렌더링시점에 삭제된다. */}
        </div>
    );
});

function UserList({ users }) {

    return (
        <div>
            {
                users.map( (u) => (
                                        <User 
                                            user={u} 
                                            key={u.id} 
                                            // onRemove={onRemove}
                                            // onToggle={onToggle}
                                        />
                                    ) 
                        )
            }
        </div>
    )
}
export default React.memo(
    UserList, 
    (prevProps, nextProps) => nextProps.users === prevProps.users
);