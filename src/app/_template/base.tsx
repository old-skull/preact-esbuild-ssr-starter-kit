export const template = (html: string) => `
 <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="SEO description">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script type="module" src="client.js" async></script>
    </body>
  </html>
`;
