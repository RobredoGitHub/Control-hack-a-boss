const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

function repetidos(array) {
    let result = array.filter((item,index) => {
        return array.indexOf(item) === index;
      })
    console.log(result)
};
repetidos(names);