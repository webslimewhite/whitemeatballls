const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const apiKey = '4cc944cdd9704f4cad11056924e0795d';
  const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};