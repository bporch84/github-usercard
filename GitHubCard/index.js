/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const URL = 'https://api.github.com/users/bporch84'
console.log(axios.get(URL))

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

const followersArray = [];

function cardMaker(data){

  const outerDiv = document.createElement("div");
  outerDiv.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", "https://3.bp.blogspot.com/_ecNZSVR4JCI/TQ9qtCTk6RI/AAAAAAAAAak/iC_ZenIEDi0/s1600/24738.jpg");
  outerDiv.appendChild(img);

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("card-info");
  outerDiv.appendChild(innerDiv);

  const h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = "This is the h3";
  innerDiv.appendChild(h3);

  const p1 = document.createElement("p");
  p1.classList.add("username");
  p1.textContent = "This is the p1 for username";
  innerDiv.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "This is the p2 for location";
  innerDiv.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = "This is the p3 for profile";
  innerDiv.appendChild(p3);

  const link = document.createElement("a");
  link.setAttribute("href", "http:www.genius.com");
  link.textContent = "This is the link";
  p3.appendChild(link);

  const p4 = document.createElement("p");
  p4.textContent = "This is the p1 followers";
  innerDiv.appendChild(p4);

  const p5 = document.createElement("p");
  p5.textContent = "This is the p1 following";
  innerDiv.appendChild(p5);

  const p6 = document.createElement("p");
  p6.textContent = "This is the p1 bio";
  innerDiv.appendChild(p6);
  
  return outerDiv;
}

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
