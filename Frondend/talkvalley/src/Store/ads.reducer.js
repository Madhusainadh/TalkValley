
const data = { allads: [] };
export function adsreducer(state = data, { type, payload }) {
  //  console.log(payload)
  switch (type) {
    case "Send_data": {
      console.log(payload);
      return { ...state, allads: payload };
    }
    default: {
      return state;
    }
  }
}
