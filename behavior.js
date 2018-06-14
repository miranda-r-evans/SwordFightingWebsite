function image_toggler(element){
    // when user clicks on a small image it is made big, and vice versa
    element.addEventListener("click", function(){
        if (element.className == "small"){
            element.className = "big";
        } else if (element.className == "big"){
            element.className = "small";
        }
    });
}

document.addEventListener("DOMContentLoaded", function(event){
    // creates an array of the images we want to toggle, which are identified by their class "small"
    var images_in_main = document.querySelectorAll(".small");
    // passes each image in the array into the function image_togggler
    images_in_main.forEach(image_toggler);
     });
