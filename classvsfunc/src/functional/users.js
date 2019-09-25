
import React from 'react';
import User from './user';



class Users extends React.Component{

    render(){
        return(
            <div>
                <User list='1'>I AM FIRST</User>
                <User list='2'>I AM SECOND</User>
                <User list='3'>I AM THIRD</User>
            </div>
        )
    }
}

export default Users;