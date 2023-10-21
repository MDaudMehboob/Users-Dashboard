document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById("user-list");

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.innerText = user.name;
                li.addEventListener('click', () => {
                    // Redirect to the user's posts and comments page
                    window.location.href = `user.html?userId=${user.id}`;
                });
                userList.appendChild(li);
            });
        });
});
