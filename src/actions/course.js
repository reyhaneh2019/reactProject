import { getCourse } from "../services/courseService";

export const getSingleCourse = courseId =>{
  return async dispatch =>{
    const  {data} = await getCourse(courseId);
    console.log("payyyy"+data.course);

    dispatch ({type:"GET_COURSE", payload:data.course})
  }


}