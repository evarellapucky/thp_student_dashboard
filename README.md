# README - Dashboard Étudiant pour The Hacking Project

## 📚 Présentation du Projet

Bienvenue dans le projet **Dashboard Étudiant** pour *The Hacking Project*. Cette application web sert de point central pour les étudiants afin de gérer leur progression. Le dashboard offre une interface conviviale où les étudiants peuvent accéder aux matériaux de cours, surveiller leur progression, et participer à la communauté. Que vous soyez débutant en code ou développeur expérimenté, ce dashboard vise à améliorer votre expérience d'apprentissage et à vous maintenir sur la bonne voie tout au long du programme The Hacking Project.

## 🚀 Technologies Utilisées

Ce projet est construit avec une pile technologique moderne pour garantir performance, évolutivité, et facilité de développement. Voici un aperçu des principales technologies utilisées :

- **Frontend** :
  - HTML5 & CSS3
  - JavaScript (ES6+)
  - React.js - pour créer des interfaces utilisateur interactives
  - tailwind css

- **Backend** :
  - Ce projet est purement frontend, la récupération des données ne comprend pas (encore) de logique particulière

- **Base de Données** :
  - JSON - une solution de base de données simple, basée sur des fichiers, adaptée à ce projet
  - Récupération de données depuis github (détaillé plus bas)

- **Gestion de Version** :
  - Git & GitHub - pour le contrôle de version et la collaboration

## ⚙️ Commandes d'Installation et de Lancement

Suivez ces étapes pour faire fonctionner le projet sur votre machine locale :

### Prérequis
Assurez-vous d'avoir les éléments suivants installés :
- **npm** ou **pnpm** comme gestionnaire de packets js
- [Git](https://git-scm.com/)
- Un éditeur de code comme [VS Code](https://code.visualstudio.com/)

### Installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/evarellapucky
   cd thp_student_dashboard
   ```
2. **Initialisation**
    ```bash
    npm i
    ```
    **ou**
    ```bash
    pnpm i
    ```
3. **Lancement du serveur ***
    ```bash
    npm run dev
    ```
    **ou**
    ```bash
    pnpm run dev
    ```


## Consommation des Endpoints API

Ce projet frontend utilise les endpoints d'une API externe pour récupérer et gérer les données nécessaires à l'application. Voici comment les appels à l'API sont gérés et ce que tu dois savoir pour configurer et utiliser l'application correctement.

### Utilisation des Endpoints dans le Frontend

Le frontend utilise Axios et Fetch API pour faire des requêtes HTTP aux endpoints de l'API. Voici une description des principaux endpoints appelés et comment ils sont utilisés dans le code :

#### 1. **Récupération des Missions**

- **But :** Afficher le nombre de missions dans le tableau de bord et la liste des missions dans la page missions.
- **Endpoint :** `https://api.github.com/repos/${owner}/${repo}/issues`
- **Méthode :** `GET`
- **Utilisation :**
  - **Code Exemple :**

    ```javascript
    try {
        do {
          const response = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/issues`,
            {
              headers: {
                Accept: "application/vnd.github.v3+json",
                Authorization: `token ${token}`,
              },
              params: {
                per_page: perPage,
                page: page,
              },
            }
          );
          ...
        } while (hasMoreIssues);
    } catch (err) {
        setError("Error lors de la récupération des issues");
        console.error(err);
    }
    ```
- **Où dans le frontend :** Utilisé dans `App.jsx` pour afficher le nombre de missions dans le tableau de bord et stocker la liste des missions dans un atom qui sera affiché dans la page missions.

#### 2. **Récupération des Users**

- **But :** Afficher la progression, les points THP, le nombre de Joker et le nombre de coup de main dans le tableau de bord. Le meme Endpoint servira aussi à afficher les details des utilisateurs dans l'onglet mon profil, annuaire, leaderboard et mon parcours.
- **Endpoint :** `https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json`
- **Méthode :** `GET`
- **Utilisation :**
  - **Code Exemple :**

    ```javascript
    try {
        const response = await axios.get('https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json');
        const selectedUser = response.data.users.find(user => user.id === userId)
        ...
    } catch (error) {
        console.error('Erreur lors du fetch des utilisateurs:', error);
    } finally {
        setLoading(false);
    }
    ```
- **Où dans le frontend :** Utilisé dans `TopCards.jsx`, `MyProfile.jsx`,`Directory.jsx`, `Leaderboard.jsx`, `MyJourney.jsx`.

#### 3. **Récupération des filleuls**

- **But :** Afficher la progression, les points THP, le nombre de Joker et le nombre de coup de main dans le tableau de bord.
- **Endpoint :** `https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Godchildren.json`
- **Méthode :** `GET`
- **Où dans le frontend :** Utilisé dans `Ambassador.jsx`.

#### 4. **Récupération des Ressources**

- **But :** Afficher l'agenda et les ressources de la semaine dans le tableau de bord. Le meme Endpoint sera aussi utilisé pour afficher les ressources du jour.
- **Endpoint :** `https://raw.githubusercontent.com/YannRZG/Missions-THP/main/Resources.json`
- **Méthode :** `GET`
- **Utilisation :**
  - **Code Exemple :**

    ```javascript
    try {
        const response = await fetch('https://raw.githubusercontent.com/YannRZG/Missions-THP/main/Resources.json');
        const result = await response.json();
        ...
    } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
    }
    ```
- **Où dans le frontend :** Utilisé dans `Week.jsx`, `Agenda.jsx`, `AgendaList.jsx`, `Today.jsx`.

#### 5. **Récupération des FAQ**

- **But :** Afficher la liste des questions dans la page aide/FAQ.
- **Endpoint :** `https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/faq.json`
- **Méthode :** `GET`
- **Utilisation :**
  - **Code Exemple :**

    ```javascript
    try {
        const response = await axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/faq.json");
        ...
    }
    ```
- **Où dans le frontend :** Utilisé dans `CategoryDetail.jsx` et `CategoryList.jsx`.

#### 6. **Récupération de la liste des coups de main et du daily survey (retour sur la veille)**

- **But :** Afficher la liste détaillée et le graphique des coups de mains reçu et les retours sur la veille.
- **Endpoint :** `https://raw.githubusercontent.com/YannRZG/Missions-THP/main/handshakes.json` et `https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/difficult.json`
- **Méthode :** `GET`
- **Utilisation :**
  - **Code Exemple :**

    ```javascript
    try {
        const [handshakesResponse, difficultsResponse] = await axios.all([
          axios.get(
            "https://raw.githubusercontent.com/YannRZG/Missions-THP/main/handshakes.json"
          ),
          axios.get(
            "https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/difficult.json"
          ),
        ]);
        ...
    }
    ```
- **Où dans le frontend :** Utilisé dans `Daily.jsx` et `DailyTab.jsx`.

#### 7. **Récupération de la liste des Users**

- **But :** Afficher la liste des élèves dans une liste déroulante.
- **Endpoint :** `https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Users.json`
- **Méthode :** `GET`
- **Où dans le frontend :** Utilisé dans `DailyModal.jsx`.

#### 8. **Récupération de la liste des Favoris**

- **But :** Afficher la liste des ressources mises en favoris. Ce Endpoint est aussi utilisé pour développer la fonction recherche.
- **Endpoint :** `https://raw.githubusercontent.com/evarellapucky/Favorites/main/favorites.json`
- **Méthode :** `GET`
- **Où dans le frontend :** Utilisé dans `Favorites.jsx` et `Search`.


## Configuration avec le fichier `.env`

Ce projet utilise un fichier `.env` pour gérer le token nécessaire au bon fonctionnement de l'application, spécifiquement pour la consultation des missions THP.
L'application fonctionnera sans le token, cependant le nombre de requete GET Github est limité à 60 requetes par heur. Ce token permettra d'étendre le nombre de requete à 5000. 

__Le choix d'utiliser un token perso par eleve ou un token de THP reste à décider.__

### Exemple du fichier `.env`

VITE_GITHUB_TOKEN=ghp***************

### Comment récupérer le token ?
https://github.com/settings/tokens > generate new token > generate new token (classic) > cocher au minimum : "public_repo"


## Contributeurs :
Merci à tous ceux qui ont contribué à ce projet !
- [@evarellapucky](https://github.com/evarellapucky)
- [@YannRZG](https://github.com/YannRZG)
- [@Marcaraph](https://github.com/Marcaraph)
- [@Korblen](https://github.com/Korblen)
- [@AlexandreTedesco](https://github.com/AlexandreTedesco)
- [@jeremie-olivier](https://github.com/jeremie-olivier)
- [@istarengwa](https://github.com/istarengwa)
- [@tommy-pellerin](https://github.com/tommy-pellerin)


