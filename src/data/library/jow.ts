import { recipe } from './dsl'

/**
 * Plats que l'utilisateur aimait sur Jow, réécrits comme versions maison : mêmes idées de
 * plats, recettes et formulations à nous (pas de copie d'un service existant).
 */
export const JOW_FAVORITES = [
  recipe(
    'Poulet au curry & riz',
    '🍛 plat volaille 30 facile 1 poele 2',
    'Blanc de poulet 2, Oignon 1, Ail 1, Lait de coco 200, Curry, Concentré de tomate 15, Riz 150, Coriandre 1, Huile de tournesol, Sel',
    `Lancer la cuisson du riz dans un grand volume d'eau salée.
     Couper le poulet en cubes, émincer l'oignon et l'ail.
     Faire dorer le poulet 5 minutes dans un filet d'huile, puis ajouter oignon et ail.
     Saupoudrer de curry, ajouter le concentré de tomate et laisser torréfier 1 minute.
     Verser le lait de coco, saler et laisser mijoter 10 minutes à feu doux.
     Servir sur le riz, parsemé de coriandre ciselée.`,
  ),
  recipe(
    'Poulet impérial aux poivrons & riz',
    '🥡 plat volaille 30 facile 2 poele 2',
    'Blanc de poulet 2, Poivron 2, Oignon 1, Ananas 0.25, Sauce soja, Ketchup, Miel, Vinaigre de cidre, Maïzena 10, Riz 150, Huile de tournesol',
    `Cuire le riz. Couper le poulet en lanières, les poivrons et l'oignon en morceaux.
     Rouler le poulet dans la maïzena puis le saisir à feu vif dans un filet d'huile.
     Ajouter poivrons, oignon et ananas en dés, sauter 5 minutes.
     Mélanger 3 c. à s. de sauce soja, 2 de ketchup, 1 de miel et 1 de vinaigre, verser dans la poêle.
     Laisser la sauce napper 2 minutes et servir avec le riz.`,
  ),
  recipe(
    'Croque-monsieur au four & salade',
    '🧀 plat viande 20 facile 1 four,airfryer 2',
    'Pain de mie 8, Jambon blanc 4, Gruyère râpé 80, Beurre 20, Crème fraîche 50, Salade verte 0.5, Vinaigre balsamique, Huile d\'olive',
    `Préchauffer le four à 200 °C (ou l'airfryer à 180 °C).
     Beurrer légèrement l'extérieur des tranches de pain.
     Garnir chaque croque d'une tranche de jambon, de crème et de gruyère, refermer.
     Couvrir de crème et du reste de gruyère, cuire 10 minutes jusqu'à ce que ce soit doré (8 minutes à l'airfryer).
     Servir avec la salade assaisonnée.`,
  ),
  recipe(
    'Croque-madame au four',
    '🍳 plat viande 20 facile 1 four,airfryer 2',
    'Pain de mie 4, Jambon blanc 2, Comté 60, Œuf 2, Beurre 15, Salade verte 0.5, Huile d\'olive, Vinaigre de vin',
    `Préchauffer le four à 200 °C (ou l'airfryer à 180 °C).
     Monter deux croques : pain beurré, jambon, comté râpé, pain.
     Parsemer le dessus de comté et cuire 8 minutes.
     Pendant ce temps, cuire les œufs au plat.
     Déposer un œuf sur chaque croque et servir avec la salade.`,
  ),
  recipe(
    'Enchiladas poulet & courgette',
    '🌯 plat volaille 40 facile 2 four 2',
    'Tortilla de blé 4, Blanc de poulet 2, Courgette 1, Oignon 1, Tomates concassées 1, Cumin, Paprika, Cheddar 100, Crème fraîche 50, Coriandre 1, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C.
     Faire revenir l'oignon émincé, puis le poulet et la courgette en petits dés, 8 minutes.
     Ajouter cumin, paprika, sel et la moitié des tomates concassées.
     Garnir les tortillas, les rouler et les serrer dans un plat.
     Napper du reste de tomates, de crème et de cheddar râpé.
     Gratiner 15 minutes et parsemer de coriandre.`,
  ),
  recipe(
    'Quesadillas poulet & fromage',
    '🫓 plat volaille 20 facile 1 poele 2',
    'Tortilla de blé 4, Blanc de poulet 1, Poivron 1, Maïs en boîte 0.5, Cheddar 120, Paprika, Crème fraîche 50, Huile de tournesol',
    `Couper le poulet en petits dés et le poivron en lanières, les faire sauter 6 minutes avec le paprika.
     Ajouter le maïs égoutté.
     Sur une tortilla, étaler du cheddar râpé, la garniture, encore du fromage, couvrir d'une tortilla.
     Dorer 2 à 3 minutes de chaque côté dans une poêle à peine huilée.
     Couper en parts et servir avec la crème.`,
  ),
  recipe(
    'Gnocchis maison au beurre & parmesan',
    '🥔 plat vege 50 moyen 1 casserole,poele 2',
    'Pomme de terre 500, Farine 150, Œuf 1, Beurre 30, Parmesan 40, Sel, Poivre',
    `Cuire les pommes de terre entières dans l'eau salée 25 minutes, les peler et les écraser encore chaudes.
     Ajouter l'œuf, le sel, puis la farine petit à petit jusqu'à une pâte souple qui ne colle plus.
     Former des boudins, les couper en tronçons et les marquer à la fourchette.
     Plonger les gnocchis dans l'eau bouillante salée : ils sont cuits quand ils remontent.
     Les faire dorer au beurre dans une poêle, servir avec le parmesan et du poivre.`,
  ),
  recipe(
    'Gratin de pâtes à la bolognaise',
    '🍝 plat viande 40 facile 1 casserole,four 3',
    'Penne 250, Steak haché 300, Oignon 1, Ail 1, Coulis de tomate 400, Herbes de Provence, Gruyère râpé 100, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C et cuire les pâtes 2 minutes de moins qu'indiqué.
     Faire revenir oignon et ail émincés, ajouter la viande et l'émietter.
     Verser le coulis, les herbes, saler, poivrer et laisser mijoter 10 minutes.
     Mélanger avec les pâtes dans un plat, couvrir de gruyère.
     Gratiner 15 minutes.`,
  ),
  recipe(
    'Poulet ail & fines herbes, lardons & pommes de terre',
    '🥓 plat volaille 50 facile 2 four 2',
    'Blanc de poulet 2, Fromage frais 80, Ciboulette 1, Ail 2, Lardons fumés 100, Pomme de terre 500, Huile d\'olive, Herbes de Provence, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Couper les pommes de terre en cubes, les mélanger avec huile, herbes, sel, et les étaler dans un plat.
     Mélanger le fromage frais avec l'ail haché et la ciboulette ciselée.
     Entailler les blancs en portefeuille, les garnir de ce mélange et les poser sur les pommes de terre.
     Parsemer de lardons et cuire 35 minutes.`,
  ),
  recipe(
    'One pan tacos bœuf & poivrons',
    '🌮 plat viande 30 facile 2 four 2',
    'Bœuf émincé 300, Poivron 2, Oignon rouge 1, Cumin, Paprika, Tortilla de blé 4, Avocat 1, Citron vert 1, Crème fraîche 50, Coriandre 1, Huile d\'olive, Sel',
    `Préchauffer le four à 220 °C.
     Mélanger bœuf, poivrons et oignon émincés avec huile, cumin, paprika et sel sur une plaque.
     Enfourner 15 minutes en remuant à mi-cuisson.
     Écraser l'avocat avec le jus du citron vert et une pincée de sel.
     Réchauffer les tortillas 2 minutes au four et garnir : viande, avocat, crème, coriandre.`,
  ),
  recipe(
    'Bruschetta œufs & jambon cru',
    '🥖 plat viande 15 facile 2 four,poele 2',
    'Pain de campagne 4, Pesto 40, Fromage frais 60, Jambon cru 4, Œuf 2, Roquette 40, Huile d\'olive, Poivre',
    `Griller les tranches de pain au four ou à la poêle.
     Les tartiner de fromage frais puis d'un peu de pesto.
     Cuire les œufs au plat.
     Garnir de jambon cru, d'un œuf et de roquette, poivrer et servir aussitôt.`,
  ),
  recipe(
    'Poulet miel-moutarde & légumes rôtis',
    '🍯 plat volaille 45 facile 1 four,airfryer 2',
    'Cuisse de poulet 2, Moutarde 30, Miel 30, Pomme de terre 400, Carotte 2, Oignon rouge 1, Thym, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C (ou l'airfryer à 190 °C).
     Couper pommes de terre et carottes en morceaux, l'oignon en quartiers, les enrober d'huile, sel et thym.
     Mélanger moutarde et miel, en badigeonner les cuisses.
     Poser le poulet sur les légumes et cuire 35 minutes (25 minutes à l'airfryer, en deux fournées si besoin).
     Arroser du jus de cuisson avant de servir.`,
  ),
  recipe(
    'One pan poulet & citron',
    '🍋 plat volaille 45 facile 2 four 2',
    'Cuisse de poulet 2, Citron 1, Pomme de terre 400, Olives vertes 50, Ail 3, Origan, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Couper les pommes de terre en deux et le citron en rondelles.
     Tout disposer sur une plaque avec les gousses d'ail entières et les olives.
     Arroser d'huile, assaisonner d'origan, sel et poivre, poser les cuisses par-dessus.
     Cuire 40 minutes jusqu'à ce que la peau soit croustillante.`,
  ),
  recipe(
    'Poêlée de pommes de terre, bœuf & courgette',
    '🥘 plat viande 30 facile 2 poele 2',
    'Pomme de terre 400, Steak de bœuf 2, Courgette 1, Oignon rouge 1, Persil 1, Huile d\'olive, Sel, Poivre',
    `Couper les pommes de terre en petits cubes, les dorer 15 minutes à couvert dans l'huile en remuant.
     Ajouter la courgette en dés et l'oignon émincé, poursuivre 8 minutes à découvert.
     Couper les steaks en lanières et les saisir à part 2 minutes à feu vif.
     Mélanger le tout, saler, poivrer et parsemer de persil.`,
  ),
  recipe(
    'Burger fondant au bacon & raclette',
    '🍔 plat viande 25 facile 2 poele 2',
    'Pain à burger 2, Steak haché 250, Raclette 4, Bacon 4, Oignon rouge 1, Salade verte 0.25, Tomate 1, Ketchup, Mayonnaise, Frites surgelées 300',
    `Cuire les frites selon le paquet (four ou airfryer).
     Former deux steaks, saler et les cuire 3 minutes par face à la poêle.
     Griller le bacon à côté, puis poser deux tranches de raclette sur chaque steak et couvrir 1 minute pour la faire fondre.
     Toaster les pains, tartiner de sauce, garnir de salade, tomate, steak, bacon et oignon.
     Servir avec les frites.`,
  ),
  recipe(
    'Salade de pommes de terre au saumon fumé',
    '🥗 plat poisson 30 facile 2 casserole 2',
    'Pomme de terre 500, Saumon fumé 4, Épinard frais 60, Fromage frais 60, Citron 1, Aneth 1, Oignon rouge 0.5, Huile d\'olive, Sel, Poivre',
    `Cuire les pommes de terre dans l'eau salée 20 minutes, les laisser tiédir et les couper en rondelles.
     Détendre le fromage frais avec le jus de citron, un filet d'huile et l'aneth ciselé.
     Disposer pousses d'épinard, pommes de terre, saumon en lanières et oignon émincé.
     Napper de sauce, poivrer et servir tiède.`,
  ),
  recipe(
    'Coquillettes au jambon',
    '🍲 plat viande 15 facile 1 casserole 2',
    'Coquillettes 200, Jambon blanc 3, Beurre 20, Gruyère râpé 60, Crème fraîche 30, Sel, Poivre',
    `Cuire les coquillettes dans l'eau salée selon le paquet et les égoutter.
     Remettre dans la casserole avec le beurre, la crème et le gruyère.
     Ajouter le jambon en lanières, poivrer et remuer jusqu'à ce que ça file.`,
  ),
  recipe(
    'Risotto de coquillettes aux poireaux & fromage frais',
    '🧄 plat vege 25 facile 1 casserole 2',
    'Coquillettes 200, Poireau 1, Bouillon cube 1, Fromage frais 80, Parmesan 30, Beurre 15, Poivre',
    `Émincer le poireau et le faire fondre 5 minutes dans le beurre.
     Ajouter les coquillettes et les nacrer 1 minute.
     Mouiller avec 60 cl de bouillon chaud, petit à petit, en remuant jusqu'à absorption (12 minutes environ).
     Hors du feu, incorporer fromage frais et parmesan, poivrer.`,
  ),
  recipe(
    'Curry de crevettes aux épinards & riz',
    '🦐 plat poisson 25 facile 2 poele 2',
    'Crevette 250, Épinard frais 150, Lait de coco 200, Pâte de curry 20, Oignon 1, Ail 1, Gingembre frais 10, Riz 150, Citron vert 1, Huile de tournesol',
    `Cuire le riz.
     Faire revenir oignon, ail et gingembre hachés, ajouter la pâte de curry 1 minute.
     Verser le lait de coco, porter à frémissement puis ajouter les crevettes, 3 minutes.
     Ajouter les épinards et les laisser tomber 1 minute.
     Arroser de citron vert et servir avec le riz.`,
  ),
  recipe(
    'Gnocchis crémeux au saumon & épinards',
    '🐟 plat poisson 20 facile 2 poele 2',
    'Gnocchis 500, Pavé de saumon 2, Épinard frais 100, Crème liquide 150, Ail 1, Citron 0.5, Parmesan 20, Huile d\'olive, Sel, Poivre',
    `Dorer les gnocchis 6 minutes à la poêle dans un filet d'huile, réserver.
     Saisir le saumon coupé en cubes 3 minutes avec l'ail haché.
     Verser la crème, ajouter les épinards et le zeste de citron, laisser réduire 2 minutes.
     Remettre les gnocchis, parsemer de parmesan, poivrer et servir.`,
  ),
]
