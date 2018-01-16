import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

export function getWeatherData(units,coords){
  return  new Promise(function(resolve, reject) {
    var parsedUnits = units === 'C' ? 'metric' : 'imperial';
      console.log("test")
  superagent.get('api.openweathermap.org/data/2.5/weather')
  .query({
    units:parsedUnits,
    lat:coords.lat,
    lon:coords.lon,
    appid:'0494cfc6ef2c1a2cc0eb597988be256e'
  })
  .use(jsonp)
  .end((error,res)=>{
    if (error) {
      reject();

    console.log(error);
    }else{
      resolve(res);



    }
  });

  });


}


export function getLocationCoords(){
  return new Promise(function(resolve, reject) {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (location)=>{
          resolve({
            lat : location.coords.latitude,
            lon :location.coords.longtitude

          });
        },
        (error)=>{
          reject(error);
        }
      );
    }  else{
        superagent.get('http://ipinfo.io/json')
        .use(jsonp)
        .end((error,locationData)=>{
          if (error) {
            reject(error);
          }
          else{
          resolve(locationData);
          }
        })
      }

  });

  }
