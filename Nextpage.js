<!DOCTYPE html>
<html>
<head>
  <title>Next Page</title>
</head>
<body>
  <h1>Welcome to First Page</h1>

  <button id="nextBtn">Next Page</button>

  <script>
    document.getElementById("nextBtn").addEventListener("click", function() {
      window.location.href = "page2.html";
    });
  </script>
</body>
</html>
