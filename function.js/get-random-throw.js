export function getRandomThrow() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice === 1) {
        return 'Warrior';
    } else if (computerChoice === 2) {
        return 'Wizard';
    } else {
        return 'Rogue';
    }
}