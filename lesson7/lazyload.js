const images = document.querySelectorAll("[data-src]");/* this is getting the placeholder img*/
/*this function loads the full image*/
function preloadImage(img){ /* everytime this is called by the observer/else statement 
    it will get the img and look for the data-src, or full pic reference to load*/
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    }
    img.src = src;/* we are setting the src to the data-src, so that the img.src will be replaced with the data-src.*/
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px"
};
/*this is the observer that looks to see if the image is in the viewport*/

const imgObserver = new IntersectionObserver((entries, imgObserver)=> {
    /*each time a image intersects with the viewport this function will be called*/
    entries.forEach(entry => {
       /* if the entry is not observed intersecting then it does nothing*/
        if(!entry.isIntersecting){
            return;
        }  
        /* when the entry intersects it will call the preload function to load out image*/
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);/* after the image loads we want it to stop observing because it no longer needs to load*/
        }
    })
}, imgOptions);
/* this applies the observer for each image*/
images.forEach(image => {
    imgObserver.observe(image);
})