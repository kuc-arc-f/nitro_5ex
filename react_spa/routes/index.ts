export default eventHandler(async (event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Nitro Example</title>
</head>
<body>
    <div type="module" id="app"></div>
    <script src="/static/entry-client.js"></script>
</body>
</html>
  `;
});
