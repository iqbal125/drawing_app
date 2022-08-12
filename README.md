# Drawing App
<br>

## Setup 

This project requires 
`node version >= 14` 
`npm version >= 7.6`

Install modules in both `client` and `server` folders. 

This project requires the env variables to be populated in the `.env` file. 

`AUTH_SECRET` is user created and can be anything you wish. 

Postgres DB setup will be required to start the app. 

#### Postgres setup

Simply create a DB instance and substitute the DB credentials and info into the `.env` file. 

Copy and paste the create table commands in `Database/schema.sql` in order to setup the tables in the DB. 

Once this is done the project is ready to go. 

<br>

## General Architecture 

### Tech Stack 

#### Front End

**React + Create React App**: The core Frontend Framework

**React Hooks + React Context**: State Management

**Styled Components (CSS-In-JS)**: CSS solution
<br>

#### Server

**Nodejs + Express: Core** Backend Framework

**Postgres**: database 
<br>

### Directory Structure

The Client and Server are separated into their own directories. 

In the Client we have a setup where we divide each individual part of a page/screen/view into its own file in the `/components` directory. Each component file could have been further categorized into the directory of its corresponding page, but is unnecessary for an app of this size. Then components are used to build a single page in the `/pages` directory. 

In the server directory we have all our nodejs code. The main business logic is contained in the `/Services` folder and each file contains the business logic for one main piece of functionality, i.e. Authentication. SQL queries are decoupled from the business logic for easier reuse and are contained in the `/Models` directory. 

<br>

## Tech Choices

### React Create-React-App
React CRA was chosen as the front end framework for this app. Other good choices that were considered include Nextjs and a homerolled webpack solution. 

React CRA is a very popular framework for building React apps. There is a very big community behind the project and a dedicated team maintaining the project as well.  

Both of these things give confidence in React CRA being a good foundation tool to build React apps on top of. 

React CRA also gives a lot of functionality out of the box that a developer would otherwise have to set up on their own. 

The convenience and reliability makes React CRA the best tool for this project. 

**Nextjs** 
<br>
Nextjs is possibly the second most popular React framework after React CRA. However, having worked with it in the past, it is not as convenient or easy as React CRA. 

Nextjs’s main benefit lies in Server Side Generation and Server Side Rendering. SSG is essentially equivalent to what React CRA does in generating a static file for your React app. Nextjs also has Sever Side Rendering, which is similar to older MVC style apps where the page is built at request time by the server. 

Nextjs makes a trade off by giving you these features in that it does a lot of proprietary things and locks you in to Nextjs. For example Nextjs uses its own special router instead of the standard React-Router. Nextjs also has special files like _app.js that have special properties and functionality. 

There is a lot of boilerplate setup that is already done for you in React CRA. 

Working through the Nextjs system is more complex and requires a lot more overhead than React CRA. 

Since we dont need SSR and will just do SSG, we can use React CRA since we will get all the benefits of SSG without the overhead of Nextjs. 

The only drawback is React CRA only generates one static file, in comparison Nextjs is able to generate a static file of each page in your app. Since this is a fairly small app, one static file will not offer performance hits for lack of code splitting. 

Also if SSR or SSG is required as the app grows. Its relatively simple to switch from React CRA to Nextjs

https://nextjs.org/docs/migrating/from-create-react-app

**Home rolled Webpack**
<br>
The other option is a “home rolled” webpack setup. Home rolled refers to a webpack setup from scratch. 

This is probably the least desirable option unless there is a specific reason for a custom webpack setup. 

We would essentially be re-creating the wheel and duplicating open source efforts with no benefits. We also would need to constantly update and maintain our Webpack solution ourselves instead of getting free updates with frameworks like React CRA and Nextjs

Also React CRA offers a “eject” option that allows you to modify the webpack setup. So if a custom webpack is required in the future it can be implemented. 


### React Contex
I choose React Context over Redux mainly because using React Context is now the industry standard. 

React context is a solution that is already a part of React and offers a better solution compared to relying on a third party library like Redux. 

Having a solution that comes with React means that there is little risk of breaking changes, incompatibility and risk of project abandonment. 

React Context can also be scaled indefinitely as the app grows. 


### CSS-In-JS
The last main Front end technology choice is styled components, which is a CSS-In-JS css solution. 

Styled components fits very well in the React ecosystem. Styled-components output to React components which works well with JSX.

styled components allow you to consolidate all your code (HTML, CSS, JS) in one file. This makes it much easier from a developer experience point of view as all your code is right in front of you at all times. 

This is in contrast to CSS modules and SASS where there could be multiple CSS files that are styling your components. 

CSS-In-JS has many advantages such as allowing arrow functions in css and also allows devs to pass in JS variables into the css. Overall this makes it a good choice for React Apps. 

Tailwind was also considered. But Tailwind uses a proprietary way of writing CSS. This means that it would be more difficult to find tutorials and resources for it, compared to vanilla CSS syntax. Also other devs not familiar with Tailwind would need a ramp up time before being able to start with it. 

CSS modules is another option, however its main benefit which is css scoping to a component also comes with styled components, but styled components also has many other benefits as well. 

### Express

Possibly the most widely used nodejs framework. Express has been around the nodejs ecosystem for a long time and has been battle tested constantly. Its popularity also means there will be tons of tools and resources available for the developer. 

Overall Express seems to be the default choice to build nodejs apps and was chosen for this project.


### Postgres

Since this project required relational data between the users and drawings, a SQL solution would be optimal. 

ORMs like Sequialize and Query Builders like Knex were also considered. However using these libraries would lead to a lock in effect, since ORMs and Query have their own proprietary language. PG on the other hand uses standard SQL syntax queries. Giving you ultimate control. 

If the Sequilaize and Knex projects were abandoned or unmaintained for example, it would require a full rewrite to use another library. PG on the other hand would allow you to just transfer your SQL queries to another library that allows standard SQL syntax. 

ORMs like Sequilize are convenient in the beginning but require you to give up a lot of control. 

The other downside is that Knex comes with a handy DB migration tool built in. But there are separate DB migration libraries in nodejs so this is not a big issue. 

There are also other popular options in this space such as MongoDB and Mongoose which allows relations in a NoSQL database. 

However SQL has a fundamental edge with relation data since that was what it was created for.  

Postgres is also by far the most popular library, giving it many resources in the nodejs ecosystem. 

https://npmtrends.com/knex-vs-mongoose-vs-mysql2-vs-pg-vs-sequelize

<br>

## Other Consideratoins

### More Time

Below are some functionalities that would be good to implement given more time. 

- Convert image from ASIIC string to image file on the backend. Save to S3 and then save the urls to the image in the database.  

- Make pagination for fetching drawings. Using limit in database query. 

- Add a password strength checker and email validator like YUP or formik. 

- Add automation testing with playwright. Test Major flows. 

- Couldnt get server tests to work with requireAuth middleware. Tests are working without middleware. Could be a issue with the supertest library. Could use playwright end to end test to fix it. https://github.com/visionmedia/supertest/issues/693. Simply remove 'requireAuth' from `API/drawing.ts` to run tests without middleware. 



### Future Expansion

- Have a page to display each drawing. Have a public and private page. Control permissions on the private page. Allow invite other users to the private view page. 

- Have page that displays only user's drawings. 










