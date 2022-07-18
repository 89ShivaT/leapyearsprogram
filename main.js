// let Myname = "Shiva Thakur ";
// let proFile = "Software Developer ";
// let Age = 24;

// console.log(Myname + proFile + Age);
const btn = document.querySelector(".click");
const input = document.querySelector("input");
const demo = document.querySelector("p");

const coder = () => {
  if (isNaN(input.value)) {
    alert("Enter Your Number");
    window.location.reload();
  } else {
    alert("Data Isert Succes");
    if (input.value % 4 === 0) {
      if (input.value % 100 === 0) {
        if (input.value % 400 === 0) {
          demo.innerHTML = `This is  ${input.value} a Leap year`;
        } else {
          demo.innerHTML = `This is ${input.value} Not Leap year`;
        }
      } else {
        demo.innerHTML = `This is  ${input.value} a Leap year`;
      }
    } else {
      demo.innerHTML = `This is ${input.value} Not Leap year`;
    }
  }
};

btn.addEventListener("click", coder, true);
