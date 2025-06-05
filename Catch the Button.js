<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Catch the Button Game</title>
  <style>
    body {
      font-family: 'Comic Sans MS', cursive;
      background-color: #ffeaa7;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }
    #btn {
      padding: 15px 30px;
      font-size: 18px;
      background-color: #0984e3;
      color: white;
      border: none;
      border-radius: 10px;
      position: absolute;
      cursor: pointer;
      transition: all 0.3s;
    }
  </style>
</head>
<body>

  <button id="btn">Catch Me! 😜</button>

  <script>
    const btn = document.getElementById('btn');

    btn.addEventListener('mouseover', () => {
      const x = Math.floor(Math.random() * (window.innerWidth - 100));
      const y = Math.floor(Math.random() * (window.innerHeight - 50));
      btn.style.left = x + 'px';
      btn.style.top = y + 'px';
    });

    btn.addEventListener('click', () => {
      alert("You actually caught me?! 😲 Well played!");
    });
  </script>

</body>
</html>
