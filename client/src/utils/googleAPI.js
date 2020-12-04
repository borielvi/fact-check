const fact_api = (search, lang='en') => {
    const axios = require('axios').default;

    const key = process.env.KEY || 'AIzaSyDq0d9k37s8KVR5zbTGg7un0-Pb16YpRi0';

    const query = `languageCode=${lang}&query=${search}`;

    axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?${query}&key=${key}`)
    .then(function (response) {
        // handle success
        console.log(response.data)
        return response
    })
    .catch(function (error) {
        // handle error
        console.log("error:\n");
        console.log(error);
    })
}

module.exports = { fact_api };