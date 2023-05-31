const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();// сторінка не буде перезавантажуватись 

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = { email, password };
    console.log(formData);
    loginForm.reset();
  }
});
