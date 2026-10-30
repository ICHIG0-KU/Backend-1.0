


import express from "express";
import "dotenv/config";
import cors from "cors";
import usuariosRoutes from "../routers/users.js"; // Renombrado para mayor claridad

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    
    this.usuariosPath = "/api/usuarios"; // Corregí el pequeño typo de "Pach" a "Path"
    
    this.middlewares();
    
    this.routes(); // ¡Descomentado y renombrado para evitar confusiones!
  }

  routes() {
    // Aquí asociamos la ruta base con el enrutador importado
    this.app.use(this.usuariosPath, usuariosRoutes);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto: ${this.port}`);
    });
  }
}

export default Server;
