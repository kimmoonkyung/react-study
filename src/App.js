import React, { useReducer, useRef, useMemo, useCallback, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs';
import produce from 'immer';

const initialState = {
  // inputs : {
  //   username : '',
  //   email : '',
  // },
  users : [
    {
        id: 1,
        username: '짐승내',
        email: 'tmdfo@pornhub.com',
        active : true
    },
    {
        id: 2,
        username: '짐승균',
        email: 'beast@pornhub.com',
        active: false
    },
    {
        id: 3,
        username: '충내',
        email: 'nsn@msn.com',
        active: false
    }
  ]
}

function reducer(state, action){
  switch (action.type) {
    // case 'CHANGE_INPUT' : 
    //   return {
    //     ...state,
    //     inputs : {
    //       ...state.inputs,
    //       [action.name] : action.value
    //     }
    //   };
    case 'CREATE_USER' :
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   inputs: initialState.inputs,
      //   users: state.users.concat(action.user)
      // };
    case 'TOGGLE_USER' :
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
      // return {
      //   ...state,
      //   users: state.users.map(user => 
      //       user.id === action.id
      //         ? {...user, active: !user.active }
      //         : user
      //     )
      // };
    case 'REMOVE_USER' : 
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // };
    default:
        throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  // const { username, email } = state.inputs;
  const [form, onChange, reset] = useInputs({
    username : '',
    email : ''
  });
  const { username, email } = form;

  
  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type : 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, [])



  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  // const onToggle = useCallback((id) => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   });
  // }, [])

  // const onRemove = useCallback((id) => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   });
  // }, [])

  function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
    <UserDispatch.Provider value={dispatch}>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={ users } />
      <div>활성 사용자 수 : {count} </div>
    </UserDispatch.Provider>
    </>
  );
}

export default App;
