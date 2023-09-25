import axios from "axios";
import { server } from "../../server";
// import { server } from "../../server";

// get all sellers --- admin
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatchEvent({
      type: "getAllSellerRequestAdmin",
    });
    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
      withCredentials: true,
    });
    console.log(data);
    dispatch({
      type: "getAllSellerSuccessAdmin",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllSellerFailAdmin",
      error: error.response?.data?.message,
    });
  }
};
