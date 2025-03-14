export default eventHandler(async (event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Nitro Example</title>
    <link href="/output.css" rel="stylesheet">
</head>
<body>
    <div type="module" id="app"></div>
    <script src="/static/entry-client.js"></script>
</body>
</html>
  `;
});
