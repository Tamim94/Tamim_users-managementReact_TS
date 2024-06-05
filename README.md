##Deployer sur : https://tamimusermanagementtsproject.netlify.app
## I. Mon environnement de dev: 
IDE : IntelliJ IDEA Ultimate 2024.1

OS : Windows 10 Pro

nodeJS : v20.12.1

npm : 10.5.0

React : 18.3.1

TypeScript 5.4.5

API : https://fakeapi.platzi.com/en/rest/users/

Library : material-ui/core // idk what version tho 

Pour installer le projet si vous etes sur IntelliJ IDEA, il suffit de cloner le projet et de l'ouvrir avec IntelliJ IDEA en appuyant sur get projet from VCS et le lien du lien repo dessus pour le cloner / pull.

Dans le cas de VSCode il faudra pull ou cloner le projet de façon traditionnelle dans le terminal.

Ensuite vous normalement vos verrez des erreurs ce qui est normal il faudra aller sur la dependance / Tamim_users-managementReact_TS/ et faire un npm install pour installer les dependances du projet (react node module etc ).

Vous pourrez lancer le projet avec npm start.

Vous pourrez voir le projet sur localhost:3000. ( le port par default de react ) si vous avez des probleme de port vous pouvez faire un show netstate sur powershell et kill le proccessus qui utilise le port 3000 (ou tout simplement react vous proposera d'utilisait un autre port ).


## II.Ce que chaque directory font : 
src/views : Ce répertoire contient toutes les  pages de l'application.

src/components : Ce répertoire contient tous les composants réutilisables.

src/hooks : Ce répertoire contient tous les hooks authentification.

src/API : Ce répertoire contient tout le code lié aux API (interfaces de programmation applicative).

src/types : Ce répertoire contient tous les types TypeScript ( on a definit user et Error ).

src/contexts : Ce répertoire contient tous les contextes React.

src/layouts : Ce répertoire contient tous les composants de mise en page.

src/guards : Ce répertoire contient tous les gardes de routes (protection des routes).

Routes.tsx : Ce fichier contient toutes les routes de l'application.

App.tsx : Ce fichier contient le composant racine de l'application.

(inspiré du projet que on  a fait en classe mais avec beaucoup de modif )

Le projet est un projet de gestion d'utilisateurs avec une API fake qui permet de faire des requetes GET, POST, PUT et DELETE sur des utilisateurs.

J'ai fait un aussi une page About contact qui sont accessible logged off mais pour consulter les users (page home) il faut etre logged in no matter what .

Pour cela j'ai ajouter un fonction de creation dans la page de login pour creer un user pour se connecter (please remember ce que vous crée car j'ai pas reussi a faire le system de log automatique après la creation de compte ).

J'ai essayé de mettre l'image et nom de l'utilisateur dans le TopBar mais j'ai pas reussi a le faire fonctionner (j'ai pas reussi a recuperer les données de l'utilisateur pour les afficher dans le Appbar due aux limitation de l'api que j'ai decouvert en mettant des console log partout dans la validation login -_-).

On peut cree , update et delete les utilisateur dans la page home et on peut voir les details de chaque utilisateur en cliquant sur un user .


## III. Contact
 pour plus d'info :
golam.tamim94@gmail.com


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Documentation par defaut de react : # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




