const board = [
    document.querySelectorAll('.row-00'),
    document.querySelectorAll('.row-01'),
    document.querySelectorAll('.row-02'),
    document.querySelectorAll('.row-03'),
    document.querySelectorAll('.row-04'),
    document.querySelectorAll('.row-05')
];

const spaces = document.querySelectorAll('.space');

for (let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', function() {
        let space = spaces[i].id;
        console.log(space)  
    })
    
}
