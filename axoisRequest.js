function getUsersWithAxios(){
  return new Promise((resolve,reject) =>{
   
    axios.get("https://jsonplaceholder.typicode.com/users")
   .then((response) =>{
    let users = response.data;
     document.getElementById("users").innerHTML = "";
        for (user of users) {
            let content = `
             <div class="user-box" onclick="userSelect(${user.id},this)">
                <h2 class="userName">${user.username}</h2>
                <h4 class="userEmail">Email : ${user.email}</h4>
            </div>`;
            document.getElementById("users").innerHTML += content;
        }
        resolve()
   }) 
   .catch(function (error) {
    // handle error
    console.log(error);
  })
    })
 
}
function getPosts(userId){
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) =>{
        let posts = response.data;
               document.getElementById("posts").innerHTML = "";
                    for (post of posts) {
                        let content = `
                         <div class="post">
                          <h3 class="title">${post.title}</h3>
                         <p class="body">${post.body}</p>
                        </div>`;
                        document.getElementById("posts").innerHTML += content;
                    }
    })
    .catch((error) =>{
        console.log(error)
    })
}
 function userSelect(id, element) {
            getPosts(id);
            let eleSelected = document.getElementsByClassName("active");
            for (ele of eleSelected) {
                ele.classList.remove("active");
            }
            element.classList.add("active");
        }
getUsersWithAxios()
.then(() =>{
    getPosts(1);
})
