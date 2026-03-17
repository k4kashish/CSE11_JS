//Mouse Events
function onClick(){
    console.log("clicked");
}

function onMouseOver(){
    console.log("on MOuse Over");
}

function onMouseOut(){
    console.log("on MOuse Out");
}

function onMouseUp(){
    console.log("on MOuse Up");
}

function onMouseDown(){
    console.log("on MOuse Down");
}

function onMouseMove(){
    console.log("on MOuse Move");
}

const x=document.querySelector('input');
x.addEventListener('focus',onhandlefocus);
x.addEventListener('blur',onhandlebar);

function
  onhandlefocus(){x.stylelebackground="red";

  }

  function
    onhandleblur(){x.stylebackground="yellow";

    }

    


