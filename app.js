const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUser = require('./checkUsers')
const app = express()
const port = 3000

// use session middleware
app.use(
  session({
    name: 'forLogin',
    secret: 'Nyan cat',
    cookie: { maxAge: 15 * 1000 } // session只保留15秒
  })
)

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set routes & check session
app.get('/', (req, res) => {
  // session OK => render welcome page
  console.log(req.session)
  if (req.session.verifiedAccount) {
    res.render('welcome_page', {
      firstName: req.session.verifiedAccount.firstName
    })
  } else {
    // no session => render login page
    res.render('index')
  }
})

// POST
app.post('/', (req, res) => {
  let email = req.body.email
  const { password, storeEmail, logout } = req.body
  // check user
  const { loginStatus, verifiedAccount } = checkUser(email, password)

  // OK => show welcome page
  if (loginStatus === 'OK') {
    // store session
    req.session.verifiedAccount = verifiedAccount
    res.render('welcome_page', {
      firstName: verifiedAccount.firstName
    })
  } else if (logout === 'on') {
    // logout & destroy session
    req.session.destroy()
    res.render('index')
  } else {
    // NG => keep email and show error message in login page
    const errorMessage = 'Username/Password 錯誤'
    // remove email if user do not store email
    if (storeEmail !== 'on') {
      email = ''
    }
    res.render('index', { email, errorMessage, storeEmail })
  }
})

// listen on port
app.listen(port, () => {
  console.log(`Express server is listen on localhost:${port}`)
})
