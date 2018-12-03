const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const {Schema} = mongoose


const UserSchema = new Schema({
	name: String,
	carbonDitched: Number
  })

const User = mongoose.model('User', UserSchema)

app.use(cors())
app.use(bodyParser.json())

// let info =[
// 	   {
// 	   name:'munifa'
//     }
// ]

app.get('/data', (req, res) => {
	User.find({ })
	    .then(data => {
		res.json(data)
	  })
	// res.json({info})
})


  
app.post('/data', (req, res) => {
	const { name, carbonDitched } = req.body
	User
		.find({ name: name})
		.then(users => {
			if(users.length !== 0) {
				res.json(users[0])

				// res.json({msg: 'user exists'})
			} else {
				const newUser = new User({
				  name,
				  carbonDitched
				})
				newUser.save((err, savedUser)=> {
					res.json(savedUser)
				})
			}
		})
	// 	const { name } = req.body
	// User
	// 	.find({ name: name})
	// 	.then(users => {
	// 		if(users.length !== 0) {
	// 			res.json(users[0])

	// 			// res.json({msg: 'user exists'})
	// 		} else {
	// 			const newUser = new User({
	// 			  name
	// 			})
	// 			newUser.save((err, savedUser)=> {
	// 				res.json(savedUser)
	// 			})
	// 		}
	// 	})
// 	if(name.toLowercase === name.toLowerCase){
//      return console.log(err)
// 	}else{
//    }
// 	console.log(newUser)
	
	//   .then(name => {
	// 	res.json(name)
	//   })

	// name = req.body
    // res.json(info.concat(name))
})  

app.put('/data', (req,res)=>{
	const { name, carbonDitched} = req.body
  User.findOneAndUpdate(
	 { name:name},
	 {carbonDitched: carbonDitched},
	 {new:true},
	 (err, user)=>{
	   if(err) return res.status(500).send(err)
  
	   res.send(user)
	 })

//   User.findOneAndUpdate({username:user.username}, user, {new:true},
// 	(err, user)=>{
// 	  if(err) return res.status(500).send(err)
 
// 	  res.send(user)
// 	})
//  })
//   .then(carbon => {
    //         console.log(carbon.attributes)
    //     })

	// const attributesToUpdate = {
    //     carbonDitched
	// }
	// new User({
    //     name:name
    //     })
    //     .save(attributesToUpdate, {patch: true})
    //     .then(carbon => {
    //         console.log(carbon.attributes)
    //     })
})

app.listen(8080)

mongoose.connect('mongodb://localhost:27017/Data', { useNewUrlParser: true })
mongoose.Promise = global.Promise

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at Carbon Data")
});