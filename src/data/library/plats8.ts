import { recipe } from './dsl'

/** Lot 8 : batch cooking, gratins gourmands, végé du monde, poissons et volailles du quotidien. */
export const PLATS_8 = [
  // ---------------------------------------------------------------- batch cooking (grandes quantités)
  recipe(
    'Sauce bolognaise pour la semaine',
    '🍝 plat viande 90 facile 1 casserole 8',
    'Steak haché 1000, Oignon 2, Carotte 3, Céleri 2, Ail 3, Tomates concassées 4, Concentré de tomate 60, Vin rouge 200, Origan, Spaghetti 800, Huile d\'olive, Sel, Poivre',
    `Hacher finement oignons, carottes, céleri et ail, les faire suer 10 minutes.
     Ajouter la viande et la faire colorer, déglacer au vin.
     Ajouter tomates, concentré et origan, mijoter 1 heure à couvert.
     Servir avec les pâtes ; le reste se congèle en portions.`,
  ),
  recipe(
    'Grand curry de poulet à congeler',
    '🍛 plat volaille 60 facile 1 casserole 8',
    'Cuisse de poulet 8, Oignon 3, Ail 4, Gingembre frais 30, Curry, Lait de coco 800, Tomates concassées 2, Épinard frais 200, Riz 600, Huile de tournesol, Sel',
    `Désosser les cuisses et couper la viande en morceaux.
     Faire revenir oignons, ail, gingembre et curry, ajouter le poulet.
     Verser tomates et lait de coco, mijoter 35 minutes ; ajouter les épinards.
     Servir avec le riz, congeler le reste en boîtes.`,
  ),
  recipe(
    'Chili pour toute la semaine',
    '🌶️ plat viande 75 facile 1 casserole 8',
    'Steak haché 800, Haricots rouges 4, Tomates concassées 4, Poivron 3, Oignon 2, Ail 3, Maïs en boîte 2, Cumin, Paprika, Piment, Riz 600, Huile d\'olive, Sel',
    `Faire revenir oignons, poivrons et ail, puis la viande et les épices.
     Ajouter tomates, haricots et maïs, mijoter 45 minutes.
     Servir avec le riz ; se garde 4 jours au frais ou se congèle.`,
  ),
  recipe(
    'Soupe de légumes maison en grande marmite',
    '🥣 plat vege 50 facile 1 casserole 8',
    'Carotte 5, Poireau 3, Pomme de terre 800, Courgette 2, Navet 2, Oignon 2, Bouillon cube 2, Crème fraîche 100, Pain de campagne 8, Sel',
    `Éplucher et couper tous les légumes.
     Les cuire 35 minutes dans 3 litres de bouillon.
     Mixer et ajouter la crème ; servir avec le pain.`,
  ),
  recipe(
    'Lentilles mijotées aux légumes pour la semaine',
    '🫘 plat vege 45 facile 1 casserole 6',
    'Lentilles 500, Carotte 4, Oignon 2, Céleri 2, Tomates concassées 2, Cumin, Laurier, Bouillon cube 1, Œuf 6, Huile d\'olive, Sel',
    `Faire revenir oignons, carottes et céleri.
     Ajouter lentilles, tomates, cumin, laurier et 1,5 litre de bouillon ; cuire 30 minutes.
     Servir avec un œuf mollet par personne.`,
  ),
  recipe(
    'Poulet effiloché pour wraps & salades',
    '🍗 plat volaille 40 facile 1 casserole 6',
    'Blanc de poulet 6, Bouillon cube 1, Paprika, Ail 2, Tortilla de blé 6, Salade verte 1, Tomate 3, Yaourt grec 200, Sel',
    `Pocher les blancs 20 minutes dans le bouillon avec ail et paprika.
     Les effilocher à la fourchette, mouiller d'un peu de bouillon.
     Servir en wraps avec crudités et yaourt ; le reste garnit salades et sandwichs.`,
  ),

  // ---------------------------------------------------------------- gratins gourmands
  recipe(
    'Gratin de pâtes au saumon & épinards',
    '🐟 plat poisson 35 facile 2 casserole,four 4',
    'Penne 300, Pavé de saumon 3, Épinard frais 200, Crème liquide 250, Gruyère râpé 80, Citron 1, Sel',
    `Cuire les pâtes.
     Mélanger avec épinards, saumon en dés, crème et zeste de citron.
     Couvrir de gruyère et gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Gratin de patates douces & feta',
    '🍠 plat vege 50 facile 1 four 4',
    'Patate douce 3, Feta 150, Crème liquide 200, Ail 1, Thym, Sel',
    `Préchauffer le four à 190 °C.
     Trancher finement les patates douces, les disposer dans un plat.
     Verser la crème à l'ail, parsemer de feta et de thym.
     Cuire 40 minutes.`,
  ),
  recipe(
    'Gratin de poireaux & pommes de terre au reblochon',
    '🧀 plat vege 55 facile 2 four 4',
    'Poireau 3, Pomme de terre 800, Reblochon 1, Crème fraîche 150, Sel, Poivre',
    `Cuire les pommes de terre en rondelles et faire fondre les poireaux.
     Les disposer dans un plat avec la crème.
     Couvrir de reblochon tranché, cuire 25 minutes à 200 °C.`,
  ),
  recipe(
    'Gratin de gnocchis au jambon & fromage',
    '🥔 plat viande 30 facile 1 four 2',
    'Gnocchis 500, Jambon blanc 3, Crème liquide 150, Gruyère râpé 80, Épinard frais 60',
    `Préchauffer le four à 210 °C.
     Mélanger gnocchis crus, jambon, épinards et crème dans un plat.
     Couvrir de gruyère et cuire 20 minutes.`,
  ),
  recipe(
    'Gratin d\'aubergines à la bolognaise',
    '🍆 plat viande 60 moyen 1 four 4',
    'Aubergine 3, Steak haché 400, Coulis de tomate 400, Oignon 1, Mozzarella 1, Parmesan 40, Huile d\'olive, Sel',
    `Rôtir les aubergines tranchées 20 minutes à 200 °C.
     Faire une sauce bolognaise rapide avec oignon, viande et coulis.
     Alterner aubergines et sauce, finir par mozzarella et parmesan.
     Cuire 25 minutes.`,
  ),
  recipe(
    'Lasagnes saumon & poireaux',
    '🐟 plat poisson 60 moyen 2 four 4',
    'Feuilles de lasagne 250, Pavé de saumon 3, Poireau 3, Beurre 40, Farine 40, Lait 600, Gruyère râpé 80, Muscade, Sel',
    `Faire fondre les poireaux émincés.
     Préparer une béchamel muscadée.
     Alterner feuilles, poireaux, saumon en dés et béchamel.
     Couvrir de gruyère et cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Gratin de chou-fleur au jambon',
    '🥦 plat viande 45 facile 1 casserole,four 4',
    'Chou-fleur 1, Jambon blanc 4, Beurre 30, Farine 30, Lait 400, Gruyère râpé 80, Muscade, Sel',
    `Cuire le chou-fleur en bouquets 10 minutes.
     Préparer une béchamel muscadée.
     Mélanger chou-fleur, jambon et béchamel, couvrir de gruyère.
     Gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Parmentier de patate douce au bœuf épicé',
    '🍠 plat viande 50 facile 1 four,casserole 4',
    'Patate douce 3, Steak haché 500, Oignon 1, Tomates concassées 1, Cumin, Paprika, Beurre 20, Cheddar 60, Sel',
    `Cuire les patates douces et les écraser avec le beurre.
     Faire revenir oignon et viande avec les épices, ajouter les tomates, 10 minutes.
     Monter le parmentier, couvrir de cheddar, gratiner 20 minutes.`,
  ),

  // ---------------------------------------------------------------- végé du monde
  recipe(
    'Curry rouge de patate douce & pois chiches',
    '🍛 plat vege 30 facile 1 casserole 2',
    'Patate douce 1, Pois chiches 1, Pâte de curry 20, Lait de coco 250, Épinard frais 80, Citron vert 1, Riz 150, Coriandre 1',
    `Faire revenir la pâte de curry dans un peu de lait de coco.
     Ajouter patate douce en cubes et le reste du lait de coco, cuire 15 minutes.
     Ajouter pois chiches et épinards, finir avec le citron vert. Servir avec le riz.`,
  ),
  recipe(
    'Tajine de légumes aux pruneaux',
    '🥕 plat vege 50 facile 1 casserole 4',
    'Carotte 3, Courgette 2, Patate douce 1, Pois chiches 1, Pruneaux 80, Oignon 1, Ras el hanout, Miel 15, Amandes effilées 30, Semoule 300, Huile d\'olive, Sel',
    `Faire revenir l'oignon avec les épices.
     Ajouter légumes en gros morceaux et 40 cl d'eau, cuire 25 minutes.
     Ajouter pois chiches, pruneaux et miel, 10 minutes.
     Servir avec la semoule et les amandes.`,
  ),
  recipe(
    'Enchiladas végétariennes haricots & patate douce',
    '🌯 plat vege 45 facile 1 four 4',
    'Tortilla de blé 6, Patate douce 1, Haricots rouges 1, Maïs en boîte 1, Oignon 1, Coulis de tomate 400, Cumin, Cheddar 120, Crème fraîche 80, Sel',
    `Cuire la patate douce en dés, la mélanger avec haricots, maïs, oignon et cumin.
     Garnir et rouler les tortillas dans un plat.
     Napper de coulis et de cheddar, cuire 20 minutes à 200 °C.`,
  ),
  recipe(
    'Bao, pains vapeur farcis au porc',
    '🥟 plat viande 90 difficile 1 casserole 4',
    'Farine 300, Levure boulangère 1, Lait 150, Sucre 20, Échine de porc 300, Sauce soja 30, Miel 15, Concombre 0.5, Oignon nouveau 1',
    `Pâte : farine, levure, lait tiède et sucre ; pétrir et laisser lever 1 heure.
     Cuire le porc en lanières avec soja et miel jusqu'à ce qu'il laque.
     Former des petits pains plats, les plier en deux et les cuire 12 minutes à la vapeur.
     Garnir de porc, concombre et oignon nouveau.`,
  ),
  recipe(
    'Biryani de légumes',
    '🍚 plat vege 50 moyen 1 casserole 4',
    'Riz 300, Carotte 2, Petits pois surgelés 150, Chou-fleur 0.5, Oignon 2, Garam masala, Curcuma, Yaourt nature 1, Amandes effilées 30, Raisins secs 30, Coriandre 1, Huile de tournesol, Sel',
    `Faire dorer longuement les oignons émincés.
     Ajouter épices, légumes et yaourt, puis le riz rincé et 60 cl d'eau.
     Couvrir 20 minutes, laisser reposer 10 minutes.
     Servir avec amandes, raisins et coriandre.`,
  ),
  recipe(
    'Galettes de pommes de terre & sauce yaourt',
    '🥔 plat vege 30 facile 1 poele 2',
    'Pomme de terre 500, Oignon 0.5, Œuf 1, Farine 20, Yaourt grec 100, Ciboulette 1, Salade verte 0.5, Huile de tournesol, Sel',
    `Râper et presser les pommes de terre, mélanger avec oignon, œuf, farine et sel.
     Cuire des galettes fines 4 minutes par face dans l'huile.
     Servir avec le yaourt à la ciboulette et la salade.`,
  ),
  recipe(
    'Ratatouille & polenta crémeuse',
    '🌽 plat vege 50 facile 1 casserole 2',
    'Aubergine 1, Courgette 1, Poivron 1, Tomates concassées 1, Oignon 1, Herbes de Provence, Semoule 120, Lait 300, Parmesan 40, Beurre 15, Huile d\'olive, Sel',
    `Préparer une ratatouille rapide : légumes en dés, tomates et herbes, 35 minutes.
     Porter lait et 20 cl d'eau à ébullition, verser la semoule fine, cuire 5 minutes ; ajouter beurre et parmesan.
     Servir la ratatouille sur la polenta.`,
  ),
  recipe(
    'Tofu brouillé aux légumes & pain grillé',
    '🌱 plat vege 15 facile 1 poele 2',
    'Tofu 300, Curcuma, Poivron 1, Épinard frais 60, Oignon nouveau 1, Sauce soja 15, Pain de campagne 4, Huile d\'olive',
    `Émietter le tofu, le faire sauter avec le curcuma et le poivron.
     Ajouter épinards, soja et oignon nouveau.
     Servir sur le pain grillé.`,
  ),

  // ---------------------------------------------------------------- poissons
  recipe(
    'Cabillaud au four, tomates & olives',
    '🐟 plat poisson 30 facile 2 four 2',
    'Cabillaud 350, Tomate cerise 250, Olives noires 40, Câpres 10, Ail 1, Pomme de terre 400, Huile d\'olive, Origan, Sel',
    `Rôtir les pommes de terre en rondelles 15 minutes à 210 °C.
     Ajouter tomates, olives, câpres, ail, et le poisson par-dessus ; arroser d'huile et d'origan.
     Cuire 15 minutes.`,
  ),
  recipe(
    'Saumon au four, purée de brocoli',
    '🐟 plat poisson 25 facile 2 four,casserole 2',
    'Pavé de saumon 2, Brocoli 1, Pomme de terre 200, Beurre 20, Citron 1, Sel',
    `Cuire brocoli et pomme de terre, mixer avec le beurre.
     Cuire le saumon 14 minutes à 200 °C.
     Servir avec le citron.`,
  ),
  recipe(
    'Crevettes à la crème d\'ail & riz',
    '🦐 plat poisson 20 facile 2 poele,casserole 2',
    'Crevette 250, Ail 3, Crème liquide 150, Persil 1, Riz 150, Beurre 15',
    `Cuire le riz.
     Faire dorer l'ail dans le beurre, ajouter les crevettes 2 minutes.
     Verser la crème, laisser napper ; ajouter le persil.`,
  ),
  recipe(
    'Colin au curry & légumes croquants',
    '🐟 plat poisson 25 facile 1 poele,casserole 2',
    'Filet de colin 300, Curry, Lait de coco 150, Carotte 1, Poivron 1, Petits pois surgelés 80, Riz 150',
    `Cuire le riz.
     Sauter carotte et poivron 4 minutes, ajouter curry, lait de coco et petits pois.
     Déposer le poisson, couvrir 7 minutes.`,
  ),
  recipe(
    'Tartare de saumon à l\'avocat',
    '🥑 plat poisson 20 moyen 3 sans-cuisson 2',
    'Pavé de saumon 2, Avocat 1, Citron vert 2, Échalote 1, Ciboulette 1, Pain de campagne 4, Roquette 40, Huile d\'olive, Sel',
    `Couper le saumon très frais et l'avocat en petits dés.
     Assaisonner de citron vert, échalote, ciboulette, huile et sel.
     Dresser à l'emporte-pièce, servir avec pain grillé et roquette.`,
  ),
  recipe(
    'Moules frites à la crème & persil',
    '🦪 plat poisson 30 facile 2 casserole,airfryer 2',
    'Moules 1500, Échalote 2, Crème fraîche 100, Persil 1, Beurre 15, Frites surgelées 400',
    `Cuire les frites au four ou à l'airfryer.
     Faire suer les échalotes dans le beurre, ajouter moules et 5 cl d'eau, couvrir 6 minutes.
     Ajouter crème et persil.`,
  ),
  recipe(
    'Brandade de saumon',
    '🐟 plat poisson 45 facile 2 casserole,four 4',
    'Pavé de saumon 3, Pomme de terre 800, Lait 300, Ail 1, Huile d\'olive 50, Ciboulette 1, Gruyère râpé 40, Sel',
    `Cuire les pommes de terre et pocher le saumon 6 minutes dans le lait.
     Écraser les pommes de terre avec le lait, l'huile et l'ail.
     Mélanger le saumon effeuillé et la ciboulette, gratiner 15 minutes avec le gruyère.`,
  ),

  // ---------------------------------------------------------------- volailles du quotidien
  recipe(
    'Poulet basquaise express à la poêle',
    '🫑 plat volaille 30 facile 1 poele 2',
    'Blanc de poulet 2, Poivron 2, Oignon 1, Tomates concassées 1, Paprika, Ail 1, Riz 150, Huile d\'olive, Sel',
    `Cuire le riz.
     Dorer le poulet en morceaux, ajouter oignon, poivrons et ail.
     Ajouter tomates et paprika, mijoter 15 minutes.`,
  ),
  recipe(
    'Poulet aux champignons & riz crémeux',
    '🍄 plat volaille 30 facile 1 poele,casserole 2',
    'Blanc de poulet 2, Champignon de Paris 200, Échalote 1, Crème liquide 100, Riz 150, Parmesan 20, Thym, Sel',
    `Cuire le riz, le mélanger avec un peu de crème et le parmesan.
     Dorer le poulet, ajouter échalote, champignons et thym.
     Verser le reste de crème, laisser napper.`,
  ),
  recipe(
    'Escalopes de dinde au citron & câpres',
    '🍋 plat volaille 20 facile 2 poele 2',
    'Escalope de dinde 2, Citron 1, Câpres 15, Beurre 20, Farine 20, Pomme de terre 400, Persil 1, Sel',
    `Cuire les pommes de terre vapeur.
     Fariner les escalopes, les dorer dans le beurre 3 minutes par face.
     Déglacer avec le jus de citron et 5 cl d'eau, ajouter câpres et persil.`,
  ),
  recipe(
    'Cuisses de poulet au paprika & pommes de terre au four',
    '🍗 plat volaille 50 facile 1 four 2',
    'Cuisse de poulet 2, Pomme de terre 500, Paprika, Ail 2, Oignon 1, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C.
     Mélanger pommes de terre et oignon en quartiers avec huile, paprika et sel.
     Poser les cuisses frottées d'ail et de paprika.
     Cuire 45 minutes.`,
  ),
  recipe(
    'Poulet au miel & citron, semoule aux herbes',
    '🍯 plat volaille 30 facile 1 poele 2',
    'Blanc de poulet 2, Miel 20, Citron 1, Ail 1, Semoule 150, Persil 1, Menthe 1, Huile d\'olive, Sel',
    `Verser sur la semoule autant d'eau bouillante salée, couvrir 5 minutes puis l'égrainer avec un filet d'huile et les herbes ciselées.
     Saisir le poulet en lanières 5 minutes à feu vif dans un peu d'huile.
     Ajouter l'ail, le miel et le jus de citron, laisser caraméliser 2 minutes en remuant.
     Servir sur la semoule.`,
  ),
  recipe(
    'Fricassée de dinde aux légumes',
    '🦃 plat volaille 35 facile 1 casserole 2',
    'Escalope de dinde 2, Carotte 2, Courgette 1, Oignon 1, Bouillon cube 1, Crème fraîche 60, Thym, Riz 150, Sel',
    `Cuire le riz.
     Dorer la dinde en cubes avec l'oignon.
     Ajouter légumes, thym et 20 cl de bouillon, couvrir 15 minutes ; ajouter la crème.`,
  ),
  recipe(
    'Wok de poulet aux noix de cajou',
    '🥜 plat volaille 25 facile 2 poele 2',
    'Blanc de poulet 2, Noix de cajou 50, Poivron 1, Oignon 1, Sauce soja 30, Miel 10, Ail 1, Riz 150, Huile de tournesol',
    `Cuire le riz.
     Griller les noix de cajou à sec, réserver.
     Saisir le poulet, ajouter poivron, oignon et ail, puis soja et miel.
     Ajouter les noix de cajou.`,
  ),
  recipe(
    'Poulet rôti à la moutarde & aux herbes',
    '🍗 plat volaille 45 facile 1 four 2',
    'Cuisse de poulet 2, Moutarde 40, Herbes de Provence, Chapelure 20, Haricot vert 300, Pomme de terre 400, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C.
     Badigeonner les cuisses de moutarde, les rouler dans chapelure et herbes.
     Rôtir 40 minutes avec les pommes de terre ; cuire les haricots à part.`,
  ),

  // ---------------------------------------------------------------- viandes du quotidien
  recipe(
    'Rôti de porc aux pommes & oignons',
    '🐖 plat viande 70 facile 2 four 4',
    'Filet mignon de porc 800, Pomme 4, Oignon 2, Cidre 200, Thym, Pomme de terre 800, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 190 °C.
     Dorer la viande, la poser dans un plat avec pommes, oignons et pommes de terre en quartiers.
     Arroser de cidre, ajouter le thym.
     Cuire 50 minutes en arrosant.`,
  ),
  recipe(
    'Bœuf aux oignons & purée',
    '🧅 plat viande 25 facile 2 poele,casserole 2',
    'Bœuf émincé 300, Oignon 3, Vinaigre balsamique, Pomme de terre 500, Lait 120, Beurre 30, Sel',
    `Préparer une purée avec le lait et le beurre.
     Faire fondre les oignons, déglacer au balsamique.
     Saisir le bœuf 2 minutes et l'ajouter.`,
  ),
  recipe(
    'Côtes de porc caramélisées au soja & riz',
    '🐖 plat viande 25 facile 1 poele 2',
    'Côte de porc 2, Sauce soja 30, Miel 20, Ail 1, Riz 150, Brocoli 1',
    `Cuire le riz et le brocoli.
     Saisir les côtes 4 minutes par face.
     Ajouter soja, miel et ail, laisser laquer en retournant.`,
  ),
  recipe(
    'Saucisses aux lentilles corail & tomates',
    '🌭 plat viande 35 facile 1 casserole 2',
    'Saucisse 4, Lentilles corail 150, Tomates concassées 1, Oignon 1, Cumin, Épinard frais 60, Sel',
    `Dorer les saucisses en tronçons avec l'oignon.
     Ajouter lentilles, tomates, cumin et 40 cl d'eau, cuire 15 minutes.
     Ajouter les épinards.`,
  ),
  recipe(
    'Boulettes à la grecque, riz & tzatziki',
    '🧆 plat viande 35 facile 1 poele,casserole 2',
    'Steak haché 300, Feta 50, Origan, Menthe 1, Riz 150, Yaourt grec 120, Concombre 0.5, Ail 1, Sel',
    `Mélanger viande, feta émiettée, origan et menthe ; former des boulettes et les dorer.
     Cuire le riz.
     Tzatziki : yaourt, concombre râpé, ail.`,
  ),
]
