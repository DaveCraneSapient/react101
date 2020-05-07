import { merge } from 'lodash';

const defaultConfig = {
    labels: {
        sidebar: "sidebar",
        button: "click me"
    },
    apiHost: "http://localhost:3000/api"
};

function overrideStr(jsonStr) {
    let override = {};
    try {
        override = JSON.parse(jsonStr);
        overrideVals(override);
    } catch (e) {
        console.log("error reading env config", jsonStr);
    }

}
function overrideVals(obj) {
    obj = obj || {}
    console.log("override", defaultConfig, obj)
    merge(defaultConfig, obj);
}

//dev mode environment variables for local dev
overrideStr(process.env.REACT_APP_CONFIG);
//overrides injected at runtime via docker
overrideVals(window.localConfig);

export default defaultConfig;
