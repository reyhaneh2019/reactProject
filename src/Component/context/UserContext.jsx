import React, {  useRef } from 'react';
import { context } from './context';
import { successMessage, errorMessage } from '../../utils/message';
import { withRouter } from 'react-router';
import { registerUser, loginUser } from '../../services/userService';
import { addUser } from '../../actions/user';
import SimpleReactValidator from 'simple-react-validator';
import { decodeToken } from '../../utils/decodeToken';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';



 const UserContext  = ({children,history}) => {
const [fullname,setFullname]= useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [policy, setPolicy] = useState();

const [, forceUpdate] = useState();

const dispatch= useDispatch();
const validator = useRef(new SimpleReactValidator(
    {
        messages:{
            required:"پر کردن این فیلد الزامی می باشد.",
            min:"کمتر از 5 کاراکتر نبایدباشد.",
            email:"ایمیل نوشته شده صحیح نمیباشد."
        }, element:message => <div style={{color:"red"}}>{message}</div>
    }
));


const resetStates = () => {
    setFullname("");
    setPassword("");
    setPolicy();

}

const handleRegister=async event =>{
    event.preventDefault();
    const user ={
        fullname,
        email,
        password
    };


   try{
 
if(validator.current.allValid()){
    dispatch(showLoading());
     const {status} =  await registerUser(user)  ;
  
     if(status === 201) {
      successMessage("کاربر با موفقیت ثبت شد.");
      dispatch(hideLoading());
      history.push("/login");
        }
                    
 }
 else{
     validator.current.showMessages();
    
   forceUpdate(1);
  
}
               } 
catch (ex){
    dispatch(hideLoading());
errorMessage("در زمان ثبت نام خطایی پیش آمده");

}

  
}



const handleLogin =async event =>{
    event.preventDefault();
    const user ={  email,password};
 
   try{
    if(validator.current.allValid()){
     // dispatch(showLoading());
        const{data,status}= await loginUser(user);
    if(status === 200) {
      successMessage("کاربر با موفقیت وارد شد")
                   }
                   console.log(data);
                   localStorage.setItem("token",data.token);
         dispatch(addUser(decodeToken(data.token).payload.user));
               //  dispatch(hideLoading());
                   history.replace("/");
                 
                   resetStates(); 
    } 
    else{
        validator.current.showMessages();
        forceUpdate(1);
    }
   }
   catch(ex){
   errorMessage("در هنگام ورود خطایی پیش آمده");
   dispatch(hideLoading());
   }
}


    return ( 
<context.Provider
value={
    {fullname,
    setFullname,
    email,
    setEmail,
    password,
    setPassword,
    policy,
    setPolicy,
    validator,
    handleLogin,
    handleRegister

}
}>
{children}
</context.Provider>
     );
}
 
export default withRouter(UserContext)  ;