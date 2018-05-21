const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
const Json2csvTransform = require('json2csv').Transform;

const ZOMATO_API_KEY = process.env_ZOMATO_API_KEY;

// This is used solely to run queries through the Zomato API and return restaurant data
// Used to build a database of Mexican restaurant info - not part of the production application

// Trigger the feed action
router.get('/', (req, res) => {
  const config = { headers: { user_key: ZOMATO_API_KEY } };
  res.send('All good');

  /*  axios
    .all([
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.718166&lon=-117.163239&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.722151&lon=-117.157357&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.712931&lon=-117.151325&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.711427&lon=-117.15993&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.713876&lon=-117.162361&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.72415&lon=-117.168385&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.711569&lon=-117.169121&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.743246&lon=-117.221353&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.588456&lon=-117.09706&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.754121&lon=-117.070582&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.725479&lon=-117.218729&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.716501&lon=-117.13677&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.709347&lon=-117.133828&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.725329&lon=-117.206424&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.725732&lon=-117.172796&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.747864&lon=-117.164709&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.828391&lon=-117.144123&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.766806&lon=-117.105885&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.832811&lon=-117.271272&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.832811&lon=-117.271272&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.891756&lon=-117.241156&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.843133&lon=-117.270551&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.787231&lon=-117.043365&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.791569&lon=-117.16765&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.698614&lon=-117.129417&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.74172&lon=-117.15783&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.785639&lon=-117.161116&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.738931&lon=-117.175002&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.918476&lon=-117.13824&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.876739&lon=-117.13824&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.770653&lon=-117.251445&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.748966&lon=-117.182353&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.767091&lon=-117.16235&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.777479&lon=-117.147699&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.767107&lon=-117.194115&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.803297&lon=-117.033801&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.800335&lon=-117.085292&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.786843&lon=-117.064698&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.789073&lon=-117.100001&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.808551&lon=-117.049986&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.568316&lon=-117.08235&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.75884&lon=-117.117651&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.973238&lon=-117.238216&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.745648&lon=-117.129417&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.835514&lon=-117.202936&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.733214&lon=-117.070582&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.749499&lon=-117.247035&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.576139&lon=-117.014674&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.576139&lon=-117.014674&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.754217&lon=-117.196979&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.559473&lon=-116.973468&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.575709&lon=-117.061755&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.802458&lon=-117.235585&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.963705&lon=-117.195585&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.58402&lon=-117.08235&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.70003&lon=-117.246684&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.712273&lon=-117.245314&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.743939&lon=-117.218925&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.71374&lon=-117.175127&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.74181&lon=-117.235276&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.726143&lon=-117.235276&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.726274&lon=-117.251445&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.718168&lon=-117.247035&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=33.033577&lon=-117.080582&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.934381&lon=-117.002901&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.9657&lon=-117.114709&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.745471&lon=-117.071814&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.762084&lon=-117.058813&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.75035&lon=-117.053998&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.948416&lon=-117.088234&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=33.083168&lon=-116.991129&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.555556&lon=-117.047043&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.893214&lon=-117.06764&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.931393&lon=-117.094118&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.911148&lon=-117.105167&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.79981&lon=-117.132358&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.71304&lon=-117.227817&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.709903&lon=-117.142652&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.906002&lon=-117.174345&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.900023&lon=-117.189483&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.724747&lon=-117.129417&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.715738&lon=-117.161084&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.692553&lon=-117.068375&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.685826&lon=-117.038216&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.731606&lon=-117.052193&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.712058&lon=-117.094118&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.716163&lon=-117.076466&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.711739&lon=-117.061755&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.737377&lon=-116.93981&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.702971&lon=-117.088234&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.708664&lon=-117.028639&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.702723&lon=-117.111768&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.713178&lon=-117.111768&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.678431&lon=-117.058813&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.686759&lon=-117.107356&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.702746&lon=-117.047493&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.693233&lon=-117.113239&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.700478&lon=-117.076466&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.710438&lon=-117.123534&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.760466&lon=-117.088234&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.825809&lon=-117.103988&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.543623&lon=-117.08408&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.968412&lon=-117.158828&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.91126&lon=-117.226089&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.857732&lon=-117.205429&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.757206&lon=-117.147064&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.748795&lon=-117.152636&cuisines=73&sort=real_distance',
        config
      ),
      axios.get(
        'https://developers.zomato.com/api/v2.1/search?lat=32.72774&lon=-117.094118&cuisines=73&sort=real_distance',
        config
      ),
    ])
    .then(results => {
      let temp = results.map(r => r.data);
      res.json(temp);
    }); */
});

module.exports = router;
