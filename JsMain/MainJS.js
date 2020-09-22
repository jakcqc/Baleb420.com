$(function() {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
        if(window.pageYOffset != 0){
            document.getElementById("topInfoBar").style.display = "none";
        }
        else{
          document.getElementById("topInfoBar").style.display = "block";
        }
      }, false);

});
