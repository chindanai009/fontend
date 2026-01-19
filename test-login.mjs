// Test login API
const response = await fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'test2025',
    password: 'password123'
  })
});

const data = await response.json();
console.log('Status:', response.status);
console.log('Data:', data);
