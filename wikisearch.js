var xhr;
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

function initWiki(){
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
  
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
//Test

function yosemiteWiki(){
  // WARNING: For GET requests, body is set to null by browsers.git 

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    document.getElementById('wiki-output2').innerHTML = xhr.responseText;
  }
});

xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/OS_X_Yosemite/html");

xhr.send();
}

//  TEST
//yeahff