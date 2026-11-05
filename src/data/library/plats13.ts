import { recipe } from './dsl'

/** Lot 13 : variés, du quotidien au week-end. */
export const PLATS_13 = [
  recipe(
    'Poulet rôti au citron, olives & thym',
    '🍋 plat volaille 60 facile 2 four 4',
    'Cuisse de poulet 4, Citron 2, Olives vertes 80, Oignon 2, Thym, Pomme de terre 600, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C.
     Disposer pommes de terre, oignons et citrons en quartiers, olives et thym.
     Poser les cuisses, arroser d'huile, saler.
     Cuire 50 minutes en arrosant.`,
  ),
  recipe(
    'Escalopes de dinde au paprika & riz aux légumes',
    '🦃 plat volaille 25 facile 1 poele,casserole 2 fit',
    'Escalope de dinde 2, Paprika, Riz 160, Petits pois surgelés 100, Carotte 1, Oignon 1, Yaourt grec 80, Huile d\'olive, Sel',
    `Cuire le riz avec carotte en dés et petits pois.
     Assaisonner les escalopes de paprika, les cuire 4 minutes par face.
     Servir avec le yaourt.`,
  ),
  recipe(
    'Pâtes au saumon fumé & citron',
    '🍋 plat poisson 15 facile 2 casserole 2',
    'Tagliatelles 200, Saumon fumé 4, Crème liquide 100, Citron 1, Aneth 1, Poivre',
    `Cuire les pâtes.
     Chauffer la crème avec le zeste de citron.
     Mélanger pâtes, crème, saumon en lanières et aneth.`,
  ),
  recipe(
    'Gratin de gnocchis aux épinards & chèvre',
    '🥬 plat vege 30 facile 1 four 2',
    'Gnocchis 500, Épinard frais 150, Bûche de chèvre 100, Crème liquide 150, Ail 1, Sel',
    `Préchauffer le four à 210 °C.
     Mélanger gnocchis crus, épinards, ail et crème dans un plat.
     Couvrir de chèvre et cuire 20 minutes.`,
  ),
  recipe(
    'Bœuf aux champignons & tagliatelles',
    '🍄 plat viande 25 facile 2 poele 2',
    'Bœuf émincé 300, Champignon de Paris 200, Échalote 1, Crème fraîche 100, Tagliatelles 200, Thym, Sel',
    `Cuire les pâtes.
     Saisir le bœuf, réserver ; dorer échalote et champignons.
     Ajouter crème et thym, remettre le bœuf.`,
  ),
  recipe(
    'Salade de poulet croustillant & sauce miel-moutarde',
    '🥗 plat volaille 25 facile 1 airfryer 2',
    'Blanc de poulet 2, Chapelure 50, Œuf 1, Salade verte 1, Tomate cerise 150, Maïs en boîte 0.5, Miel 15, Moutarde 15, Huile d\'olive, Sel',
    `Paner le poulet en lanières, le cuire 12 minutes à 200 °C à l'airfryer.
     Sauce : miel, moutarde, huile.
     Assembler salade, tomates, maïs et poulet.`,
  ),
  recipe(
    'Velouté de patate douce & lentilles corail',
    '🍠 plat vege 30 facile 1 casserole 2',
    'Patate douce 1, Lentilles corail 80, Oignon 1, Lait de coco 150, Curry, Bouillon cube 1, Coriandre 1',
    `Faire revenir oignon et curry.
     Ajouter patate douce en cubes, lentilles et 70 cl de bouillon, cuire 20 minutes.
     Mixer avec le lait de coco.`,
  ),
  recipe(
    'Saumon, riz & sauce coco-curry',
    '🥥 plat poisson 25 facile 2 poele,casserole 2',
    'Pavé de saumon 2, Lait de coco 200, Curry, Épinard frais 80, Riz 150, Citron vert 1',
    `Cuire le riz.
     Chauffer le lait de coco avec le curry, ajouter épinards.
     Cuire le saumon côté peau, servir nappé de sauce.`,
  ),
  recipe(
    'Pizza poulet barbecue',
    '🍕 plat volaille 25 facile 2 four 2',
    'Pâte à pizza 1, Sauce barbecue 80, Blanc de poulet 1, Oignon rouge 0.5, Mozzarella 1, Cheddar 40',
    `Préchauffer le four au maximum.
     Cuire et émincer le poulet.
     Étaler la sauce barbecue sur la pâte, garnir de poulet, oignon et fromages.
     Cuire 12 minutes.`,
  ),
  recipe(
    'Croque végétarien aux champignons',
    '🍄 plat vege 20 facile 1 four,airfryer 2',
    'Pain de mie 4, Champignon de Paris 150, Fromage frais 60, Gruyère râpé 60, Salade verte 0.5',
    `Faire sauter les champignons émincés.
     Garnir le pain de fromage frais, champignons et gruyère.
     Cuire 8 minutes à 200 °C (6 à l'airfryer).`,
  ),
  recipe(
    'Hachis de poulet & purée de céleri',
    '🥔 plat volaille 45 facile 1 casserole,four 4',
    'Blanc de poulet 4, Céleri-rave 1, Pomme de terre 400, Lait 150, Oignon 1, Comté 60, Thym, Sel',
    `Cuire céleri et pommes de terre, les écraser avec le lait.
     Hacher le poulet, le faire revenir avec oignon et thym.
     Monter le hachis, parsemer de comté et gratiner 20 minutes.`,
  ),
  recipe(
    'Wok de crevettes & brocoli au gingembre',
    '🦐 plat poisson 20 facile 2 poele 2',
    'Crevette 250, Brocoli 1, Gingembre frais 15, Ail 1, Sauce soja 30, Riz 150, Huile de sésame',
    `Cuire le riz.
     Sauter brocoli, gingembre et ail.
     Ajouter les crevettes et le soja, 3 minutes.`,
  ),
  recipe(
    'Tajine de poulet aux carottes & cumin',
    '🥕 plat volaille 50 facile 1 casserole 4',
    'Cuisse de poulet 4, Carotte 5, Oignon 2, Cumin, Miel 15, Coriandre 1, Semoule 300, Huile d\'olive, Sel',
    `Dorer les cuisses avec les oignons et le cumin.
     Ajouter carottes en rondelles, miel et 30 cl d'eau, couvrir 35 minutes.
     Servir avec la semoule et la coriandre.`,
  ),
  recipe(
    'Œufs brouillés aux champignons & pain grillé',
    '🍳 plat vege 15 facile 1 poele 2',
    'Œuf 5, Champignon de Paris 150, Beurre 15, Ciboulette 1, Pain de campagne 4, Sel',
    `Faire sauter les champignons dans le beurre.
     Ajouter les œufs battus, remuer à feu doux jusqu'à ce qu'ils soient crémeux.
     Servir sur le pain grillé avec la ciboulette.`,
  ),
  recipe(
    'Côtes de porc à la moutarde & purée',
    '🐖 plat viande 30 facile 1 poele,casserole 2',
    'Côte de porc 2, Moutarde 30, Crème fraîche 80, Pomme de terre 500, Lait 120, Beurre 20, Sel',
    `Préparer une purée.
     Dorer les côtes 4 minutes par face.
     Ajouter crème et moutarde, laisser napper.`,
  ),
  recipe(
    'Lentilles corail au lait de coco & riz',
    '🍛 plat vege 30 facile 1 casserole 2',
    'Lentilles corail 150, Lait de coco 200, Tomates concassées 1, Oignon 1, Curry, Riz 150, Coriandre 1, Sel',
    `Faire revenir oignon et curry.
     Ajouter lentilles, tomates, lait de coco et 30 cl d'eau, cuire 18 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Tagliatelles au poulet, pesto & tomates séchées',
    '🍝 plat volaille 20 facile 1 casserole,poele 2',
    'Tagliatelles 200, Blanc de poulet 1, Pesto 50, Tomates séchées 40, Parmesan 20, Roquette 30',
    `Cuire les pâtes.
     Dorer le poulet en lanières.
     Mélanger avec pesto, tomates séchées, roquette et parmesan.`,
  ),
  recipe(
    'Filet de colin, beurre citronné & riz',
    '🐟 plat poisson 20 facile 1 poele,casserole 2',
    'Filet de colin 300, Beurre 30, Citron 1, Persil 1, Riz 150, Haricot vert 200, Sel',
    `Cuire le riz et les haricots.
     Cuire le poisson 3 minutes par face dans la moitié du beurre.
     Ajouter le reste du beurre, le jus de citron et le persil.`,
  ),
  recipe(
    'Tarte rustique tomates, mozzarella & pesto',
    '🍅 plat vege 40 facile 1 four 4',
    'Pâte brisée 1, Tomate 4, Mozzarella 1, Pesto 50, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C.
     Étaler la pâte, tartiner de pesto, garnir de tomates et mozzarella en laissant un bord.
     Replier les bords et cuire 30 minutes.`,
  ),
  recipe(
    'Poêlée de chou & saucisses',
    '🥬 plat viande 30 facile 1 poele 2',
    'Chou vert 0.5, Saucisse 4, Oignon 1, Lardons 60, Vinaigre de cidre, Pomme de terre 300, Sel',
    `Dorer les saucisses et les lardons, réserver.
     Faire revenir oignon, chou émincé et pommes de terre en dés, couvrir 15 minutes.
     Remettre les saucisses, un trait de vinaigre.`,
  ),
  recipe(
    'Boulettes de bœuf au curry & riz',
    '🍛 plat viande 35 facile 1 poele,casserole 2',
    'Steak haché 300, Oignon 1, Curry, Lait de coco 200, Tomates concassées 0.5, Riz 150, Coriandre 1, Sel',
    `Former des boulettes assaisonnées de curry, les dorer.
     Ajouter oignon, tomates et lait de coco, mijoter 15 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Salade complète de quinoa, poulet & pois chiches',
    '🥗 plat volaille 25 facile 1 poele,casserole 2 fit',
    'Quinoa 120, Blanc de poulet 2, Pois chiches 1, Concombre 1, Tomate 2, Feta 50, Citron 1, Persil 1, Huile d\'olive, Sel',
    `Cuire le quinoa 12 minutes à l'eau salée et le laisser tiédir.
     Cuire les blancs à la poêle 6 minutes par face, puis les couper en dés.
     Mélanger avec pois chiches égouttés, concombre et tomates en dés, feta, citron, persil et huile.`,
  ),
  recipe(
    'Gratin de légumes au poulet',
    '🍗 plat volaille 45 facile 1 four 4',
    'Blanc de poulet 3, Courgette 2, Brocoli 1, Carotte 2, Crème liquide 200, Gruyère râpé 80, Sel',
    `Cuire les légumes 8 minutes à l'eau.
     Les disposer avec le poulet en dés dans un plat, verser la crème.
     Couvrir de gruyère et cuire 30 minutes à 190 °C.`,
  ),
  recipe(
    'Soupe de courgettes, chèvre & basilic',
    '🥒 plat vege 25 facile 1 casserole 2',
    'Courgette 4, Bûche de chèvre 80, Basilic 1, Bouillon cube 1, Pain de campagne 2, Sel',
    `Cuire les courgettes 15 minutes dans 50 cl de bouillon.
     Mixer avec le chèvre et le basilic.
     Servir avec le pain grillé.`,
  ),
  recipe(
    'Moules au lait de coco & citron vert',
    '🦪 plat poisson 25 facile 2 casserole 2',
    'Moules 1500, Lait de coco 200, Curry, Échalote 1, Citron vert 1, Coriandre 1, Riz 150',
    `Cuire le riz.
     Faire suer l'échalote avec le curry, ajouter le lait de coco et les moules.
     Couvrir 6 minutes, ajouter citron vert et coriandre.`,
  ),
  recipe(
    'Poulet farci aux épinards & ricotta, pommes de terre',
    '🥬 plat volaille 40 facile 1 four 2',
    'Blanc de poulet 2, Épinard frais 80, Ricotta 80, Pomme de terre 400, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C.
     Ouvrir les blancs, les garnir d'épinards et de ricotta, refermer.
     Rôtir 25 minutes avec les pommes de terre en quartiers.`,
  ),
  recipe(
    'Boulettes de porc vapeur, pak choï & riz',
    '🥟 plat viande 30 moyen 1 casserole 2',
    'Échine de porc 250, Gingembre frais 10, Oignon nouveau 1, Sauce soja 30, Œuf 1, Riz 150, Pak choï 2',
    `Cuire le riz.
     Hacher le porc avec gingembre et oignon nouveau, lier à l'œuf ; former des boulettes.
     Les cuire 12 minutes à la vapeur avec le pak choï.
     Servir avec le soja.`,
  ),
  recipe(
    'Pommes de terre sautées, œufs & jambon cru',
    '🥔 plat viande 25 facile 1 poele 2',
    'Pomme de terre 500, Œuf 4, Jambon cru 4, Persil 1, Ail 1, Huile d\'olive, Sel',
    `Faire sauter les pommes de terre en dés 20 minutes à couvert.
     Ajouter ail et persil, casser les œufs dessus, couvrir 4 minutes.
     Servir avec le jambon cru.`,
  ),
  recipe(
    'Lasagnes au poulet & champignons',
    '🍗 plat volaille 60 moyen 1 four 4',
    'Feuilles de lasagne 250, Blanc de poulet 3, Champignon de Paris 300, Beurre 40, Farine 40, Lait 600, Gruyère râpé 100, Muscade, Sel',
    `Dorer le poulet en dés et les champignons.
     Préparer une béchamel muscadée.
     Alterner feuilles, poulet-champignons et béchamel, finir par le gruyère.
     Cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Tacos de dinde à la mexicaine',
    '🌮 plat volaille 25 facile 1 poele 2',
    'Escalope de dinde 2, Tortilla de blé 4, Poivron 1, Oignon rouge 0.5, Cumin, Paprika, Avocat 1, Yaourt grec 60, Citron vert 1, Sel',
    `Saisir la dinde en lanières avec épices, poivron et oignon.
     Écraser l'avocat avec le citron vert.
     Garnir les tortillas avec le yaourt.`,
  ),
]
