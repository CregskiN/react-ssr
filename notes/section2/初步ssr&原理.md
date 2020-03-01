# 初步 ssr & 原理

- react ssr 基于 react 虚拟 DOM，较耗费性能，ssr 消耗服务器性能，csr 消耗客户端浏览器性能

```tsx
import express, { Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import Home from "./containers/Home/index";
const content = renderToString(<Home />);

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <html>
      	<head>
       		 <title>ssr</title>
    	</head>
     	 <body>
      	 	 ${content} 
     	 </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log(`listen 3000...`);
});
```
