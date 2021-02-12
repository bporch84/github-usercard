/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

axios.get("https://api.github.com/users/bporch84")
     .then(res => {
       console.log(res)
       const myInfo = res.data;
       console.log("MyInfo: ", myInfo);
       const mainDiv = document.querySelector(".cards");
       const cardFunction = cardMaker(myInfo);
       mainDiv.appendChild(cardFunction);})
     .catch(err => console.log(err))

followersArray.forEach(event => {
  axios.get("https://api.github.com/users/" + event)
       .then(res => {
         const theirInfo = res.data;
         const mainDiv = document.querySelector(".cards");
         const cardFunction = cardMaker(theirInfo);
         mainDiv.appendChild(cardFunction);         
       })
})


function cardMaker(r){

  const outerDiv = document.createElement("div");
  outerDiv.classList.add("card");

  const img = document.createElement("img");
  img.src = r.avatar_url;
  outerDiv.appendChild(img);

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("card-info");
  outerDiv.appendChild(innerDiv);

  const h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = r.name;
  innerDiv.appendChild(h3);

  const p1 = document.createElement("p");
  p1.classList.add("username");
  p1.textContent = r.login;
  innerDiv.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "Location: " + r.location;
  innerDiv.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = "Profile: ";
  innerDiv.appendChild(p3);

  const link = document.createElement("a");
  link.href = r.html_url;
  link.textContent = r.html_url;
  p3.appendChild(link);

  const p4 = document.createElement("p");
  p4.textContent = "Followers: " + r.followers;
  innerDiv.appendChild(p4);

  const p5 = document.createElement("p");
  p5.textContent = "Following: " + r.following;
  innerDiv.appendChild(p5);

  const p6 = document.createElement("p");
  p6.textContent = "Bio: " + r.bio;
  innerDiv.appendChild(p6);
  
  return outerDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
    */