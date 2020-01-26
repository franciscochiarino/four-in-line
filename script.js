// This file is just intended to write down ideas and run some tests with js.

const board = [
    ['00', '01', '02', '03', '04', '05'],
    ['10', '11', '12', '13', '14', '15'],
    ['20', '21', '22', '23', '24', '25'],
    ['30', '31', '32', '33', '34', '35'],
    ['40', '41', '42', '43', '44', '45'],
    ['50', '51', '52', '53', '54', '55']
]

// Horizontal winning positions:
// 50, 51, 52, 53
// 51, 52, 53, 54
// 52, 53, 54, 55
// The pattern in these numbers are just the numbers on the right: 0123, 1234, 2345

// Vertical winning positions:
// 50, 40, 30, 20
// 40, 30, 20, 10
// 30, 20, 10, 00
// If we look at the left number from bottom right to top left, we see the same pattern: 0123, 1234, 2345

// Diagonal winning positions (south west to north east):
// 30, 21, 12, 03
// 40, 31, 22, 13
// 31, 22, 13, 04
// 50, 41, 32, 23
// 41, 32, 23, 14
// 32, 23, 14, 05
// 51, 42, 33, 24
// 42, 33, 24, 15
// 52, 43, 34, 25
// The pattern here is 9. If we take out 9 from the first number, then we get the second, and so on.
// Looking at these numbers, I also realized that on the left column, the pattern is: 30, 31, 32, 40, 41, 42, 50, 51, 52

// Diagonal winning positions (south east to north west)
// 35, 24, 13, 02
// 45, 34, 23, 12
// 32, 23, 12, 01
// 55, 44, 33, 22
// 44, 33, 22, 11
// 33, 22, 11, 00
// 54, 43, 32, 21
// 43, 32, 21, 10
// 53, 42, 31, 20
// The pattern here is 11. If we take out 9 from the first number, then we get the second, and so on.

// In the following function I am going to try to look for all the possiblities to find a horizontal line of four.
function findHorizontalLine() {

    // Iterate arrays in board:
    board.forEach(n => {

        // Look for pattern 0123:
        for (let i = 0; i <= 3; i++) {
            const element = n[i];
        }

        // Look for pattern 1234:
        for (let i = 1; i <= 4; i++) {
            const element = n[i];
        }

        // Look for pattern 2345:
        for (let i = 2; i <= 5; i++) {
            const element = n[i];
        }
    })
}

// In the following function I am going to try to look for all the possiblities to find a vertical line of four.
function findVerticalLine() {

    // Iterate between columns
    for (let i = 0; i <= 5; i++) {

        // Look for pattern 0123:
        for (let j = 0; j <= 3; j++) {
            const element = board[j][i];
        }

        // Look for pattern 1234:
        for (let j = 1; j <= 4; j++) {
            const element = board[j][i];
        }

        // Look for pattern 2345:
        for (let j = 2; j <= 5; j++) {
            const element = board[j][i];
        }
    }
}

