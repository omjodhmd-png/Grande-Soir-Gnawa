# 🎶 La Grande Soirée Gnawa – Mobile Application & REST API

## 📌 Project Context

**La Grande Soirée Gnawa** is a cultural event organized in **Agadir**, celebrating the richness of the Moroccan Gnawa heritage through a unique musical evening featuring nationally renowned Gnawa artists.

Due to the lack of digital tools and the proximity of the event date, the organizing committee needs a **simple mobile application** supported by a **REST API backend** to manage event information, artists, and ticket reservations.

---

## 🎯 Project Objectives

* Build a **React Native (Expo) mobile application**
* Develop a **Node.js / Express REST API**
* Use **PostgreSQL** with **Sequelize ORM**
* Implement a clear and pedagogical architecture
* Deliver a complete, tested, and well-documented project

---

## 🧱 Global Architecture

### Backend

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* MVC architecture
* Dotenv & CORS

### Frontend (Mobile)

* React Native (Expo)
* React Navigation
* Zustand (global state management)
* React Query (data fetching & caching)
* AsyncStorage (offline persistence)

---

## 🗄️ Database Design (PostgreSQL)

⚠️ **Only 3 tables are allowed**

### 1️⃣ event_info

* id
* title
* description
* date
* location
* bannerImage

### 2️⃣ artists

* id
* name
* speciality
* bio
* image
* startTime

### 3️⃣ bookings

* id
* fullName
* email
* phone
* code (confirmation code)
* artistId (foreign key)
* createdAt

---

## 📡 API Endpoints

### 🔓 Public Routes

#### Event

* `GET /api/event` → Get event information

#### Artists

* `GET /api/artists` → Get all artists
* `GET /api/artists/:id` → Get artist details

#### Bookings

* `POST /api/bookings` → Create a booking
* `GET /api/bookings/:code` → Get booking by confirmation code
* `GET /api/bookings/email/:email` → Get bookings by email

---

## 📱 Mobile Application Screens (Minimum 5)

1. **Home Screen**

   * Event information
   * Banner image

2. **Artists List Screen**

   * List of participating Gnawa artists

3. **Artist Detail Screen**

   * Artist details
   * Performance time

4. **Booking Form Screen**

   * Simple booking form

5. **My Bookings Screen**

   * List of user bookings
   * Confirmation codes

---

## 📂 Frontend Folder Structure

```
src/
 ├── app/
       |=>screen
 ├── services/
 ├── stores/
 ├── constants/
```

---

## 🔄 Key Features

* Offline support using AsyncStorage and React Query cache
* Clean and simple user experience
* Loading states and error handling
* Reusable components

---

## 🧪 Tools & Testing

* Git & GitHub (version control)
* Postman (API testing)
* Sequelize migrations & seeders

---

## 📐 UML – Class Diagram (Summary)

* EventInfo
* Artist
* Booking

Relationship:

* Artist (1) → (N) Bookings

---

## 📦 Deliverables

* ✅ Backend GitHub repository
* ✅ Frontend GitHub repository
* ✅ Deployed PostgreSQL database
* ✅ Postman collection
* ✅ Detailed README documentation
* ✅ UML class diagram

---

## ⏱️ Project Timeline

* Start date: **08/12/2025 – 10:00**
* Submission deadline: **12/12/2025 – 17:00**
* Duration: **5 days**

---

## 👨‍💻 Author

This project was developed as an individual educational assignment focused on real-world event management and mobile/web development best practices.

🎶 *Gnawa music – a living cultural heritage of Morocco* 🇲🇦
