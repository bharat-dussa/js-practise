function convertstring(name) {
    if (!Array.isArray(name)) {
        return ('array is emty or it is not an array');
    }
    const resultArray = name.map(name => ({ Name: name }));

    const string = JSON.stringify(resultArray);

    return string;
}

const nameArray = ['vamshi', 'tejas', 'nandu', 'bhartuu', 'rushi', 'sai', 'vigu', 'raccha', 'dhanraj'];
const string = convertstring(nameArray);
console.log(string);