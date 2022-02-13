# Skill Quest : Front
# /!\ A lire avant de faire quoi que ce soit /!\

## Description
Présentation visuelle de Skill Quest, Accès API BACK
## Config
```
Node             16.13.2
Npm              8.1.2
Angular CLI      13.1.4 
Angular Material 13.2.2
```
## Installation
```
$ cd ../chemin/vers/workspace
$ git clone https://github.com/Skill-Quest-AL3C/skill-quest-front.git
$ cd skill-quest-front
$ npm install
$ ng serve -o
```
***
## Compréhension des dossiers
Components : Les vues (pages) du site
```
// créer un composant
$ ng g c nomducomposant
```
Services : Contient les classes permettant de faire les appels à l'API
```
// créer un service
$ ng g s nomduservice
```
***
## Convention pour les commits
```
<type>: <description>

/!\ Ne pas écrire la description avec des accents, soyez brefs aussi !
```
### Type
```
build: changements qui affectent le build ou les dépendances externes (ex: gulp, broccoli, npm)
ci: changements de la conf CI (ex: Travis, Circle, BrowserStack, SauceLabs)
docs: changements concernant la documentation
feat: nouvelle fonctionnalité
fix: correction de bug
perf: amélioration de performance
refactor: un changement dans le code qui n'apporte pas de nouvelle fonctionnalité ni ne corrige de bug
style: changement qui n'affecte pas le fonctionnent du code (ex: espace, formattage de code, points-virgules manquants, etc)
Test: ajout ou correction de tests
```
## Liens utiles
```
Installer les outils : https://www.ganatan.com/tutorials/demarrer-avec-angular
Comprendre l'organisation des branches du git : https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow
```
