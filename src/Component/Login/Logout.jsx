import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearUser } from '../../actions/user';
import { withRouter } from 'react-router';
const Logout = ({history}) => {




    const dispatch = useDispatch();
    useEffect(() =>{
        localStorage.removeItem("token");
        dispatch(clearUser());
        history.push("/");

    },[]);
    return null;
    
}
 
export default withRouter(Logout) ;