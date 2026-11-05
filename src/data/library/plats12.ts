import { recipe } from './dsl'

/** Lot 12 : un peu de tout, avec des assiettes sportives glissées dans le lot. */
export const PLATS_12 = [
  // ---------------------------------------------------------------- assiettes sportives
  recipe(
    'Poulet grillé, riz basmati & guacamole',
    '🥑 plat volaille 25 facile 2 poele,casserole 2 fit',
    'Blanc de poulet 2, Riz 160, Avocat 1, Tomate 1, Oignon rouge 0.25, Citron vert 1, Haricots rouges 1, Coriandre 1, Paprika, Sel',
    `Cuire le riz et réchauffer les haricots égouttés.
     Guacamole : avocat écrasé, tomate et oignon en petits dés, citron vert, coriandre, sel.
     Griller le poulet au paprika 6 minutes par face.
     Servir le tout en assiette.`,
  ),
  recipe(
    'Bowl dinde, patate douce & chou sauté',
    '🥬 plat volaille 30 facile 1 four,poele 2 fit',
    'Escalope de dinde 2, Patate douce 2, Chou vert 0.25, Pois chiches 1, Yaourt grec 80, Citron 1, Paprika, Huile d\'olive, Sel',
    `Rôtir patate douce en cubes et pois chiches 25 minutes à 210 °C avec huile et paprika.
     Faire sauter le chou émincé 4 minutes.
     Cuire la dinde 4 minutes par face.
     Servir avec le yaourt citronné.`,
  ),
  recipe(
    'Pâtes complètes au saumon & brocoli',
    '🐟 plat poisson 25 facile 2 casserole,poele 2 fit',
    'Penne 160, Pavé de saumon 2, Brocoli 1, Fromage blanc 100, Citron 1, Ail 1, Sel',
    `Cuire les pâtes avec le brocoli en bouquets.
     Saisir le saumon en dés avec l'ail.
     Mélanger avec fromage blanc et citron.`,
  ),
  recipe(
    'Bœuf, quinoa & légumes rôtis au four',
    '🥩 plat viande 35 facile 2 four,casserole 2 fit',
    'Steak de bœuf 2, Quinoa 140, Courgette 1, Poivron 1, Oignon rouge 1, Tomate cerise 150, Huile d\'olive, Herbes de Provence, Sel',
    `Rôtir les légumes 25 minutes à 210 °C.
     Cuire le quinoa.
     Saisir les steaks, les trancher et servir sur le quinoa et les légumes.`,
  ),
  recipe(
    'Crevettes, nouilles de riz & légumes sautés',
    '🦐 plat poisson 20 facile 2 poele 2 fit',
    'Crevette 350, Nouilles de riz 140, Brocoli 1, Carotte 1, Poivron 1, Sauce soja 30, Gingembre frais 10, Ail 1, Huile de sésame',
    `Réhydrater les nouilles.
     Sauter légumes, ail et gingembre 5 minutes, puis les crevettes 3 minutes.
     Ajouter nouilles et soja, finir à l'huile de sésame.`,
  ),
  recipe(
    'Omelette au thon, pommes de terre & haricots verts',
    '🍳 plat poisson 25 facile 1 poele,casserole 2 fit',
    'Œuf 6, Thon en boîte 1, Pomme de terre 350, Haricot vert 200, Ciboulette 1, Huile d\'olive, Sel',
    `Cuire pommes de terre et haricots verts.
     Battre les œufs avec le thon et la ciboulette.
     Cuire l'omelette à feu doux, servir avec les légumes.`,
  ),
  recipe(
    'Bowl poulet, riz & haricots rouges façon cajun',
    '🍗 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Blanc de poulet 2, Riz 140, Haricots rouges 1, Poivron 1, Maïs en boîte 0.5, Paprika, Cumin, Yaourt grec 80, Sel',
    `Cuire le riz.
     Saisir le poulet en dés avec les épices, ajouter poivron et haricots.
     Servir avec le maïs et le yaourt.`,
  ),
  recipe(
    'Cabillaud, lentilles corail & épinards',
    '🐟 plat poisson 25 facile 2 casserole,poele 2 fit',
    'Cabillaud 350, Lentilles corail 140, Épinard frais 120, Oignon 1, Cumin, Citron 1, Huile d\'olive, Sel',
    `Cuire les lentilles 12 minutes avec l'oignon et le cumin.
     Ajouter les épinards.
     Cuire le cabillaud 3 minutes par face, citronner.`,
  ),
  recipe(
    'Salade de bœuf thaï & nouilles de riz',
    '🥗 plat viande 25 facile 2 poele 2 fit',
    'Steak de bœuf 2, Nouilles de riz 120, Concombre 1, Carotte 1, Menthe 1, Coriandre 1, Citron vert 2, Nuoc-mâm, Cacahuètes 20',
    `Réhydrater les nouilles, les rincer.
     Saisir les steaks, les trancher finement.
     Mélanger avec crudités, herbes, citron vert et nuoc-mâm, parsemer de cacahuètes.`,
  ),
  recipe(
    'Œufs, épinards & patates douces rôties',
    '🍠 plat vege 30 facile 1 four,poele 2 fit',
    'Œuf 6, Patate douce 2, Épinard frais 120, Feta 60, Fromage blanc 100, Paprika, Huile d\'olive, Sel',
    `Rôtir la patate douce en cubes 25 minutes à 210 °C au paprika.
     Faire tomber les épinards, casser les œufs dessus, couvrir 5 minutes.
     Servir avec feta et fromage blanc.`,
  ),
  recipe(
    'Wok de tofu, quinoa & légumes',
    '🌱 plat vege 25 facile 1 poele,casserole 2 fit',
    'Tofu 400, Quinoa 150, Poivron 1, Courgette 1, Brocoli 0.5, Sauce soja 30, Gingembre frais 10, Graines de sésame 15',
    `Cuire le quinoa.
     Dorer le tofu en cubes, ajouter les légumes, sauter 6 minutes.
     Ajouter soja et gingembre, servir sur le quinoa avec le sésame.`,
  ),
  recipe(
    'Escalope de dinde, boulgour & ratatouille',
    '🦃 plat volaille 40 facile 1 casserole,poele 2 fit',
    'Escalope de dinde 2, Boulgour 160, Aubergine 1, Courgette 1, Tomates concassées 1, Oignon 1, Herbes de Provence, Huile d\'olive, Sel',
    `Préparer une ratatouille rapide : légumes en dés, tomates, herbes, 25 minutes.
     Cuire le boulgour.
     Saisir les escalopes 4 minutes par face.`,
  ),

  // ---------------------------------------------------------------- pâtes & riz
  recipe(
    'Pâtes à la carbonara de courgettes',
    '🥒 plat viande 20 facile 1 casserole,poele 2',
    'Spaghetti 200, Courgette 1, Lardons 80, Œuf 2, Parmesan 40, Poivre',
    `Cuire les pâtes.
     Dorer lardons et courgette en julienne.
     Hors du feu, mélanger pâtes, lardons, courgette, œufs battus et parmesan.`,
  ),
  recipe(
    'Pâtes au chorizo & poivrons',
    '🌶️ plat viande 20 facile 1 casserole,poele 2',
    'Penne 200, Chorizo 80, Poivron 1, Coulis de tomate 200, Crème liquide 50, Parmesan 20',
    `Cuire les pâtes.
     Faire revenir chorizo et poivron, ajouter coulis et crème.
     Mélanger avec les pâtes et le parmesan.`,
  ),
  recipe(
    'Tagliatelles aux poireaux & lardons',
    '🧄 plat viande 20 facile 1 casserole,poele 2',
    'Tagliatelles 200, Poireau 2, Lardons 100, Crème fraîche 80, Parmesan 20, Poivre',
    `Cuire les pâtes.
     Faire fondre poireaux et lardons, ajouter la crème.
     Mélanger avec les pâtes et le parmesan.`,
  ),
  recipe(
    'Riz sauté au porc & ananas',
    '🍍 plat viande 25 facile 1 poele 2',
    'Riz 150, Échine de porc 200, Ananas 0.25, Œuf 2, Petits pois surgelés 80, Sauce soja 30, Oignon nouveau 1, Huile de tournesol',
    `Utiliser du riz cuit refroidi.
     Saisir le porc en dés, ajouter ananas et petits pois.
     Ajouter riz, soja, œufs brouillés et oignon nouveau.`,
  ),
  recipe(
    'Risotto au chorizo & petits pois',
    '🍚 plat viande 35 moyen 1 casserole 2',
    'Riz arborio 160, Chorizo 60, Petits pois surgelés 120, Oignon 1, Bouillon cube 1, Parmesan 30',
    `Dorer chorizo et oignon, nacrer le riz.
     Ajouter 75 cl de bouillon peu à peu, 18 minutes, avec les petits pois à mi-cuisson.
     Finir avec le parmesan.`,
  ),
  recipe(
    'Pâtes aux crevettes, citron & ail',
    '🍋 plat poisson 20 facile 2 casserole,poele 2',
    'Spaghetti 200, Crevette 200, Citron 1, Ail 2, Persil 1, Beurre 20, Huile d\'olive',
    `Cuire les pâtes.
     Sauter les crevettes avec l'ail dans le beurre et l'huile.
     Mélanger avec pâtes, zeste et jus de citron, persil.`,
  ),
  recipe(
    'Gratin de coquillettes au thon & tomates',
    '🐟 plat poisson 30 facile 1 casserole,four 4',
    'Coquillettes 300, Thon en boîte 2, Tomates concassées 1, Crème fraîche 100, Gruyère râpé 80, Origan',
    `Cuire les pâtes.
     Mélanger avec thon, tomates, crème et origan.
     Couvrir de gruyère, gratiner 15 minutes.`,
  ),
  recipe(
    'Riz au curry, poulet & raisins secs',
    '🍛 plat volaille 30 facile 1 casserole 2',
    'Riz 150, Blanc de poulet 2, Oignon 1, Curry, Raisins secs 30, Amandes effilées 20, Bouillon cube 1, Huile de tournesol, Sel',
    `Dorer le poulet en dés avec l'oignon et le curry.
     Ajouter riz, raisins et 35 cl de bouillon, couvrir 18 minutes.
     Parsemer d'amandes grillées.`,
  ),

  // ---------------------------------------------------------------- grillades à la poêle-gril
  recipe(
    'Brochettes d\'agneau & ratatouille',
    '🍢 plat viande 40 moyen 3 poele,casserole 2',
    'Épaule d\'agneau 400, Romarin, Ail 1, Aubergine 1, Courgette 1, Poivron 1, Tomates concassées 1, Huile d\'olive, Sel',
    `Préparer une ratatouille rapide avec les légumes et les tomates, 25 minutes.
     Mariner l'agneau en cubes avec ail, romarin et huile, monter des brochettes.
     Les griller 8 minutes à la poêle-gril.`,
  ),
  recipe(
    'Filet mignon grillé & pommes sautées',
    '🐖 plat viande 30 moyen 2 poele 2',
    'Filet mignon de porc 350, Pomme de terre 500, Thym, Ail 1, Haricot vert 200, Huile d\'olive, Sel',
    `Faire sauter les pommes de terre en dés à couvert 20 minutes.
     Cuire les haricots verts.
     Griller le filet mignon en médaillons 3 minutes par face avec ail et thym.`,
  ),
  recipe(
    'Saucisses grillées, lentilles & moutarde',
    '🌭 plat viande 35 facile 1 poele,casserole 2',
    'Saucisse 4, Lentilles 150, Carotte 1, Oignon 1, Moutarde, Thym, Sel',
    `Cuire les lentilles 20 minutes avec carotte, oignon et thym.
     Griller les saucisses à la poêle 12 minutes.
     Servir avec la moutarde.`,
  ),
  recipe(
    'Brochettes de poulet au curry & riz coco',
    '🥥 plat volaille 30 facile 1 poele,casserole 2',
    'Blanc de poulet 2, Curry, Yaourt nature 1, Riz 150, Lait de coco 150, Poivron 1, Coriandre 1, Sel',
    `Cuire le riz dans le lait de coco allongé d'eau.
     Mariner le poulet dans yaourt et curry, monter les brochettes avec le poivron.
     Griller 10 minutes à la poêle-gril.`,
  ),
  recipe(
    'Steak haché maison, frites de patate douce & salade',
    '🍔 plat viande 30 facile 1 airfryer,poele 2',
    'Steak haché 300, Patate douce 2, Salade verte 0.5, Tomate 1, Paprika, Huile d\'olive, Sel',
    `Cuire les frites de patate douce au paprika 18 minutes à 200 °C à l'airfryer.
     Former les steaks et les cuire 3 minutes par face.
     Servir avec la salade.`,
  ),

  // ---------------------------------------------------------------- variés
  recipe(
    'Pain de viande aux légumes',
    '🍞 plat viande 60 facile 1 four 4',
    'Steak haché 500, Œuf 1, Chapelure 50, Oignon 1, Carotte 1, Ketchup 40, Pomme de terre 600, Salade verte 1, Sel',
    `Mélanger viande, œuf, chapelure, oignon et carotte râpés, sel.
     Tasser dans un moule à cake, napper de ketchup.
     Cuire 45 minutes à 180 °C avec les pommes de terre en quartiers à côté.`,
  ),
  recipe(
    'Poulet tikka en wraps',
    '🌯 plat volaille 25 facile 1 poele 2',
    'Blanc de poulet 2, Yaourt nature 1, Garam masala, Tortilla de blé 4, Concombre 0.5, Oignon rouge 0.5, Menthe 1, Salade verte 0.25, Sel',
    `Mariner le poulet dans la moitié du yaourt et les épices, le saisir.
     Mélanger le reste du yaourt avec concombre et menthe.
     Garnir les tortillas de poulet, crudités et sauce.`,
  ),
  recipe(
    'Tarte salée aux champignons & lardons',
    '🥧 plat viande 50 facile 1 four 4',
    'Pâte brisée 1, Champignon de Paris 300, Lardons 120, Œuf 3, Crème fraîche 200, Gruyère râpé 60, Sel',
    `Faire sauter champignons et lardons.
     Garnir la pâte, verser œufs et crème battus, parsemer de gruyère.
     Cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Velouté de courgettes au fromage frais',
    '🥒 plat vege 25 facile 1 casserole 2',
    'Courgette 4, Oignon 1, Bouillon cube 1, Fromage frais 80, Pain de campagne 2, Sel',
    `Cuire courgettes et oignon 15 minutes dans 50 cl de bouillon.
     Mixer avec le fromage frais.
     Servir avec le pain grillé.`,
  ),
  recipe(
    'Gratin de patates douces au poulet & curry',
    '🍠 plat volaille 45 facile 1 four 4',
    'Patate douce 3, Blanc de poulet 3, Lait de coco 200, Curry, Oignon 1, Gruyère râpé 60, Sel',
    `Dorer le poulet en dés avec l'oignon et le curry.
     Alterner patates douces en tranches fines et poulet dans un plat.
     Verser le lait de coco, couvrir de gruyère et cuire 35 minutes à 190 °C.`,
  ),
  recipe(
    'Salade de pommes de terre, saumon & œufs',
    '🥗 plat poisson 25 facile 2 casserole 2',
    'Pomme de terre 400, Pavé de saumon 2, Œuf 2, Roquette 50, Câpres 10, Fromage blanc 80, Aneth 1, Sel',
    `Cuire pommes de terre, œufs et saumon (8 minutes à la vapeur).
     Mélanger fromage blanc, aneth et câpres.
     Assembler sur la roquette.`,
  ),
  recipe(
    'Chou-fleur rôti entier au parmesan',
    '🥦 plat vege 50 facile 1 four,casserole 2',
    'Chou-fleur 1, Beurre 30, Parmesan 40, Ail 1, Paprika, Pois chiches 1, Yaourt grec 100, Sel',
    `Précuire le chou-fleur entier 8 minutes à l'eau.
     Le badigeonner de beurre à l'ail et au paprika, rôtir 35 minutes à 200 °C avec les pois chiches.
     Parsemer de parmesan les 5 dernières minutes, servir avec le yaourt.`,
  ),
  recipe(
    'Moules au chorizo & tomates',
    '🦪 plat poisson 30 facile 2 casserole 2',
    'Moules 1500, Chorizo 60, Tomates concassées 1, Oignon 1, Vin blanc 100, Persil 1, Baguette 0.5',
    `Faire revenir oignon et chorizo, ajouter tomates et vin.
     Ajouter les moules, couvrir 6 minutes à feu vif.
     Parsemer de persil, servir avec la baguette.`,
  ),
  recipe(
    'Cuisses de poulet au four, sauce barbecue maison',
    '🍗 plat volaille 50 facile 1 four 2',
    'Cuisse de poulet 2, Ketchup 60, Miel 20, Sauce soja 20, Paprika, Vinaigre de cidre, Pomme de terre 500, Chou vert 0.25, Huile d\'olive, Sel',
    `Mélanger ketchup, miel, soja, paprika et vinaigre.
     Badigeonner les cuisses, les rôtir 45 minutes à 200 °C avec les pommes de terre.
     Servir avec le chou émincé en salade.`,
  ),
  recipe(
    'Feuilletés jambon-fromage & salade',
    '🥐 plat viande 30 facile 1 four 2',
    'Pâte feuilletée 1, Jambon blanc 3, Gruyère râpé 80, Moutarde, Œuf 1, Salade verte 0.5',
    `Préchauffer le four à 200 °C.
     Découper la pâte en carrés, tartiner de moutarde, garnir de jambon et de gruyère.
     Refermer, dorer à l'œuf et cuire 20 minutes.`,
  ),
  recipe(
    'Cabillaud à la crème de poivrons',
    '🫑 plat poisson 30 facile 2 poele,casserole 2',
    'Cabillaud 300, Poivron 2, Crème liquide 100, Ail 1, Paprika, Riz 150, Huile d\'olive, Sel',
    `Cuire le riz.
     Faire fondre les poivrons avec l'ail, mixer avec crème et paprika.
     Cuire le cabillaud 3 minutes par face et napper.`,
  ),
  recipe(
    'Couscous de poulet aux légumes d\'hiver',
    '🥕 plat volaille 50 facile 1 casserole 4',
    'Cuisse de poulet 4, Carotte 3, Navet 2, Courge butternut 0.5, Pois chiches 1, Oignon 1, Ras el hanout, Semoule 300, Beurre 20, Sel',
    `Dorer le poulet avec l'oignon et les épices.
     Ajouter 1,5 litre d'eau, carottes et navets, 25 minutes.
     Ajouter courge et pois chiches, 15 minutes.
     Servir avec la semoule beurrée.`,
  ),
]
