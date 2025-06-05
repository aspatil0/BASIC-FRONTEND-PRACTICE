<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Match Cards</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f3f3f3;
      padding: 20px;
    }
    .match-card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
      padding: 15px;
      margin: 10px 0;
      display: block;
      transition: all 0.3s ease;
    }
    .hidden {
      display: none;
    }
    .btn-toggle {
      padding: 10px 15px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <button class="btn-toggle" onclick="toggleCards()">Show/Hide Match Cards</button>

  <div class="match-card">Match 1: India vs Australia</div>
  <div class="match-card">Match 2: England vs Pakistan</div>
  <div class="match-card">Match 3: South Africa vs New Zealand</div>

  <script>
    function toggleCards() {
      const cards = document.querySelectorAll('.match-card');
      cards.forEach(card => {
        card.classList.toggle('hidden');
      });
    }
  </script>

</body>
</html>
