console.log("Bonjour");
let btns = document.querySelectorAll(".order-btn");
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.currentTarget.classList.contains("plus")){
            let counterData = event.currentTarget.parentElement.querySelector(".counter").innerHTML;
            let counter = parseFloat(counterData);
            counter = counter += 1;
            event.currentTarget.parentElement.querySelector(".counter").innerHTML = counter;
        }
        else {
            let counterData = event.currentTarget.parentElement.querySelector(".counter").innerHTML;
            let counter = parseFloat(counterData);
            counter = counter -= 1;
            event.currentTarget.parentElement.querySelector(".counter").innerHTML = counter;

        }
      })
  })
console.log(btns);
