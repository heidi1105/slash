let session = require('express-session');
let config = {secret:"SlashIsTheBest"}

module.exports={
	home:(req, res)=>{
		res.json(true)
	}
}