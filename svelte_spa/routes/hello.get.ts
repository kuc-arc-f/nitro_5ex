export default defineEventHandler((event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Nitro Example</title>
</head>
<body>
    <h1>hello Nitro</h1>
    <script src="/test.js"></script>
</body>
</html>
  `;
});