        function getUser() {
            return new Promise((resolve, reject) => {
                fetch(`https://jsonplaceholder.typicode.com/users`)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        } else {
                            reject("error in users");
                        }
                    })
                    .then((users) => {
                        document.getElementById("users").innerHTML = "";
                        for (user of users) {
                            let content = `
                           <div class="user-box" onclick="userSelect(${user.id},this)">
                            <h2 class="userName">${user.username}</h2>
                            <h4 class="userEmail">Email : ${user.email}</h4>
                           </div>`;
                            document.getElementById("users").innerHTML += content;
                        }
                        resolve();
                    });

            })
        }

        function getPosts(userId) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then((json) => {
                    document.getElementById("posts").innerHTML = "";
                    for (post of json) {
                        let content = `
                         <div class="post">
                          <h3 class="title">${post.title}</h3>
                         <p class="body">${post.body}</p>
                        </div>`;
                        document.getElementById("posts").innerHTML += content;
                    }

                });

        }

        function userSelect(id, element) {
            getPosts(id);
            let eleSelected = document.getElementsByClassName("active");
            for (ele of eleSelected) {
                ele.classList.remove("active");
            }
            element.classList.add("active");
        }

        getUser()
            .then(() => {
                getPosts(1)
            })
            .catch((error) => {
                console.log(error);
            })