function getUsers() {
            let request = new XMLHttpRequest();
            request.open("GET", "https://jsonplaceholder.typicode.com/users");
            request.responseType = "json";
            request.send();
            request.onload = function () {
                document.getElementById("users").innerHTML = "";
                if (request.status >= 200 && request.status < 300) {
                    let users = request.response;
                    for (user of users) {
                        let content = `
                           <div class="user-box" onclick="userSelect(${user.id},this)">
                            <h2 class="userName">${user.username}</h2>
                            <h4 class="userEmail">Email : ${user.email}</h4>
                            </div>`;
                        document.getElementById("users").innerHTML += content;
                    }
                }
                else {
                    alert("error");
                }

            }
        }
function getPosts(userId) {
            let request = new XMLHttpRequest();
            request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            request.responseType = "json";
            request.send();
            request.onload = function () {
                document.getElementById("posts").innerHTML = "";
                if (request.status >= 200 && request.status < 300) {
                    let posts = request.response;
                    for (post of posts) {
                        let content = `
                     <div class="post">
                          <h3 class="title">${post.title}</h3>
                       <p class="body">${post.body}</p>
                     </div>`;
                        document.getElementById("posts").innerHTML += content;
                    }
                }
                else {
                    alert("error");
                }

    }
}
function userSelect(id, element) {
            getPosts(id);
            let eleSelected = document.getElementsByClassName("active");
            for (ele of eleSelected) {
                ele.classList.remove("active");
            }
            element.classList.add("active");
        }

getUsers();
getPosts(1);
    