/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Sara George
      Date: 08/23/2024

      Filename: project02-02.js
 */

function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  /* The following conditional operator checks whether the form fields have been filled */
  (document.getElementById("name").value !== "") && (document.getElementById("email").value !== "") && (document.getElementById("phone").value !== "")

  ? window.alert("Thank you!") :
  window.alert("Please fill in all fields");
}

  /*Event Listener that triggers popup message*/
  document.getElementById("submit").onclick = verifyForm;
