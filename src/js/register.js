let form_vadilate = document.querySelector(".form-border-input");
let inputs = form_vadilate.querySelectorAll("input");
let submit = document.querySelector(".submit");
let errors = {};

function showError(name, mess, check) {
  if (!check) {
    show(`${name}`).style.borderColor = "red";
  } else {
    show(`${name}`).style.borderColor = "green";
  }
  errors[name] = mess;
  show(`${name}_error`).innerHTML = mess;
}

function handleValidate(e) {
  const { name, value, type } = e.target;

  if (value.trim() === "") {
    showError(name, `This field is required!`, false);
  } else {
    showError(name, "", true);
  }

  if (name === "passWord") {
    let passWordConfirm = show("passWordConfirm").value;
    if (passWordConfirm !== value) {
      showError("passWordConfirm", `Password does not match!`, false);
    } else {
      showError("passWordConfirm", "", true);
    }
  }

  if (name === "passWordConfirm") {
    let passWord = show("passWord").value;
    if (passWord !== value && passWord !== "") {
      showError(name, `Password does not match!`, false);
    } else {
      showError(name, "", true);
    }
  }

  if (name === "email") {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(value)) {
      showError(name, `Email is invalid!`, false);
    } else {
      showError(name, "", true);
    }
  }
}

function show(id) {
  return document.querySelector(`#${id}`);
}

inputs.forEach((item) => item.addEventListener("keyup", handleValidate));
