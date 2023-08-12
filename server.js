import express from "express";

const app = express();

/* 
----------Server Setup
*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
