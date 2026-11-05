import { recipe } from './dsl'

/** Lot sportif 2 : airfryer, poêle seule, cuisines du monde, salades-repas, toujours complets. */
export const FIT_2 = [
  // ---------------------------------------------------------------- airfryer
  recipe(
    'Poulet croustillant à l\'airfryer, riz & légumes',
    '🍗 plat volaille 30 facile 1 airfryer,casserole 2 fit',
    'Blanc de poulet 2, Œuf 1, Chapelure 40, Paprika, Riz 160, Haricots verts surgelés 250, Yaourt grec 80, Moutarde, Sel',
    `Cuire le riz et les haricots verts.
     Couper le poulet en lanières, les passer dans l'œuf puis la chapelure au paprika et au sel.
     Cuire 12 minutes à 200 °C à l'airfryer en retournant.
     Servir avec une sauce yaourt-moutarde.`,
  ),
  recipe(
    'Saumon & patates douces rôtis à l\'airfryer',
    '🐟 plat poisson 30 facile 2 airfryer 2 fit',
    'Pavé de saumon 2, Patate douce 2, Brocoli 1, Yaourt grec 100, Citron 1, Paprika, Huile d\'olive, Sel',
    `Couper les patates douces en cubes, huile, paprika et sel ; cuire 12 minutes à 200 °C.
     Ajouter le brocoli en bouquets et le saumon, poursuivre 10 minutes.
     Servir avec le yaourt citronné.`,
  ),
  recipe(
    'Dinde marinée à l\'airfryer & boulgour aux légumes',
    '🦃 plat volaille 30 facile 1 airfryer,casserole 2 fit',
    'Escalope de dinde 2, Sauce soja 20, Miel 10, Ail 1, Boulgour 160, Courgette 1, Tomate 1, Persil 1, Huile d\'olive, Sel',
    `Mariner la dinde en lanières dans soja, miel et ail.
     Cuire le boulgour, y ajouter courgette râpée crue, tomate et persil.
     Cuire la dinde 10 minutes à 200 °C à l'airfryer.`,
  ),
  recipe(
    'Boulettes de dinde à l\'airfryer, pâtes & sauce tomate',
    '🧆 plat volaille 30 facile 1 airfryer,casserole 2 fit',
    'Escalope de dinde 3, Œuf 1, Parmesan 20, Ail 1, Persil 1, Spaghetti 160, Coulis de tomate 300, Épinard frais 80, Sel',
    `Hacher la dinde au couteau ou au mixeur, mélanger avec œuf, parmesan, ail, persil et sel.
     Former des boulettes, les cuire 12 minutes à 200 °C à l'airfryer.
     Chauffer le coulis avec les épinards, y ajouter les boulettes.
     Servir sur les spaghetti.`,
  ),
  recipe(
    'Falafels protéinés, pita & salade',
    '🧆 plat vege 35 facile 1 airfryer 2 fit',
    'Pois chiches 2, Œuf 1, Farine 20, Persil 1, Cumin, Ail 1, Pain pita 2, Yaourt grec 150, Tomate 1, Concombre 0.5, Citron 0.5, Sel',
    `Mixer pois chiches égouttés, œuf, ail, persil, cumin, farine et sel.
     Former des boules, les cuire 14 minutes à 190 °C à l'airfryer.
     Garnir les pitas de falafels, crudités et yaourt citronné.`,
  ),
  recipe(
    'Pilons de poulet épicés, quinoa & salade',
    '🍗 plat volaille 35 facile 1 airfryer,casserole 2 fit',
    'Pilon de poulet 6, Paprika, Cumin, Ail 1, Quinoa 140, Concombre 0.5, Tomate cerise 150, Roquette 40, Citron 1, Huile d\'olive, Sel',
    `Frotter les pilons d'épices, d'ail, d'huile et de sel.
     Les cuire 24 minutes à 200 °C à l'airfryer en retournant.
     Cuire le quinoa, le mélanger aux légumes, à la roquette et au citron.`,
  ),
  recipe(
    'Cabillaud pané à l\'airfryer & purée de petits pois',
    '🐟 plat poisson 30 facile 2 airfryer,casserole 2 fit',
    'Cabillaud 400, Chapelure 40, Œuf 1, Petits pois surgelés 300, Pomme de terre 300, Menthe 1, Citron 1, Sel',
    `Cuire pommes de terre et petits pois, les écraser avec menthe et sel.
     Paner le cabillaud dans l'œuf puis la chapelure.
     Cuire 10 minutes à 200 °C à l'airfryer.
     Servir avec le citron.`,
  ),
  recipe(
    'Tofu mariné à l\'airfryer, nouilles & légumes',
    '🌱 plat vege 30 facile 1 airfryer,poele 2 fit',
    'Tofu 400, Sauce soja 30, Maïzena 15, Nouilles chinoises 140, Brocoli 1, Carotte 1, Cacahuètes 30, Ail 1, Huile de sésame',
    `Mariner le tofu en cubes dans le soja 10 minutes, l'enrober de maïzena.
     Cuire 15 minutes à 200 °C à l'airfryer.
     Cuire les nouilles, sauter brocoli, carotte et ail.
     Assembler avec cacahuètes et huile de sésame.`,
  ),

  // ---------------------------------------------------------------- poêle seule
  recipe(
    'Poêlée poulet, haricots blancs & épinards',
    '🍗 plat volaille 20 facile 1 poele 2 fit',
    'Blanc de poulet 2, Haricots blancs 1, Épinard frais 120, Tomate cerise 150, Ail 1, Paprika, Huile d\'olive, Sel',
    `Saisir le poulet en dés avec le paprika, 6 minutes.
     Ajouter ail, tomates cerises et haricots égouttés, 4 minutes.
     Ajouter les épinards et laisser tomber 2 minutes.`,
  ),
  recipe(
    'Omelette roulée au poulet & légumes, pain complet',
    '🍳 plat volaille 20 facile 1 poele 2 fit',
    'Œuf 6, Blanc de poulet 1, Poivron 1, Épinard frais 60, Pain de campagne 2, Fromage blanc 60, Sel, Poivre',
    `Faire revenir le poulet en petits dés et le poivron, réserver.
     Battre les œufs avec le fromage blanc, cuire la moitié en omelette fine.
     Garnir de poulet, poivron et épinards, rouler. Recommencer.
     Servir avec le pain grillé.`,
  ),
  recipe(
    'Bœuf, poivrons & semoule à la poêle',
    '🥩 plat viande 25 facile 2 poele 2 fit',
    'Bœuf émincé 350, Poivron 2, Oignon rouge 1, Cumin, Paprika, Semoule 140, Yaourt grec 80, Huile d\'olive, Sel',
    `Saisir le bœuf avec les épices, réserver.
     Sauter poivrons et oignon 6 minutes.
     Verser la semoule et autant d'eau bouillante salée, couvrir 5 minutes hors du feu.
     Remettre le bœuf et servir avec le yaourt.`,
  ),
  recipe(
    'Crevettes, quinoa & courgettes à la poêle',
    '🦐 plat poisson 25 facile 2 poele 2 fit',
    'Crevette 350, Quinoa 140, Courgette 2, Ail 2, Citron 1, Persil 1, Huile d\'olive, Sel',
    `Cuire le quinoa dans la poêle avec deux fois son volume d'eau, 12 minutes, réserver.
     Sauter les courgettes en dés avec l'ail, puis les crevettes 3 minutes.
     Remettre le quinoa avec citron et persil.`,
  ),
  recipe(
    'Escalope de dinde, lentilles & carottes',
    '🦃 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Escalope de dinde 2, Lentilles 120, Carotte 2, Oignon 1, Thym, Moutarde, Huile d\'olive, Sel',
    `Cuire les lentilles 20 minutes avec carottes en rondelles, oignon et thym.
     Saisir les escalopes 4 minutes par face.
     Servir avec une cuillère de moutarde.`,
  ),
  recipe(
    'Œufs brouillés, saumon fumé & avocat sur pain complet',
    '🥑 plat poisson 15 facile 2 poele 2 fit',
    'Œuf 5, Saumon fumé 4, Avocat 1, Pain de campagne 4, Épinard frais 60, Ciboulette 1, Poivre',
    `Brouiller les œufs à feu doux sans les dessécher.
     Griller le pain à la poêle.
     Garnir de pousses d'épinard, avocat, œufs, saumon et ciboulette.`,
  ),
  recipe(
    'Steak haché, riz & poêlée de légumes',
    '🥩 plat viande 25 facile 1 poele,casserole 2 fit',
    'Steak haché 350, Riz 160, Courgette 1, Carotte 1, Poivron 1, Herbes de Provence, Huile d\'olive, Sel',
    `Cuire le riz.
     Sauter les légumes en dés 10 minutes avec les herbes.
     Cuire les steaks 3 minutes par face.`,
  ),

  // ---------------------------------------------------------------- monde
  recipe(
    'Poulet tandoori, riz & raïta',
    '🍗 plat volaille 35 facile 1 four,casserole 2 fit',
    'Blanc de poulet 2, Yaourt grec 200, Épices tandoori 15, Citron 1, Riz 160, Concombre 1, Menthe 1, Salade verte 0.5, Sel',
    `Mariner le poulet dans la moitié du yaourt avec épices, citron et sel.
     Le rôtir 20 minutes à 220 °C.
     Cuire le riz. Raïta : reste du yaourt, concombre râpé et menthe.
     Servir avec la salade.`,
  ),
  recipe(
    'Bibimbap healthy au bœuf',
    '🍚 plat viande 35 moyen 2 poele,casserole 2 fit',
    'Bœuf émincé 300, Riz 160, Œuf 2, Épinard frais 100, Carotte 1, Courgette 1, Pousses de soja 80, Sauce soja 30, Ail 1, Huile de sésame, Graines de sésame 10',
    `Cuire le riz.
     Sauter séparément les légumes, puis le bœuf mariné dans soja et ail.
     Cuire les œufs au plat.
     Disposer sur le riz, finir avec huile et graines de sésame.`,
  ),
  recipe(
    'Poulet shawarma, boulgour & taboulé',
    '🥙 plat volaille 35 facile 1 four,casserole 2 fit',
    'Blanc de poulet 2, Yaourt grec 120, Cumin, Paprika, Curcuma, Ail 1, Boulgour 160, Tomate 2, Persil 1, Citron 1, Huile d\'olive, Sel',
    `Mariner le poulet dans une partie du yaourt, épices et ail ; le rôtir 20 minutes à 220 °C.
     Cuire le boulgour, ajouter tomates, persil, citron et huile.
     Servir avec le reste du yaourt.`,
  ),
  recipe(
    'Chili de dinde, patate douce & haricots rouges',
    '🌶️ plat volaille 40 facile 1 casserole 4 fit',
    'Escalope de dinde 4, Patate douce 2, Haricots rouges 2, Tomates concassées 2, Oignon 1, Cumin, Paprika, Yaourt grec 150, Coriandre 1, Huile d\'olive, Sel',
    `Faire revenir l'oignon, ajouter la dinde en dés et les épices.
     Ajouter patates douces en cubes, tomates, haricots et 20 cl d'eau, mijoter 25 minutes.
     Servir avec le yaourt et la coriandre.`,
  ),
  recipe(
    'Poke bowl saumon cru & riz',
    '🍣 plat poisson 25 moyen 3 casserole 2 fit',
    'Pavé de saumon 3, Riz rond 160, Avocat 1, Concombre 0.5, Petits pois surgelés 100, Chou rouge 0.25, Sauce soja 30, Graines de sésame 10, Citron vert 1',
    `Cuire le riz et les petits pois, laisser tiédir.
     Couper le saumon très frais en dés, le mariner 10 minutes dans le soja et le citron vert.
     Composer les bols avec les légumes et parsemer de sésame.`,
  ),
  recipe(
    'Fajitas de crevettes & riz mexicain',
    '🌮 plat poisson 30 facile 2 poele,casserole 2 fit',
    'Crevette 350, Riz 140, Poivron 2, Oignon 1, Tomates concassées 0.5, Cumin, Paprika, Tortilla de blé 2, Citron vert 1, Huile d\'olive, Sel',
    `Cuire le riz avec les tomates concassées et une pincée de cumin.
     Sauter poivrons et oignon, ajouter crevettes et épices 3 minutes.
     Servir avec le riz, les tortillas et le citron vert.`,
  ),
  recipe(
    'Souvlaki de poulet, pommes de terre & tzatziki',
    '🥙 plat volaille 35 facile 1 airfryer,four 2 fit',
    'Blanc de poulet 2, Origan, Citron 1, Ail 1, Pomme de terre 500, Yaourt grec 150, Concombre 0.5, Tomate 1, Huile d\'olive, Sel',
    `Mariner le poulet en cubes avec origan, citron, ail et huile ; monter des brochettes.
     Rôtir les pommes de terre en quartiers 20 minutes à 200 °C à l'airfryer, puis les brochettes 12 minutes.
     Tzatziki : yaourt, concombre râpé, ail. Servir avec la tomate.`,
  ),
  recipe(
    'Couscous au poulet léger',
    '🥘 plat volaille 50 facile 1 casserole 4 fit',
    'Blanc de poulet 4, Semoule 280, Carotte 3, Courgette 2, Navet 1, Pois chiches 1, Ras el hanout, Concentré de tomate 20, Oignon 1, Huile d\'olive, Sel',
    `Faire revenir l'oignon avec les épices et le concentré.
     Ajouter 1,2 litre d'eau, carottes et navet, 20 minutes.
     Ajouter courgettes, pois chiches et poulet en gros morceaux, 15 minutes.
     Préparer la semoule et servir avec le bouillon.`,
  ),
  recipe(
    'Bœuf thaï, riz & haricots verts',
    '🌿 plat viande 25 facile 2 poele 2 fit',
    'Bœuf émincé 350, Riz 160, Haricot vert 200, Basilic 1, Ail 2, Piment, Sauce soja 20, Nuoc-mâm, Citron vert 1',
    `Cuire le riz.
     Sauter ail, piment et haricots verts coupés 5 minutes.
     Ajouter le bœuf 2 minutes à feu vif, soja et nuoc-mâm.
     Finir avec basilic et citron vert.`,
  ),
  recipe(
    'Paella healthy poulet & crevettes',
    '🥘 plat volaille 45 moyen 2 poele 4 fit',
    'Blanc de poulet 3, Crevette 300, Riz 280, Poivron 1, Petits pois surgelés 150, Tomates concassées 1, Oignon 1, Curcuma, Paprika, Bouillon cube 1, Citron 1, Huile d\'olive, Sel',
    `Dorer le poulet en dés, réserver.
     Faire revenir oignon et poivron, ajouter riz, épices et tomates.
     Mouiller de 70 cl de bouillon, remettre le poulet et cuire 18 minutes.
     Ajouter crevettes et petits pois les 6 dernières minutes.`,
  ),
  recipe(
    'Dahl de pois chiches & poulet',
    '🍛 plat volaille 35 facile 1 casserole 2 fit',
    'Blanc de poulet 2, Pois chiches 1, Lentilles corail 60, Tomates concassées 1, Épinard frais 80, Oignon 1, Garam masala, Riz 120, Huile de tournesol, Sel',
    `Faire revenir oignon et épices, ajouter le poulet en dés.
     Ajouter tomates, lentilles, pois chiches et 30 cl d'eau, cuire 20 minutes.
     Ajouter les épinards. Servir avec le riz.`,
  ),

  // ---------------------------------------------------------------- salades-repas
  recipe(
    'Salade César protéinée',
    '🥗 plat volaille 25 facile 2 poele 2 fit',
    'Blanc de poulet 2, Salade verte 1, Œuf 2, Parmesan 30, Pain de campagne 2, Yaourt grec 100, Citron 0.5, Ail 1, Moutarde, Sel',
    `Cuire les œufs 10 minutes et le poulet à la poêle.
     Griller le pain en croûtons dans la même poêle.
     Sauce : yaourt, citron, ail, moutarde, la moitié du parmesan.
     Mélanger salade, poulet tranché, croûtons, œufs et le reste du parmesan.`,
  ),
  recipe(
    'Salade de quinoa, thon & haricots',
    '🥗 plat poisson 20 facile 1 casserole 2 fit',
    'Quinoa 120, Thon en boîte 1, Haricots rouges 1, Maïs en boîte 0.5, Tomate 1, Oignon rouge 0.5, Citron 1, Huile d\'olive, Sel',
    `Cuire le quinoa et le laisser tiédir.
     Mélanger avec thon, haricots et maïs égouttés, tomate et oignon.
     Assaisonner de citron, huile et sel.`,
  ),
  recipe(
    'Salade de lentilles, saumon & œuf',
    '🥗 plat poisson 30 facile 2 casserole,poele 2 fit',
    'Lentilles 140, Pavé de saumon 2, Œuf 2, Épinard frais 60, Échalote 1, Moutarde, Vinaigre de cidre, Huile d\'olive, Sel',
    `Cuire les lentilles 20 minutes et les œufs 7 minutes.
     Cuire le saumon et l'effeuiller.
     Mélanger lentilles, épinards et vinaigrette à l'échalote.
     Ajouter saumon et œufs coupés.`,
  ),
  recipe(
    'Salade de pâtes au poulet & pesto léger',
    '🥗 plat volaille 25 facile 1 casserole,poele 2 fit',
    'Penne 160, Blanc de poulet 2, Pesto 30, Yaourt grec 80, Tomate cerise 200, Roquette 50, Parmesan 20, Sel',
    `Cuire les pâtes, les rincer à l'eau froide.
     Cuire et couper le poulet.
     Mélanger pesto et yaourt pour la sauce.
     Assembler avec tomates, roquette et parmesan.`,
  ),
  recipe(
    'Salade de riz, crevettes & mangue',
    '🥭 plat poisson 20 facile 2 casserole 2 fit',
    'Riz 140, Crevette 350, Mangue 1, Avocat 1, Concombre 0.5, Coriandre 1, Citron vert 1, Sauce soja 15, Huile d\'olive',
    `Cuire le riz et le refroidir.
     Ajouter crevettes cuites, mangue, avocat et concombre en dés.
     Assaisonner de citron vert, soja et huile ; parsemer de coriandre.`,
  ),
  recipe(
    'Salade complète œufs, pois chiches & pommes de terre',
    '🥚 plat vege 25 facile 1 casserole 2 fit',
    'Œuf 6, Pois chiches 1, Pomme de terre 350, Haricot vert 150, Tomate 2, Fromage blanc 150, Moutarde, Ciboulette 1, Sel',
    `Cuire pommes de terre, haricots verts et œufs.
     Couper le tout, ajouter pois chiches et tomates.
     Sauce : fromage blanc, moutarde, ciboulette, sel.`,
  ),

  // ---------------------------------------------------------------- pâtes, riz & four
  recipe(
    'Pâtes complètes au poulet & brocoli',
    '🍝 plat volaille 25 facile 1 casserole,poele 2 fit',
    'Penne 160, Blanc de poulet 2, Brocoli 1, Ail 1, Parmesan 30, Fromage blanc 80, Huile d\'olive, Sel, Poivre',
    `Cuire les pâtes, ajouter le brocoli en bouquets 4 minutes avant la fin.
     Saisir le poulet en dés avec l'ail.
     Mélanger le tout avec fromage blanc, parmesan et un peu d'eau de cuisson.`,
  ),
  recipe(
    'Gratin de pâtes protéiné au thon',
    '🍝 plat poisson 35 facile 1 casserole,four 4 fit',
    'Coquillettes 320, Thon en boîte 3, Brocoli 1, Fromage blanc 200, Œuf 2, Gruyère râpé 60, Sel, Poivre',
    `Cuire les pâtes et le brocoli.
     Mélanger avec thon, fromage blanc et œufs battus.
     Couvrir de gruyère et gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Risotto au poulet, champignons & épinards',
    '🍄 plat volaille 35 moyen 2 casserole 2 fit',
    'Riz arborio 160, Blanc de poulet 2, Champignon de Paris 200, Épinard frais 80, Oignon 1, Bouillon cube 1, Parmesan 30, Sel',
    `Dorer le poulet en dés, réserver.
     Faire revenir oignon et champignons, ajouter le riz.
     Ajouter 70 cl de bouillon louche par louche, 18 minutes.
     Ajouter poulet, épinards et parmesan.`,
  ),
  recipe(
    'Lasagnes protéinées bœuf & ricotta',
    '🫕 plat viande 60 moyen 2 four 4 fit',
    'Feuilles de lasagne 240, Steak haché 500, Ricotta 250, Coulis de tomate 600, Épinard frais 150, Oignon 1, Mozzarella 1, Origan, Sel',
    `Faire revenir oignon et viande, ajouter coulis et origan, 10 minutes.
     Mélanger ricotta et épinards.
     Alterner feuilles, viande et ricotta, finir par la mozzarella.
     Cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Hachis parmentier healthy dinde & patate douce',
    '🥔 plat volaille 50 facile 1 four,casserole 4 fit',
    'Escalope de dinde 4, Patate douce 3, Pomme de terre 300, Oignon 1, Carotte 2, Lait 100, Comté 40, Thym, Sel',
    `Cuire patates douces et pommes de terre, les écraser avec le lait.
     Hacher la dinde, la faire revenir avec oignon, carottes râpées et thym.
     Monter le hachis, parsemer de comté, gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Quiche sans pâte au saumon & épinards, salade de pommes de terre',
    '🥧 plat poisson 45 facile 1 four,casserole 2 fit',
    'Pavé de saumon 2, Œuf 4, Fromage blanc 150, Épinard frais 120, Pomme de terre 400, Ciboulette 1, Sel, Poivre',
    `Battre œufs et fromage blanc, ajouter épinards, saumon en dés, sel et poivre.
     Verser dans un plat et cuire 30 minutes à 180 °C.
     Cuire les pommes de terre et les assaisonner de ciboulette.`,
  ),
  recipe(
    'Poulet farci feta-épinards, riz & tomates rôties',
    '🍗 plat volaille 40 facile 2 four,casserole 2 fit',
    'Blanc de poulet 2, Feta 60, Épinard frais 80, Riz 160, Tomate cerise 200, Huile d\'olive, Origan, Sel',
    `Ouvrir les blancs en portefeuille, garnir de feta et d'épinards.
     Les rôtir 25 minutes à 200 °C avec les tomates cerises, huile et origan.
     Cuire le riz.`,
  ),

  // ---------------------------------------------------------------- végé
  recipe(
    'Curry de tofu, pois chiches & riz',
    '🌱 plat vege 30 facile 1 poele,casserole 2 fit',
    'Tofu 400, Pois chiches 1, Lait de coco 150, Tomates concassées 1, Épinard frais 80, Curry, Oignon 1, Riz 140, Huile de tournesol, Sel',
    `Dorer le tofu en cubes, réserver.
     Faire revenir oignon et curry, ajouter tomates, lait de coco et pois chiches, 12 minutes.
     Remettre le tofu et les épinards.
     Servir avec le riz.`,
  ),
  recipe(
    'Frittata protéinée aux légumes & pain',
    '🥚 plat vege 25 facile 1 poele,four 2 fit',
    'Œuf 7, Ricotta 100, Courgette 1, Poivron 1, Épinard frais 60, Parmesan 20, Pain de campagne 2, Huile d\'olive, Sel',
    `Sauter courgette et poivron en dés.
     Battre œufs, ricotta et parmesan, verser sur les légumes avec les épinards.
     Cuire 5 minutes à feu doux puis 8 minutes sous le gril.
     Servir avec le pain.`,
  ),
  recipe(
    'Bowl lentilles corail, halloumi & patate douce',
    '🧀 plat vege 30 facile 2 poele,casserole 2 fit',
    'Lentilles corail 150, Halloumi 180, Patate douce 1, Épinard frais 80, Cumin, Citron 1, Huile d\'olive, Sel',
    `Cuire les lentilles 12 minutes et la patate douce en cubes 15 minutes.
     Griller l'halloumi à la poêle.
     Assembler avec épinards, cumin, citron et huile.`,
  ),
  recipe(
    'Pâtes crémeuses au tofu & petits pois façon carbonara',
    '🍝 plat vege 20 facile 1 casserole,poele 2 fit',
    'Spaghetti 160, Tofu 250, Œuf 3, Parmesan 40, Petits pois surgelés 100, Poivre, Sel',
    `Cuire les pâtes avec les petits pois.
     Dorer le tofu en petits dés.
     Battre œufs et parmesan, mélanger hors du feu avec pâtes, tofu et un peu d'eau de cuisson.
     Poivrer généreusement.`,
  ),
  recipe(
    'Chakchouka aux haricots blancs & œufs',
    '🍳 plat vege 25 facile 1 poele 2 fit',
    'Œuf 6, Haricots blancs 1, Feta 80, Tomates concassées 1, Poivron 1, Oignon 1, Cumin, Pain de campagne 2, Huile d\'olive, Sel',
    `Faire fondre oignon et poivron, ajouter tomates, cumin et haricots, 10 minutes.
     Casser les œufs dans la sauce, couvrir 6 minutes.
     Émietter la feta et servir avec le pain grillé.`,
  ),
]
