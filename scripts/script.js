document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title === "" || content === "") {
        alert("タイトルと本文を入力してください！");
        return;
    }

    const postTime = new Date().toLocaleString();
    
    const postHTML = `
        <div class="post">
            <div class="post-title">${title}</div>
            <div class="post-content">${content}</div>
            <div class="post-time">${postTime}</div>
        </div>
    `;
    
    document.getElementById('posts').insertAdjacentHTML('afterbegin', postHTML);

    // Clear the form
    document.getElementById('title').value = "";
    document.getElementById('content').value = "";
});
