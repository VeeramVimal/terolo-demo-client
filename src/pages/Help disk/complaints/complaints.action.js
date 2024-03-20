import axios from "axios";
import { get, post, patch, deleteapi } from "../../../client/api";
import { GETALLCOMPLAINTS, FILE_UPLOAD, CREATE_COMPLAINTS, DELETECOMPLAINT, DATERANGE, GET_COMPLAINTS, EDIT_COMPLAINTS } from "./complaints.action.constant";
import Swal from "sweetalert2"

const token = sessionStorage.getItem("accessToken");
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-left',
  iconColor: 'white',
  background: 'green',
  color: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true
})

export const singlecomplaints = (id) => {
  console.log("ididid===========", id);
  return async (dispatch) => {
    await axios.get(
      `http://localhost:8082/v1/complaint/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((response) => {
      // console.log("responseresponse===", response);
      if (response) {
        dispatch({
          type: GET_COMPLAINTS,
          getComplaints: response.data.complaint,
        })
      }
    })
      .catch((err) => console.log(err))

  }
};

export const getAllComplaints = () => {
  const url = `${process.env.REACT_APP_API_URL}v1/complaint`;
  return async(dispatch) => {
    await axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}`}
    })
    .then((response) => {
      console.log("getAllComplaints==============", response.data);
      dispatch({
        type: GETALLCOMPLAINTS,
        payload: response.data.complaint
      })
    })
    .catch((err) => console.log(err))
  }
  // try {
  //   const response = await axios.get(url, {
  //     headers: { Authorization: `bearer ${token}` },
  //   });
  //   const result = await response.data.complaint;
  //   dispatch({ type: GETALLCOMPLAINTS, payload: result });
    
  // }
 
  // catch (error) {
  //   console.log("complaints error", error);
  // }

};


//file upload
export const fileUploadApi = (formData) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return async (dispatch) => {
    try {
      const response = await post(
        `${process.env.REACT_APP_API_URL}`,
        `${"v1/upload/profile"}`,
        formData,
        config
      );
      // console.log("file response", response);
      const result = await response.response.data;
      dispatch({ type: FILE_UPLOAD, payload: result });
    } catch (error) {
      console.log("error msg for file upload", error);
    }
  };
};

export const createComplaints = (addData, ListData) => {
  console.log(addData, "addata====")
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/complaint"}`,
      addData
    );
    if (response) {
      if (response.status === 200 || response.statusText === "Created") {
      
        await Toast.fire({
          icon: 'success',
          title: '',
          text: 'complaints created sucessfully',
        })
      
    }
      dispatch({
        type: CREATE_COMPLAINTS,
        payload: response.data,
      })
      // console.log("complaints response", response.data);

      console.log("respons===========", response.data);

      const id = response.data.id;

      ListData.id = id;
     dispatch(getAllComplaints())
    }

    if (error) {
      console.log("error", error);
    }
    return { response, error };
    
  };
};



// export const editComplaints = (id, data) => {
//   console.log(id, "==========id edit  data",  data);
//   return async (dispatch) => {
//     const { error, response } = await patch(
//       `${process.env.REACT_APP_API_URL}`,
//       `${`v1/complaint/${id}`}`,
//       data
//     );
//     if (response) {
//       console.log("business data ", response.data);
    
//       dispatch({
//         type: EDIT_COMPLAINTS,
//         payload: response.data.complaint,
//       });
//       dispatch(getAllComplaints);
//     }
//     if (error) {
//       console.log("error", error);
//     }
//     return { response, error };
//   };
// };

export const editComplaints = (id, data) => {
  return async (dispatch) => {
    const { error, response } = await patch(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/complaint/${id}`}`,
      data
    );
    if (response) {
      dispatch(getAllComplaints);
      // await Toast.fire({
      //   icon: "success",
      //   title: "Success",
      // });
      dispatch({
        type: EDIT_COMPLAINTS,
        payload: response.data.complaint,
      });
     
      // window.location.reload();
    }
    if (error) {
      await Toast.fire({
        icon: "error",
        title: "Error",
      });
      console.log("error", error);
    }
    return { response, error };
  };
};


export const deleteComplaint = (id) => {
  console.log(" deletecomplaint ID=======", id);
  return async (dispatch) => {
    await axios
      .patch(`${process.env.REACT_APP_API_URL}v1/complaint/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response========", response);
        if (response.status === 200 || response.data === "Deleted Success") {
          Swal.mixin({
            toast: true,
            position: "bottom-left",
            iconColor: "white",
            background: "green",
            color: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
          }).fire({
            icon: "success",
            title: "Deleted successfully",
          });
        }
        dispatch({
          type: DELETECOMPLAINT,
          payload: response.data,
        });
      })
      .then(() => dispatch(getAllComplaints()))
      
      .catch((err) => console.log(err));
      window.location.reload();

  };
};

export const getDateRange = (searchText, startDate, endDate) => {
  console.log(`searchText:  ${searchText}, ===startDate:  , ${startDate}, ===endDate: ${endDate}`);
  return async (dispatch) => {
      await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}v1/complaint/searchDesignation?searchText=${searchText}&startDate=${startDate}&endDate=${endDate}`,
      }).then((response) => {
            console.log("response==getDateRange==", response)
          if (response) {
              //  Toast.fire({
              //     icon: 'success',
              //     title: 'Success'
              //   })
              dispatch({
                  type: DATERANGE,
                  getDateRange: response.data
              })
          }
      })
  }
}