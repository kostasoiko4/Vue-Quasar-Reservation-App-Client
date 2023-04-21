// dependencies
const express = require('express')
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')

let inspect = require('util').inspect
let Busboy = require('busboy')
let path = require('path')
let os = require('os')
let fs = require('fs')
let UUID = require('uuid-v4')

// config - express
const app = express()

//might delete later
app.use(express.json())

// config - firebase
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: //bucketKEY
  })

const db = admin.firestore()
let bucket = admin.storage().bucket()

// end point - account
app.get('/accounts', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let accounts = []
   
    db.collection('accounts').get().then(snapshot => {
        snapshot.forEach((doc) => {
            accounts.push(doc.data())
        });
        response.send(accounts)
    })
    response.json(accounts)
})

// end point - create account
app.post('/createAccount', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let uuid = UUID()

    var busboy = new Busboy({ headers: request.headers })

    let fields = {}

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      let filepath = path.join(os.tmpdir(), filename)
      file.pipe(fs.createWriteStream(filepath))
      fileData = { filepath, mimetype }
    })

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      fields[fieldname] = val
    })

    busboy.on('finish', function() {
        //hash the users password 
        const hash = bcrypt.hashSync(fields.pass, 10);
        fields.pass = hash;

        console.log("field: ", fields);

        db.collection('accounts').doc(fields.id).set({
            id: fields.id,
            firstName: fields.firstName,
            lastName: fields.lastName,
            phone: fields.phone,
            email: fields.email,
            pass: fields.pass,
            card: fields.card
        }).then(() => {
           response.send('Account added: ' + fields.id)
        })
    })
    request.pipe(busboy)
})

// end point - Log In
app.post('/logIn', function(request, response) {
  response.set('Access-Control-Allow-Origin', '*')

  var busboy = new Busboy({ headers: request.headers })

  let fields = {}

  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    let filepath = path.join(os.tmpdir(), filename)
    file.pipe(fs.createWriteStream(filepath))
    fileData = { filepath, mimetype }
  })

  busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
    fields[fieldname] = val
  })

  busboy.on('finish', function() {

    let account = {}

    let res = {}

    // check the data base for the account info
    db.collection('accounts').get().then(snapshot => {
      snapshot.forEach((doc) => {
          
        account = doc.data()

        if(account.email === fields.email){
          if(bcrypt.compareSync(fields.pass, account.pass)){
            console.log('Success')
            res = account
            return 0
          }else{
            console.log('Wrong Password')
          }
        }
      })
    })
    // do it later
    response.send(res)
  })
  request.pipe(busboy)
});

//  end point - get shops
app.get('/shops', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')

  let shops = []

  db.collection('shops').get().then(snapshot => {
    snapshot.forEach((doc) => {
      shops.push(doc.data())
    })
    response.send(shops)
  })
})

// end point - place order
app.post('/placeOrder', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let uuid = UUID()

    var busboy = new Busboy({ headers: request.headers })

    let fields = {}

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      let filepath = path.join(os.tmpdir(), filename)
      file.pipe(fs.createWriteStream(filepath))
      fileData = { filepath, mimetype }
    })

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      fields[fieldname] = val
    })

    busboy.on('finish', function() {
        console.log("field: ", fields);

        db.collection('orders').doc(fields.id).set({
            fields
        }).then(() => {
           response.send('Order Placed: ' + fields.id)
        })
    })

    request.pipe(busboy)
})

// listen port
app.listen(process.env.PORT || 3000)
