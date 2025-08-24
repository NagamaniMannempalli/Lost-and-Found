# LostLink - Lost and Found Application

## Description

LostLink is a React-based web application that allows users to report and browse lost and found items. Users can report items with details like title, description, location, date, status (Lost/Found), image, and contact email. Items are displayed in an organized card layout with pagination, and a search feature helps quickly locate items.

## Features

* User authentication (Login/Register)
* Report lost and found items
* View lost items
* View found items
* Search items by title
* Pagination for item listing
* Responsive UI
* Persistent data using localStorage
* Navbar and footer visible on all pages except Login/Register
* Delete functionality on item cards (optional, can be extended)

## Tech Stack

* React.js
* React Router DOM
* Context API for state management
* LocalStorage for data persistence
* HTML, CSS

## Folder Structure

```
lost-found/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── ItemCard.js
│   │   ├── Navbar.js
│   │   └── Footer.js
│   │
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── ItemContext.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── LostItems.js
│   │   ├── FoundItems.js
│   │   ├── ReportItems.js
│   │   ├── Login.js
│   │   └── Register.js
│   │
│   ├── utils/
│   │   ├── dummyData.js
│   │   ├── localStorage.js
│   │   └── validate.js
│   │
│   ├── App.js
│   ├── index.js
│   ├── Home.css
│   ├── ItemPage.css
│   ├── Navbar.css
│   ├── Footer.css
│   ├── Auth.css
│   └── ReportItems.css
│
├── package.json
└── README.md
```

## How to Run

1. Clone the repository using SSH:

   ```bash
   git clone git@github.com:NagamaniMannempalli/Lost-and-Found.git
   ```

2. Navigate to the project folder:

   ```bash
   cd lost-found
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000)

## Notes

* Data is stored in **localStorage**, so refreshing the page keeps the items persistent.
* Add your own image URLs while reporting items to see images in cards.
* Use the search bar to quickly find items by title.
* On pages like Lost and Found, if no items match the search or there are no items, a message "Item not found" will be displayed.

## License

This project is open-source and free to use.
