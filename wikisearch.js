/*var xhr;

function initWiki(){
xhr = new XMLHttpRequest();
xhr.withCredentials = false;
  mavericksWiki();
  yosemiteWiki();
  elcapitanWiki();
  sierraWiki();
  highsierraWiki();
  mojaveWiki();
  catalinaWiki();
  bigsurWiki();
  montereyWiki();
  venturaWiki();
  sonomaWiki();

}




function mavericksWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output1').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/OS%20X%20Mavericks/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}

function yosemiteWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output2').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/OS_X_Yosemite/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}

function elcapitanWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output3').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page//html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}
function sierraWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output4').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_Sierra/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}

function highsierraWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output5').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_High_Sierra/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}
function mojaveWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output6').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_Mojave/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}
function catalinaWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output7').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_Catalina/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}
function bigsurWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output8').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_Big_Sur/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}
function montereyWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output9').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_Monterey/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}
function venturaWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output10').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_Ventura/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}
function sonomaWiki(){


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output11').innerHTML = xhr.responseText;
    
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/MacOS_Sonoma/html");
// WARNING: Cookies will be stripped away by the browser before sending the request.


xhr.send();

}



initWiki();

 */