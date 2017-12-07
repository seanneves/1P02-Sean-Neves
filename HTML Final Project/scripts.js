var gx24much=0;

function gx24plus(){
  gx24much=gx24much+ 85.99;
  document.getElementById("gx24cost").innerHTML = gx24much;
}

function gx24minus(){

    gx24much=gx24much- 85.99;
    if (gx24much < 0) {
      gx24much=gx24much+85.99;
    }
    document.getElementById("gx24cost").innerHTML = gx24much;

  }



  var rx300much=0;

  function rx300plus(){
    rx300much=rx300much+ 89.99;
    document.getElementById("rx300cost").innerHTML = rx300much;
  }

  function rx300minus(){

      rx300much=rx300much- 89.99;
      if (rx300much < 0) {
        rx300much=rx300much+89.99;
      }
      document.getElementById("rx300cost").innerHTML = rx300much;

    }




    var procolormuch=0;

    function procolorplus(){
      procolormuch=procolormuch+ 79.99;
      document.getElementById("procolorcost").innerHTML = procolormuch;
    }

    function procolorminus(){

        procolormuch=procolormuch- 79.99;
        if (rx300much < 0) {
          procolormuch=procolormuch+79.99;
        }
        document.getElementById("procolorcost").innerHTML = procolormuch;

      }

    function getDate(){
      document.getElementById("date").innerHTML=Date(); 
    }
