import { recipe } from './dsl'

/** Lot 4 de desserts : pâtisserie française, express, chocolat, fruits de saison, airfryer. */
export const DESSERTS_4 = [
  // ---------------------------------------------------------------- pâtisserie
  recipe(
    'Profiteroles au chocolat',
    '🍫 dessert 60 difficile 2 four,casserole 6',
    'Farine 75, Beurre 60, Œuf 3, Sucre 5, Glace 500, Chocolat noir 120, Crème liquide 100, Sel',
    `Porter à ébullition 12 cl d'eau avec le beurre, le sucre et le sel ; ajouter la farine d'un coup et dessécher 1 minute.
     Hors du feu, incorporer les œufs un à un : la pâte doit former un ruban.
     Pocher des petites boules et cuire 25 minutes à 180 °C sans ouvrir le four.
     Garnir de glace et napper de chocolat fondu dans la crème chaude.`,
  ),
  recipe(
    'Paris-brest express à la crème de noisette',
    '🥨 dessert 70 difficile 2 four,casserole 6',
    'Farine 75, Beurre 160, Œuf 5, Sucre 100, Lait 300, Maïzena 25, Noisettes 80, Amandes effilées 20, Sel',
    `Pâte à choux : 12 cl d'eau, 60 g de beurre, sel, farine, puis 3 œufs ; pocher une couronne, parsemer d'amandes et cuire 30 minutes à 180 °C.
     Crème : lait chaud versé sur 2 œufs, sucre et maïzena, épaissir sur le feu, refroidir.
     Mixer les noisettes grillées en poudre, fouetter avec le reste du beurre mou puis la crème.
     Couper la couronne, garnir de crème et refermer.`,
  ),
  recipe(
    'Tarte bourdaloue aux poires',
    '🍐 dessert 60 moyen 2 four 8',
    'Pâte sablée 1, Poire 4, Poudre d\'amande 100, Beurre 100, Sucre 100, Œuf 2, Amandes effilées 20',
    `Préchauffer le four à 180 °C, foncer le moule.
     Crème d'amande : beurre mou, sucre, poudre d'amande et œufs.
     L'étaler sur la pâte, disposer les poires en lamelles en éventail.
     Parsemer d'amandes et cuire 40 minutes.`,
  ),
  recipe(
    'Tarte normande aux pommes',
    '🍏 dessert 55 facile 1 four 8',
    'Pâte brisée 1, Pomme 4, Œuf 2, Crème fraîche 150, Sucre 80, Sucre vanillé 1, Cannelle',
    `Préchauffer le four à 180 °C, foncer le moule.
     Disposer les pommes en quartiers, cuire 15 minutes.
     Verser œufs, crème et sucres battus, saupoudrer de cannelle.
     Poursuivre 25 minutes.`,
  ),
  recipe(
    'Fraisier simplifié',
    '🍓 dessert 90 difficile 3 four,casserole 8',
    'Œuf 7, Sucre 200, Farine 100, Lait 400, Maïzena 40, Beurre 150, Fraise 600, Extrait de vanille, Sucre glace 20',
    `Génoise : fouetter 4 œufs et 100 g de sucre au bain-marie jusqu'à triplement, incorporer la farine ; cuire 25 minutes à 180 °C.
     Crème : lait vanillé versé sur 3 jaunes, 80 g de sucre et maïzena, épaissir ; refroidir puis fouetter avec le beurre mou.
     Couper la génoise en deux, imbiber d'un sirop léger avec le reste du sucre.
     Monter dans un cercle : génoise, fraises coupées en bordure, crème, fraises, crème, génoise. Réfrigérer 4 heures.`,
  ),
  recipe(
    'Éclairs au chocolat',
    '🍫 dessert 75 difficile 2 four,casserole 8',
    'Farine 75, Beurre 60, Œuf 5, Sucre 80, Lait 400, Maïzena 30, Chocolat noir 120, Crème liquide 50, Sel',
    `Pâte à choux avec 12 cl d'eau, le beurre, le sel, la farine et 3 œufs ; pocher des boudins et cuire 30 minutes à 180 °C.
     Crème pâtissière chocolat : lait chaud, 2 œufs, sucre, maïzena, puis 60 g de chocolat.
     Garnir les éclairs par en dessous.
     Glacer avec le reste du chocolat fondu dans la crème.`,
  ),
  recipe(
    'Mille-feuille express',
    '🥮 dessert 50 moyen 2 four,casserole 6',
    'Pâte feuilletée 1, Lait 500, Œuf 3, Sucre 100, Maïzena 45, Extrait de vanille, Sucre glace 60',
    `Piquer la pâte, la cuire 20 minutes à 190 °C entre deux plaques pour qu'elle reste plate.
     Préparer une crème pâtissière vanillée bien ferme et la refroidir.
     Couper la pâte en trois bandes, alterner pâte et crème.
     Saupoudrer de sucre glace et réfrigérer 1 heure avant de trancher.`,
  ),
  recipe(
    'Gâteau breton au beurre',
    '🧈 dessert 60 moyen 1 four 8',
    'Farine 250, Beurre 200, Sucre 200, Œuf 4, Sel',
    `Préchauffer le four à 180 °C.
     Mélanger beurre mou et sucre, ajouter les œufs puis la farine et le sel.
     Étaler dans un moule beurré, rayer le dessus à la fourchette et dorer à l'œuf.
     Cuire 40 minutes.`,
  ),
  recipe(
    'Moelleux aux noisettes',
    '🌰 dessert 40 facile 2 four 6',
    'Noisettes 100, Beurre 100, Sucre 100, Œuf 3, Farine 50',
    `Préchauffer le four à 180 °C.
     Mixer les noisettes grillées en poudre.
     Mélanger avec beurre fondu, sucre, œufs et farine.
     Cuire 25 minutes.`,
  ),
  recipe(
    'Cannelés bordelais',
    '🍮 dessert 75 moyen 1 four,casserole 6',
    'Lait 500, Beurre 50, Farine 100, Sucre 200, Œuf 3, Extrait de vanille',
    `La veille : chauffer lait, beurre et vanille ; verser sur farine, sucre et œufs battus ; réfrigérer.
     Préchauffer le four à 250 °C, beurrer des moules.
     Remplir aux trois quarts, cuire 10 minutes à 250 °C puis 50 minutes à 180 °C.
     Démouler tiède : croûte caramélisée, cœur moelleux.`,
  ),

  // ---------------------------------------------------------------- chocolat
  recipe(
    'Fondant chocolat-caramel au beurre salé',
    '🍫 dessert 40 moyen 2 four,casserole 8',
    'Chocolat noir 200, Beurre 160, Sucre 180, Œuf 4, Farine 50, Crème liquide 100, Sel',
    `Faire un caramel avec 80 g de sucre, ajouter la crème chaude, 20 g de beurre et une pincée de sel.
     Faire fondre chocolat et reste du beurre, ajouter reste du sucre, œufs, farine et la moitié du caramel.
     Cuire 22 minutes à 180 °C et napper du reste de caramel.`,
  ),
  recipe(
    'Truffes au chocolat',
    '🍫 dessert 30 facile 2 casserole 6',
    'Chocolat noir 200, Crème liquide 100, Beurre 30, Cacao en poudre 30',
    `Verser la crème bouillante sur le chocolat, mélanger, ajouter le beurre.
     Réfrigérer 2 heures.
     Former des boules et les rouler dans le cacao.`,
  ),
  recipe(
    'Mousse au chocolat blanc & framboises',
    '🍫 dessert 25 facile 2 casserole 4',
    'Chocolat blanc 150, Crème liquide 250, Framboise 150',
    `Faire fondre le chocolat blanc avec 50 g de crème, laisser tiédir.
     Monter le reste de crème en chantilly ferme et l'incorporer.
     Alterner mousse et framboises dans des verres, réfrigérer 3 heures.`,
  ),
  recipe(
    'Cookies géants au chocolat à l\'airfryer',
    '🍪 dessert 20 facile 1 airfryer 4',
    'Beurre 60, Sucre roux 60, Œuf 1, Farine 120, Levure chimique 0.5, Pépites de chocolat 80',
    `Mélanger beurre mou et sucre, ajouter l'œuf, la farine, la levure et les pépites.
     Former 4 gros cookies sur du papier cuisson.
     Cuire 9 minutes à 160 °C à l'airfryer : ils durcissent en refroidissant.`,
  ),
  recipe(
    'Gâteau au chocolat sans farine',
    '🍫 dessert 45 facile 2 four 8',
    'Chocolat noir 250, Beurre 150, Sucre 120, Œuf 5, Poudre d\'amande 50',
    `Préchauffer le four à 170 °C.
     Faire fondre chocolat et beurre, ajouter sucre, jaunes et poudre d'amande.
     Incorporer les blancs montés en neige.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Cheesecake au chocolat',
    '🍫 dessert 75 moyen 2 four 8',
    'Spéculoos 200, Beurre 60, Fromage frais 500, Chocolat noir 150, Sucre 100, Œuf 3, Crème liquide 100',
    `Préchauffer le four à 160 °C, tasser au fond d'un moule les spéculoos mixés avec le beurre fondu.
     Fouetter fromage frais, sucre, œufs, crème et chocolat fondu.
     Cuire 50 minutes, laisser refroidir dans le four puis une nuit au frais.`,
  ),
  recipe(
    'Rochers noisettes & chocolat',
    '🌰 dessert 25 facile 2 casserole 6',
    'Chocolat noir 150, Noisettes 120, Amandes effilées 30',
    `Torréfier noisettes et amandes à sec 5 minutes, concasser grossièrement les noisettes.
     Faire fondre le chocolat, mélanger avec les fruits secs.
     Déposer des petits tas sur du papier cuisson et laisser durcir au frais.`,
  ),

  // ---------------------------------------------------------------- express
  recipe(
    'Yaourt glacé aux fruits rouges',
    '🍓 dessert 10 facile 1 sans-cuisson 4',
    'Fruits rouges surgelés 300, Yaourt grec 300, Miel 40',
    `Sortir les fruits du congélateur 5 minutes avant : ils doivent rester durs mais se mixer.
     Mixer les fruits encore surgelés avec le yaourt et le miel jusqu'à obtenir une texture lisse.
     Servir aussitôt comme une glace à l'italienne, ou remettre 30 minutes au congélateur.`,
  ),
  recipe(
    'Banana split maison',
    '🍌 dessert 10 facile 1 casserole 2',
    'Banane 2, Glace 300, Chocolat noir 60, Crème liquide 80, Amandes effilées 20',
    `Couper les bananes en deux dans la longueur.
     Faire fondre le chocolat dans 30 g de crème, fouetter le reste en chantilly.
     Dresser bananes, boules de glace, sauce chocolat, chantilly et amandes.`,
  ),
  recipe(
    'Verrines spéculoos, pommes & mascarpone',
    '🍏 dessert 20 facile 1 poele 4',
    'Pomme 3, Beurre 15, Sucre roux 30, Cannelle, Mascarpone 200, Crème liquide 100, Spéculoos 80',
    `Faire caraméliser les pommes en dés dans le beurre, le sucre et la cannelle.
     Fouetter mascarpone et crème.
     Alterner spéculoos émiettés, pommes et crème dans des verres.`,
  ),
  recipe(
    'Crêpes Suzette',
    '🍊 dessert 30 moyen 2 poele 4',
    'Farine 125, Œuf 2, Lait 250, Beurre 80, Sucre 80, Orange 3',
    `Préparer une pâte à crêpes avec farine, œufs, lait et 20 g de beurre fondu ; cuire 8 crêpes.
     Faire fondre le reste du beurre avec le sucre, ajouter zestes et jus d'orange, réduire.
     Plier les crêpes en quatre et les réchauffer dans la sauce.`,
  ),
  recipe(
    'Pain de mie caramélisé au sucre & fraises',
    '🧇 dessert 20 facile 1 poele 2',
    'Pain de mie 4, Beurre 30, Sucre 30, Cannelle, Fraise 150',
    `Beurrer les tranches de pain, les saupoudrer de sucre et de cannelle.
     Les dorer côté sucré dans une poêle chaude jusqu'à caramélisation.
     Servir avec les fraises.`,
  ),
  recipe(
    'Salade de fruits exotiques au citron vert',
    '🥭 dessert 15 facile 1 sans-cuisson 4',
    'Mangue 1, Ananas 0.5, Kiwi 2, Banane 1, Citron vert 1, Menthe 1, Sucre 15',
    `Couper les fruits en cubes.
     Arroser du jus et du zeste de citron vert mêlés au sucre.
     Parsemer de menthe et servir frais.`,
  ),

  // ---------------------------------------------------------------- fruits de saison
  recipe(
    'Tarte aux abricots & amandes',
    '🍑 dessert 50 facile 2 four 8',
    'Pâte sablée 1, Abricot 12, Poudre d\'amande 80, Beurre 60, Sucre 80, Œuf 1',
    `Préchauffer le four à 180 °C, foncer le moule.
     Étaler une crème d'amande (beurre, sucre, amande, œuf).
     Disposer les abricots coupés en deux, face bombée vers le bas.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Clafoutis aux framboises',
    '🍓 dessert 40 facile 2 four 6',
    'Framboise 300, Œuf 3, Sucre 80, Farine 60, Lait 250, Crème liquide 100, Beurre 10',
    `Préchauffer le four à 180 °C.
     Fouetter œufs, sucre, farine, lait et crème.
     Verser sur les framboises dans un plat beurré.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Crumble rhubarbe-fraise',
    '🌿 dessert 45 facile 1 four 4',
    'Rhubarbe 400, Fraise 200, Sucre 60, Farine 100, Beurre 80, Sucre roux 70',
    `Préchauffer le four à 180 °C.
     Mélanger rhubarbe en tronçons, fraises et sucre dans un plat.
     Couvrir du crumble sablé (farine, beurre, sucre roux).
     Cuire 35 minutes.`,
  ),
  recipe(
    'Pêches rôties au romarin & miel',
    '🍑 dessert 20 facile 1 four,airfryer 4',
    'Pêche 4, Miel 30, Romarin, Beurre 15, Yaourt grec 150',
    `Couper les pêches en deux et retirer le noyau.
     Arroser de miel, beurre et romarin.
     Rôtir 15 minutes à 200 °C (10 minutes à l'airfryer). Servir avec le yaourt.`,
  ),
  recipe(
    'Gratin de fruits rouges au sabayon',
    '🍓 dessert 20 moyen 2 casserole 4',
    'Fruits rouges surgelés 400, Œuf 4, Sucre 60, Jus de fruits 60',
    `Décongeler les fruits et les répartir dans des plats individuels.
     Fouetter jaunes, sucre et jus au bain-marie jusqu'à ce que le sabayon soit mousseux et épais.
     Napper les fruits et passer 2 minutes sous le gril très chaud.`,
  ),
  recipe(
    'Poires au vin rouge & cannelle',
    '🍷 dessert 40 facile 1 casserole 4',
    'Poire 4, Vin rouge 500, Sucre 100, Cannelle, Badiane, Orange 1',
    `Porter à frémissement vin, sucre, épices et zeste d'orange.
     Y pocher les poires épluchées 25 minutes.
     Laisser refroidir dans le sirop réduit.`,
  ),
  recipe(
    'Tarte aux myrtilles',
    '🫐 dessert 50 facile 2 four 8',
    'Pâte sablée 1, Myrtille 400, Œuf 2, Crème fraîche 100, Sucre 70, Poudre d\'amande 40',
    `Préchauffer le four à 180 °C, foncer le moule et saupoudrer de poudre d'amande.
     Répartir les myrtilles.
     Verser œufs, crème et sucre battus, cuire 35 minutes.`,
  ),
  recipe(
    'Pommes caramélisées & glace vanille',
    '🍎 dessert 15 facile 1 poele 4',
    'Pomme 4, Beurre 30, Sucre roux 50, Cannelle, Glace 400',
    `Couper les pommes en quartiers.
     Les caraméliser 10 minutes dans le beurre et le sucre, ajouter la cannelle.
     Servir chaud avec la glace.`,
  ),

  // ---------------------------------------------------------------- airfryer
  recipe(
    'Churros à l\'airfryer',
    '🥨 dessert 30 moyen 1 airfryer,casserole 4',
    'Farine 125, Beurre 40, Sucre 60, Œuf 1, Cannelle, Chocolat noir 80, Crème liquide 50, Sel',
    `Porter 25 cl d'eau, beurre et sel à ébullition, ajouter la farine, dessécher puis incorporer l'œuf hors du feu.
     Pocher des boudins sur du papier cuisson, les badigeonner d'un peu de beurre.
     Cuire 10 minutes à 190 °C, rouler dans le sucre à la cannelle.
     Servir avec le chocolat fondu dans la crème.`,
  ),
  recipe(
    'Crumble individuel aux pommes à l\'airfryer',
    '🍏 dessert 20 facile 1 airfryer 2',
    'Pomme 2, Farine 40, Beurre 30, Sucre roux 30, Cannelle',
    `Couper les pommes en dés dans deux ramequins, ajouter la cannelle.
     Sabler farine, beurre et sucre, couvrir les fruits.
     Cuire 14 minutes à 170 °C.`,
  ),
  recipe(
    'Brioche perdue à l\'airfryer',
    '🍞 dessert 15 facile 1 airfryer 2',
    'Pain de mie 4, Œuf 2, Lait 120, Sucre 20, Cannelle, Fruits rouges surgelés 100',
    `Battre œufs, lait, sucre et cannelle, y tremper le pain.
     Cuire 8 minutes à 180 °C sur du papier cuisson en retournant.
     Servir avec les fruits rouges décongelés.`,
  ),
  recipe(
    'Mug cake au chocolat à l\'airfryer',
    '🍫 dessert 15 facile 1 airfryer 2',
    'Chocolat noir 50, Beurre 30, Sucre 30, Œuf 1, Farine 25',
    `Faire fondre chocolat et beurre, ajouter sucre, œuf et farine.
     Répartir dans deux ramequins.
     Cuire 8 minutes à 170 °C.`,
  ),
]
