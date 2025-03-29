export default eventHandler(async (event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Nitro Example</title>
</head>
<body>
  <h1>home, Vanilla</h1>
  <div id="app"></div>
  <script type="module" src="/static/home.js"></script>
</body>
</html>
  `;
});
