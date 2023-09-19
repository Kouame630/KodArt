const backContainer = document.querySelector('#bc')


let allImages
let i = 0;
let time = 5500;	// Time Between Switch

allImages = [
  "IMG_1919_editet.jpg",
  "IMG_1920_editet.jpg",
  "IMG_1921_editet.jpg",
  "IMG_1924_editet.jpg",
  "IMG_1926_editet.jpg",
  "IMG_1928_editet.jpg",
  "IMG_3228.JPG",
  "IMG_3726.JPG",
  "IMG_3728.JPG",
  "IMG_3985.JPG",
  "IMG_4056.JPG",
  "IMG_2076_editet.jpg",
  "IMG_2934_editet.jpg",
  "IMG_2935_editet.jpg",
  "IMG_2936_editet.jpg",
  "IMG_2937_editet.jpg",
  "IMG_2938_editet.jpg",
  "IMG_2939_editet.jpg",
  "IMG_2940_editet.jpg",
  "IMG_4151_editet.jpg",
  "IMG_4156_editet.jpg",
  "IMG_4213_editet.jpg",
  "IMG_4231_editet.jpg",
  "IMG_4232_editet.jpg",
  "IMG_4237_editet.jpg",
  "IMG_4241_editet.jpg",
  "IMG_4243_editet.jpg",
  "IMG_4245_editet.jpg",
  "IMG_4248_editet.jpg",
  "IMG_4249_editet.jpg",
  "IMG_2943_editet.jpg",
  "IMG_2944_editet.jpg",
  "IMG_2945_editet.jpg",
  "IMG_2946_editet.jpg",
  "IMG_2947_editet.jpg",
  "IMG_2948_editet.jpg",
  "IMG_3013_editet.jpg",
  "IMG_3018_editet.jpg",
  "IMG_3019_editet.jpg",
  "IMG_3033_editet.jpg",
  "IMG_3059_editet.jpg",
  "IMG_3082_editet.jpg",
  "IMG_3092_editet.jpg",
  "IMG_4058.JPG",
  "IMG_4061.JPG",
  "IMG_4069.JPG",
  "IMG_4114_editet.jpg",
  "IMG_4268_editet.jpg",
  "IMG_4269_editet.jpg",
  "IMG_4281_edited.JPG",
  "IMG_4292_edited.JPG",
  "IMG_4293_edited.JPG",
  "IMG_4489_editet.jpg",
  "IMG_4559.JPG",
  "IMG_4602.JPG",
  "IMG_4617_editet.jpg",
  "IMG_4619_editet.jpg",
  "IMG_4621_editet.jpg",
  "IMG_4625_editet.jpg",
  "IMG_4741_editet.jpg",
  "IMG_4762_editet.jpg",
  "IMG_4774_editet.jpg",
  "IMG_4779_editet.jpg",
  "IMG_5433_editet.jpg",
  "IMG_5437_editet.jpg",
  "IMG_5598_editet.jpg",
  "IMG_5638_editet.jpg",
  "IMG_5642_editet.jpg",
  "IMG_5643_editet.jpg",
  "IMG_5644_editet.jpg",
  "IMG_4783_editet.jpg",
  "IMG_4784_editet.jpg",
  "IMG_4859_editet.jpg",
  "IMG_4867_editet.jpg",
  "IMG_4869_editet.jpg",
  "IMG_4871_editet.jpg",
  "IMG_4873_editet.jpg",
  "IMG_4876_editet.jpg",
  "IMG_4882_editet.jpg",
  "IMG_4884_editet.jpg",
  "IMG_4885_editet.jpg",
  "IMG_4888_editet.jpg",
  "IMG_4890_editet.jpg",
  "IMG_4906.JPG",
  "IMG_4948_editet.jpg",
  "IMG_4949_editet.jpg",
  "IMG_4950_editet.jpg",
  "IMG_6180.JPG",
  "IMG_6191.JPG",
  "IMG_6195.JPG",
  "IMG_6202.JPG",
  "IMG_5199_editet.jpg",
  "IMG_5395_editet.jpg",
  "IMG_5396_editet.jpg",
  "IMG_5784_editet.jpg",
  "IMG_5891_editet.jpg",
  "IMG_6046_editet.jpg",
  "IMG_6049_editet.jpg",
  "IMG_6218.JPG",
  "IMG_6223.JPG",
  "IMG_6269.JPG"
]

allImages.forEach(element => {
  let image = document.createElement("img")
  image.setAttribute('src', `/editedImages/${element}`)
  image.setAttribute('class', 'background')
  backContainer.appendChild(image)
});

let backgounds = document.querySelectorAll('.background')
window.onload = backgounds[i].classList.add('showing')

function changeBackground() {
  //Remove .showing class from de current background
  backgounds[i].classList.remove('showing');

  //increment the image index by one 
  i++

  //If we are at end of the image list, set the index back to 0
  if(i >= backgounds.length) {
    i = 0;
  }

  //Add le showing class to the next image
  backgounds[i].classList.add('showing')
}

setInterval(changeBackground, time)