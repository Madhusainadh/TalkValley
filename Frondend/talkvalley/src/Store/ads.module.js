import axios from "axios";

export const Send_data = "Send_data";

export const sendads = (text) => async (dispatch) => {

  let {data} = await axios.get(`http://localhost:8080?search=${text}`)
  
    dispatch({ type: "Send_data", payload: data });
  console.log(data);
};
