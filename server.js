//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/paysafe-checkout-master'));


app.get(`/*`, function(req, res) {
    res.sendFile(`index.html`, {root: 'dist/paysafe-checkout-master/'}
  );
  });

// app.use(express.static("./dist/roiim-paysafe"));


// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/roiim-paysafe/index.html'));
// });

// app.get('/*', function(req, res) {
//     res.sendFile(`C:\\Users\\dell\\Desktop\\vivek_paysafe\\paysafe-checkout-master\\src\\index.html`
//   );
//   });


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);