function site() {
  let name = prompt(
    "Hi, I see you want to learn more about Ghibli. 😀 So, what's your name?"
  );
  alert(
    "Hi,there " +
      name +
      ", If you whant to know more you can click the link below this button, you are gonna love it, bye ❤"
  );
}

let ghibliButton = document.querySelector(".ghibli-button");
ghibliButton.addEventListener("click", site);
