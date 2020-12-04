const fact_api = (search, lang='en') => {
    const axios = require('axios').default;

    const key = process.env.KEY;

    const query = `languageCode=${lang}&query=${search}`;

    axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?${query}&key=${key}`)
    .then(function (response) {
        // handle success
        console.log("success:\n");
        console.log(response.data.claims[0].claimReview);
    })
    .catch(function (error) {
        // handle error
        console.log("error:\n");
        console.log(error);
    });
}

module.exports = { fact_api };