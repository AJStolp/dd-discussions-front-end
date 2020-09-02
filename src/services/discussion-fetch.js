// import React from "react";
import config from "../config";

const handleApiDiscussionFetch = {
   handleDiscussionFetch () {
   
      const request = {
         method: "GET",
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      };
   
      const url = `${config.API_ENDPOINT}/api/posts`;
      
      fetch(url, request)
         .then(res => {
            res.json()
         })
         .then(responseJSON => {
            console.log(responseJSON, "I AM DATA DISCUSSIONS")
         })
         .catch(error => {
            console.log(error, "I AM DISCUSSION FETCH ERROR")
         })
   }
}
export default handleApiDiscussionFetch;