(()=>{"use strict";const e="https://api.openweathermap.org/data/2.5/weather?appid=02c241e5f5c19e653240d087fd657644&",t=async t=>{const n=await fetch(`${e}q=${t}`).then((function(e){return e.json()})).then((function(e){console.log(e),document.querySelector(".city-info__title").innerHTML=Math.round(e.main.temp-273)+"&deg;",document.querySelector(".city-title").innerHTML=e.name,document.querySelector(".city-info__subtitlesunrise").innerHTML=new Date(e.sys.sunrise).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+" PM",document.querySelector(".city-info__subtitlesunset").innerHTML=new Date(e.sys.sunset).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+" AM",document.querySelector(".description").textContent=e.weather[0].description,document.querySelector(".humidity1").innerHTML=e.main.humidity+"%",document.querySelector(".pressure2").innerHTML=e.main.pressure/1e3+" mBar",document.querySelector(".windespeed3").innerHTML=Math.floor(1.6093*e.wind.speed)+"km/h",document.querySelector(".Locationname1").innerHTML=e.name+", "+e.sys.country,document.querySelector(".Locationweathericone1").innerHTML=`<img src = "http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png">`,document.querySelector(".Locationweatherdescription").innerHTML=e.weather[0].main,document.querySelector(".Locationtemp").innerHTML=Math.round(e.main.temp-273)+"&deg;C",document.querySelector(".lwindespeed3").innerHTML=Math.floor(1.6093*e.wind.speed)+"km/h",document.querySelector(".lhumidity1").innerHTML=e.main.humidity+"%",document.querySelector(".lpressure2").innerHTML=e.main.pressure/1e3+" mBar",d={...d,name:e.name,temp:Math.round(e.main.temp-273),sunset:new Date(e.sys.sunset).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+" AM",sunrise:new Date(e.sys.sunrise).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+" PM"},console.log(d);const t=[];return addfavorite.onclick=function(){addfavorite.classList.toggle("active");const n={},i=e.name,o=Math.round(e.main.temp-273)+"&deg;",r=`<img src = "http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png">`,c=e.sys.country,a=e.main.humidity+"%",s=Math.floor(1.6093*e.wind.speed)+"km/h";n.favorite=o+"   "+r+"<br/>"+i+"<br/>"+c+'<br/><img src="./img/humidity1.png">'+a+'<img src="./img/windespeed3.png">'+s;const d=favoritecity.length;t[d]=n,console.log(favoritecity),function(){let e="";for(const n in t)e+=t[n].favorite;document.getElementById("favoritecity1").innerHTML=e}(),localStorage.setItem("favoritecity1",JSON.stringify(n.favorite))},e})).catch((function(){}));console.log(n);const{lat:i,lon:o}=n.coord;fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=02c241e5f5c19e653240d087fd657644&lat=${i}&lon=${o}`).then((function(e){return e.json()})).then((function(e){console.log(e),document.querySelector(".hour11").innerHTML=new Date(e.list[0].dt_txt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+`<img src = "http://openweathermap.org/img/wn/${e.list[0].weather[0].icon}@2x.png">`+Math.round(e.list[0].main.temp-273)+"&deg;",document.querySelector(".hour22").innerHTML=new Date(e.list[1].dt_txt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+`<img src = "http://openweathermap.org/img/wn/${e.list[1].weather[0].icon}@2x.png">`+Math.round(e.list[1].main.temp-273)+"&deg;",document.querySelector(".hour33").innerHTML=new Date(e.list[2].dt_txt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+`<img src = "http://openweathermap.org/img/wn/${e.list[2].weather[0].icon}@2x.png">`+Math.round(e.list[2].main.temp-273)+"&deg;",document.querySelector(".hour44").innerHTML=new Date(e.list[3].dt_txt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+`<img src = "http://openweathermap.org/img/wn/${e.list[3].weather[0].icon}@2x.png">`+Math.round(e.list[3].main.temp-273)+"&deg;",document.querySelector(".days1").innerHTML=new Date(e.list[7].dt_txt).toLocaleDateString([],{day:"2-digit",month:"2-digit"})+"<br/>"+new Date(e.list[15].dt_txt).toLocaleDateString([],{day:"2-digit",month:"2-digit"})+"<br/>"+new Date(e.list[23].dt_txt).toLocaleDateString([],{day:"2-digit",month:"2-digit"}),document.querySelector(".icones1").innerHTML=`<img src = "http://openweathermap.org/img/wn/${e.list[7].weather[0].icon}@2x.png"><img src = "http://openweathermap.org/img/wn/${e.list[15].weather[0].icon}@2x.png"><img src = "http://openweathermap.org/img/wn/${e.list[23].weather[0].icon}@2x.png">`,document.querySelector(".daytemp1").innerHTML=Math.round(e.list[7].main.temp-273)+"&deg;<br/>"+Math.round(e.list[15].main.temp-273)+"&deg;<br/>"+Math.round(e.list[23].main.temp-273)+"&deg;",document.querySelector(".nighttemp1").innerHTML=Math.round(e.list[3].main.temp-273)+"&deg;<br/>"+Math.round(e.list[11].main.temp-273)+"&deg;<br/>"+Math.round(e.list[19].main.temp-273)+"&deg;"})).catch((function(e){}))},n=document.getElementById("root"),i=document.getElementById("popupfavorite"),o=document.getElementById("text-input"),r=document.getElementById("form"),c=document.getElementById("closefavorite"),a=document.getElementById("popupactual"),s=document.getElementById("closeactual");let d={description:"partly cloudy"};const m=()=>{const{name:e,description:t,temp:n,isDay:i,sunset:o,sunrise:r}=d;return`<div class="container ${"d"===i?"is-day":"is-night"}">\n                <div class="top">\n                <div class="city">\n                  <div class="city-subtitle">Weather Today in</div>\n                    <div class="city-title" id="city">\n                    <span>${e}</span>\n                  </div>\n                </div>\n                <div class="city-info">\n                    <div class="top-left">\n                    <div class="icon">\n                    </div>\n                    <div class="description">${t}</div>\n                </div>\n                \n                <div class="top-right">\n                    <div class="city-info__title">${n}°</div>\n                    <div class="city-info__subtitlesunset">${o}</div>\n                    <div class="city-info__subtitlesunrise">${r}</div>\n                </div>\n                </div>\n            </div>`},l=()=>{i.classList.toggle("active")},u=()=>{n.innerHTML=m(),c.addEventListener("click",(()=>{i.classList.toggle("active")})),document.getElementById("favoriteicone").addEventListener("click",l)},g=()=>{a.classList.toggle("active")};r.addEventListener("submit",(e=>{e.preventDefault();const n=d.name;if(!n)return null;localStorage.setItem("query",n),t(n),p(),l()})),o.addEventListener("input",(e=>{d={...d,name:e.target.value}}));const p=async()=>{try{const t=localStorage.getItem("query")||d.name,n=await fetch(`${e}q=${t}`),i=await n.json();console.log(i),u()}catch(e){console.log(e)}};u(),n.innerHTML=m(),s.addEventListener("click",(()=>{a.classList.toggle("active")})),document.getElementById("linesicone").addEventListener("click",g),t(localStorage.getItem("query")||"Minsk")})();