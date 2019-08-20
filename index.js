const osmosis = require("osmosis");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.listen(3000)

const newslet = [];

osmosis
.get("https://www.mbl.is/frettir/")
.find([".teaser"])
.set({
    "photo": ".mynd  img@src",
    "text": ".texti",
    "title": "h1"
})
.data((l)=>{
    newslet.push(l);
})

osmosis
.get("https://www.dv.is")
.find([".grein"])
.set({
    "title":"h2",
    "photo": "figure@style",
    
})

.data((l)=>{
    l.photo = l.photo.slice(21, -1)
    newslet.push(l);
    
})
.log(console.log)
.error(console.log)
.debug(console.log)


app.get('/newslet', (req, res) => {
    res.send(newslet);
})



  