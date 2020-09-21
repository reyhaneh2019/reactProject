import React from 'react';
import MainLayout from '../Component/Layouts/MainLayout';
import Course from '../Component/Course/Course';
import Login from '../Component/Login/Login';
import {Switch,Route, Redirect } from 'react-router-dom';
import Register from '../Component/Register/Register';
import Arshiv from '../Component/Course/Arshiv';
import { useSelector, useDispatch } from 'react-redux';
import singleCourse from '../Component/Course/SingleCourse';
import { useEffect } from 'react';
import { addUser, clearUser } from '../actions/user';
import { decodeToken } from '../utils/decodeToken';
import Logout from '../Component/Login/Logout';
import UserProfile from '../Component/Profile/UserProfile';
import { isEmpty } from 'lodash';
import UserContext from '../Component/context/UserContext';
import NotFound from '../Component/Common/NotFound';
import PrivateLayout from '../Component/Layouts/PrivateLayout';
import Dashboard from '../Component/admin/Dashboard';
import CourseTable from '../Component/admin/CourseTable';
import AdminContext from '../Component/context/AdminContext';
import { paginate } from '../utils/paginate';


 const Toplearn = () => {
 const courses = useSelector(state => state.courses);
 const user = useSelector(state => state.user);
 const indexCourses = paginate(courses,1,8);
const dispatch = useDispatch();

useEffect(() =>{
    const token = localStorage.getItem("token");
if (token){
  
  const  decodedToken = decodeToken(token);
 
const dateNow = Date.now()/1000;
console.log("token"+decodedToken.payload.exp);
if( decodedToken.payload.exp <dateNow ){
  localStorage.removeItem("token");
  dispatch(clearUser());
}
 
else 
dispatch(addUser(decodedToken.payload.user))
}
}
,[]);
return(
<Switch>
<Route path={["/dashboard"]}>
<PrivateLayout>
<Route
     path="/dashboard/courses"
                        render={() =>
                           <AdminContext courses={courses}><CourseTable /></AdminContext>
                               
                           
                        }
                    />
  <Route path="/dashboard"  
  render={()=> <Dashboard courses={courses}/> }  />
</PrivateLayout>
</Route>
  <Route path={["/"]}>
    <MainLayout>
           <Switch>
           <Route path="/arshiv" component={Arshiv} />
           <Route path="/register" render={
             ()=> isEmpty(user) ? (<UserContext><Register/></UserContext>): 
             ( <Redirect to="/" /> )
           } />
         <Route path="/login" render={
             ()=> isEmpty(user) ? (<UserContext><Login/></UserContext>): 
             ( <Redirect to="/" /> )
           } />
         <Route path="/userprofile" component={UserProfile } />
         <Route 
         path="/logout"
render={()=> isEmpty(user) ? <Redirect to ="/"/> : <Logout/>} />
          <Route path="/" exact render={() => <Course courses={indexCourses}/>} />
          <Route path="/course/:id" component={singleCourse} />
          <Route path="*" component={NotFound} />
           </Switch>
           
       </MainLayout>
       </Route>
       </Switch>
)

    

 }
export default Toplearn;