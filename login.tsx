<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Login Page</title>
  <link rel="stylesheet" type="text/css" href="css/index.css" />
</head>

<body>
  <div class="header">
    <img src="img/logo.png" alt="Header Image">
    <h1>Login</h1>
  </div>

  <div class="login-container">
    <label for="username">Username:</label>
    <input type="text" id="username" placeholder="Enter your username">

    <label for="password">Password:</label>
    <input type="password" id="password" placeholder="Enter your password">

    <button onclick="login()">Login</button>

    <div class="forgot-password">
      <a href="#" onclick="forgotPassword()">Forgot Password?</a>
    </div>
  </div>

  <script src="cordova.js"></script>
    <script src="js/index.js"></script>
</body>

</html>


function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Add your authentication logic here
  
    // For demonstration purposes, a simple alert is shown
    alert('Logged in successfully!\nUsername: ' + username);
  }
  
  function forgotPassword() {
    // Add logic for handling forgot password functionality
    alert('Forgot Password clicked!');
  }



body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .header {
    text-align: center;
    padding: 20px;
    background-color: #f2f2f2;
  }
  
  .header img {
    max-width: 100%;
    height: auto;
  }
  
  .login-container {
    max-width: 300px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .forgot-password {
    text-align: center;
    margin-top: 10px;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  

