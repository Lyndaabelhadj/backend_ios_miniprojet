import QuestionTest from '../models/question_new.js ';

//Ajout d'une question dans la DB 
export function AjoutQuestion1(req, res) {
    console.log(req.body)
   QuestionTest
           .create({
               contenu: req.body.contenu,
           })
       .then(newQuestion => {
           res.status(200).json(newQuestion);
           console.log("Ajout success!");
       })
       .catch(err => {
           res.status(400).json({ error: err });
        console.log("Error in adding question: ", err);
       });
   

}

//Affichage de toutes les questions existantes dans la DB (Admin)
export function getAllQuestion1(req, res) {
    QuestionTest
        .find({})
       
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}