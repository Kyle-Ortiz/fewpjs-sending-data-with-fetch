// Add your code here
function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: `${userName}`,
      email: `${userEmail}`,
    }),
  })
    .then((resp) => {
         return resp.json()})
    .then((data) => {
      document.body.innerHTML = data["id"]
    })
    .catch((e) => {
      document.body.innerHTML = e.message;
    });
}
