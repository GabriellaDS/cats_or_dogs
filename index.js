function toggleVoteContainer(){
//find the vote container on webpage
var voteContainer= document.getElementById("vote-container");

if(voteContainer.style.display === ""){
   voteContainer.style.display = "block";
 }
}

function increaseLikes(element){
  var Likes = element.innerText;
Likes = parseInt(Likes);
Likes += 1;
element.innerText= Likes;

//var scores= document.getElementsByClassName("score");
//var score = score[0];
//score.style.color= "orange";
}

var catsimages= ["https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
"https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg",
"http://www.petwebsite.co.uk/media/k2/items/cache/0548677e6432786dd8df61eb3aaec139_L.jpg"];
var dogimages= ["https://www.gov.ca.gov/wp-content/uploads/2018/03/First-Dog.jpg",
"https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-03/jaclou_contons_dodged_to_lighten.jpg?itok=f96PbcnB",
"http://diligentdogs.com/wp-content/uploads/2016/06/Diligent-Dogs-Puppy-Training-FI1.png"];

function changeimage(element){
  console.log(element.id);

  var animals= [];

  if(element.id === "cats-carousel"){
    animals = catsimages;
  } else {
    animals = dogimages;
   }

  var carousel= document.getElementById(element.id)
  var image= carousel.getElementsByTagName("img")[0];
  var imageUrl= image.getAttribute("src");

  var imageIndex= animals.indexOf(imageUrl);

if(imageIndex === animals.length -1){
  imageIndex = 0;
}else{
  imageIndex +=1;
}

imageUrl= animals[imageIndex];
  image.src= imageUrl;


}
