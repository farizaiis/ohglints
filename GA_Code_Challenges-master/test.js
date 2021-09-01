function noSpace(x){
    return x.split(" ").join('')  //split(" ") untuk kurangin nilai string spasi dari array //join untuk update array
  }

  console.log(noSpace(["Saya Tidur", "Siang"]))