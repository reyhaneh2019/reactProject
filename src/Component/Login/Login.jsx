import React from 'react';
import { useContext } from 'react';
import { context } from '../context/context';


const Login = () => {
   const loginContext= useContext(context);
   const { 
email,
setEmail,
password,
setPassword,
validator,
handleLogin
   } =loginContext;
   return (<main className="client-page">
        <div className="container-content">

            <header><h2> ورود به سایت </h2></header>

            <div className="form-layer">

                <form onSubmit={e =>handleLogin(e)}>

                    <div className="input-group">
                        <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                        <input type="text"
                         className="form-control"
                          placeholder="ایمیل"
                          name="email"
                          value={email} 
                          onChange={event => {setEmail(event.target.value);
                            validator.current.showMessageFor("email")
                        }
                        }
                           aria-describedby="email-address" />
                           {validator.current.message("email",email,"required|email")}
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                        <input type="text" 
                         className="form-control" 
                         placeholder="رمز عبور " 
                         name="password"
                         aria-describedby="password"
                         value={password} 
                         onChange={event => {setPassword(event.target.value);
                            validator.current.showMessageFor("password")
                         }}/>
                         {validator.current.message("password",password,"required|min:5")}
                    </div>

                    <div className="remember-me">
                        <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                    </div>

                    <div className="link">
                        <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                        <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                    </div>

                    <button className="btn btn-success"> ورود به سایت </button>

                </form>
            </div>

        </div>
    </main>);
}

export default Login;