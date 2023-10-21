document.addEventListener("DOMContentLoaded", function() {
    const postList = document.getElementById("post-list");
    const commentList = document.getElementById("comment-list");

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const li = document.createElement('li');
                li.innerText = post.title;
                postList.appendChild(li);
            });
        });

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
        .then(response => response.json())
        .then(comments => {
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.innerText = comment.body;
                commentList.appendChild(li);
            });
        });
});
