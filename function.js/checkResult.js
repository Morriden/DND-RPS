export function checkResult(player, computer) {
    console.log(player, computer);
    //if (player === 'Warrior' && computer === 'Wizard')
    if (player === 'Warrior' && computer === 'Wizard') {
        return 'You lost!';
    } else if (player === 'Wizard' && computer === 'Warrior') {
        return 'You won!';
    } else if (player === 'Rogue' && computer === 'Wizard') {
        return 'You won!';
    } else if (player === 'Wizard' && computer === 'Rogue') {
        return 'You lost!';
    } else if (player === 'Warrior' && computer === 'Rogue') {
        return 'You won!';
    } else if (player === 'Rogue' && computer === 'Warrior') {
        return 'You lost!';
    } else {
        return 'It was a draw!';
    }
}