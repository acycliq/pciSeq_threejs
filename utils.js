function string2hex(string) {
    if (typeof string === 'string' && string[0] === '#') {
        string = string.substr(1);
    }
    return parseInt(string, 16);
}