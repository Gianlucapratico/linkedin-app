export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_USERS_PROFILES = "GET_USERS_PROFILES";
export const GET_POSTS_HOME = "GET_POSTS_HOME";



// 
export const getMyProfileAction = () => {
    return async dispatch => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me"
    const HEADERS = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjJiNGZjYTEyOTAwMTQ0MGMxMjgiLCJpYXQiOjE2ODE4MzA1ODAsImV4cCI6MTY4MzA0MDE4MH0.EKYvZyonyyZC0G9tFGBdG9x5BCVv-x5GpoR3THNG6AY"
        }

    }
        try{
            const response = await fetch(baseEndpoint, HEADERS)
            if(response.ok) {
            const obj = await response.json();
            
            dispatch({ type: GET_MY_PROFILE, payload: obj })
            } else {
                alert("Error fetching results");
            }

        } catch (error) {
            console.log(error);
        }


    };

};

export const getUsersProfilesAction = () => {
    return async dispatch => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/"
    const HEADERS = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjJiNGZjYTEyOTAwMTQ0MGMxMjgiLCJpYXQiOjE2ODE4MzA1ODAsImV4cCI6MTY4MzA0MDE4MH0.EKYvZyonyyZC0G9tFGBdG9x5BCVv-x5GpoR3THNG6AY"
        }

    }
        try{
            const response = await fetch(baseEndpoint, HEADERS)
            if(response.ok) {
            let arr = await response.json();         
            arr = arr.slice(0,10)
            dispatch({ type: GET_USERS_PROFILES, payload: arr })
            } else {
                alert("Error fetching results");
            }

        } catch (error) {
            console.log(error);
        }


    };
};

export const getPostsHomeAction = () => {
    return async dispatch => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/posts/"
    const HEADERS = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjJiNGZjYTEyOTAwMTQ0MGMxMjgiLCJpYXQiOjE2ODE4MzA1ODAsImV4cCI6MTY4MzA0MDE4MH0.EKYvZyonyyZC0G9tFGBdG9x5BCVv-x5GpoR3THNG6AY"
        }

    }
        try{
            const response = await fetch(baseEndpoint, HEADERS)
            if(response.ok) {
            let arr = await response.json();         
            arr = arr.slice(0,15)
            dispatch({ type: GET_POSTS_HOME, payload: arr })
            } else {
                alert("Error fetching results");
            }

        } catch (error) {
            console.log(error);
        }


    };
};
