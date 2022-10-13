<!DOCTYPE html>
<html>

<head>
    <title>JS DOMContentLoaded Event</title>
</head>

<body>
    <button id="btn">Click Me!</button>
    <script>
       document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded")
});
    </script>
</body>
</html>