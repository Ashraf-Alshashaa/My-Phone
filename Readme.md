# My Phone

#### _beta v2_

## Full description

full stack app you can look through it at phones details

![view-img](https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)
![view-img](https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)
![view-img](https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145)
![view-img](https://camo.githubusercontent.com/faec9d89bd2c7d47b91d988dcd0f27011c27e8191d45836cfa36bf2b3c2a92bd/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d)
![view-img](https://camo.githubusercontent.com/0a95585d6b3a07028298a45d60b85a1331358bc336549d64dbbc27977f1495f3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4578707265737326636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d464646464646266c6162656c3d)
![view-img](https://camo.githubusercontent.com/eb3676422a9e186ce18237e6c1ffee703068f7850c2a513b9a261f33ee335ed6/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d6f6e676f444226636f6c6f723d343741323438266c6f676f3d4d6f6e676f4442266c6f676f436f6c6f723d464646464646266c6162656c3d)

---

![view-img](./public/images/view-website.png)

## there will be

### 1- Home page

> _it will contain_

- a selector element for phone brands
- button to move us to the list of Apple brand phones
- button to move us to the list of Samsung brand phones

### 2- Phones list page

> _it will contain_

- list of phones cards of a brand, each card has an image, phone name, and button to move us to the details page of the selected phone
- back button to home page

### 3- details page

> _it will contain_

- img of the selected phone
- summary of most important details
- the rest of the details
- back button to home page

### 4- search box of phones

- return lest of phones names, each one moves us to the selected phone details

###### note : search box doesn't work, we're working on fixing it right now

### Images form the application

![view-img](./public/images/app-images.jpg)

---

## Get start

### repository setup

1. clone the repo
2. Run `npm run dev`

### create database and insert

1. write your database url in index file in db folder
2. Run `node index.js` inside db file

### start the applecation

1. write your database url in controller file in controller folder
2. run `npm start` or `node server.js`
3. Open http://localhost:3000 in the browser

### project structure

```
_________
        |______public
        |   |
        |   |____images
        |   |____style.css
        |
        |______server
        |   |
        |   |____controller
        |   |   |____controller.js
        |   |
        |   |____db
        |   |   |____index.js
        |   |   |____data.js
        |   |
        |   |____routes
        |   |   |____my-phone.js
        |   |
        |   |____app.js
        |   |____package-lock.json
        |   |____server.js
        |
        |______src
        |   |
        |   |____components
        |   |   |____searchBox.js
        |   |
        |   |____helpers
        |   |   |____fetch.js
        |   |
        |   |____pages
        |   |   |____buttonsPage.js
        |   |   |____cardPage.js
        |   |   |____detailsPage.js
        |   |   |____homePage.js
        |   |   |____phonesListPage.js
        |   |   |____selectBrandPage.js
        |   |
        |   |____views
        |   |   |____buttonsView.js
        |   |   |____cardView.js
        |   |   |____detailsView.js
        |   |   |____homeView.js
        |   |   |____phonesListView.js
        |   |   |____selectBrandView.js
        |   |   |____errorHandling.js
        |   |
        |   |____app.js
        |   |____constant.js
        |
        |____index.html
        |____Readme.md
```

## javascript code description

ES7

- Arrow Functions
- Block-Scope Variables
- async await
- Modules export/import
- New Built-In Methods

## Frameworks

| Framework | Version |
| --------- | ------- |
| express   | ^4.18.1 |
| mongodb   | ^4.10.0 |
| path      | ^0.12.7 |

#### MUST-TO-HAVE

- [x] Create the project structure
- [x] Create Readme file
- [x] Create welcome page
- [x] Create a page to view the list of phone
- [x] Create phones cards
- [x] Create details phone page
- [x] Create brands selector
- [x] Create search box
- [x] Create a button to back to the home page
- [x] Handling errors
- [x] style
- [x] Prepare the repository

#### NICE-TO-HAVE

- [x] add photos slider to details page
- [x] add phone photo to search phones list
- [x] back button
- [ ] A user can refresh the page and still have the current page
