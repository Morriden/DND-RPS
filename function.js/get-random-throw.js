export function rockPaperScissors(choice, computerChoice) {
    if (choice === computerChoice) {
        return 0;
    }

    if (choice > computerChoice) {
        return 1;
    }

    if (choice < computerChoice) {
        return -1;
    }
}