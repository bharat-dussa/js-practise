function findArray(letter,searchtext){
    const index=letter.indexOf(searchtext)
    if(index!==-1){
        // console.log(searchtext);
return {
    text:searchtext,
    index:index
};
    }
    else {
        return {
            message: `Text '${searchText}' not found in the array.`
        };
    }
}
const mytext=[
    'v','a','m','s','h','i'
];
const searchText='s';
const output=findArray(mytext,searchText);
console.log(output);