const key = 'Wj4VCvgjSvdi2oBG4kl8NO2kGgi5Uinh';
//Weahter Condition 
const weatherCondition = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
    // console.log(data);
}


//get City Seacrh
const citySearch = async(city) => {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`;
        const response = await fetch(base + query);
        const data = await response.json();
        return data[0];
        // console.log(data[0]);
    }
    // citySearch('manchester')
    //     .then(data => {
    //         return weatherCondition(data.Key);
    //     })
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

// weatherCondition("329260");