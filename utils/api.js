



export const fetchCarsModel = async ({manuFacturer, year, fuel, model, limit}) => {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manuFacturer}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6496a80f24mshea60d844f709312p17e640jsn3702cf6dc944',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const resp = await fetch(url, options);
        console.log(resp);
        const result = await resp.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};




export const fetchCarIamges = ( car, angle ) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const key = 'hrjavascript-mastery';

    const { model, year, make } = car;

    url.searchParams.append('customer', key);
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
};


