# MY PHONE _V3_

![view-img](./frontend/public/images/view-website.png)

Welcome to MY PHONE, where you can dive into a comprehensive database of mobile phones. Our website is built using a dynamic combination of React and Flask on the server, complemented by the robust MongoDB as our backend database. Whether you're seeking detailed specifications, vibrant images, or the latest models, MY PHONE offers an interactive and seamless exploration of the mobile world.

_To try the website [Click Hear](https://my-phone-frontend.onrender.com)_

---

## Features

1. **Search Functionality:**
   Easily search for a specific mobile phone using the search bar. The website supports efficient searching through a vast database of mobile phones, making it convenient for users to find the information they need.

2. **Browse by Brand:**
   Select a specific brand from the available options to view a list of mobile phones associated with that brand. This feature allows users to explore a curated collection of mobile devices from their preferred manufacturers.

3. **Detailed Mobile Phone Pages:**
   Each mobile phone has its dedicated page, showcasing detailed information such as specifications, images, and other relevant details. Users can immerse themselves in a comprehensive overview of their desired mobile devices.

4. **Responsive Design:**
   The website is designed using CSS to ensure a responsive and visually appealing user interface. Whether accessed on a desktop, tablet, or mobile device, the layout adjusts seamlessly to provide an optimal viewing experience.

---

## Tech Stack

### Frontend

![javascript](https://camo.githubusercontent.com/dc9450fb8d40c110f245200f5dadff7551cb6cff83250579789bb997dacf987d/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4a61766153637269707426636f6c6f723d323232323232266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145266c6162656c3d)
![html](https://camo.githubusercontent.com/830abe9a9f6a6b6d33bca330c069362c88809342ebb9772c1a36a13484a12b46/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d48544d4c3526636f6c6f723d453334463236266c6f676f3d48544d4c35266c6f676f436f6c6f723d464646464646266c6162656c3d)
![react](https://camo.githubusercontent.com/e95e1cbdf8a6d197063c7e8765a79deb9b853081012d6e892adb6ac2c364397c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d)
![css](https://camo.githubusercontent.com/a4f8f0ad3d6651da4445f8317ed7c4219d2dc446b749162ec610c2db36685bb7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4353533326636f6c6f723d313537324236266c6f676f3d43535333266c6f676f436f6c6f723d464646464646266c6162656c3d)

- **React:** A powerful JavaScript library for building user interfaces.
- **React Router DOM:** Client side routing.
- **React Dotenv:** Read the environment variables.

### Backend

![python](https://camo.githubusercontent.com/83f28bdf9b2f1bac2f94c51c1fd1e2bcc290c4c35101c813c0a94e3e5fd2acdb/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d507974686f6e26636f6c6f723d333737364142266c6f676f3d507974686f6e266c6f676f436f6c6f723d464646464646266c6162656c3d)
![flask](https://camo.githubusercontent.com/2daf2beddaad1107e2473d14a594cd1d0cfb7a2c1c14d6a618da0242fdb1c4ff/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d466c61736b26636f6c6f723d303030303030266c6f676f3d466c61736b266c6f676f436f6c6f723d464646464646266c6162656c3d)

- **Flask:** A lightweight and efficient web framework for Python.
- **Decouple:** SStore parameters in INI or .env files.
- **PyMongo:** A Python distribution containing tools for working with MongoDB.
- **Flask cors:** A Flask extension for handling Cross Origin Resource Sharing (CORS).

### Database

![mongodb](https://camo.githubusercontent.com/57336fa2867efa094d65d48d3122413cf1aca60e77c77ebad92705a98d29f249/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d6f6e676f444226636f6c6f723d343741323438266c6f676f3d4d6f6e676f4442266c6f676f436f6c6f723d464646464646266c6162656c3d)

- **MongoDB:** A flexible and scalable database solution, providing a robust storage platform for mobile phone data.

---

## Getting Started

To run the project locally, follow these steps:

### 1- Clone the repository

```bash
git clone https://github.com/Ashraf-Alshashaa/My-Phone.git
```

### 2- Navigate to the backend folder in the project directory

```bash
cd \My-Phone\backend
```

### 3- Create an `.env` file and create the following variables in it

```bash
MONGO_URI="Write your database URI"
MONGO_DB_NAME="Write your database name"
```

### 4- Install the server dependencies

```bash
pip install -r requirements.txt
```

### 5- Navigate to the frontend folder in the project directory

```bash
cd \My-Phone\frontend
```

### 6- Create an `.env` file and create the following variables in it

```text
REACT_APP_BASE_SERVER_URL="Write the server's URL that it is running on"
```

### 7- Install frontend dependencies

```bash
npm install
```

### 8- Start the development servers

- Navigate to the backend folder and run:

```bash
python run.py
```

- Navigate to the frontend folder and run:

```bash
 npm start
```

- Open your browser and visit `http://localhost:3000` to view the website.

---

## project structure

```text
_________ My-Pone
    |
    |______ backend
    |   |
    |   |____ app
    |   |  |____ __init__.py
    |   |  |____ controllers.py
    |   |  |____ routes.py
    |   |
    |   |____ .env
    |   |____ requirements.txt
    |   |____ run.py
    |
    |______ frontend
    |   |
    |   |______ public
    |   |   |
    |   |   |____ images
    |   |   |   |____ view-website.png
    |   |   |
    |   |   |____ favicon.ico
    |   |   |____ index.html
    |   |   |____ manifest.json
    |   |   |____ robots.txt
    |   |
    |   |______ src
    |   |   |
    |   |   |____ components
    |   |   |   |
    |   |   |   |____ BrandsSelector
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |   |
    |   |   |   |____ Header
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |   |
    |   |   |   |____ Hero
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |   |
    |   |   |   |____ Img
    |   |   |       |____ index.jsx
    |   |   |
    |   |   |____ hooks
    |   |   |   |____ extract-name-info.js
    |   |   |   |____ useFetch.js
    |   |   |
    |   |   |____pages
    |   |   |   |
    |   |   |   |____ about-us
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |   |
    |   |   |   |____ brand
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |   |
    |   |   |   |____ Home
    |   |   |   |   |
    |   |   |   |   |____ icons
    |   |   |   |   |   |____ Apple.png
    |   |   |   |   |   |____ Huawei.png
    |   |   |   |   |   |____ Samsung.png
    |   |   |   |   |   |____ Xiaomi.png
    |   |   |   |   |
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |   |
    |   |   |   |____ loading
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |   |
    |   |   |   |____ mobile
    |   |   |   |   |____ index.jsx
    |   |   |   |   |____ style.css
    |   |   |
    |   |   |____App.css
    |   |   |____App.js
    |   |   |____index.js
    |   |
    |   |____ .env
    |   |____ .gitignore
    |   |____ package-lock.json
    |   |____ package.json
    |
    |____ Readme.md

```

---

## Contributors

### Ashraf Alshashaa

[![GitHub](https://camo.githubusercontent.com/ccceab02b3dd9c1afd6be271ade73df1d9b76b87d010dd3282570836d6870ba3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d47697448756226636f6c6f723d313831373137266c6f676f3d476974487562266c6f676f436f6c6f723d464646464646266c6162656c3d)](https://github.com/Ashraf-Alshashaa)
[![LinkedIn](https://camo.githubusercontent.com/570a0fd895c1f854918833cb7c2d16d6284e1613b5590f14c3146308df512391/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4c696e6b6564496e26636f6c6f723d304136364332266c6f676f3d4c696e6b6564496e266c6f676f436f6c6f723d464646464646266c6162656c3d)](https://www.linkedin.com/in/ashraf-alshashaa/)

---

## Feedback and Issues

If you encounter any issues or have suggestions for improvement, please feel free to open an issue. Your feedback is highly appreciated!

### `Happy exploring MY PHONE on our website!`
