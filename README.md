Challenge : créer une interface React de recherche et de réservation de trajet

Objectif

Vous allez devoir créer une application web monopage permettant à un utilisateur de rechercher les trajet disponibles à partir d’un arrêt de départ et de réserver celui de son choix.

Pour cela, vous allez utiliser une API qui comporte 3 endpoints permettant de récupérer la liste des arrêts, la liste des trajets et de réserver un trajet.

Chez Padam, nous utilisons *react-bootstrap*, mais vous pouvez utiliser la bibliothèque de composants de votre choix pour cet exercice.

API

Liste des arrêts

URL : [https://6130d11c8066ca0017fdaa97.mockapi.io/stops ](https://6130d11c8066ca0017fdaa97.mockapi.io/stops)Méthode : GET

Liste des trajets

URL : [https://6130d11c8066ca0017fdaa97.mockapi.io/trips ](https://6130d11c8066ca0017fdaa97.mockapi.io/trips)Méthode : GET

Vous pouvez filtrer les résultats en passant en paramètre GET le nom du champ et sa valeur. Par exemple, pour obtenir les trajets démarrant de l’arrêt *Les Tuileries et le Louvre*, vous devez appeler

[https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=Les% 20Tuileries%20et%20le%20Louvre](https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=Les%20Tuileries%20et%20le%20Louvre)

Réservation d’un trajet

URL : [https://6130d11c8066ca0017fdaa97.mockapi.io/book/:tripId ](https://6130d11c8066ca0017fdaa97.mockapi.io/book/:tripId)Méthode : PUT

Vous devez passer l'identifiant numérique du trajet (champ id de l’objet *trip*) dans l’URL à la place de :tripId. Si la réservation réussi, vous obtiendrez la réponse {"success": true}.

Interface

L’interface devrait comporter au moins les éléments suivants :

- un sélecteur d’arrêt de départ ;
- un tableau de trajets proposés ;
- un bouton pour chaque trajet proposé permettant de le réserver.

Vous êtes libre dans le choix des composants et le design de la page.

Utilisation et comportement de l’interface

1. Le sélecteur d’arrêt de départ se remplit automatiquement avec la liste complète des arrêts ;
1. L’utilisateur sélectionne un arrêt de départ ;
1. Le tableau de tous les trajets correspondant à l’arrêt de départ s’affiche avec les dates et heures de départ et d’arrivée formatées pour une lecture humaine ;
1. L’utilisateur clique sur le bouton de réservation du trajet de son choix ;
1. Une requête de réservation est envoyée sur l’API et un message de confirmation de la réservation est affiché à l’utilisateur si la réservation a réussi.

Bonus

Si vous êtes motivé, vous pouvez aller encore plus loin en soignant le design et l’expérience utilisateur, en groupant les trajets par destination par exemple !
