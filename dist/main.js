(()=>{"use strict";!async function(e){try{const e=await async function(e){try{const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=fe0d6601550dc3ccb9230eeb1ec7582c",{mode:"cors"}),a=await e.json();return console.log(a.coord),a.coord}catch(e){console.log(e)}}(),a=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.lon}&appid=fe0d6601550dc3ccb9230eeb1ec7582c&units=imperial`,{mode:"cors"}),t=await a.json(),o={weatherType:t.weather[0].main,temperature:t.main.temp,feelsLike:t.main.feels_like};console.log(o)}catch(e){console.log(e)}}()})();