import axios from "axios";

const API_KEY =
  "VukmCAb5RIKPhfzObAONslZjSQg_nA-T-ajL43wS8jVEymBqOI-hB0i9v_RIysaKkRNotLrHzmxmy7V-LvVTEI72J1fXMkZB_DLXPqq0b6iJ1M-yf60AVidQsFWIYnYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: { Authorization: `Bearer ${API_KEY}` },
});
