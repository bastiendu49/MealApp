import { recipe } from './dsl'

/** Lot 11 : airfryer, poêle seule, soupes et végé gourmand. */
export const PLATS_11 = [
  // ---------------------------------------------------------------- airfryer
  recipe(
    'Escalopes de poulet au parmesan à l\'airfryer',
    '🧀 plat volaille 25 facile 1 airfryer 2',
    'Blanc de poulet 2, Parmesan 40, Chapelure 40, Œuf 1, Tomate cerise 200, Roquette 60, Huile d\'olive, Sel',
    `Aplatir les blancs, les passer dans l'œuf puis le mélange parmesan-chapelure.
     Cuire 12 minutes à 200 °C en retournant.
     Servir avec tomates cerises et roquette.`,
  ),
  recipe(
    'Saumon miel-moutarde & pommes de terre à l\'airfryer',
    '🐟 plat poisson 30 facile 2 airfryer 2',
    'Pavé de saumon 2, Miel 15, Moutarde 20, Pomme de terre 400, Haricot vert 200, Huile d\'olive, Sel',
    `Couper les pommes de terre en quartiers, les enrober d'huile et de sel, cuire 15 minutes à 200 °C.
     Mélanger miel et moutarde, en badigeonner le dessus du saumon.
     Ajouter haricots verts huilés et saumon dans la cuve, poursuivre 10 minutes.`,
  ),
  recipe(
    'Boulettes de poulet & légumes à l\'airfryer',
    '🍗 plat volaille 30 facile 1 airfryer,casserole 2',
    'Blanc de poulet 2, Œuf 1, Chapelure 30, Ail 1, Courgette 1, Poivron 1, Riz 150, Sauce soja 20, Sel',
    `Cuire le riz.
     Hacher le poulet, mélanger avec œuf, chapelure, ail et sel ; former des boulettes.
     Cuire 12 minutes à 200 °C avec les légumes en morceaux.
     Arroser de soja.`,
  ),
  recipe(
    'Frites de céleri-rave & steak',
    '🥩 plat viande 35 facile 2 airfryer,poele 2',
    'Céleri-rave 1, Steak de bœuf 2, Paprika, Huile d\'olive, Moutarde, Sel',
    `Couper le céleri en bâtonnets, l'enrober d'huile, de paprika et de sel.
     Cuire 20 minutes à 200 °C à l'airfryer en secouant.
     Saisir les steaks 2 à 3 minutes par face. Servir avec la moutarde.`,
  ),
  recipe(
    'Pommes de terre farcies au thon à l\'airfryer',
    '🥔 plat poisson 45 facile 1 airfryer 2',
    'Pomme de terre 4, Thon en boîte 1, Fromage frais 60, Ciboulette 1, Cheddar 40, Salade verte 0.5, Sel',
    `Cuire les pommes de terre entières 35 minutes à 200 °C.
     Les évider, mélanger la chair avec thon, fromage frais et ciboulette.
     Regarnir, couvrir de cheddar et remettre 5 minutes.`,
  ),
  recipe(
    'Légumes d\'hiver rôtis, feta & lentilles',
    '🥕 plat vege 35 facile 1 airfryer,casserole 2',
    'Carotte 3, Panais 2, Oignon rouge 1, Lentilles 120, Feta 100, Miel 10, Thym, Huile d\'olive, Sel',
    `Cuire les lentilles 20 minutes.
     Enrober carottes, panais et oignon d'huile, de thym et de sel ; cuire 20 minutes à 200 °C.
     Arroser de miel, servir sur les lentilles avec la feta.`,
  ),
  recipe(
    'Nems au porc à l\'airfryer',
    '🥟 plat viande 50 moyen 1 airfryer 4',
    'Galette de riz 12, Échine de porc 250, Nouilles de riz 40, Carotte 1, Champignon de Paris 80, Oignon 1, Œuf 1, Nuoc-mâm, Salade verte 1, Menthe 1',
    `Réhydrater les nouilles, hacher porc, carotte, champignons et oignon ; mélanger avec l'œuf et le nuoc-mâm.
     Humidifier les galettes, garnir et rouler serré.
     Badigeonner d'huile et cuire 15 minutes à 190 °C en retournant.
     Servir avec salade et menthe.`,
  ),
  recipe(
    'Butternut farcie à la bolognaise',
    '🎃 plat viande 50 facile 1 airfryer,four 2',
    'Courge butternut 1, Steak haché 200, Coulis de tomate 200, Oignon 1, Mozzarella 1, Origan, Huile d\'olive, Sel',
    `Couper la courge en deux, retirer les graines, huiler et saler.
     La cuire 30 minutes à 190 °C à l'airfryer (45 minutes au four).
     Garnir d'une bolognaise rapide et de mozzarella, remettre 5 minutes.`,
  ),
  recipe(
    'Tacos de poulet croustillant à l\'airfryer',
    '🌮 plat volaille 25 facile 1 airfryer 2',
    'Blanc de poulet 2, Chapelure 50, Œuf 1, Paprika, Tortilla de blé 4, Chou rouge 0.25, Yaourt grec 80, Citron vert 1, Coriandre 1, Sel',
    `Paner le poulet en lanières (œuf, chapelure au paprika).
     Cuire 12 minutes à 200 °C.
     Garnir les tortillas de chou, poulet, yaourt citronné et coriandre.`,
  ),
  recipe(
    'Aubergines farcies à la viande à l\'airfryer',
    '🍆 plat viande 40 facile 1 airfryer 2',
    'Aubergine 2, Steak haché 200, Oignon 1, Tomates concassées 0.5, Cumin, Feta 60, Persil 1, Huile d\'olive, Sel',
    `Couper les aubergines en deux, quadriller la chair, huiler et cuire 15 minutes à 190 °C.
     Faire revenir oignon et viande avec cumin et tomates.
     Garnir les aubergines, ajouter feta et remettre 8 minutes.`,
  ),

  // ---------------------------------------------------------------- poêle seule
  recipe(
    'Poulet citron-ail & haricots verts à la poêle',
    '🍋 plat volaille 25 facile 1 poele 2',
    'Blanc de poulet 2, Haricot vert 300, Ail 2, Citron 1, Beurre 15, Huile d\'olive, Sel',
    `Faire sauter les haricots avec un fond d'eau, couvrir 6 minutes, réserver.
     Dorer le poulet en morceaux, ajouter ail, beurre et jus de citron.
     Remettre les haricots.`,
  ),
  recipe(
    'Poêlée de patates douces, chorizo & œufs',
    '🍠 plat viande 25 facile 1 poele 2',
    'Patate douce 2, Chorizo 60, Oignon rouge 1, Œuf 4, Épinard frais 60, Huile d\'olive, Sel',
    `Dorer la patate douce en dés 12 minutes à couvert.
     Ajouter oignon et chorizo, puis les épinards.
     Casser les œufs dessus, couvrir 5 minutes.`,
  ),
  recipe(
    'Risotto à la poêle au chorizo & poivrons',
    '🍚 plat viande 35 moyen 1 poele 2',
    'Riz arborio 160, Chorizo 60, Poivron 1, Oignon 1, Bouillon cube 1, Parmesan 30, Sel',
    `Dorer chorizo, oignon et poivron.
     Ajouter le riz, puis 75 cl de bouillon peu à peu en remuant, 18 minutes.
     Finir avec le parmesan.`,
  ),
  recipe(
    'Gnocchis poêlés, courge & noisettes',
    '🎃 plat vege 25 facile 1 poele 2',
    'Gnocchis 500, Courge butternut 0.5, Beurre 30, Noisettes 30, Parmesan 30, Thym, Sel',
    `Dorer la courge en petits dés 12 minutes à couvert.
     Ajouter gnocchis et beurre, faire dorer 6 minutes.
     Ajouter thym, noisettes concassées et parmesan.`,
  ),
  recipe(
    'Escalopes de dinde au pesto & tomates cerises',
    '🍅 plat volaille 20 facile 1 poele 2',
    'Escalope de dinde 2, Pesto 40, Tomate cerise 200, Mozzarella 1, Pomme de terre 400, Huile d\'olive, Sel',
    `Faire sauter les pommes de terre en dés à couvert 20 minutes.
     Dorer les escalopes, les napper de pesto, ajouter tomates et mozzarella.
     Couvrir 3 minutes.`,
  ),
  recipe(
    'Crêpe-omelette au saumon & épinards',
    '🍳 plat poisson 15 facile 1 poele 2',
    'Œuf 4, Saumon fumé 3, Épinard frais 80, Fromage frais 60, Pain de campagne 2',
    `Cuire la moitié des œufs battus en omelette très fine.
     Tartiner de fromage frais, garnir d'épinards et de saumon, rouler.
     Recommencer ; servir avec le pain grillé.`,
  ),
  recipe(
    'Bœuf, brocoli & nouilles sauce soja-miel',
    '🥦 plat viande 25 facile 2 poele 2',
    'Bœuf émincé 300, Brocoli 1, Nouilles chinoises 150, Sauce soja 40, Miel 15, Ail 1, Maïzena 5, Huile de tournesol',
    `Cuire les nouilles.
     Saisir le bœuf, réserver ; sauter le brocoli avec l'ail et un fond d'eau.
     Ajouter soja, miel et maïzena délayée, remettre bœuf et nouilles.`,
  ),
  recipe(
    'Fajitas végétariennes au halloumi',
    '🫑 plat vege 20 facile 2 poele 2',
    'Halloumi 200, Poivron 2, Oignon rouge 1, Tortilla de blé 4, Cumin, Paprika, Avocat 1, Citron vert 1, Huile d\'olive',
    `Sauter poivrons et oignon avec les épices.
     Dorer l'halloumi en lanières.
     Garnir les tortillas avec avocat et citron vert.`,
  ),

  // ---------------------------------------------------------------- soupes
  recipe(
    'Velouté de chou-fleur & croûtons',
    '🥦 plat vege 30 facile 1 casserole 2',
    'Chou-fleur 1, Pomme de terre 150, Oignon 1, Bouillon cube 1, Crème liquide 60, Pain de mie 2, Muscade, Sel',
    `Faire revenir l'oignon, ajouter chou-fleur et pomme de terre.
     Couvrir de bouillon et cuire 20 minutes.
     Mixer avec crème et muscade, servir avec les croûtons dorés.`,
  ),
  recipe(
    'Soupe de lentilles au lard',
    '🥣 plat viande 45 facile 1 casserole 4',
    'Lentilles 250, Lardons fumés 150, Carotte 2, Oignon 1, Pomme de terre 200, Laurier, Crème fraîche 60, Pain de campagne 4',
    `Faire revenir lardons et oignon.
     Ajouter lentilles, carottes, pomme de terre, laurier et 1,5 litre d'eau ; cuire 35 minutes.
     Mixer en partie, ajouter la crème ; servir avec le pain.`,
  ),
  recipe(
    'Soupe de tomates rôties & tartines au fromage',
    '🍅 plat vege 40 facile 1 four,casserole 2',
    'Tomate 8, Oignon 1, Ail 2, Basilic 1, Bouillon cube 1, Pain de campagne 4, Comté 80, Huile d\'olive, Sel',
    `Rôtir tomates, oignon et ail 25 minutes à 210 °C.
     Mixer avec 40 cl de bouillon et le basilic.
     Servir avec des tartines gratinées au comté.`,
  ),
  recipe(
    'Soupe de poulet aux nouilles',
    '🍜 plat volaille 40 facile 1 casserole 4',
    'Cuisse de poulet 2, Carotte 2, Céleri 1, Oignon 1, Bouillon cube 2, Coquillettes 120, Persil 1, Sel',
    `Pocher les cuisses 25 minutes dans 1,5 litre de bouillon avec oignon, carottes et céleri en dés.
     Effilocher le poulet et le remettre.
     Ajouter les pâtes 8 minutes, puis le persil.`,
  ),
  recipe(
    'Velouté de petits pois à la menthe & œuf mollet',
    '🫛 plat vege 25 facile 1 casserole 2',
    'Petits pois surgelés 400, Oignon 1, Bouillon cube 1, Menthe 1, Crème liquide 50, Œuf 2, Sel',
    `Faire revenir l'oignon, ajouter petits pois et 60 cl de bouillon, 10 minutes.
     Mixer avec menthe et crème.
     Servir avec un œuf mollet.`,
  ),
  recipe(
    'Harira, soupe marocaine aux lentilles & pois chiches',
    '🥣 plat vege 45 facile 1 casserole 4',
    'Lentilles 120, Pois chiches 1, Tomates concassées 1, Oignon 1, Céleri 1, Coriandre 1, Persil 1, Curcuma, Cannelle, Coquillettes 50, Citron 1, Sel',
    `Faire revenir oignon et céleri avec les épices.
     Ajouter lentilles, tomates et 1,5 litre d'eau, cuire 30 minutes.
     Ajouter pois chiches et pâtes 8 minutes, puis les herbes.
     Servir avec le citron.`,
  ),
  recipe(
    'Velouté de poireaux & saumon fumé',
    '🥣 plat poisson 30 facile 2 casserole 2',
    'Poireau 3, Pomme de terre 200, Bouillon cube 1, Crème liquide 60, Saumon fumé 3, Ciboulette 1, Sel',
    `Cuire poireaux et pomme de terre 20 minutes dans 70 cl de bouillon.
     Mixer avec la crème.
     Servir avec le saumon en lanières et la ciboulette.`,
  ),
  recipe(
    'Bouillon thaï aux crevettes & légumes',
    '🦐 plat poisson 25 facile 2 casserole 2',
    'Crevette 200, Bouillon cube 1, Lait de coco 200, Pâte de curry 15, Champignon de Paris 100, Pak choï 2, Nouilles de riz 80, Citron vert 1, Coriandre 1',
    `Porter 60 cl de bouillon avec la pâte de curry et le lait de coco.
     Ajouter champignons et pak choï, 4 minutes, puis crevettes 3 minutes.
     Ajouter les nouilles réhydratées, le citron vert et la coriandre.`,
  ),

  // ---------------------------------------------------------------- végé gourmand
  recipe(
    'Burger au halloumi & légumes grillés',
    '🍔 plat vege 25 facile 2 poele 2',
    'Halloumi 150, Pain à burger 2, Courgette 1, Poivron 1, Pesto 30, Roquette 30',
    `Griller courgette et poivron en tranches à la poêle.
     Dorer l'halloumi en tranches.
     Monter les burgers avec pesto, légumes, halloumi et roquette.`,
  ),
  recipe(
    'Tarte tatin de tomates cerises',
    '🍅 plat vege 40 moyen 1 four,poele 4',
    'Tomate cerise 400, Pâte feuilletée 1, Sucre 20, Vinaigre balsamique, Bûche de chèvre 100, Thym, Salade verte 1',
    `Faire un caramel léger avec sucre et balsamique dans une poêle allant au four.
     Y serrer les tomates, parsemer de thym et de chèvre.
     Couvrir de pâte, cuire 25 minutes à 200 °C et retourner.`,
  ),
  recipe(
    'Gratin de courgettes à la ricotta & menthe',
    '🥒 plat vege 40 facile 1 four 2',
    'Courgette 3, Ricotta 200, Œuf 2, Menthe 1, Parmesan 40, Sel',
    `Couper les courgettes en rondelles fines, les faire revenir 5 minutes.
     Mélanger ricotta, œufs, menthe et la moitié du parmesan.
     Alterner dans un plat, couvrir de parmesan et cuire 25 minutes.`,
  ),
  recipe(
    'Pâtes aux champignons & crème de noix',
    '🍄 plat vege 20 facile 1 casserole,poele 2',
    'Tagliatelles 200, Champignon de Paris 250, Noix 40, Crème liquide 100, Ail 1, Parmesan 30, Persil 1',
    `Cuire les pâtes.
     Dorer champignons et ail.
     Mixer les noix avec la crème, ajouter aux champignons.
     Mélanger avec pâtes, parmesan et persil.`,
  ),
  recipe(
    'Feuilletés aux poireaux & chèvre',
    '🥐 plat vege 35 facile 1 four 4',
    'Pâte feuilletée 2, Poireau 2, Chèvre frais 150, Crème fraîche 40, Œuf 1, Salade verte 1, Sel',
    `Faire fondre les poireaux, ajouter la crème.
     Découper des carrés de pâte, garnir de poireaux et de chèvre, refermer en chaussons.
     Dorer à l'œuf, cuire 20 minutes à 200 °C.`,
  ),
  recipe(
    'Lasagnes à la courge & ricotta',
    '🎃 plat vege 60 moyen 1 four 4',
    'Feuilles de lasagne 250, Courge butternut 1, Ricotta 250, Épinard frais 150, Parmesan 50, Crème liquide 200, Muscade, Sel',
    `Rôtir la courge en cubes 25 minutes et l'écraser.
     Mélanger ricotta, épinards et muscade.
     Alterner feuilles, courge, ricotta et crème ; finir par le parmesan.
     Cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Tartines de légumes rôtis & mozzarella',
    '🥖 plat vege 30 facile 1 four 2',
    'Pain de campagne 4, Courgette 1, Poivron 1, Aubergine 0.5, Mozzarella 1, Pesto 30, Huile d\'olive, Sel',
    `Rôtir les légumes en petits dés 15 minutes à 210 °C.
     Tartiner le pain de pesto, garnir de légumes et de mozzarella.
     Gratiner 8 minutes.`,
  ),
]
