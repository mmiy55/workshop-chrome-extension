function cheesify() {
  // TODO: Add the image replacement script here
  images = document.querySelectorAll('img')
  images.forEach((img)=>{
    img.src = `https://source.unsplash.com/featured/?cheese/${img.width}x${img.height}?
        ${Math.random()}`
    img.srcset = img.src })

}
