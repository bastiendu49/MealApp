import { recipe } from './dsl'

/** Lot 5 : cuisine de printemps et d'été, barbecue à la poêle, salades-repas, plats frais. */
export const PLATS_5 = [
  // ---------------------------------------------------------------- printemps
  recipe(
    'Risotto aux asperges & parmesan',
    '🌱 plat vege 35 moyen 2 casserole 2',
    'Riz arborio 160, Asperge verte 1, Oignon 1, Vin blanc 80, Bouillon cube 1, Parmesan 40, Beurre 20, Citron 0.5, Sel',
    `Couper les asperges en tronçons, garder les pointes.
     Faire revenir l'oignon, nacrer le riz, déglacer au vin.
     Ajouter 80 cl de bouillon chaud louche par louche, avec les tronçons à mi-cuisson et les pointes 4 minutes avant la fin.
     Finir avec beurre, parmesan et zeste de citron.`,
  ),
  recipe(
    'Tarte fine aux asperges & chèvre',
    '🥧 plat vege 35 facile 2 four 4',
    'Pâte feuilletée 1, Asperge verte 1, Chèvre frais 150, Crème fraîche 50, Citron 0.5, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Étaler la pâte sur une plaque, la tartiner du chèvre mélangé à la crème et au zeste.
     Disposer les asperges crues, huiler, saler, poivrer.
     Cuire 25 minutes.`,
  ),
  recipe(
    'Navarin printanier de poulet',
    '🥕 plat volaille 45 facile 1 casserole 4',
    'Cuisse de poulet 4, Carotte 4, Navet 2, Petits pois surgelés 200, Pomme de terre 400, Oignon nouveau 1, Bouillon cube 1, Thym, Beurre 20, Sel',
    `Dorer les cuisses dans le beurre avec l'oignon nouveau.
     Ajouter bouillon à mi-hauteur, thym, carottes et navets ; couvrir 20 minutes.
     Ajouter pommes de terre, 15 minutes, puis petits pois 5 minutes.`,
  ),
  recipe(
    'Petits pois à la française & saucisses',
    '🫛 plat viande 30 facile 1 casserole,poele 2',
    'Petits pois surgelés 400, Salade verte 0.5, Oignon nouveau 1, Lardons 80, Beurre 20, Saucisse 4, Sel',
    `Faire revenir lardons et oignon nouveau dans le beurre.
     Ajouter petits pois, salade émincée et 10 cl d'eau, couvrir 12 minutes.
     Cuire les saucisses à la poêle à côté.`,
  ),
  recipe(
    'Radis beurre & tartines de chèvre, œufs mollets',
    '🌸 plat vege 15 facile 1 casserole 2',
    'Radis 1, Beurre 30, Pain de campagne 4, Chèvre frais 100, Œuf 4, Ciboulette 1, Sel',
    `Cuire les œufs 6 minutes, les rafraîchir.
     Tartiner le pain de chèvre et de ciboulette.
     Servir avec les radis, le beurre, le sel et les œufs ouverts.`,
  ),
  recipe(
    'Agneau de printemps & légumes nouveaux',
    '🐑 plat viande 60 moyen 3 four 4',
    'Épaule d\'agneau 900, Carotte 4, Pomme de terre 600, Oignon nouveau 2, Ail 4, Romarin, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 180 °C.
     Disposer légumes et gousses d'ail dans un plat, poser l'agneau frotté d'huile et de romarin.
     Cuire 50 minutes en arrosant, puis laisser reposer 10 minutes.`,
  ),
  recipe(
    'Fenouil braisé & cabillaud',
    '🐟 plat poisson 35 facile 2 poele 2',
    'Fenouil 2, Cabillaud 300, Orange 1, Olives noires 30, Huile d\'olive, Sel, Poivre',
    `Couper le fenouil en quartiers et le dorer 5 minutes dans l'huile.
     Verser le jus de l'orange, saler, couvrir et braiser 15 minutes : il doit être fondant.
     Poser le poisson dessus avec les olives, couvrir 8 minutes et poivrer.`,
  ),
  recipe(
    'Salade de fenouil, orange & feta',
    '🍊 plat vege 15 facile 1 sans-cuisson 2',
    'Fenouil 1, Orange 2, Feta 100, Olives noires 30, Menthe 1, Pain de campagne 2, Huile d\'olive, Sel',
    `Émincer très finement le fenouil.
     Peler les oranges à vif et les trancher.
     Assembler avec feta, olives, menthe et huile. Servir avec le pain.`,
  ),

  // ---------------------------------------------------------------- été
  recipe(
    'Tomates & courgettes farcies au boulgour',
    '🍅 plat vege 50 facile 1 four 4',
    'Tomate 4, Courgette 2, Boulgour 120, Feta 100, Oignon 1, Menthe 1, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 190 °C. Évider tomates et courgettes, hacher la chair.
     Faire revenir l'oignon et la chair, ajouter le boulgour et 20 cl d'eau, cuire 10 minutes.
     Ajouter feta et menthe, farcir les légumes.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Aubergines à la parmigiana',
    '🍆 plat vege 60 moyen 1 four 4',
    'Aubergine 3, Coulis de tomate 500, Mozzarella 2, Parmesan 60, Basilic 1, Huile d\'olive, Sel',
    `Trancher les aubergines, les huiler et les rôtir 20 minutes à 200 °C.
     Alterner dans un plat coulis, aubergines, mozzarella, basilic et parmesan.
     Cuire 30 minutes à 180 °C et laisser reposer avant de servir.`,
  ),
  recipe(
    'Poivrons marinés, burrata & pain grillé',
    '🫑 plat vege 35 facile 2 four 2',
    'Poivron 4, Burrata 1, Ail 1, Basilic 1, Pain de campagne 4, Vinaigre balsamique, Huile d\'olive, Sel',
    `Rôtir les poivrons entiers 25 minutes à 230 °C, les laisser tiédir sous un torchon et les peler.
     Les couper en lanières, assaisonner d'ail, huile et balsamique.
     Servir avec la burrata, le basilic et le pain grillé.`,
  ),
  recipe(
    'Salade de pâtes au poulet grillé & légumes d\'été',
    '🥗 plat volaille 25 facile 1 casserole,poele 2',
    'Penne 180, Blanc de poulet 2, Courgette 1, Tomate cerise 200, Poivron 1, Pesto 40, Roquette 40, Huile d\'olive, Sel',
    `Cuire les pâtes et les rafraîchir.
     Griller le poulet et la courgette en lamelles à la poêle.
     Mélanger avec poivron, tomates, pesto et roquette.`,
  ),
  recipe(
    'Panzanella toscane',
    '🍅 plat vege 20 facile 1 sans-cuisson 2',
    'Pain de campagne 4, Tomate 4, Concombre 1, Oignon rouge 0.5, Basilic 1, Mozzarella 1, Câpres 15, Vinaigre de vin, Huile d\'olive, Sel',
    `Couper le pain rassis en cubes et les tomates en morceaux.
     Mélanger avec concombre, oignon, câpres, huile et vinaigre ; laisser le pain s'imbiber 10 minutes.
     Ajouter mozzarella et basilic.`,
  ),
  recipe(
    'Brochettes de bœuf marinées & salade de tomates',
    '🍢 plat viande 30 moyen 3 poele 2',
    'Steak de bœuf 2, Poivron 1, Oignon rouge 1, Sauce soja 20, Ail 1, Thym, Tomate 3, Pomme de terre 400, Huile d\'olive, Sel',
    `Mariner le bœuf en cubes avec soja, ail, thym et huile.
     Cuire les pommes de terre à l'eau.
     Monter les brochettes avec poivron et oignon, les griller 8 minutes à la poêle-gril.
     Servir avec une salade de tomates.`,
  ),
  recipe(
    'Ratatouille au four & œufs',
    '🍆 plat vege 60 facile 1 four 2',
    'Aubergine 1, Courgette 1, Poivron 1, Tomate 3, Oignon 1, Ail 2, Œuf 4, Herbes de Provence, Huile d\'olive, Sel',
    `Couper les légumes en cubes, les mélanger avec huile, ail, herbes et sel dans un plat.
     Rôtir 45 minutes à 200 °C en remuant une fois.
     Creuser quatre puits, casser les œufs et remettre 8 minutes.`,
  ),
  recipe(
    'Tian de courgettes au chèvre',
    '🥒 plat vege 45 facile 1 four 2',
    'Courgette 3, Bûche de chèvre 120, Tomate 2, Thym, Ail 1, Huile d\'olive, Sel',
    `Préchauffer le four à 190 °C.
     Alterner rondelles de courgette, tomate et chèvre dans un plat.
     Ajouter ail, thym, sel et huile.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Salade de melon, feta & concombre',
    '🍈 plat vege 15 facile 1 sans-cuisson 2',
    'Melon 1, Concombre 1, Feta 120, Menthe 1, Citron vert 1, Pain pita 2, Huile d\'olive',
    `Couper melon et concombre en cubes.
     Ajouter feta émiettée, menthe, citron vert et huile.
     Servir bien frais avec le pain.`,
  ),
  recipe(
    'Gaspacho de concombre & menthe, tartines au thon',
    '🥒 plat poisson 20 facile 1 sans-cuisson 2',
    'Concombre 2, Yaourt grec 150, Menthe 1, Ail 1, Citron 0.5, Thon en boîte 1, Pain de campagne 4, Huile d\'olive, Sel',
    `Mixer concombres, yaourt, menthe, ail, citron, sel et un filet d'huile ; réfrigérer.
     Écraser le thon avec un peu d'huile et de citron, tartiner le pain.
     Servir le gaspacho très frais avec les tartines.`,
  ),
  recipe(
    'Poulet grillé, salsa de pêches & riz',
    '🍑 plat volaille 30 facile 2 poele,casserole 2',
    'Blanc de poulet 2, Pêche 2, Oignon rouge 0.5, Coriandre 1, Citron vert 1, Piment, Riz 150, Huile d\'olive, Sel',
    `Cuire le riz.
     Salsa : pêches et oignon en petits dés, coriandre, citron vert, piment, sel.
     Griller les blancs à la poêle 6 minutes par face.
     Servir le poulet tranché avec la salsa.`,
  ),
  recipe(
    'Crevettes grillées, taboulé de quinoa',
    '🦐 plat poisson 25 facile 2 poele,casserole 2',
    'Crevette 250, Quinoa 120, Tomate 2, Concombre 0.5, Persil 1, Menthe 1, Citron 1, Ail 1, Huile d\'olive, Sel',
    `Cuire le quinoa et le laisser refroidir.
     Ajouter tomates, concombre, herbes, citron et huile.
     Sauter les crevettes avec l'ail 3 minutes.`,
  ),
  recipe(
    'Pizza d\'été courgette, chèvre & miel',
    '🍕 plat vege 25 facile 2 four 2',
    'Pâte à pizza 1, Crème fraîche 60, Courgette 1, Bûche de chèvre 100, Miel 15, Roquette 30, Huile d\'olive',
    `Préchauffer le four au maximum.
     Étaler la crème sur la pâte, ajouter courgette en rubans fins et chèvre.
     Cuire 12 minutes, arroser de miel et ajouter la roquette.`,
  ),
  recipe(
    'Dinde froide sauce au thon façon vitello tonnato',
    '🦃 plat volaille 30 moyen 2 casserole 4',
    'Escalope de dinde 4, Thon en boîte 1, Mayonnaise, Câpres 20, Citron 1, Bouillon cube 1, Roquette 80, Pomme de terre 600',
    `Pocher les escalopes 12 minutes dans le bouillon frémissant, les laisser refroidir et les trancher finement.
     Mixer thon, 3 c. à s. de mayonnaise, câpres et citron en sauce lisse.
     Napper la dinde, servir avec roquette et pommes de terre tièdes.`,
  ),

  // ---------------------------------------------------------------- œufs & brunch
  recipe(
    'Œufs Bénédicte au jambon',
    '🍳 plat viande 25 moyen 2 casserole 2',
    'Œuf 4, Pain de mie 2, Jambon blanc 2, Beurre 80, Citron 0.5, Vinaigre de vin, Sel',
    `Sauce : fouetter 2 jaunes avec un trait de citron au bain-marie, ajouter le beurre fondu petit à petit.
     Pocher les 2 autres œufs 3 minutes dans l'eau frémissante vinaigrée (recommencer pour 4 œufs si besoin).
     Toaster le pain, poser jambon et œuf poché, napper de sauce.`,
  ),
  recipe(
    'Huevos rancheros',
    '🌮 plat vege 25 facile 1 poele 2',
    'Œuf 4, Tortilla de blé 2, Haricots rouges 1, Tomates concassées 1, Oignon 1, Cumin, Avocat 1, Cheddar 50, Coriandre 1, Huile d\'olive, Sel',
    `Faire revenir l'oignon, ajouter tomates, cumin et haricots, 10 minutes.
     Cuire les œufs au plat.
     Poser sur les tortillas chaudes : sauce, œufs, cheddar, avocat et coriandre.`,
  ),
  recipe(
    'Omelette aux pommes de terre & lardons',
    '🥔 plat viande 25 facile 1 poele 2',
    'Œuf 5, Pomme de terre 300, Lardons 80, Oignon 0.5, Persil 1, Salade verte 0.5, Huile de tournesol, Sel, Poivre',
    `Dorer les pommes de terre en petits dés 12 minutes, ajouter lardons et oignon.
     Verser les œufs battus avec le persil.
     Cuire à feu doux en couvrant, servir avec la salade.`,
  ),
  recipe(
    'Œufs cocotte aux épinards & saumon',
    '🥚 plat poisson 20 facile 2 four 2',
    'Œuf 4, Épinard frais 100, Saumon fumé 2, Crème fraîche 50, Pain de campagne 4, Sel, Poivre',
    `Préchauffer le four à 180 °C.
     Faire tomber les épinards, les répartir dans des ramequins avec le saumon et la crème.
     Casser un œuf dans chaque, cuire 10 minutes au bain-marie.
     Servir avec le pain grillé.`,
  ),
  recipe(
    'Galette bretonne œuf, épinards & chèvre',
    '🥞 plat vege 15 facile 1 poele 2',
    'Galette de sarrasin 2, Œuf 2, Épinard frais 80, Chèvre frais 60, Beurre 10, Sel',
    `Chauffer la galette beurrée, casser un œuf au centre.
     Ajouter épinards et chèvre autour, replier les bords.
     Couvrir 2 minutes et recommencer pour la seconde.`,
  ),
  recipe(
    'Crêpes salées jambon, champignons & béchamel',
    '🥞 plat viande 45 moyen 1 poele,four 4',
    'Farine 200, Œuf 3, Lait 900, Beurre 50, Jambon blanc 4, Champignon de Paris 250, Gruyère râpé 80, Muscade, Sel',
    `Préparer une pâte à crêpes avec farine, œufs, 50 cl de lait et 20 g de beurre fondu, cuire 8 crêpes.
     Béchamel : 30 g de beurre, 30 g de farine, 40 cl de lait, muscade.
     Mélanger un tiers de la béchamel avec jambon et champignons poêlés, garnir les crêpes et les rouler.
     Napper du reste, couvrir de gruyère et gratiner 15 minutes à 200 °C.`,
  ),

  // ---------------------------------------------------------------- familial, encore
  recipe(
    'Blanquette de dinde express',
    '🍲 plat volaille 35 facile 1 casserole 2',
    'Escalope de dinde 2, Carotte 2, Champignon de Paris 150, Bouillon cube 1, Crème fraîche 100, Maïzena 10, Citron 0.5, Riz 150, Sel',
    `Cuire le riz.
     Pocher la dinde en cubes et les carottes 15 minutes dans 50 cl de bouillon, ajouter les champignons 5 minutes.
     Lier le bouillon avec la maïzena délayée et la crème, ajouter un trait de citron.`,
  ),
  recipe(
    'Rôti de dinde aux pruneaux',
    '🦃 plat volaille 70 moyen 2 four 4',
    'Escalope de dinde 4, Pruneaux 120, Lardons 100, Oignon 2, Vin blanc 150, Pomme de terre 800, Thym, Huile d\'olive, Sel',
    `Préchauffer le four à 180 °C.
     Dorer la dinde, les lardons et les oignons dans un plat allant au four.
     Ajouter pruneaux, vin, thym et pommes de terre en morceaux.
     Cuire 45 minutes en arrosant.`,
  ),
  recipe(
    'Rougail de saucisses fumées',
    '🌶️ plat viande 40 facile 1 casserole 4',
    'Saucisse de Morteau 1, Saucisse 3, Tomate 5, Oignon 2, Gingembre frais 15, Curcuma, Piment, Riz 300, Huile de tournesol, Sel',
    `Couper les saucisses en rondelles, les dorer.
     Ajouter oignons, gingembre et curcuma, puis les tomates en dés et le piment.
     Couvrir et mijoter 25 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Hachis Parmentier de légumes & lentilles',
    '🥔 plat vege 50 facile 1 four,casserole 4',
    'Lentilles 200, Carotte 2, Oignon 1, Tomates concassées 1, Pomme de terre 900, Lait 200, Beurre 40, Comté 60, Thym, Sel',
    `Cuire les lentilles 20 minutes avec carottes, oignon et thym, ajouter les tomates.
     Préparer une purée au beurre et au lait.
     Monter le hachis, couvrir de comté.
     Gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Escalope à la normande',
    '🍏 plat volaille 25 facile 2 poele 2',
    'Escalope de dinde 2, Champignon de Paris 150, Cidre 100, Crème fraîche 100, Pomme 1, Tagliatelles 200, Beurre 20, Sel',
    `Cuire les tagliatelles.
     Dorer les escalopes dans le beurre, réserver.
     Dorer pomme en quartiers et champignons, déglacer au cidre, ajouter la crème.
     Remettre les escalopes 2 minutes.`,
  ),
  recipe(
    'Bœuf mode aux carottes & purée',
    '🥕 plat viande 180 moyen 2 casserole 4',
    'Bœuf à braiser 900, Carotte 6, Oignon 2, Vin blanc 300, Bouillon cube 1, Laurier, Thym, Pomme de terre 800, Lait 150, Beurre 40, Sel',
    `Dorer le bœuf en gros morceaux, ajouter oignons.
     Mouiller de vin et de bouillon à hauteur, ajouter laurier et thym, mijoter 2 heures.
     Ajouter les carottes, 45 minutes.
     Servir avec une purée maison.`,
  ),
  recipe(
    'Gratin de penne au chou-fleur & jambon',
    '🧀 plat viande 40 facile 1 casserole,four 4',
    'Penne 250, Chou-fleur 0.5, Jambon blanc 3, Beurre 30, Farine 30, Lait 500, Cheddar 100, Sel',
    `Cuire les penne et le chou-fleur en petits bouquets ensemble.
     Préparer une béchamel au cheddar.
     Mélanger avec le jambon, gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Saumon, crème citronnée aux épinards & pommes vapeur',
    '🐟 plat poisson 25 facile 2 poele,casserole 2',
    'Pavé de saumon 2, Crème liquide 100, Citron 1, Échalote 1, Épinard frais 80, Pomme de terre 500, Beurre 10, Sel',
    `Cuire les pommes de terre à la vapeur ou à l'eau.
     Cuire le saumon 7 minutes côté peau.
     Faire suer l'échalote dans le beurre, ajouter crème, citron et épinards, 2 minutes.
     Napper le saumon.`,
  ),
  recipe(
    'Poulet à la bière & frites au four',
    '🍺 plat volaille 50 facile 1 casserole,four 4',
    'Cuisse de poulet 4, Bière 330, Oignon 2, Moutarde, Thym, Pomme de terre 900, Huile de tournesol, Sel',
    `Couper les pommes de terre en frites, huile et sel, rôtir 35 minutes à 220 °C.
     Dorer les cuisses avec les oignons.
     Verser la bière, ajouter thym et moutarde, couvrir 35 minutes.`,
  ),
  recipe(
    'Escalopes roulées au jambon, sauce tomate',
    '🍅 plat volaille 40 facile 1 casserole 2',
    'Escalope de dinde 2, Jambon blanc 2, Tomates concassées 1, Oignon 1, Vin blanc 50, Herbes de Provence, Riz 150, Huile d\'olive, Sel',
    `Cuire le riz.
     Poser une tranche de jambon sur chaque escalope, rouler et ficeler.
     Les dorer avec l'oignon, déglacer au vin, ajouter tomates et herbes.
     Couvrir et cuire 25 minutes.`,
  ),
  recipe(
    'Jambon braisé au vin blanc & purée maison',
    '🥔 plat viande 30 facile 1 casserole,poele 2',
    'Jambon blanc 4, Vin blanc 100, Échalote 1, Crème fraîche 50, Pomme de terre 600, Lait 150, Beurre 40, Muscade, Sel',
    `Préparer une purée au beurre, au lait et à la muscade.
     Faire suer l'échalote, poser les tranches de jambon, déglacer au vin et réduire.
     Ajouter la crème et servir avec la purée.`,
  ),

  // ---------------------------------------------------------------- monde, encore
  recipe(
    'Poulet satay & riz',
    '🥜 plat volaille 30 facile 2 poele 2',
    'Blanc de poulet 2, Beurre de cacahuète 50, Lait de coco 150, Sauce soja 20, Curry, Citron vert 1, Riz 150, Concombre 0.5, Cacahuètes 20',
    `Cuire le riz.
     Saisir le poulet en lanières avec le curry.
     Ajouter beurre de cacahuète, lait de coco et soja, laisser napper 3 minutes.
     Servir avec concombre, cacahuètes et citron vert.`,
  ),
  recipe(
    'Laab, salade thaïe au poulet haché',
    '🌿 plat volaille 20 facile 1 poele 2',
    'Blanc de poulet 2, Oignon rouge 0.5, Menthe 1, Coriandre 1, Citron vert 2, Nuoc-mâm, Piment, Salade verte 0.5, Riz 150',
    `Cuire le riz.
     Hacher finement le poulet et le cuire à sec 6 minutes.
     Hors du feu, ajouter citron vert, nuoc-mâm, piment, oignon et herbes.
     Servir dans des feuilles de salade avec le riz.`,
  ),
  recipe(
    'Soupe japonaise aux nouilles & tofu',
    '🍜 plat vege 20 facile 1 casserole 2',
    'Tofu 200, Nouilles chinoises 120, Bouillon cube 1, Sauce soja 30, Pak choï 2, Champignon de Paris 100, Oignon nouveau 1, Gingembre frais 10',
    `Porter 1 litre d'eau à frémissement avec bouillon, soja et gingembre.
     Ajouter champignons et pak choï, 3 minutes, puis le tofu en cubes.
     Cuire les nouilles à part, les répartir dans les bols et verser la soupe.`,
  ),
  recipe(
    'Okonomiyaki, galette japonaise au chou',
    '🥞 plat viande 30 moyen 1 poele 2',
    'Chou vert 0.25, Farine 100, Œuf 2, Bacon 4, Oignon nouveau 1, Mayonnaise, Sauce Worcestershire, Ketchup',
    `Mélanger farine, œufs et 10 cl d'eau, ajouter le chou très finement émincé et l'oignon nouveau.
     Verser dans une poêle huilée, poser le bacon dessus, cuire 5 minutes par face.
     Napper d'une sauce ketchup-Worcestershire et de mayonnaise.`,
  ),
  recipe(
    'Pâtes à la puttanesca',
    '🍝 plat vege 20 facile 1 casserole 2',
    'Spaghetti 200, Tomates concassées 1, Olives noires 50, Câpres 20, Ail 2, Piment, Persil 1, Huile d\'olive, Sel',
    `Faire revenir ail et piment dans l'huile.
     Ajouter tomates, olives et câpres, réduire 10 minutes.
     Mélanger avec les pâtes et le persil.`,
  ),
  recipe(
    'Gnocchis à la sorrentine',
    '🍅 plat vege 30 facile 1 casserole,four 2',
    'Gnocchis 500, Coulis de tomate 300, Mozzarella 1, Basilic 1, Parmesan 20, Ail 1, Huile d\'olive, Sel',
    `Faire réduire le coulis avec l'ail 10 minutes.
     Cuire les gnocchis, les mélanger à la sauce dans un plat.
     Couvrir de mozzarella et parmesan, gratiner 10 minutes sous le gril. Ajouter le basilic.`,
  ),
  recipe(
    'Tortilla wraps mexicains au bœuf haché',
    '🌯 plat viande 25 facile 1 poele 2',
    'Tortilla de blé 4, Steak haché 250, Haricots rouges 1, Maïs en boîte 0.5, Cheddar 60, Salade verte 0.25, Tomate 1, Cumin, Paprika, Crème fraîche 50, Sel',
    `Faire revenir la viande avec les épices, ajouter haricots et maïs.
     Garnir les tortillas de viande, cheddar, salade, tomate et crème.
     Rouler et dorer 1 minute par face à la poêle.`,
  ),
  recipe(
    'Chakchouka aux merguez',
    '🌶️ plat viande 30 facile 1 poele 2',
    'Merguez 4, Œuf 4, Poivron 2, Tomates concassées 1, Oignon 1, Cumin, Pain pita 2, Huile d\'olive, Sel',
    `Dorer les merguez en tronçons, réserver.
     Faire fondre oignon et poivrons, ajouter tomates et cumin, 12 minutes.
     Remettre les merguez, casser les œufs, couvrir 6 minutes.`,
  ),
  recipe(
    'Moules à la provençale',
    '🦪 plat poisson 30 facile 2 casserole 2',
    'Moules 1500, Tomates concassées 1, Ail 3, Oignon 1, Vin blanc 100, Herbes de Provence, Persil 1, Baguette 0.5, Huile d\'olive',
    `Faire revenir oignon et ail, ajouter tomates et herbes, 10 minutes.
     Ajouter vin et moules, couvrir 6 minutes à feu vif.
     Parsemer de persil et servir avec la baguette.`,
  ),
]
