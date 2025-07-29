const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
  const input = req.body.data;
  if (!Array.isArray(input)) {
    return res.status(400).json({ is_success: false, message: "Invalid input format" });
  }

  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let chars = [];

  input.forEach(item => {
    const str = String(item);
    if (/^\d+$/.test(str)) {
      const num = parseInt(str);
      sum += num;
      if (num % 2 === 0) even_numbers.push(str);
      else odd_numbers.push(str);
    } else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      chars.push(...str.split(""));
    } else {
      special_characters.push(str);
    }
  });


  let revConcat = chars.reverse().map((c, i) =>
    i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()
  ).join('');

  res.status(200).json({
    is_success: true,
    user_id: "taney_sharma_10122004",
    email: "taney887.be22@chitkara.edu.in",
    roll_number: "2210990887",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string: revConcat
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
