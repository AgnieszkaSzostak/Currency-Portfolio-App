# :dollar: Currency portfolio  :euro:
## :small_orange_diamond: About project:
Application that calculates potential profit or loss from owned currencies purchased with Polish zloty. 

### :arrow_forward: View live version: **[DEMO](https://agnieszkaszostak.github.io/Currency-Portfolio-App/)**

User is able to input following information:
* type of owned currency
* amount of currency
* purchase date
* purchase price (provided automatically if type of owned currency and purchase date provided)

All of this data is being stored in localStorage to retrieve the current exchange rates and load them to the application view on the next visit.


The state is being managed by Redux with separated Store for localStorage data and API data. Created in a way that each element can be easily transferred to another application.

//Screenshot
 
## Built with:


**React / Redux / API and Fetch / Webpack / BEM** 
 
## :cd: How to run a project:

### Prerequisites:
* npm 

  ```sh
  npm install npm@latest -g
  ```

### Installation
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.
At first install all dependencies:
```sh
npm install
```
1. It is possible that the number of API requests has exceeded the limit, so get a free&fresh API key at [API](https://exchangeratesapi.io/)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API key in `config.js`
   ```js
   const apiKey = 'ENTER YOUR API';
   ```
5. Enter
   ```sh
   npm start
   ```
 Project runs at port 3000.

## :small_orange_diamond: Usage example

## Credits:
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/agnieszkaszostak/)


