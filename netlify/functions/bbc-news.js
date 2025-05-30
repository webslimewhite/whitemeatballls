export default async (req, res) => {
  const apiKey = '4cc944cdd9704f4cad11056924e0795d'; // Keep this secret in production!
  const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`);
  const data = await response.json();
  res.status(200).json(data);
};