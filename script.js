
// Visualisation of the board where each number represents the div's id
// ['00', '01', '02', '03', '04', '05']
// ['10', '11', '12', '13', '14', '15']
// ['20', '21', '22', '23', '24', '25']
// ['30', '31', '32', '33', '34', '35']
// ['40', '41', '42', '43', '44', '45']
// ['50', '51', '52', '53', '54', '55']


const spaces = document.querySelectorAll('.space');

spaces.forEach(space => space.addEventListener('click', () => {

    // Store id number of clicked space
    let spaceIdNumber = space.id;

    // Draw smth in space
    userMove(spaceIdNumber);

}));

function userMove(idNumber) {

    // The space where the user clicked and the space below it
    const clickedSpace = document.getElementById(idNumber);
    const spaceBelow = document.getElementById(parseInt(idNumber, 10) + 10);

    // Check if space is available for clicking
    if (spaceBelow === null || spaceBelow.className.includes('clicked')) {
        clickedSpace.style.backgroundColor = 'var(--pink)';
        clickedSpace.classList.add('clicked');
    } else {
        console.log(`TODO: Space not available message`)
    }
    
}

