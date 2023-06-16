const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const operand1 = parseFloat(req.body.operand1);
  const operand2 = parseFloat(req.body.operand2);
  const operator = req.body.operator;
  const result = performCalculation(operand1, operand2, operator);
  res.send(`The result is: ${result}`);
});

function performCalculation(operand1, operand2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      result = 'Invalid operator';
  }

  return result;
}

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
