const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dbConfig = {
  user: 'nyeintechno_typingchampionship',
  password: 'eS7z4m9!6',
  server: '212.32.251.1',
  port: 783,
  database: 'nyeintechno_nyeindb',
  options: {
    encrypt: true, // Use this if you're on Azure or your server requires encryption
    trustServerCertificate: true, // Change to false for production with self-signed certs
  },
};

async function getLeaderboard(tier) {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request()
      .input('tierParam', sql.VarChar, tier)
      .query('SELECT * FROM [nyeintechno_mis].[vw_Leaderboard] WHERE Tier = @tierParam AND [Rank] <= 50');
    return result.recordset;
  } catch (err) {
    console.error('SQL error', err);
    throw err;
  }
}

app.get('/api/leaderboard', async (req, res) => {
  const tier = req.query.tier || 'Adult Tier'; // Default to Adult Tier
  try {
    const data = await getLeaderboard(tier);
    res.json(data);
  } catch (err) {
    res.status(500).send('Error retrieving leaderboard data');
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
