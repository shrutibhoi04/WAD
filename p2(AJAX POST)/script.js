document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
  
    // Save to local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    // Optional: Send to server via AJAX
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);  // Optional alert
      window.location.href = "users.html"; // 🚀 Auto redirect
    });
  });
  