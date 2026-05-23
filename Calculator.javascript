<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Calculator</title>

  <style>
    body{
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:#f2f2f2;
      font-family:Arial, sans-serif;
    }

    .calculator{
      background:#222;
      padding:20px;
      border-radius:15px;
      box-shadow:0 0 10px rgba(0,0,0,0.3);
    }

    #display{
      width:100%;
      height:60px;
      margin-bottom:15px;
      font-size:28px;
      text-align:right;
      padding:10px;
      border:none;
      border-radius:10px;
      background:white;
    }

    .buttons{
      display:grid;
      grid-template-columns:repeat(4,70px);
      gap:10px;
    }

    button{
      height:60px;
      font-size:22px;
      border:none;
      border-radius:10px;
      cursor:pointer;
      background:#444;
      color:white;
      transition:0.2s;
    }

    button:hover{
      background:#666;
    }

    .equal{
      background:orange;
    }

    .equal:hover{
      background:darkorange;
    }

    .clear{
      background:red;
    }

    .clear:hover{
      background:darkred;
    }
  </style>
</head>

<body>

  <div class="calculator">
    <input type="text" id="display" disabled>

    <div class="buttons">
      <button class="clear" onclick="clearDisplay()">C</button>
      <button onclick="appendValue('/')">/</button>
      <button onclick="appendValue('*')">*</button>
      <button onclick="appendValue('-')">-</button>

      <button onclick="appendValue('7')">7</button>
      <button onclick="appendValue('8')">8</button>
      <button onclick="appendValue('9')">9</button>
      <button onclick="appendValue('+')">+</button>

      <button onclick="appendValue('4')">4</button>
      <button onclick="appendValue('5')">5</button>
      <button onclick="appendValue('6')">6</button>
      <button onclick="calculate()" class="equal">=</button>

      <button onclick="appendValue('1')">1</button>
      <button onclick="appendValue('2')">2</button>
      <button onclick="appendValue('3')">3</button>
      <button onclick="appendValue('.')">.</button>

      <button onclick="appendValue('0')" style="grid-column: span 4;">
        0
      </button>
    </div>
  </div>

  <script>
    const display = document.getElementById("display");

    function appendValue(value){
      display.value += value;
    }

    function clearDisplay(){
      display.value = "";
    }

    function calculate(){
      try{
        display.value = eval(display.value);
      }
      catch{
        display.value = "Error";
      }
    }
  </script>

</body>
</html>
