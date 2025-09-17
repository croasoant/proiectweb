# user-articles-system

Sistem web pentru gestionarea utilizatorilor și publicarea articolelor.

## Cerințe
- Node.js 18+ și npm
- MongoDB (poți folosi MongoDB Compass / local / Atlas)

## Instalare
1. Clonează sau descarcă proiectul.
2. Rulează `npm install` în folderul proiectului.
3. Creează fișierul `.env` pe baza `.env.example` și completează `MONGODB_URI` și `JWT_SECRET`.
4. Rulează `npm run dev` pentru dezvoltare (nodemon) sau `npm start`.

## Rute principale (API)
- `POST /api/auth/register` - înregistrare utilizator
- `POST /api/auth/login` - autentificare (primești JWT)
- `GET /api/articles` - listare articole (public)
- `GET /api/articles/:id` - detaliu articol
- `POST /api/articles` - creare articol (autentificat)
- `PUT /api/articles/:id` - modificare articol (autor sau admin)
- `DELETE /api/articles/:id` - ștergere articol (autor sau admin)
- `POST /api/articles/:id/comments` - adaugă comentariu (autentificat)
- `DELETE /api/comments/:id` - șterge comentariu (autor sau admin)
- `GET /api/categories` - listare categorii
- `POST /api/categories` - creare categorie (admin)
- `GET /api/users` - listare utilizatori (admin)
- `PUT /api/users/:id/role` - schimbare rol (admin)

Testare: poți folosi Postman pentru a testa rutele API. Trimite Authorization header: `Bearer <token>`.

## Structură fișiere
- server.js - punctul de intrare
- config/db.js - conexiune MongoDB
- models/ - modele Mongoose
- routes/ - rute Express
- controllers/ - logica pentru rute
- middleware/ - middleware (autentificare, autorizare)

-- Succes la proiect! Dacă vrei, îți explic fiecare fișier sau te ajut să extinzi funcționalități.
