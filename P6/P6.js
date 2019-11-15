function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;

  if (detect_username(username) == false) {
    alert("Please type a valid username");
  }
  else if (detect_phone(phone) == false) {
    alert("Please type a valid phone");
  }
  else if (detect_empty(username, phone, password) == true) {
    alert("Please fill in all the values");
  }
  else {
    window.location.href="profile.html";
  };

};

function detect_empty(username, phone, password) {
  var new_username = username.replace(/(^\s*)|(\s*$)/g, '');
  var new_phone = phone.replace(/(^\s*)|(\s*$)/g, '');
  var new_password = password.replace(/(^\s*)|(\s*$)/g, '');

  if (new_username == '' || new_username == undefined || new_username == null) {
    return true;
  }
  else if (new_phone == '' || new_phone == undefined || new_phone == null) {
    return true;
  }
  else if (new_password == '' || new_password == undefined || new_password == null) {
    return true;
  }
  else {
    return false;
  };

};


function detect_username(username) {
  if (username.match("@") == null || username.match(".") == null) {
    return false;
  }
  else {
    return true;
  };
};

function detect_phone(phone) {
  if (phone.length != 10) {
    return false;
  }
  else {
    return true;
  };
};
