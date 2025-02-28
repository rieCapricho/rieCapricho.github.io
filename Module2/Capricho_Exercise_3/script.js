const fetchUserBtn = document.getElementById('fetchUserBtn');
const userData = document.getElementById('userData');

fetchUserBtn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            userData.innerHTML = `
                <h2>User Details</h2>
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <img src="${user.picture.medium}" alt="User Image">
            `;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            userData.innerHTML = '<p>Failed to load user data. Please try again.</p>';
        });
});