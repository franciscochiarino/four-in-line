
const board = [
    document.querySelectorAll('.row-00'),
    document.querySelectorAll('.row-01'),
    document.querySelectorAll('.row-02'),
    document.querySelectorAll('.row-03'),
    document.querySelectorAll('.row-04'),
    document.querySelectorAll('.row-05')
];

const spaces = document.querySelectorAll('.space');

spaces.forEach(space => space.addEventListener('click', () => {

    // Find which space was clicked
    let spaceID = space.id;

    // Draw smth in space
    draw(spaceID);

}));

function draw(id) {
    const space = document.getElementById(id);
    space.style.backgroundColor = 'var(--pink)';
    
}

