var queryparameter = ['OS%20X%20Mavericks','OS_X_Yosemite','OS_X_El_Capitan','MacOS_Sierra','MacOS_High_Sierra','MacOS_Mojave','MacOS_Catalina','MacOS_Big_Sur','MacOS_Monterey','MacOS_Ventura','MacOS_Sonoma'];


var arrIndex = 0;
var land_or_sea = [];
var counter = 1;



function callAjaxFunc(arrIndex){
  var pagetitle = queryparameter[arrIndex];
  var divname = "wiki-output"+[counter];

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.onreadystatechange = function(){
    if (this.readyState === 4){ 
      
      document.getElementById(divname).innerHTML = xhr.responseText;
          if (arrIndex < queryparameter.length){
            
            counter++;
            arrIndex++;
             console.log(divname);
            callAjaxFunc(arrIndex);
            
        }      
     
     }
   
   }
   xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/"+ pagetitle + "/html");
   xhr.send();
}
callAjaxFunc(arrIndex);

/*
function initWiki(){
xhr = new XMLHttpRequest();
xhr.withCredentials = false;
  
  const maverickWiki = () =>  document.getElementById('wiki-output1').innerHTML = xhr.responseText; xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/"+ queryparamater + "/html"); 
  const yosemiteWiki = () =>  document.getElementById('wiki-output2').innerHTML = xhr.responseText; xhr.open("GET", "https://en.wikipedia.org/w/rest.php/v1/page/OS_X_Yosemite/html");
  
  
  xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    maverickWiki();
    yosemiteWiki();
  }
     xhr = null;
    
});

  
  
  xhr.send();
}







initWiki();
*/
