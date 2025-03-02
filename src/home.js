import restaurantImage from "../assests/images/restaraunt.jpg";

export default function homePage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const headline = document.createElement("h1");
  headline.textContent = "Delicious Bites";

  const image = new Image();
  image.src = restaurantImage;
  image.alt = "Restaurant Interior";

  const description = document.createElement("p");
  description.textContent = "Experience gourmet dining at its finest...";

  content.append(headline, image, description);
}
