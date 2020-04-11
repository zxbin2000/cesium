function appendForwardSlash(url: string) {
    if (url.length === 0 || url[url.length - 1] !== "/") {
        url = url + "/";
    }
    return url;
}

export default appendForwardSlash;
