const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(` <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <div class="container">
        <h1>Welcome to our website</h1>
  
        <h3>Your To-Do List</h3>
        <ol>
          <li>mama</li>
          <li>baba</li>
        </ol>
  
        <div class="links">
          <div><a href="/nature">View Nature</a></div>
          <div><a href="/quotes">Read Some Quotes</a></div>
        </div>
      </div>
    </body>`);
      break;
    case "/nature":
      res.setHeader("content-type", "text/html");
      res.end(`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="./style.css" />
          </head>
          <body>
            <div class="container">
              <h1>Nature</h1>
              <div class="links">
                <img src="./nature1.jpg" alt="" />
                
              </div>
            </div>
          </body>
        </html>
        `);
      break;
    case "/quotes":
      res.setHeader("content-type", "text/html");

      res.end(`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="./style.css" />
          </head>
          <body>
            <div class="container">
              <h1>Quotes</h1>
        
              <div class="links">
                <img src="./quote2.jpg" alt="" />
              </div>
            </div>
          </body>
        </html>
        `);
      break;
    case "/nature1.jpg":
      res.setHeader("content-type", "image/jpg");
      const natureBuffer = fs.readFileSync("./nature1.jpg");
      res.end(natureBuffer);
      break;
    case "/quote2.jpg":
      res.setHeader("content-type", "image/jpg");
      const quoteBuffer = fs.readFileSync("./quote2.jpg");
      res.end(quoteBuffer);
      break;
    case "/style.css":
      res.setHeader("Content-Type", "text/css");
      res.end(`body {
        background-color: #f5f5f5;
      }.container {
        margin: 10%;
        margin-top: 5%;
      }
      h1 {
        margin: auto;
        background-color: cornflowerblue;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
      }
      .links {
        display: flex;
        margin: 0 auto;
        margin-top: 3%;
        width: 400px;
        justify-content: space-between;
        align-items: center;
      }
      a {
        text-align: center;
        text-decoration: none;
        border-radius: 50px;
        margin-right: 10px;
        background-color: crimson;
        color: white;
  font-weight: bolder;
  padding: 20px;

      }
      ol {
        height: 200px;
        width: 250px;
        margin-bottom: 10px;
        background-color: thistle;
        padding: 5%;
        overflow: hidden;
        font-weight: 700;
        border-radius: 10px;
      }img {
        height: 350px;
        width: 600px;
        border-radius: 10px;
      }
      
      `);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Oops! Page is not found!</h1>");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
