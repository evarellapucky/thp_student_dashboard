



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


