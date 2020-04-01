// IMPORT MODULES under test here:
import { rockPaperScissors } from '../function.js/get-random-throw.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('1, 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const choice = 1;
    const computerChoice = 1;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rockPaperScissors(choice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('2, 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const choice = 2;
    const computerChoice = 1;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rockPaperScissors(choice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('0, 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const choice = 0;
    const computerChoice = 1;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rockPaperScissors(choice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
