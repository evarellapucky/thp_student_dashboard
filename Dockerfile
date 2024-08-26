# Étape 1: Construire l'application
FROM node:18 AS build

# Créer et définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Construire l'application
RUN npm run build

# Vérifier le contenu du répertoire /app
RUN ls -al /app
RUN ls -al /app/dist

# Étape 2: Serveur Nginx pour servir l'application construite
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port sur lequel Nginx écoute
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
