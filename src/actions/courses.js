import { getCourses, newCourse } from "../services/courseService";
import { successMessage } from "../utils/message";

export const getAllCourses = () => {
    return async dispatch => {
        const {data} = await getCourses();
         await dispatch({type:"rey", payload: data.courses });
    };
};

export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        console.log(data);
        if (status === 201) successMessage("دوره با موفقیت ساخته شد");
        await dispatch({
            type: "ADD_COURSE",
            payload: [...getState().courses, data.course],
        });
    };
};

