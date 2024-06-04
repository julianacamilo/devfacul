const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const cors = require('cors'); 

server.use(jsonServer.bodyParser);

server.use(cors()); 
server.use(middlewares);

const SECRET_KEY = 'f23#Gh4zTc6!9QweP2XyA$zU7p';

const authenticateJWT = (req, res, next) => {
  // Check the JWT token in the authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  // Extract the token from the string 'Bearer token'
  const token = authHeader.split(' ')[1];

  // Checks token validity and decodes user data

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    console.error('toking,', err);
    if (err) return res.status(403).json({ message: 'Token inválido' });

    req.userId = decoded.userId;
    next();
  });
};

// Route to get authenticated user profile
server.get('/profile', authenticateJWT, (req, res) => {
  const userProfile = router.db.get('users').find({ id: req.userId }).value();
  if (!userProfile) return res.status(404).json({ message: 'Perfil não encontrado' });

  res.json({ userProfile });
});

// Route to register a new user
server.post('/register', (req, res) => {
  const { email, password, date, profession, country, city, relationship } = req.body;
  const user = {
    id: Date.now(), 
    email,
    password,
    date,
    profession,
    country,
    city,
    relationship,
  };
  
  
// Add the new user to the database
  router.db.get('users').push(user).write();
  res.json({ message: 'Usuário registrado com sucesso!' });
});

// Route to authenticate the user and provide a JWT token
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = router.db.get('users').find({ email, password }).value();

  if (user) {
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '24h' });

    res.json({ message: 'Login bem-sucedido!', token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Route to update authenticated user profile




server.use(router);
// Start mock JSON server on port 3001
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});