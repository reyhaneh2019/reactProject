import React, { useContext } from 'react';
import { context } from '../context/context';

const Register = () => {
   
  const registerContext= useContext(context);
  const {
      fullname,
      setFullname,
      password,
      setPassword,
      email,
      setEmail,
      policy,
      setPolicy,
      handleRegister,
      validator
  }= registerContext;
    return (<main className="client-page">
        <div className="container-content">

            <header><h2> عضویت در سایت </h2></header>
           
            <div className="form-layer">

                <form onSubmit={e =>handleRegister(e)}>

                    <div className="input-group">
                        <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                        <input 
                        name="fullname"
                        type="text"
                         className="form-control"
                          placeholder="نام و نام خانوادگی"
                           aria-describedby="username" 
                           value={fullname}
                           onChange={event =>{setFullname(event.target.value);
                           validator.current.showMessageFor("fullname")
                           }}/>
                           {validator.current.message("fullname",fullname,"required|min:5")}
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                        <input type="text"
                         className="form-control"
                          placeholder="ایمیل" 
                          name="email"
                          aria-describedby="email-address"
                          value={email}
                           onChange={event =>{setEmail(event.target.value);
                           validator.current.showMessageFor("email")}
                           } />
                           {validator.current.message("email",email,"required|email")}
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                        <input type="text"
                         className="form-control"
                         name="password"
                          placeholder="رمز عبور " 
                          aria-describedby="password"
                          value={password}
                           onChange={event =>{setPassword(event.target.value);
                            validator.current.showMessageFor("password")
                           }} />
                             {validator.current.message("password",password,"required|min:5")}
                    </div>

                    <div className="accept-rules">
                        <label><input type="checkbox"
                         name="policy"
                           value={policy}
                           onChange={
                               e =>{setPolicy(e.currentTarget.checked);
                                validator.current.hideMessageFor("policy")} 
                           }
                           
                           />  قوانین و مقررات سایت را میپذیرم </label>
                           {validator.current.message("policy",policy,"required")}
                    </div>

                    <div className="link">
                        <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                        <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                    </div>

                    <button className="btn btn-success"> عضویت در سایت </button>

                </form>
            </div>

        </div>
    </main>);
}

export default Register;