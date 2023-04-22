const login = () => {
  const form = document.getElementById("loginForm");

  const username = form.elements[0].value;
  if (username === "") {
    alert("Please enter a username!")
    return false;
  }

  const password = form.elements[1].value;
  if (password === "") {
    alert("Please enter a password!")
    return false;
  }

  localStorage.setItem("username", username);
  return true;
};

const checkUsername = () => {
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("username").innerHTML = `Welcome back, ${username}!`;
    document.getElementById("username").hidden = false;
    document.getElementById("loginButton").hidden = true;
    document.getElementById("signupButton").hidden = true;
    document.getElementById("logoutButton").hidden = false;
  } else {
    document.getElementById("username").hidden = true;
    document.getElementById("loginButton").hidden = false;
    document.getElementById("signupButton").hidden = false;
    document.getElementById("logoutButton").hidden = true;
  }
};

const logout = () => {
  localStorage.setItem("username", "");
}