const getTheTitles = function(books) {
    return books.map(book => book.title);
};

const books = [
    {
        title: 'Ariel',
        author: 'Sylvia Plath'
    },
    {
        title: 'El llano en llamas',
        author: 'Juan Rulfo'
    },
    {
        title: 'Bestiario',
        author: 'H.P Lovecraft'
    }
];

const titles = getTheTitles(books);
console.log(titles);

// Do not edit below this line
module.exports = getTheTitles;
