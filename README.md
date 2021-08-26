# Organic-WebApp
Angular based web app with routing application
# Foodzone

## Problem Statement

Foodzone have started business in 2013 as a organic food store. It started in a 100 sqft store at Detroit. Because of high quality products, resonable price and steady supply the store became popular, currently operates with twenty stores in Detroit and planning to open multiple stores across the country.

Foodzone wants to digitize their operation. The objective  is to create a brand of itself and increase their customer volume.

## Proposed Solution

In order to increase their product consumers Foodzone needs a solution that will help to reach out to users over the Web for buying their products.

## The roles in this application are




- Customer: Request for a product available in store and buy directly through online transaction

## Process To be implemented in Phase 1


## Backend

Product.json 

* create  a folder named "Server" , save below json and run using json-server


Model : Product.json
	
* Id : number

* Productname :string

* Qty : number



## View

#### Build the following Components. All components should be responsive. use proper styles

•	Home

•	Login

•	Dashboard

•	Header

•	Footer
. 

#### Header and Footer to be displayed in all components



#### Build routes for login, dashboard, Home. Make Default component as Home. 

#### Model -  Build  product class


### Create the below Services

#### Customerorder – for accessing HttpClient and interact with server data

Methods :
       
* addProduct(data : Product)

* fetchProduct()
          

#### Organicroute  -- for navigating to components



Methods:

* openLogin()

* openDashboard()

* openHome()

* goBack() -- use location

### Security

** Protect dashboard with canactivate guard


#### All material Modules should be part of  userdefined module called "angmaterial". Include in app module


## Detailed activities in components



### Header component 

* should consist of mat tool bar with heading to be “Organic World”

* Should have router link for home, login



### Footer component 

* should have, Contact Address and phone number



### Login component

* Use Reactive Form . username and password controls needs to be validated for null and minlength 3

* Sign in button


When you sign in , need to route to Dashboard after authenticated in canactivate guard

### Canactivate Guard

if username is admin and password is password, then navigate to dashboard


### Dashboard component

Inject releavant Services in Dashboard


* Should have template driven form with two way binding with product object

* When the user  submits,  the data to be stored in product.json. 

* Fetch data from product.json and Display the  details using mat-card in dashboard 

* logout button , which  routes to home page
 

