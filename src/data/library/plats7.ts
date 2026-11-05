import { recipe } from './dsl'

/** Lot 7 : express (moins de 20 minutes), plats que les enfants aiment, sandwichs et salades. */
export const PLATS_7 = [
  // ---------------------------------------------------------------- express
  recipe(
    'Pâtes au thon & crème citronnée',
    '🍋 plat poisson 15 facile 1 casserole 2',
    'Penne 200, Thon en boîte 1, Crème fraîche 80, Citron 1, Persil 1, Sel, Poivre',
    `Cuire les pâtes.
     Mélanger thon, crème, zeste et jus de citron.
     Assembler avec les pâtes et le persil.`,
  ),
  recipe(
    'Omelette jambon-fromage & salade',
    '🍳 plat viande 10 facile 1 poele 2',
    'Œuf 5, Jambon blanc 2, Gruyère râpé 50, Beurre 10, Salade verte 0.5, Vinaigre de vin, Huile d\'olive, Sel',
    `Battre les œufs, saler.
     Les cuire dans le beurre, ajouter jambon et gruyère, plier.
     Servir avec la salade.`,
  ),
  recipe(
    'Nouilles sautées express aux œufs & légumes',
    '🍜 plat vege 15 facile 1 poele 2',
    'Nouilles chinoises 150, Œuf 3, Carotte 1, Chou vert 0.25, Sauce soja 30, Oignon nouveau 1, Huile de sésame, Huile de tournesol',
    `Cuire les nouilles.
     Sauter carotte et chou émincés 3 minutes, pousser sur le côté et brouiller les œufs.
     Ajouter nouilles, soja et huile de sésame, puis l'oignon nouveau.`,
  ),
  recipe(
    'Quesadillas jambon & cheddar',
    '🫓 plat viande 10 facile 1 poele 2',
    'Tortilla de blé 4, Jambon blanc 3, Cheddar 100, Salade verte 0.5',
    `Garnir deux tortillas de cheddar et de jambon, couvrir des deux autres.
     Dorer 2 minutes par face à la poêle.
     Couper en parts et servir avec la salade.`,
  ),
  recipe(
    'Couscous express aux légumes & pois chiches',
    '🥘 plat vege 15 facile 1 poele 2',
    'Semoule 150, Pois chiches 1, Courgette 1, Poivron 1, Ras el hanout, Raisins secs 20, Menthe 1, Huile d\'olive, Sel',
    `Sauter courgette et poivron en dés avec le ras el hanout 6 minutes.
     Préparer la semoule à l'eau bouillante salée.
     Mélanger avec pois chiches, légumes, raisins et menthe.`,
  ),
  recipe(
    'Wrap œuf, avocat & bacon',
    '🥑 plat viande 15 facile 1 poele 2',
    'Tortilla de blé 2, Œuf 3, Bacon 4, Avocat 1, Tomate 1, Salade verte 0.25, Sel',
    `Griller le bacon, puis brouiller les œufs dans la même poêle.
     Garnir les tortillas d'œufs, bacon, avocat, tomate et salade.
     Rouler serré.`,
  ),
  recipe(
    'Toasts avocat, œuf poché & graines',
    '🥑 plat vege 15 facile 1 casserole 2',
    'Pain de campagne 4, Avocat 2, Œuf 4, Citron 0.5, Graines de sésame 10, Piment, Vinaigre de vin, Sel',
    `Écraser l'avocat avec citron et sel.
     Pocher les œufs 3 minutes dans l'eau frémissante vinaigrée.
     Tartiner le pain grillé, poser l'œuf, parsemer de sésame et de piment.`,
  ),
  recipe(
    'Poêlée de gnocchis aux lardons & champignons',
    '🥓 plat viande 15 facile 1 poele 2',
    'Gnocchis 500, Lardons 100, Champignon de Paris 150, Crème fraîche 60, Persil 1',
    `Dorer les gnocchis, réserver.
     Faire sauter lardons et champignons.
     Remettre les gnocchis avec la crème et le persil.`,
  ),
  recipe(
    'Pâtes pesto, petits pois & jambon cru',
    '🍝 plat viande 15 facile 1 casserole 2',
    'Spaghetti 200, Pesto 60, Petits pois surgelés 120, Jambon cru 4, Parmesan 20',
    `Cuire les pâtes avec les petits pois.
     Mélanger avec le pesto et un peu d'eau de cuisson.
     Servir avec le jambon cru déchiré et le parmesan.`,
  ),
  recipe(
    'Croque-galette jambon, œuf & fromage',
    '🥞 plat viande 10 facile 1 poele 2',
    'Galette de sarrasin 2, Jambon blanc 2, Œuf 2, Gruyère râpé 60, Beurre 10',
    `Chauffer la galette beurrée, casser un œuf au centre.
     Ajouter jambon et gruyère, replier les bords.
     Couvrir 2 minutes. Recommencer pour la seconde.`,
  ),
  recipe(
    'Salade de riz express au thon & maïs',
    '🍚 plat poisson 15 facile 1 casserole 2',
    'Riz 120, Thon en boîte 1, Maïs en boîte 0.5, Tomate 2, Œuf 2, Mayonnaise, Ciboulette 1, Sel',
    `Cuire le riz et les œufs, refroidir sous l'eau.
     Mélanger avec thon, maïs, tomates et œufs en morceaux.
     Lier d'une cuillère de mayonnaise, parsemer de ciboulette.`,
  ),
  recipe(
    'Crevettes au curry express & riz',
    '🦐 plat poisson 20 facile 2 poele,casserole 2',
    'Crevette 250, Crème liquide 100, Curry, Oignon 0.5, Riz 150, Coriandre 1, Huile de tournesol',
    `Cuire le riz.
     Faire revenir l'oignon et le curry, ajouter les crevettes 2 minutes.
     Verser la crème, laisser napper 2 minutes. Parsemer de coriandre.`,
  ),

  // ---------------------------------------------------------------- les enfants aiment
  recipe(
    'Coquillettes jambon-fromage gratinées',
    '🧀 plat viande 25 facile 1 casserole,four 2',
    'Coquillettes 200, Jambon blanc 3, Crème fraîche 60, Gruyère râpé 80, Beurre 10',
    `Cuire les coquillettes.
     Mélanger avec jambon, crème, beurre et la moitié du gruyère.
     Couvrir du reste et gratiner 10 minutes.`,
  ),
  recipe(
    'Mini-pizzas sur pain de mie',
    '🍕 plat viande 15 facile 1 four,airfryer 2',
    'Pain de mie 4, Coulis de tomate 80, Jambon blanc 2, Mozzarella 1, Origan, Salade verte 0.5',
    `Tartiner le pain de coulis, ajouter jambon, mozzarella et origan.
     Cuire 8 minutes à 200 °C (5 minutes à l'airfryer).
     Servir avec la salade.`,
  ),
  recipe(
    'Purée, steak haché & petits pois',
    '🥔 plat viande 30 facile 1 casserole,poele 2',
    'Pomme de terre 500, Lait 120, Beurre 30, Steak haché 250, Petits pois surgelés 200, Sel',
    `Préparer une purée avec le lait et le beurre.
     Cuire les petits pois 5 minutes au beurre.
     Cuire les steaks 3 minutes par face.`,
  ),
  recipe(
    'Hachis de poisson & purée gratinée',
    '🐟 plat poisson 35 facile 1 casserole,four 2',
    'Filet de colin 300, Pomme de terre 500, Lait 200, Beurre 30, Gruyère râpé 50, Persil 1, Sel',
    `Pocher le poisson 6 minutes dans le lait, l'émietter.
     Préparer une purée avec ce lait et le beurre.
     Mélanger poisson et persil, couvrir de purée et de gruyère, gratiner 15 minutes.`,
  ),
  recipe(
    'Bâtonnets de poisson maison & purée de carottes',
    '🐠 plat poisson 30 facile 1 airfryer,casserole 2',
    'Filet de colin 300, Chapelure 50, Œuf 1, Carotte 4, Pomme de terre 200, Beurre 20, Sel',
    `Cuire carottes et pomme de terre, les écraser avec le beurre.
     Couper le poisson en bâtonnets, paner (œuf, chapelure).
     Cuire 10 minutes à 200 °C à l'airfryer.`,
  ),
  recipe(
    'Gratin de pâtes au poulet & brocoli',
    '🥦 plat volaille 35 facile 1 casserole,four 4',
    'Penne 300, Blanc de poulet 2, Brocoli 1, Crème liquide 200, Gruyère râpé 100, Sel',
    `Cuire les pâtes et le brocoli ensemble.
     Dorer le poulet en dés.
     Mélanger le tout avec la crème, couvrir de gruyère, gratiner 15 minutes.`,
  ),
  recipe(
    'Boulettes de poulet & riz à la tomate',
    '🍗 plat volaille 30 facile 1 poele,casserole 2',
    'Blanc de poulet 2, Œuf 1, Chapelure 30, Coulis de tomate 300, Riz 150, Parmesan 20, Sel',
    `Hacher le poulet, mélanger avec œuf, chapelure, parmesan et sel ; former des boulettes.
     Les dorer, ajouter le coulis, mijoter 12 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Croque-monsieur au poulet',
    '🥪 plat volaille 15 facile 1 four,airfryer 2',
    'Pain de mie 4, Blanc de poulet 1, Fromage frais 40, Gruyère râpé 60, Salade verte 0.5',
    `Cuire et émincer le poulet.
     Tartiner le pain de fromage frais, garnir de poulet et de gruyère.
     Cuire 8 minutes à 200 °C (6 à l'airfryer).`,
  ),
  recipe(
    'Penne aux courgettes fondantes & fromage frais',
    '🥒 plat vege 20 facile 1 casserole,poele 2',
    'Penne 200, Courgette 2, Fromage frais 80, Parmesan 20, Sel',
    `Cuire les pâtes.
     Râper les courgettes et les faire fondre 5 minutes à la poêle.
     Mélanger avec fromage frais, pâtes et parmesan.`,
  ),
  recipe(
    'Mini-quiches au jambon',
    '🥧 plat viande 35 facile 1 four 4',
    'Pâte brisée 1, Jambon blanc 2, Œuf 2, Crème fraîche 100, Lait 50, Gruyère râpé 60, Salade verte 1, Sel',
    `Préchauffer le four à 180 °C.
     Découper des disques de pâte et garnir des moules à muffins.
     Ajouter jambon, appareil œufs-crème-lait et gruyère.
     Cuire 20 minutes. Servir avec la salade.`,
  ),

  // ---------------------------------------------------------------- sandwichs & burgers
  recipe(
    'Bagel saumon fumé & fromage frais',
    '🥯 plat poisson 10 facile 2 sans-cuisson 2',
    'Pain à burger 2, Saumon fumé 4, Fromage frais 80, Concombre 0.5, Oignon rouge 0.25, Aneth 1, Citron 0.5',
    `Toaster légèrement les pains.
     Tartiner de fromage frais à l'aneth et au citron.
     Garnir de saumon, concombre et oignon.`,
  ),
  recipe(
    'Panini mozzarella, tomate & pesto',
    '🥪 plat vege 15 facile 1 poele 2',
    'Baguette 1, Mozzarella 1, Tomate 2, Pesto 40, Roquette 30',
    `Couper la baguette en deux tronçons, les ouvrir.
     Garnir de pesto, mozzarella, tomate et roquette.
     Presser dans une poêle chaude avec une casserole posée dessus, 3 minutes par face.`,
  ),
  recipe(
    'Burger végétarien aux pois chiches',
    '🍔 plat vege 30 facile 1 poele 2',
    'Pois chiches 1, Carotte 1, Oignon 0.5, Cumin, Chapelure 40, Œuf 1, Pain à burger 2, Cheddar 40, Salade verte 0.25, Tomate 1, Mayonnaise, Sel',
    `Écraser les pois chiches avec carotte râpée, oignon, cumin, œuf, chapelure et sel.
     Former deux galettes, les dorer 4 minutes par face.
     Monter les burgers avec cheddar et crudités.`,
  ),
  recipe(
    'Sandwich poulet, crudités & sauce yaourt',
    '🥪 plat volaille 15 facile 1 poele 2',
    'Baguette 1, Blanc de poulet 1, Carotte 1, Salade verte 0.25, Tomate 1, Yaourt grec 60, Moutarde',
    `Cuire et trancher le poulet.
     Mélanger yaourt et moutarde.
     Garnir la baguette de sauce, poulet, carotte râpée, tomate et salade.`,
  ),
  recipe(
    'Croque tomate-chèvre au four',
    '🧀 plat vege 15 facile 1 four,airfryer 2',
    'Pain de mie 4, Bûche de chèvre 100, Tomate 1, Miel 10, Thym, Salade verte 0.5',
    `Garnir le pain de tomate et de chèvre, un filet de miel et du thym.
     Refermer et cuire 8 minutes à 200 °C (6 à l'airfryer).
     Servir avec la salade.`,
  ),
  recipe(
    'Burger de saumon & sauce tartare',
    '🍔 plat poisson 25 facile 2 poele 2',
    'Pavé de saumon 2, Pain à burger 2, Mayonnaise, Cornichons 30, Câpres 10, Salade verte 0.25, Tomate 1, Citron 0.5',
    `Cuire le saumon sans peau 3 minutes par face.
     Sauce : mayonnaise, cornichons et câpres hachés, citron.
     Monter les burgers avec la salade et la tomate.`,
  ),
  recipe(
    'Wrap aux pois chiches épicés',
    '🌯 plat vege 15 facile 1 poele 2',
    'Tortilla de blé 2, Pois chiches 1, Cumin, Paprika, Yaourt grec 80, Concombre 0.5, Tomate 1, Salade verte 0.25, Huile d\'olive, Sel',
    `Faire sauter les pois chiches égouttés avec épices et huile jusqu'à ce qu'ils croustillent.
     Garnir les tortillas de yaourt, crudités et pois chiches.
     Rouler serré.`,
  ),

  // ---------------------------------------------------------------- salades-repas
  recipe(
    'Salade de pommes de terre, saucisses & cornichons',
    '🥔 plat viande 25 facile 1 casserole 2',
    'Pomme de terre 500, Saucisse de Strasbourg 4, Cornichons 40, Oignon rouge 0.5, Moutarde, Vinaigre de vin, Huile de tournesol, Persil 1, Sel',
    `Cuire les pommes de terre, les couper tièdes.
     Réchauffer les saucisses 5 minutes dans l'eau frémissante et les trancher.
     Mélanger avec cornichons, oignon, persil et vinaigrette moutardée.`,
  ),
  recipe(
    'Salade de lentilles au saumon fumé',
    '🥗 plat poisson 25 facile 2 casserole 2',
    'Lentilles 150, Saumon fumé 4, Échalote 1, Aneth 1, Moutarde, Vinaigre de cidre, Huile d\'olive, Sel',
    `Cuire les lentilles 20 minutes.
     Les assaisonner tièdes de vinaigrette à l'échalote.
     Ajouter le saumon en lanières et l'aneth.`,
  ),
  recipe(
    'Salade de chou rouge, pommes & noix',
    '🥗 plat vege 15 facile 1 sans-cuisson 2',
    'Chou rouge 0.5, Pomme 1, Noix 40, Bûche de chèvre 80, Vinaigre de cidre, Miel 10, Huile d\'olive, Pain de campagne 2, Sel',
    `Émincer très finement le chou, couper la pomme en lamelles.
     Assaisonner de vinaigre, miel, huile et sel.
     Ajouter noix et chèvre ; servir avec le pain.`,
  ),
  recipe(
    'Salade d\'endives, roquefort & noix',
    '🥬 plat vege 10 facile 1 sans-cuisson 2',
    'Endive 4, Roquefort 80, Noix 40, Pomme 1, Vinaigre de vin, Huile de tournesol, Pain de campagne 2',
    `Émincer les endives et la pomme.
     Ajouter roquefort émietté et noix.
     Assaisonner de vinaigrette ; servir avec le pain.`,
  ),
  recipe(
    'Salade de poulet, quinoa & avocat',
    '🥑 plat volaille 25 facile 1 poele,casserole 2',
    'Blanc de poulet 2, Quinoa 120, Avocat 1, Tomate cerise 150, Maïs en boîte 0.5, Citron vert 1, Coriandre 1, Huile d\'olive, Sel',
    `Cuire le quinoa et le poulet.
     Mélanger avec avocat, tomates et maïs.
     Assaisonner de citron vert, huile et coriandre.`,
  ),
  recipe(
    'Salade de pâtes au thon & poivrons',
    '🥗 plat poisson 20 facile 1 casserole 2',
    'Penne 180, Thon en boîte 1, Poivron 1, Olives noires 30, Tomate 2, Oignon rouge 0.5, Vinaigre de vin, Huile d\'olive, Sel',
    `Cuire les pâtes, les refroidir.
     Ajouter thon, poivron, tomates, olives et oignon.
     Assaisonner de vinaigrette.`,
  ),
  recipe(
    'Salade de betterave, chèvre & noix',
    '🍠 plat vege 10 facile 1 sans-cuisson 2',
    'Betterave cuite 2, Chèvre frais 100, Noix 30, Mâche 80, Vinaigre balsamique, Huile d\'olive, Pain de campagne 2, Sel',
    `Couper la betterave en dés.
     Disposer sur la mâche avec le chèvre et les noix.
     Arroser de balsamique et d'huile, servir avec le pain.`,
  ),
  recipe(
    'Taboulé de semoule au poulet',
    '🌿 plat volaille 20 facile 1 poele 2',
    'Semoule 150, Blanc de poulet 1, Tomate 2, Concombre 0.5, Menthe 1, Persil 1, Citron 2, Huile d\'olive, Sel',
    `Faire gonfler la semoule dans le jus de citron, l'huile et un peu d'eau.
     Cuire et couper le poulet.
     Mélanger avec légumes et herbes.`,
  ),
]
