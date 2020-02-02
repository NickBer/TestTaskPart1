//using URL class
function urlToObj(url) {
    // const urlParams = new URLSearchParams(window.location.search);
    const urlParams = new URL(url).searchParams;

    let paramsObj = {};
    for (const key of urlParams.keys()) {
        let values = urlParams.getAll(key);
        values = values.filter(val => val !== undefined && val.trim() !== "");
        if (values.length == 1) {
            [paramsObj[key]] = values;
        } else {
            paramsObj[key] = values;
        }
    }
    return paramsObj;
}

//just vanilla js
function urlToObjVanilla(url) {
    if (url === "") throw new Error("empty url string");
    // get params string->get array of params string('em=world')->get array of [key,value] arrays
    let urlParams = url.split('?')[1];

    //return emty obj if there`s no params
    if (urlParams === undefined || urlParams.trim() === "")
        return {};

    urlParams = urlParams.split('&');
    // if (urlParams.length === 1)
    //     return {
    //         [urlParams[0]]: urlParams[1]
    //     };
    // console.log(urlParams);
    urlParams = urlParams.map(par => par.split('='));
    let paramsObj = {};

    for (const [key, value] of urlParams) {
        if (value === undefined || value.trim() === "") continue;
        if (paramsObj[key] === undefined) { //write value if there`s nothing in obj
            paramsObj[key] = value;
        } else if (Array.isArray(paramsObj[key])) { //add value to array of values
            paramsObj[key].push(value);
        } else { //create array of values if there was already value
            paramsObj[key] = [paramsObj[key], value];
        }
    }
    return paramsObj ? paramsObj : {};
}

exports.urlToObj = urlToObj;
exports.urlToObjVanilla = urlToObjVanilla;