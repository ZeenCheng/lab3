let randomNumber = Math.floor(Math.random() * 100) + 1;  // 生成随机数 1-100
let guesses = [];  // 存储玩家的猜测
let remainingTurns = 10;  // 玩家剩余的次数

// 处理玩家的猜测
function checkGuess() {
    const guessField = document.getElementById('guessField');
    const guess = Number(guessField.value);  // 获取玩家输入的数字
    if (!guess || guess < 1 || guess > 100) {
        document.getElementById('resultMessage').innerText = 'Please enter a valid number between 1 and 100.';
        return;
    }
    guesses.push(guess);  // 记录玩家的猜测
    remainingTurns--;  // 剩余次数减少
    document.getElementById('previousGuesses').innerText = `Previous guesses: ${guesses.join(', ')}`;
    document.getElementById('remainingTurns').innerText = `Remaining turns: ${remainingTurns}`;
 
    if (guess == randomNumber) {
        document.getElementById('resultMessage').innerText = 'You are right!';
        endGame();
    } else if (remainingTurns == 0) {
        document.getElementById('resultMessage').innerText = `YOU are false!`;
        endGame();
    } else if (guess < randomNumber) {
        document.getElementById('resultMessage').innerText = 'Too low! ';
    } else if (guess > randomNumber) {
        document.getElementById('resultMessage').innerText = 'Too high! ';
    }

    guessField.value = '';  // 清空输入框
    guessField.focus();  // 让输入框保持焦点
}

// 结束游戏，显示重启按钮
function endGame() {
    document.getElementById('guessField').disabled = true;  // 禁用输入框
    document.getElementById('restartButton').style.display = 'inline';  // 显示重启按钮
}

// 重新开始游戏
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;  // 生成新随机数
    guesses = [];  // 清空猜测记录
    remainingTurns = 10;  // 重置剩余次数

    // 重置界面显示
    document.getElementById('resultMessage').innerText = '';
    document.getElementById('previousGuesses').innerText = '';
    document.getElementById('remainingTurns').innerText = '';
    document.getElementById('guessField').disabled = false;
    document.getElementById('restartButton').style.display = 'none';  // 隐藏重启按钮
    document.getElementById('guessField').focus();  // 聚焦到输入框
}

