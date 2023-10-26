

const scrollToTop = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


let gallary_ch_ch_1 = document.getElementById('gallary_ch_ch_1')
let gallary_ch_2 = document.getElementById('gallary_ch_2')
let gallary = document.getElementById('gallary')

let gallary_images = ['assets/all_events.jpg', 'assets/campus_gallary_1.jpg'
  , 'assets/campus_gallary_2.jpg','assets/cultural_events.jpg']

// for(i=0; i<gallary_images.length; i++){
//   newImage= document.createElement('img')
//   newImage.src = `${gallary_images[i]}`
//   gallary.appendChild(newImage)
// }

// gallary_ch_ch_1.src = `${gallary_images[0]}`

// let gallary_images_index = 1

// setInterval(() => {
//   gallary_ch_ch_1.src = `${gallary_images[gallary_images_index]}`




//   gallary_images_index++

//   if (gallary_images_index == gallary_images.length) {
//     gallary_images_index = 0
//   }
// }, 1000 * 3)


