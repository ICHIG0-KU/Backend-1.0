const usuarios = {};

usuarios.get = (req, res) => {
  res.json({msg: 'GET - Usuarios - controller'})
}

usuarios.post = (req, res) => {
  res.json({msg: 'POST - Usuarios - controller'});
}

usuarios.put = (req, res) => {
  res.json({msg: 'PUT - Usuarios - controller'});
}

usuarios.delete = (req, res) => {
  res.json({msg: 'DELETE - Usuarios - controller'});
}

export default usuarios;