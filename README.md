# flower-delivery-site


## Overview
This is the backend API for the Flower Website, built using **Node.js**, **Express**, **MongoDB**, and **Multer** for handling image uploads.

##  Features

- Full CRUD for flower products
- Image upload handling with Multer
- MongoDB-based data persistence
- API logging middleware
- Static file serving for uploaded images

---
## Live demo
[Live demo](https://flower-delivery-site.onrender.com)


##  Folder Structure

```
backend/
├── Controllers/
│   └── flowerController.js
├── models/
│   └── flowerModel.js
├── routes/
│   └── flowers.js
├── uploads/               
├── server.js              
├── .env           
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
PORT=4001
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
http://localhost:4001/api/flowers
http://localhost:4001/api/users/getusers


## Static Files

Uploaded images are served from:

```
http://localhost:4001/uploads/<filename>
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