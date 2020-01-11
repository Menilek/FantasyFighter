const app = require('./server');
const db = require('./database');

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port: ${port}`));

module.exports = app;