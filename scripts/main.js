const linkfname = document.querySelector('input[name="firstname"]');
const linksname = document.querySelector('input[name="secondname"]');
const buttonlink = document.querySelector('button[name="button"]');

let funame, suname;

linkfname.addEventListener('change', () => {
    funame = linkfname.value;
    console.log('Имя:', funame);
})

linksname.addEventListener('change', () => {
    suname = linksname.value;
    console.log('Фамилия:', suname);
    //hello(funame, suname);
})

buttonlink.addEventListener('click', () => {
   // console.log('Хай-хай', funame, suname);    
   hello(funame, suname);
})

function hello(fname, sname) {
    console.log('Hello', fname, sname);
};


hello('юный', 'падаван');


//вариант инпутов без кнопки

/*

const linkfname = document.querySelector('input[name="firstname"]');
const linksname = document.querySelector('input[name="secondname"]');

let funame, suname;

linksname.addEventListener('change', () => {
    suname = linksname.value;
    console.log('Фамилия:', suname);
})

linkfname.addEventListener('change', () => {
    funame = linkfname.value;
    console.log('Имя:', funame);
    hello(funame, suname);
})

function hello(fname, sname) {
    console.log('Hello', fname, sname);
};


*/
