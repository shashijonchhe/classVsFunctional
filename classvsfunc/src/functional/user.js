import React from 'react';



const User=(props)=>{
    let list=props.list?props.list:"OUT OF RANK";

    if(props.children){
    return(
        <div>
            {list}<br />
            {props.children}
            <hr></hr>
        </div>
    )
    }
    else{
        return(
            <div> NOT VALID</div>
        )
    }    
    
}

export default User;