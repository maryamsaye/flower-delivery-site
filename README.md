# flower-delivery-site

This is the backend API for the Flower Website, built using **Node.js**, **Express**, **MongoDB**, and **Multer** for handling image uploads.

##  Features

- Full CRUD for flower products
- Image upload handling with Multer
- MongoDB-based data persistence
- API logging middleware
- Static file serving for uploaded images

---

##  Folder Structure

```
backend/
├── Controllers/
│   └── flowerController.js
├── models/
│   └── flowerModel.js
├── routes/
│   └── flowers.js
├── uploads/               # Stores uploaded images
├── server.js              # App entry point
├── .env                   # Environment variables
├── package.json
```

---

##  Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

### 3. Start the server

```bash
npm start
```

Or use nodemon in development:

```bash
npm run dev
```

---

##  API Endpoints

###  Get all flowers

`GET /api/flowers`

###  Get a flower by ID

`GET /api/flowers/:id`

###  Create a flower

`POST /api/flowers`

> Use **form-data** in Postman, set the file field key as `Image`.

###  Update a flower

`PATCH /api/flowers/:id`

Can optionally include a new image in `Image` field (replaces the old one).

###  Delete a flower

`DELETE /api/flowers/:id`

Deletes the flower and its associated image file.

---

## Static Files

Uploaded images are served from:

```
http://localhost:4000/uploads/<filename>
```
## 🛠 Dependencies

- express
- mongoose
- multer
- dotenv
- nodemon (dev)


## Notes

- Ensure that the `uploads/` folder exists in the root directory.
- Images are saved with unique filenames using timestamps.

---

## LicenseThis project is licensed under the MIT License. See the LICENSE file for more details.

## Author(s)If you have any questions or feedback, feel free to contact:

**Name:** Maryam Abdu Saye
**Email:** marynsaye@gmail.com 
**GitHub:** https://github.com/maryamsaye/flower-website.git