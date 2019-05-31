window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    var catImage = document.getElementById('cats-img');
    var catText = document.getElementById('cats-text');
    var timeNow = document.getElementById("time-now");

    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

    function myFunction() {
      var d = new Date();
      var time = d.toLocaleTimeString();
      timeNow.innerHTML = time;

      var hrs = d.getHours()
      console.log(hrs);

      if(hrs < 18){
        catText.innerHTML = "GOOD DAY";
      } else{
        catText.innerHTML = "GOOD EVENING";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      }

      catImage.src = image;

    }

    var myVar = setInterval(myFunction, 1000);
});
