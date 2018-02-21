# Application d'exemple qui permet de rechercher un artiste et afficher son profil depuis l'API Spotify

Réalisé en février 2018

## Installation

**Télécharger le projet**

```
git clone https://github.com/Nezran/Wavesound
```


**Ensuite installer les dépendances**


 ```
 npm install
 ```

Créer un compte et une application chez : https://developer.spotify.com/ dans le but d'avoir le client id et client secret nécessaire afin d'effectuer les requêtes sur l'API.

Tutoriel : https://developer.spotify.com/web-api/tutorial/

Url de retour : http://localhost:3000/auth/callback OU le modifier dans le fichier conf et react router ensuite

**Dupliquer le fichier config**

Et modifier les 3 variables obligatoire 


```
cp config_copy.js config.js
```

```
config.client_id = 'vos informations ici';
config.client_secret = 'vos informations ici';
```

Démarrer le projet

```
npm start
```
## TEST

Actuellement 2 tests

- Test d'un reducer (src/reducers/artistes.test.js)
- Snapshot test de la vue search (src/scenes/search.js)

```
npm test
```
