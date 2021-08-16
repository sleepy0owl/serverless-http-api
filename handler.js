"use strict";

function generatenumber(){
  const number = Math.random();
  const result = number >= 0.9 ? 1 : 0
  return result;
}


module.exports.statusproducer = async (event) => {
  const status_codes = [200, 500];
  let status_code_index = generatenumber();
  const current_status_code = status_codes[status_code_index];
  console.log('current status code :', current_status_code);
  let body = null;
  if (current_status_code === 200) {
    body = {
      message: "service is okay"
    }
  } else {
    body = {
      message: "service is not okay"
    }
  }
  return {
    statusCode: current_status_code,
    body: JSON.stringify(body),
  };
};
