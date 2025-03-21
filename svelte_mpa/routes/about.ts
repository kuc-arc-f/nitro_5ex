export default eventHandler(async (event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>about</title>
  <link href="/output.css" rel="stylesheet" />
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/static/About.js"></script>
</body>
</html>
  `;
});
