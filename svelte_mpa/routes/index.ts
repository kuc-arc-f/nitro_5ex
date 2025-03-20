export default eventHandler(async (event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Nitro Example</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/static/Home.js"></script>
</body>
</html>
  `;
});
