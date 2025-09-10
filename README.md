# 🍴 Food Delivery App  

🚀 A modern **Food Delivery Web Application** built with the **MERN stack**.  
This app allows users to browse meals, add them to cart, place orders, and securely make payments.  

🔗 **Live Demo:** [Food Delivery App](https://food-delivery-bice-eight.vercel.app)  

---

## 📌 Features  

✅ User authentication (Signup, Login, JWT)  
✅ Browse and search food items  
✅ Add to cart & manage orders  
✅ Online payments with Stripe  
✅ Admin panel for managing food items & orders  
✅ Responsive UI (mobile-friendly)  
✅ Secure backend with role-based access  

---

## 🛠️ Tech Stack  

### Frontend  
- ⚛️ React.js  
- 🎨 Tailwind CSS  
- 🔄 Axios  

### Backend  
- 🟢 Node.js + Express.js  
- 🛢️ MongoDB (Mongoose ODM)  
- 🔑 JWT Authentication  
- 💳 Stripe Payment Integration  

### Deployment  
- 🌐 Frontend: [Vercel](https://vercel.com)  
- 🖥️ Backend: [Render]   
- ☁️ Database: MongoDB Atlas  

---

## ⚙️ Installation & Setup  

Follow these steps to run the project locally:  

### 1. Clone the Repository  
```bash
git clone https://github.com/sahbadal/Food-Delivery.git
cd Food-Delivery
```
### 2. Setup Backend 
```bash
cd Backend
npm install

create .env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
FRONTEND_URL=http://localhost:3000

npm run dev
```

### 3. Setup Frontend
```bash
cd Frontend
npm install
npm run dev

```

### 4. Setup Admin 
```bash
cd Admin
npm install
npm run dev
```

👤 Author
👨‍💻 Badal Sah

