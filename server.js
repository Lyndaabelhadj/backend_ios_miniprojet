import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler, notFoundError } from './middlewares/error-handler.js'
import userRoutes from './routes/user.js';
import articleRoutes from './routes/article.js';
import rdvRoutes from './routes/rdv.js';
import questionRoutes from './routes/Question.routes.js';
import questionNewRoutes from './routes/question_new.js';



const app = express();
const port = process.env.PORT || 9095;
const database = 'Netox'

mongoose.connect(`mongodb+srv://lindabelhadj:lindabelhadj@netox.6nhlvce.mongodb.net/netox?retryWrites=true&w=majority`)
//mongoose.connect(`mongodb://localhost:27017/Netox`)
    .then(() => console.log("DB connection established"))
    .catch((error) => console.log(error));

mongoose.set('debug', true);

app.use(cors());
app.use(morgan("dev")); //Utiliser morgan
app.use(express.json()); // Pour analyser (parsing) les requetes application/json
app.use(express.urlencoded({ extended: true })); // Pour analyser application/x-www-form-urlencoded
app.use('/img', express.static('public/images')); // Servir les fichiers sous le dossier public/images


//// A chaque requête, exécutez ce qui suit
app.use((req, ers, next) => {
    console.log("middleware just ran");
    next();
});


//Sur toute demande à /gse, exécutez ce qui suit
app.use("/gse", (req, ers, next) => {
    console.log("middleware just ran on a gse route");
    next();
});

// pr�fixe chaque route ici avec /game
app.use('/user', userRoutes); // Utiliser les routes cr��s
app.use('/article', articleRoutes);
app.use('/rdv', rdvRoutes);
app.use('/Question', questionRoutes);
app.use('/QuestionNew', questionNewRoutes);


// Utiliser le middleware de routes introuvables
app.use(notFoundError);
// Utiliser le middleware gestionnaire d'erreurs
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});