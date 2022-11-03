console.log("netlify");
document.querySelector("#test-commande").addEventListener("click", (event) => {
  console.log("test");
  axios({
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          url: '/.netlify/functions/send-email',
          //data: congratulation, //payload
      })
})
