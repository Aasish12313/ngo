const db = require('../utils/connection');

const ImpactModel = {
  addMetric: async (number, label) => {
    const [result] = await db.query('INSERT INTO impact_metrics (number, label) VALUES (?, ?)', [number, label]);
    return result;
  },

  addStory: async (title, summary, image_url) => {
    const [result] = await db.query('INSERT INTO impact_stories (title, summary, image_url) VALUES (?, ?, ?)', [title, summary, image_url]);
    return result;
  },

  getMetrics: async () => {
    const [rows] = await db.query('SELECT * FROM impact_metrics');
    return rows;
  },

  getStories: async () => {
    const [rows] = await db.query('SELECT * FROM impact_stories');
    return rows;
  }
};

module.exports = ImpactModel;
