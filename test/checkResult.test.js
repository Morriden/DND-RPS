// IMPORT MODULES under test here:
import { checkResult } from '../function.js/checkResult.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('Wizard, Wizard', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'Wizard';
    const computer = 'Wizard';
    const expected = 'It was a draw!';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('Wizard, Rogue', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'Wizard';
    const computer = 'Rogue';
    const expected = 'You lost!';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('Warrior, Rogue', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'Warrior';
    const computer = 'Rogue';
    const expected = 'You won!';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
