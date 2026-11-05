import { recipe } from './dsl'

/** Lot 3 : volailles et viandes, du quotidien au tour du monde. */
export const PLATS_3 = [
  // ---------------------------------------------------------------- volaille
  recipe(
    'Poulet rôti au paprika fumé & patates douces',
    '🍗 plat volaille 45 facile 1 four,airfryer 2',
    'Cuisse de poulet 2, Patate douce 2, Paprika, Ail 2, Citron 0.5, Huile d\'olive, Sel',
    `Préchauffer le four à 210 °C (ou l'airfryer à 190 °C).
     Couper les patates douces en quartiers, les enrober d'huile, de paprika et de sel.
     Frotter les cuisses d'ail écrasé, de paprika et d'huile, les poser sur les patates douces.
     Cuire 35 minutes au four (25 minutes à l'airfryer) et arroser de citron.`,
  ),
  recipe(
    'Poulet crème-moutarde aux herbes & tagliatelles',
    '🌿 plat volaille 30 facile 2 poele 2',
    'Blanc de poulet 2, Crème fraîche 150, Moutarde, Échalote 1, Vin blanc 50, Herbes de Provence, Tagliatelles 200, Beurre 15, Sel, Poivre',
    `Cuire les tagliatelles.
     Dorer le poulet en morceaux dans le beurre, ajouter l'échalote.
     Déglacer au vin blanc, ajouter crème, moutarde et herbes, laisser napper 5 minutes.
     Servir avec les pâtes.`,
  ),
  recipe(
    'Poulet au citron & aux olives à la poêle',
    '🫒 plat volaille 30 facile 2 poele 2',
    'Cuisse de poulet 2, Citron 1, Olives vertes 60, Ail 2, Thym, Vin blanc 80, Semoule 120, Huile d\'olive, Sel, Poivre',
    `Dorer les cuisses côté peau 8 minutes, retourner.
     Ajouter l'ail, le thym, le citron en quartiers, les olives et le vin blanc.
     Couvrir et cuire 18 minutes.
     Servir avec la semoule.`,
  ),
  recipe(
    'Poulet coco-citronnelle façon thaï',
    '🥥 plat volaille 25 facile 2 poele 2',
    'Blanc de poulet 2, Lait de coco 300, Gingembre frais 15, Citron vert 2, Nuoc-mâm, Champignon de Paris 150, Coriandre 1, Riz 150',
    `Cuire le riz.
     Porter le lait de coco à frémissement avec le gingembre tranché et le zeste de citron vert.
     Ajouter le poulet en lamelles et les champignons, cuire 10 minutes.
     Assaisonner de nuoc-mâm et de jus de citron vert, parsemer de coriandre.`,
  ),
  recipe(
    'Poulet général Tao',
    '🥡 plat volaille 30 moyen 2 poele 2',
    'Blanc de poulet 2, Maïzena 30, Sauce soja 30, Sucre roux 20, Vinaigre de cidre, Ail 2, Gingembre frais 10, Piment, Riz 150, Brocoli 1, Graines de sésame 10, Huile de tournesol',
    `Cuire le riz et le brocoli.
     Rouler le poulet en cubes dans la maïzena et le frire dans un fond d'huile jusqu'à ce qu'il soit croustillant.
     Dans la poêle, chauffer ail, gingembre, piment, soja, sucre, un trait de vinaigre et 5 cl d'eau.
     Remettre le poulet et laisser la sauce laquer. Parsemer de sésame.`,
  ),
  recipe(
    'Poulet aux cacahuètes & légumes croquants',
    '🥜 plat volaille 25 facile 1 poele 2',
    'Blanc de poulet 2, Cacahuètes 50, Poivron 1, Oignon nouveau 1, Courgette 1, Sauce soja 30, Miel 10, Ail 1, Riz 150, Huile de tournesol',
    `Cuire le riz.
     Saisir le poulet en dés à feu vif, réserver.
     Sauter poivron, courgette et ail 4 minutes.
     Remettre le poulet avec soja, miel et cacahuètes, mélanger 1 minute et ajouter l'oignon nouveau.`,
  ),
  recipe(
    'Poulet tandoori à l\'airfryer & riz pilaf',
    '🍛 plat volaille 40 facile 1 airfryer,casserole 2',
    'Cuisse de poulet 3, Yaourt nature 1, Épices tandoori 15, Citron 0.5, Riz 150, Oignon 0.5, Bouillon cube 1, Beurre 10, Coriandre 1, Sel',
    `Mariner les cuisses au moins 20 minutes dans le yaourt, les épices, le citron et le sel.
     Pilaf : faire revenir l'oignon dans le beurre, ajouter le riz, puis 30 cl de bouillon ; couvrir 15 minutes.
     Cuire le poulet 22 minutes à 200 °C à l'airfryer en retournant.
     Servir avec la coriandre.`,
  ),
  recipe(
    'Poulet farci à la mozzarella & tomates séchées',
    '🍅 plat volaille 35 facile 2 four,airfryer 2',
    'Blanc de poulet 2, Mozzarella 1, Tomates séchées 40, Basilic 1, Jambon cru 2, Haricot vert 250, Huile d\'olive, Sel, Poivre',
    `Ouvrir les blancs en portefeuille, les garnir de mozzarella, tomates séchées et basilic.
     Les entourer d'une tranche de jambon cru.
     Cuire 25 minutes au four à 200 °C (18 minutes à l'airfryer à 190 °C).
     Servir avec les haricots verts cuits à l'eau et un filet d'huile.`,
  ),
  recipe(
    'Fricassée de poulet aux champignons & riz',
    '🍄 plat volaille 45 facile 1 casserole 4',
    'Cuisse de poulet 4, Champignon de Paris 300, Oignon 1, Vin blanc 150, Crème fraîche 150, Thym, Riz 300, Beurre 20, Sel, Poivre',
    `Dorer les cuisses dans le beurre, ajouter l'oignon émincé.
     Déglacer au vin, ajouter thym, sel et poivre, couvrir et cuire 25 minutes.
     Ajouter les champignons, 10 minutes, puis la crème.
     Servir avec le riz.`,
  ),
  recipe(
    'Dinde au curry & aux pommes',
    '🍏 plat volaille 30 facile 1 poele 2',
    'Escalope de dinde 2, Pomme 1, Oignon 1, Curry, Crème liquide 150, Riz 150, Huile de tournesol, Sel',
    `Cuire le riz.
     Dorer la dinde en lanières, réserver.
     Faire fondre l'oignon et la pomme en dés avec le curry.
     Ajouter crème et dinde, laisser napper 3 minutes, saler.`,
  ),
  recipe(
    'Escalopes milanaises & spaghetti tomate',
    '🍝 plat volaille 35 facile 1 poele,casserole 2',
    'Escalope de dinde 2, Œuf 1, Chapelure 60, Parmesan 30, Spaghetti 180, Coulis de tomate 250, Citron 0.5, Huile d\'olive, Sel',
    `Cuire les spaghetti et chauffer le coulis salé.
     Aplatir les escalopes, les passer dans l'œuf puis dans la chapelure mêlée au parmesan.
     Les dorer 3 minutes par face dans l'huile.
     Servir avec les pâtes à la tomate et un quartier de citron.`,
  ),
  recipe(
    'Brochettes de dinde marinées au yaourt',
    '🍢 plat volaille 30 facile 1 airfryer,four 2',
    'Escalope de dinde 2, Yaourt grec 100, Curry, Citron 0.5, Courgette 1, Oignon rouge 1, Boulgour 120, Huile d\'olive, Sel',
    `Mariner la dinde en cubes dans le yaourt, le curry, le citron et le sel.
     Monter les brochettes avec courgette et oignon.
     Cuire 15 minutes à 200 °C à l'airfryer (20 minutes au four).
     Cuire le boulgour 12 minutes à l'eau salée.`,
  ),
  recipe(
    'Parmentier de poulet effiloché',
    '🥔 plat volaille 50 facile 1 casserole,four 4',
    'Cuisse de poulet 4, Pomme de terre 1000, Oignon 1, Lait 200, Beurre 40, Thym, Chapelure 20, Sel, Poivre',
    `Pocher les cuisses 25 minutes dans l'eau avec thym et sel, puis les effilocher.
     Cuire les pommes de terre et en faire une purée au beurre et au lait.
     Faire revenir l'oignon, ajouter le poulet et un peu de bouillon de cuisson.
     Étaler dans un plat, couvrir de purée et de chapelure, gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Wings au miel & sauce soja',
    '🍯 plat volaille 30 facile 1 airfryer 2',
    'Pilon de poulet 8, Miel 30, Sauce soja 30, Ail 1, Graines de sésame 10, Oignon nouveau 1, Riz 150',
    `Cuire le riz.
     Cuire les pilons 20 minutes à 200 °C à l'airfryer.
     Chauffer miel, soja et ail jusqu'à léger épaississement.
     Enrober le poulet de sauce et remettre 4 minutes ; parsemer de sésame et d'oignon nouveau.`,
  ),
  recipe(
    'Salade de poulet, mangue & avocat',
    '🥭 plat volaille 20 facile 2 poele 2',
    'Blanc de poulet 2, Mangue 1, Avocat 1, Roquette 80, Oignon rouge 0.5, Citron vert 1, Coriandre 1, Huile d\'olive, Sel',
    `Cuire les blancs à la poêle 6 minutes par face, les trancher.
     Couper mangue et avocat en dés, émincer l'oignon.
     Assaisonner de citron vert, huile et sel.
     Dresser sur la roquette avec le poulet et la coriandre.`,
  ),
  recipe(
    'Poulet rôti aux légumes racines',
    '🥕 plat volaille 60 facile 1 four 4',
    'Cuisse de poulet 4, Carotte 3, Panais 2, Navet 2, Oignon rouge 2, Romarin, Miel 15, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Couper les légumes en gros morceaux, les enrober d'huile, de romarin, sel et poivre.
     Poser les cuisses dessus, badigeonner de miel.
     Cuire 50 minutes en arrosant à mi-cuisson.`,
  ),
  recipe(
    'Pot-au-feu de poulet',
    '🍲 plat volaille 75 facile 1 casserole 4',
    'Cuisse de poulet 4, Carotte 4, Poireau 2, Navet 2, Pomme de terre 600, Oignon 1, Bouillon cube 1, Laurier, Thym, Moutarde',
    `Mettre le poulet dans une grande cocotte, couvrir d'eau froide avec bouillon, oignon, laurier et thym.
     Porter à frémissement, écumer et cuire 30 minutes.
     Ajouter les légumes en tronçons, 35 minutes.
     Servir le bouillon en entrée, puis le poulet et les légumes avec la moutarde.`,
  ),
  recipe(
    'Poulet au beurre de cacahuète & patate douce',
    '🥜 plat volaille 35 facile 1 casserole 2',
    'Blanc de poulet 2, Beurre de cacahuète 50, Patate douce 1, Tomates concassées 1, Oignon 1, Gingembre frais 10, Épinard frais 80, Riz 150, Huile de tournesol, Sel',
    `Cuire le riz.
     Faire revenir l'oignon et le gingembre, ajouter le poulet en dés.
     Ajouter la patate douce en cubes, les tomates et le beurre de cacahuète délayé dans 20 cl d'eau.
     Cuire 20 minutes, ajouter les épinards à la fin.`,
  ),
  recipe(
    'Chili de dinde aux haricots blancs',
    '🌶️ plat volaille 40 facile 1 casserole 4',
    'Escalope de dinde 3, Haricots blancs 2, Oignon 1, Poivron 1, Ail 2, Cumin, Bouillon cube 1, Maïs en boîte 1, Crème fraîche 80, Citron vert 1, Coriandre 1, Huile d\'olive, Sel',
    `Faire revenir oignon, poivron et ail, ajouter la dinde en dés et le cumin.
     Ajouter les haricots égouttés, le maïs et 40 cl de bouillon.
     Cuire 25 minutes, écraser une partie des haricots pour épaissir.
     Finir avec crème, citron vert et coriandre.`,
  ),
  recipe(
    'Croque poulet-curry au four',
    '🥪 plat volaille 20 facile 1 four,airfryer 2',
    'Pain de mie 4, Blanc de poulet 1, Curry, Fromage frais 60, Cheddar 60, Salade verte 0.5, Huile d\'olive, Sel',
    `Cuire le poulet à la poêle et l'émincer finement.
     Mélanger avec le fromage frais, le curry et le sel.
     Garnir le pain, couvrir de cheddar et refermer.
     Cuire 10 minutes à 200 °C au four (7 minutes à l'airfryer). Servir avec la salade.`,
  ),

  // ---------------------------------------------------------------- bœuf
  recipe(
    'Bœuf aux carottes',
    '🥕 plat viande 150 facile 2 casserole 4',
    'Bœuf à braiser 800, Carotte 6, Oignon 2, Vin blanc 200, Bouillon cube 1, Thym, Laurier, Huile de tournesol, Sel, Poivre',
    `Dorer la viande en cubes dans l'huile, ajouter les oignons.
     Déglacer au vin, ajouter bouillon à hauteur, thym et laurier.
     Couvrir et mijoter 1 h 30.
     Ajouter les carottes en rondelles et poursuivre 45 minutes.`,
  ),
  recipe(
    'Daube provençale',
    '🍷 plat viande 180 moyen 2 casserole 4',
    'Bœuf à braiser 800, Vin rouge 500, Carotte 2, Oignon 2, Ail 3, Tomates concassées 1, Olives noires 60, Orange 1, Herbes de Provence, Huile d\'olive, Sel',
    `Mariner la viande la veille si possible avec vin, ail, herbes et zeste d'orange.
     Égoutter et dorer la viande, ajouter oignons et carottes.
     Verser la marinade et les tomates, couvrir et mijoter 2 h 30.
     Ajouter les olives 15 minutes avant la fin.`,
  ),
  recipe(
    'Bavette à l\'échalote & pommes sautées',
    '🥩 plat viande 30 facile 2 poele 2',
    'Steak de bœuf 2, Échalote 3, Vinaigre de vin, Beurre 30, Pomme de terre 500, Persil 1, Huile de tournesol, Sel, Poivre',
    `Faire sauter les pommes de terre en rondelles à couvert 20 minutes dans l'huile.
     Saisir les steaks 2 à 3 minutes par face, réserver.
     Faire fondre les échalotes dans le beurre, déglacer d'un trait de vinaigre.
     Napper la viande et servir avec les pommes de terre persillées.`,
  ),
  recipe(
    'Bœuf mijoté à la bière brune & purée',
    '🍺 plat viande 150 moyen 2 casserole 4',
    'Bœuf à braiser 800, Bière 400, Oignon 3, Carotte 2, Farine 20, Thym, Pomme de terre 800, Lait 150, Beurre 40, Sel, Poivre',
    `Fariner et dorer la viande, ajouter oignons et carottes.
     Verser la bière, ajouter thym, sel et poivre ; couvrir et mijoter 2 heures.
     Préparer une purée au beurre et au lait.
     Servir le bœuf sur la purée.`,
  ),
  recipe(
    'Hamburger au bleu & oignons caramélisés',
    '🍔 plat viande 30 moyen 2 poele 2',
    'Steak haché 300, Pain à burger 2, Roquefort 60, Oignon 2, Roquette 30, Sucre roux 10, Beurre 15, Frites surgelées 300, Sel',
    `Cuire les frites au four ou à l'airfryer.
     Caraméliser les oignons dans le beurre avec le sucre, 15 minutes.
     Cuire les steaks, poser le roquefort la dernière minute.
     Monter les burgers avec roquette et oignons.`,
  ),
  recipe(
    'Bœuf thaï au basilic',
    '🌿 plat viande 20 facile 2 poele 2',
    'Steak haché 300, Ail 2, Piment, Sauce soja 20, Nuoc-mâm, Sucre, Basilic 1, Haricot vert 150, Riz 150, Œuf 2, Huile de tournesol',
    `Cuire le riz.
     Sauter ail et piment, ajouter la viande et les haricots verts coupés, 6 minutes.
     Assaisonner de soja, nuoc-mâm et d'une pincée de sucre, ajouter le basilic.
     Servir avec le riz et un œuf au plat.`,
  ),
  recipe(
    'Bœuf aux poivrons à la chinoise',
    '🫑 plat viande 25 facile 2 poele 2',
    'Bœuf émincé 300, Poivron 2, Oignon 1, Sauce soja 30, Maïzena 5, Ail 1, Gingembre frais 10, Riz 150, Huile de tournesol',
    `Cuire le riz. Mélanger le bœuf avec la maïzena et un peu de soja.
     Saisir le bœuf à feu très vif, réserver.
     Sauter poivrons, oignon, ail et gingembre 4 minutes.
     Remettre le bœuf avec le reste du soja.`,
  ),
  recipe(
    'Cannellonis à la viande',
    '🍝 plat viande 70 moyen 2 four 4',
    'Feuilles de lasagne 250, Steak haché 400, Oignon 1, Coulis de tomate 500, Ricotta 150, Mozzarella 1, Parmesan 30, Ail 1, Herbes de Provence, Huile d\'olive, Sel',
    `Faire revenir oignon, ail et viande, ajouter un peu de coulis et la ricotta.
     Ébouillanter les feuilles 2 minutes, les garnir et les rouler.
     Les serrer dans un plat sur un fond de coulis, napper du reste.
     Couvrir de mozzarella et parmesan, cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Parmentier de bœuf effiloché',
    '🥔 plat viande 180 moyen 2 casserole,four 4',
    'Bœuf à braiser 700, Oignon 2, Carotte 2, Vin rouge 200, Thym, Pomme de terre 1000, Lait 200, Beurre 50, Comté 60, Sel, Poivre',
    `Mijoter le bœuf 2 h 30 avec oignons, carottes, vin, thym et eau à hauteur.
     Effilocher la viande avec un peu de jus réduit.
     Préparer une purée au beurre et au lait.
     Monter le parmentier, couvrir de comté et gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Boulettes suédoises & purée',
    '🧆 plat viande 40 moyen 2 poele,casserole 2',
    'Steak haché 300, Oignon 1, Chapelure 30, Œuf 1, Muscade, Crème liquide 150, Bouillon cube 1, Pomme de terre 500, Beurre 30, Confiture 30, Sel, Poivre',
    `Mélanger viande, oignon râpé, chapelure, œuf, muscade, sel et poivre ; former des petites boulettes.
     Les dorer dans le beurre, réserver.
     Déglacer avec 15 cl de bouillon et la crème, laisser réduire, remettre les boulettes.
     Servir avec une purée et une cuillère de confiture.`,
  ),
  recipe(
    'Lasagnes express à la poêle',
    '🍝 plat viande 30 facile 2 poele 2',
    'Feuilles de lasagne 120, Steak haché 250, Coulis de tomate 400, Oignon 1, Ricotta 100, Mozzarella 1, Basilic 1, Huile d\'olive, Sel',
    `Faire revenir l'oignon et la viande dans une grande poêle.
     Ajouter le coulis et 20 cl d'eau, puis les feuilles cassées en morceaux.
     Couvrir et cuire 15 minutes en remuant, jusqu'à ce que les pâtes soient tendres.
     Ajouter cuillerées de ricotta et mozzarella, couvrir 3 minutes et parsemer de basilic.`,
  ),
  recipe(
    'Steak au poivre & frites',
    '🥩 plat viande 30 moyen 3 poele,airfryer 2',
    'Steak de bœuf 2, Poivre, Crème liquide 100, Échalote 1, Beurre 20, Frites surgelées 400, Sel',
    `Cuire les frites à l'airfryer ou au four.
     Concasser grossièrement le poivre et en presser les steaks des deux côtés.
     Les saisir 2 à 3 minutes par face dans le beurre, réserver.
     Faire suer l'échalote, verser la crème et laisser réduire 2 minutes ; saler et napper.`,
  ),
  recipe(
    'Hachis de bœuf aux patates douces',
    '🍠 plat viande 50 facile 1 four,casserole 4',
    'Steak haché 400, Patate douce 3, Oignon 1, Carotte 1, Tomates concassées 1, Cumin, Beurre 20, Cheddar 60, Sel, Poivre',
    `Cuire les patates douces en morceaux et les écraser avec le beurre.
     Faire revenir oignon, carotte et viande, ajouter tomates et cumin, 10 minutes.
     Monter le hachis, couvrir de cheddar.
     Gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Chili cheese fries',
    '🍟 plat viande 30 facile 1 airfryer,poele 2',
    'Frites surgelées 400, Steak haché 200, Haricots rouges 1, Tomates concassées 0.5, Cumin, Paprika, Cheddar 100, Oignon nouveau 1, Crème fraîche 40',
    `Cuire les frites à l'airfryer.
     Faire revenir la viande avec les épices, ajouter haricots et tomates, 10 minutes.
     Napper les frites de chili et de cheddar, remettre 3 minutes pour faire fondre.
     Servir avec la crème et l'oignon nouveau.`,
  ),
  recipe(
    'Picadillo cubain & riz',
    '🍚 plat viande 35 facile 1 poele,casserole 2',
    'Steak haché 300, Oignon 1, Poivron 1, Ail 1, Tomates concassées 1, Olives vertes 40, Raisins secs 20, Cumin, Riz 150, Huile d\'olive, Sel',
    `Cuire le riz.
     Faire revenir oignon, poivron et ail, puis la viande.
     Ajouter tomates, cumin, olives et raisins, cuire 15 minutes.
     Servir sur le riz.`,
  ),
  recipe(
    'Empanadas au bœuf',
    '🥟 plat viande 50 moyen 2 four 4',
    'Pâte brisée 2, Steak haché 300, Oignon 1, Poivron 1, Œuf 2, Olives vertes 40, Cumin, Paprika, Huile d\'olive, Sel',
    `Cuire un œuf dur 10 minutes et le hacher.
     Faire revenir oignon, poivron et viande avec les épices, ajouter olives et œuf haché.
     Découper des disques dans la pâte, garnir, refermer en chaussons et souder.
     Dorer à l'œuf battu et cuire 25 minutes à 190 °C.`,
  ),
  recipe(
    'Kefta tajine aux œufs',
    '🍳 plat viande 40 facile 1 casserole 2',
    'Steak haché 300, Oignon 1, Tomates concassées 1, Œuf 3, Cumin, Paprika, Coriandre 1, Persil 1, Pain pita 2, Huile d\'olive, Sel',
    `Mélanger la viande avec cumin, paprika, sel et la moitié des herbes ; former des petites boulettes.
     Faire revenir l'oignon, ajouter tomates et boulettes, mijoter 20 minutes.
     Casser les œufs dans la sauce, couvrir 6 minutes.
     Parsemer du reste des herbes et servir avec le pain.`,
  ),

  // ---------------------------------------------------------------- porc
  recipe(
    'Rôti de porc au lait & aux herbes',
    '🐖 plat viande 90 moyen 2 casserole 4',
    'Filet mignon de porc 800, Lait 600, Ail 3, Thym, Laurier, Beurre 30, Pomme de terre 800, Sel, Poivre',
    `Dorer la viande dans le beurre sur toutes les faces.
     Verser le lait, ajouter ail, thym et laurier ; cuire à couvert 1 heure à feu doux.
     Ajouter les pommes de terre en morceaux les 30 dernières minutes.
     Mixer le jus de cuisson pour une sauce lisse.`,
  ),
  recipe(
    'Filet mignon en croûte de moutarde & miel',
    '🍯 plat viande 40 moyen 3 four 2',
    'Filet mignon de porc 400, Moutarde 30, Miel 20, Thym, Carotte 3, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Dorer le filet mignon sur toutes les faces.
     Le badigeonner de moutarde et de miel, le poser sur les carottes en bâtonnets huilées.
     Cuire 25 minutes, laisser reposer 5 minutes avant de trancher.`,
  ),
  recipe(
    'Sauté de porc au curry & ananas',
    '🍍 plat viande 35 facile 1 poele 2',
    'Échine de porc 350, Ananas 0.25, Poivron 1, Oignon 1, Curry, Lait de coco 200, Riz 150, Huile de tournesol, Sel',
    `Cuire le riz.
     Dorer le porc en cubes, ajouter oignon, poivron et curry.
     Verser le lait de coco, ajouter l'ananas en dés, cuire 20 minutes à couvert.
     Saler et servir avec le riz.`,
  ),
  recipe(
    'Travers de porc laqués au four',
    '🍖 plat viande 90 facile 2 four 4',
    'Échine de porc 1000, Sauce barbecue 150, Miel 30, Sauce soja 40, Ail 2, Paprika, Pomme de terre 800, Huile d\'olive, Sel',
    `Préchauffer le four à 160 °C.
     Mélanger sauce barbecue, miel, soja, ail et paprika ; enrober la viande.
     Cuire 1 heure couvert de papier aluminium, puis 20 minutes à découvert à 200 °C en arrosant.
     Rôtir les pommes de terre en quartiers en même temps.`,
  ),
  recipe(
    'Porc effiloché & coleslaw',
    '🥪 plat viande 240 facile 2 casserole 4',
    'Échine de porc 1000, Sauce barbecue 200, Oignon 1, Paprika, Sucre roux 20, Pain à burger 4, Chou vert 0.25, Carotte 1, Mayonnaise, Vinaigre de cidre, Sel',
    `Frotter la viande de paprika, sucre et sel.
     La cuire 3 h 30 à couvert, à feu très doux, avec l'oignon et 20 cl d'eau.
     L'effilocher et la mélanger à la sauce barbecue.
     Servir dans les pains avec un coleslaw au vinaigre.`,
  ),
  recipe(
    'Côtes de porc aux pommes & au cidre',
    '🍎 plat viande 25 facile 1 poele 2',
    'Côte de porc 2, Pomme 2, Beurre 20, Thym, Cidre 100, Pomme de terre 400, Huile de tournesol, Sel, Poivre',
    `Faire sauter les pommes de terre en dés 20 minutes à couvert.
     Saisir les côtes 4 minutes par face, réserver.
     Dorer les pommes en quartiers dans le beurre avec le thym, déglacer au cidre.
     Remettre les côtes 2 minutes dans la sauce.`,
  ),
  recipe(
    'Saucisses au vin blanc & purée',
    '🌭 plat viande 35 facile 1 poele,casserole 2',
    'Saucisse 4, Oignon 2, Vin blanc 150, Moutarde, Pomme de terre 600, Lait 150, Beurre 30, Sel',
    `Préparer une purée au beurre et au lait.
     Dorer les saucisses, ajouter les oignons émincés.
     Déglacer au vin blanc, couvrir et cuire 15 minutes ; finir avec une cuillère de moutarde.`,
  ),
  recipe(
    'Toad in the hole (saucisses en pâte)',
    '🌭 plat viande 45 facile 1 four 4',
    'Saucisse 6, Farine 140, Œuf 3, Lait 200, Oignon 1, Huile de tournesol 30, Moutarde, Sel',
    `Préchauffer le four à 220 °C, dorer les saucisses 10 minutes dans un plat huilé.
     Fouetter farine, œufs, lait et sel en pâte lisse.
     Verser la pâte autour des saucisses brûlantes avec l'oignon émincé.
     Cuire 25 minutes sans ouvrir : la pâte doit gonfler.`,
  ),
  recipe(
    'Gratin de coquillettes façon tartiflette',
    '🧀 plat viande 35 facile 2 casserole,four 2',
    'Coquillettes 200, Reblochon 0.5, Lardons fumés 100, Oignon 1, Crème fraîche 100, Vin blanc 50, Poivre',
    `Cuire les coquillettes à moitié dans l'eau salée.
     Faire revenir oignon et lardons, déglacer au vin.
     Mélanger avec pâtes et crème, poser le reblochon tranché.
     Gratiner 15 minutes à 200 °C.`,
  ),
  recipe(
    'Raclette au four',
    '🧀 plat viande 35 facile 2 four 2',
    'Pomme de terre 700, Raclette 8, Jambon cru 4, Jambon blanc 2, Cornichons 50, Salade verte 0.5, Poivre',
    `Cuire les pommes de terre à l'eau 20 minutes avec la peau.
     Les couper en deux, les poser dans un plat et couvrir de raclette.
     Gratiner 8 minutes à 220 °C.
     Servir avec charcuterie, cornichons et salade.`,
  ),
  recipe(
    'Porc sauté au gingembre & nouilles',
    '🍜 plat viande 25 facile 1 poele 2',
    'Échine de porc 250, Gingembre frais 20, Ail 1, Nouilles chinoises 150, Pak choï 2, Sauce soja 30, Miel 10, Huile de sésame, Huile de tournesol',
    `Cuire les nouilles.
     Saisir le porc en fines lanières avec ail et gingembre.
     Ajouter le pak choï émincé, puis nouilles, soja et miel.
     Finir avec l'huile de sésame.`,
  ),
  recipe(
    'Carbonara au poulet & champignons',
    '🍄 plat volaille 25 facile 1 casserole,poele 2',
    'Tagliatelles 200, Blanc de poulet 1, Champignon de Paris 150, Œuf 2, Parmesan 40, Crème liquide 50, Poivre, Sel',
    `Cuire les tagliatelles.
     Dorer poulet en dés et champignons.
     Battre œufs, crème et parmesan.
     Hors du feu, mélanger pâtes, poulet et sauce avec un peu d'eau de cuisson ; poivrer généreusement.`,
  ),

  // ---------------------------------------------------------------- agneau & autres
  recipe(
    'Épaule d\'agneau confite au four',
    '🐑 plat viande 240 moyen 3 four 6',
    'Épaule d\'agneau 1500, Ail 6, Romarin, Thym, Pomme de terre 1000, Vin blanc 200, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 150 °C.
     Piquer l'épaule de gousses d'ail, frotter d'huile, d'herbes, sel et poivre.
     La poser sur les pommes de terre en morceaux avec le vin blanc et 20 cl d'eau.
     Couvrir et cuire 3 h 30 ; découvrir les 30 dernières minutes. La viande doit se détacher à la cuillère.`,
  ),
  recipe(
    'Curry d\'agneau aux épinards',
    '🍛 plat viande 90 moyen 3 casserole 4',
    'Épaule d\'agneau 700, Oignon 2, Ail 2, Gingembre frais 15, Garam masala, Tomates concassées 1, Yaourt nature 1, Épinard frais 200, Riz 300, Huile de tournesol, Sel',
    `Dorer l'agneau en cubes, ajouter oignons, ail, gingembre et épices.
     Ajouter tomates et 20 cl d'eau, couvrir et cuire 1 heure.
     Ajouter le yaourt puis les épinards, 10 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Brochettes d\'agneau au cumin & semoule',
    '🍢 plat viande 35 moyen 3 airfryer,four 2',
    'Épaule d\'agneau 400, Cumin, Paprika, Ail 1, Citron 0.5, Poivron 1, Oignon rouge 1, Semoule 120, Menthe 1, Huile d\'olive, Sel',
    `Mariner l'agneau en cubes avec épices, ail, citron, huile et sel.
     Monter les brochettes avec poivron et oignon.
     Cuire 14 minutes à 200 °C à l'airfryer (ou 18 minutes sous le gril du four).
     Servir avec la semoule à la menthe.`,
  ),
  recipe(
    'Hachis d\'agneau aux aubergines (moussaka express)',
    '🍆 plat viande 40 facile 2 poele,four 2',
    'Steak haché 250, Aubergine 1, Oignon 1, Tomates concassées 1, Cannelle, Yaourt grec 100, Œuf 1, Feta 60, Huile d\'olive, Sel',
    `Faire dorer l'aubergine en dés, réserver.
     Faire revenir oignon et viande, ajouter tomates et cannelle, puis l'aubergine.
     Verser dans un plat, couvrir du yaourt battu avec l'œuf et la feta.
     Gratiner 15 minutes à 200 °C.`,
  ),
  recipe(
    'Merguez, légumes grillés & semoule',
    '🌭 plat viande 30 facile 1 poele 2',
    'Merguez 4, Courgette 1, Poivron 1, Oignon rouge 1, Semoule 120, Harissa, Huile d\'olive, Sel',
    `Cuire les merguez à la poêle 10 minutes, réserver.
     Dans le gras de cuisson, faire griller les légumes en morceaux 10 minutes.
     Préparer la semoule à l'eau bouillante salée.
     Servir avec une pointe de harissa.`,
  ),

  // ---------------------------------------------------------------- tour du monde, suite
  recipe(
    'Katsu curry de poulet',
    '🍛 plat volaille 40 moyen 2 poele,casserole 2',
    'Blanc de poulet 2, Œuf 1, Farine 30, Chapelure 60, Oignon 1, Carotte 1, Pomme de terre 200, Curry, Sauce soja 15, Miel 10, Riz 150, Huile de tournesol',
    `Cuire le riz.
     Sauce : faire revenir oignon, carotte et pomme de terre en dés avec le curry, couvrir d'eau, cuire 15 minutes et mixer avec soja et miel.
     Paner le poulet (farine, œuf, chapelure) et le dorer dans un fond d'huile.
     Trancher et servir sur le riz, nappé de sauce.`,
  ),
  recipe(
    'Donburi au bœuf & oignons',
    '🍚 plat viande 25 facile 2 poele,casserole 2',
    'Bœuf émincé 250, Oignon 2, Sauce soja 40, Sucre 15, Riz rond 150, Œuf 2, Oignon nouveau 1',
    `Cuire le riz.
     Faire fondre les oignons émincés dans 10 cl d'eau avec soja et sucre.
     Ajouter le bœuf tranché très finement, cuire 2 minutes.
     Verser les œufs battus, couvrir 1 minute et servir sur le riz.`,
  ),
  recipe(
    'Pad kra pao au poulet',
    '🌶️ plat volaille 20 facile 1 poele 2',
    'Blanc de poulet 2, Ail 3, Piment, Sauce soja 20, Nuoc-mâm, Sucre, Basilic 1, Haricot vert 100, Riz 150, Œuf 2, Huile de tournesol',
    `Cuire le riz.
     Hacher le poulet au couteau, le sauter avec l'ail et le piment.
     Ajouter haricots coupés, soja, nuoc-mâm, une pincée de sucre, puis le basilic.
     Servir avec le riz et un œuf frit croustillant.`,
  ),
  recipe(
    'Chow mein au poulet',
    '🍜 plat volaille 25 facile 1 poele 2',
    'Nouilles chinoises 150, Blanc de poulet 1, Chou vert 0.25, Carotte 1, Pousses de soja 80, Oignon nouveau 1, Sauce soja 30, Huile de sésame, Huile de tournesol',
    `Cuire les nouilles, les égoutter et les huiler.
     Saisir le poulet en lanières, ajouter chou et carotte émincés.
     Ajouter nouilles, pousses de soja et soja, sauter 2 minutes à feu vif.
     Finir avec oignon nouveau et huile de sésame.`,
  ),
  recipe(
    'Porc aigre-doux',
    '🍍 plat viande 35 moyen 2 poele 2',
    'Échine de porc 300, Maïzena 30, Poivron 1, Oignon 1, Ananas 0.25, Ketchup, Vinaigre de cidre, Sucre roux 20, Sauce soja 20, Riz 150, Huile de tournesol',
    `Cuire le riz.
     Enrober le porc en cubes de maïzena et le frire dans un fond d'huile.
     Sauter poivron, oignon et ananas.
     Ajouter ketchup, vinaigre, sucre, soja et 5 cl d'eau, remettre le porc et laisser napper.`,
  ),
  recipe(
    'Raviolis chinois poêlés',
    '🥟 plat viande 60 difficile 1 poele 4',
    'Farine 250, Échine de porc 250, Chou vert 0.25, Oignon nouveau 1, Gingembre frais 10, Sauce soja 40, Huile de sésame, Vinaigre de cidre, Huile de tournesol',
    `Pâte : farine et 13 cl d'eau tiède, pétrir et laisser reposer 30 minutes.
     Farce : porc haché, chou haché fin, oignon nouveau, gingembre, soja et huile de sésame.
     Étaler des petits disques, garnir et plisser.
     Dorer le fond dans l'huile, verser 10 cl d'eau, couvrir 8 minutes. Servir avec soja et vinaigre.`,
  ),
  recipe(
    'Brochettes de poulet tikka & raïta',
    '🍢 plat volaille 35 facile 2 airfryer,four 2',
    'Blanc de poulet 2, Yaourt nature 1, Garam masala, Paprika, Ail 1, Gingembre frais 10, Pain pita 2, Concombre 0.5, Menthe 1, Oignon rouge 0.5, Sel',
    `Mariner le poulet en cubes dans le yaourt, épices, ail, gingembre et sel.
     Monter les brochettes et cuire 14 minutes à 200 °C à l'airfryer (ou sous le gril).
     Raïta : yaourt restant, concombre râpé et menthe.
     Servir avec pitas chaudes et oignon rouge.`,
  ),
  recipe(
    'Poulet shawarma & riz épicé',
    '🥙 plat volaille 40 facile 1 four 2',
    'Cuisse de poulet 3, Yaourt nature 1, Cumin, Paprika, Curcuma, Cannelle, Ail 2, Citron 1, Riz 150, Tomate 1, Concombre 0.5, Huile d\'olive, Sel',
    `Mariner les cuisses désossées dans le yaourt, les épices, l'ail et le citron.
     Rôtir 25 minutes à 220 °C puis les émincer.
     Cuire le riz avec une pincée de curcuma.
     Servir avec tomate et concombre en dés.`,
  ),
  recipe(
    'Mafé de bœuf',
    '🥜 plat viande 120 moyen 2 casserole 4',
    'Bœuf à braiser 700, Beurre de cacahuète 120, Concentré de tomate 40, Oignon 2, Ail 2, Carotte 3, Patate douce 1, Chou vert 0.25, Riz 300, Piment, Huile de tournesol, Sel',
    `Dorer la viande en cubes avec les oignons et l'ail.
     Ajouter le concentré, le beurre de cacahuète délayé dans 75 cl d'eau, le piment et le sel.
     Mijoter 1 heure, ajouter les légumes en morceaux et cuire 40 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Colombo de porc',
    '🌶️ plat viande 90 moyen 2 casserole 4',
    'Échine de porc 800, Curry, Curcuma, Oignon 2, Ail 2, Aubergine 1, Courgette 1, Pomme de terre 400, Citron vert 1, Riz 300, Huile de tournesol, Sel',
    `Dorer le porc en cubes avec oignons, ail et épices.
     Couvrir d'eau à hauteur, mijoter 45 minutes.
     Ajouter les légumes en morceaux, 30 minutes.
     Finir avec le jus de citron vert, servir avec le riz.`,
  ),
  recipe(
    'Feijoada simplifiée',
    '🫘 plat viande 90 moyen 2 casserole 4',
    'Haricots rouges 2, Échine de porc 400, Chorizo 100, Lardons fumés 100, Oignon 1, Ail 2, Laurier, Orange 1, Riz 300, Huile d\'olive, Sel',
    `Dorer porc en cubes, lardons et chorizo, ajouter oignon et ail.
     Ajouter haricots avec leur jus, laurier et 30 cl d'eau.
     Mijoter 1 heure.
     Servir avec le riz et des quartiers d'orange.`,
  ),
  recipe(
    'Arroz con pollo',
    '🍚 plat volaille 50 facile 1 casserole 4',
    'Cuisse de poulet 4, Riz 300, Poivron 1, Oignon 1, Ail 2, Tomates concassées 1, Petits pois surgelés 100, Curcuma, Bouillon cube 1, Huile d\'olive, Sel',
    `Dorer les cuisses, réserver.
     Faire revenir oignon, poivron et ail, ajouter riz et curcuma.
     Ajouter tomates et 60 cl de bouillon, remettre le poulet, couvrir 25 minutes.
     Ajouter les petits pois les 5 dernières minutes.`,
  ),
  recipe(
    'Tacos de poulet effiloché',
    '🌮 plat volaille 40 facile 1 casserole 2',
    'Blanc de poulet 2, Tomates concassées 1, Oignon 1, Ail 1, Cumin, Paprika, Tortilla de blé 4, Chou rouge 0.25, Crème fraîche 50, Citron vert 1, Coriandre 1, Sel',
    `Pocher le poulet 15 minutes dans les tomates avec oignon, ail et épices.
     L'effilocher à la fourchette et le laisser réduire dans la sauce 10 minutes.
     Garnir les tortillas avec chou émincé, crème, coriandre et citron vert.`,
  ),
  recipe(
    'Enchiladas au bœuf & haricots',
    '🌯 plat viande 45 facile 1 four 4',
    'Tortilla de blé 6, Steak haché 400, Haricots rouges 1, Oignon 1, Coulis de tomate 400, Cumin, Paprika, Cheddar 150, Crème fraîche 80, Sel',
    `Faire revenir oignon et viande, ajouter haricots, épices et la moitié du coulis.
     Garnir et rouler les tortillas, les serrer dans un plat.
     Napper du reste de coulis et couvrir de cheddar.
     Cuire 20 minutes à 200 °C, servir avec la crème.`,
  ),
  recipe(
    'Chili verde au porc',
    '🌶️ plat viande 100 moyen 2 casserole 4',
    'Échine de porc 800, Poivron 2, Oignon 2, Ail 3, Citron vert 2, Cumin, Coriandre 2, Bouillon cube 1, Riz 300, Huile d\'olive, Sel',
    `Dorer le porc en cubes avec oignons et ail.
     Ajouter poivrons, cumin et 50 cl de bouillon, mijoter 1 h 15.
     Mixer une partie de la sauce avec la coriandre et le citron vert, la remettre.
     Servir avec le riz.`,
  ),
  recipe(
    'Moussaka végétarienne aux lentilles',
    '🍆 plat vege 80 moyen 1 four,casserole 4',
    'Aubergine 3, Lentilles 200, Oignon 1, Tomates concassées 1, Cannelle, Beurre 40, Farine 40, Lait 500, Parmesan 40, Huile d\'olive, Sel',
    `Rôtir les aubergines tranchées et huilées 20 minutes à 200 °C.
     Cuire les lentilles 20 minutes, les mélanger aux tomates, oignon et cannelle.
     Préparer une béchamel au parmesan.
     Alterner aubergines et lentilles, couvrir de béchamel et cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Gyros de poulet & frites au four',
    '🥙 plat volaille 40 facile 1 four 2',
    'Cuisse de poulet 3, Origan, Paprika, Ail 2, Citron 1, Pain pita 2, Yaourt grec 120, Concombre 0.5, Tomate 1, Oignon rouge 0.5, Pomme de terre 400, Huile d\'olive, Sel',
    `Mariner le poulet désossé avec origan, paprika, ail, citron et huile.
     Le rôtir 25 minutes à 220 °C avec les pommes de terre en frites.
     Tzatziki : yaourt, concombre râpé, ail.
     Garnir les pitas de poulet émincé, frites, crudités et sauce.`,
  ),
  recipe(
    'Pastitsio (gratin grec de pâtes)',
    '🍝 plat viande 70 moyen 2 four 4',
    'Penne 300, Steak haché 400, Oignon 1, Tomates concassées 1, Cannelle, Beurre 40, Farine 40, Lait 500, Œuf 1, Parmesan 50, Sel',
    `Cuire les penne al dente.
     Faire revenir oignon et viande, ajouter tomates et cannelle, 15 minutes.
     Béchamel épaisse, hors du feu ajouter l'œuf et la moitié du parmesan.
     Alterner pâtes et viande, couvrir de béchamel et parmesan, cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Poulet façon ossobuco & gremolata',
    '🍋 plat volaille 60 moyen 2 casserole 2',
    'Cuisse de poulet 2, Carotte 1, Céleri 1, Oignon 1, Tomates concassées 1, Vin blanc 100, Citron 1, Persil 1, Ail 1, Riz arborio 150, Parmesan 30, Huile d\'olive, Sel',
    `Dorer les cuisses, ajouter oignon, carotte et céleri en dés.
     Déglacer au vin, ajouter tomates, couvrir et mijoter 40 minutes.
     Gremolata : zeste de citron, ail et persil hachés.
     Servir avec un riz au parmesan et parsemer de gremolata.`,
  ),
  recipe(
    'Polenta crémeuse & ragoût de saucisses',
    '🌽 plat viande 40 facile 1 casserole 2',
    'Semoule 150, Saucisse 4, Tomates concassées 1, Oignon 1, Champignon de Paris 150, Parmesan 40, Beurre 20, Lait 300, Thym, Sel',
    `Dorer les saucisses en tronçons avec l'oignon et les champignons.
     Ajouter tomates et thym, mijoter 20 minutes.
     Porter lait et 30 cl d'eau à ébullition, verser la semoule fine en pluie et cuire 5 minutes ; ajouter beurre et parmesan.
     Servir le ragoût sur la semoule crémeuse.`,
  ),
  recipe(
    'Schnitzel de porc & salade de pommes de terre',
    '🥔 plat viande 40 facile 1 poele,casserole 2',
    'Côte de porc 2, Farine 30, Œuf 1, Chapelure 60, Pomme de terre 500, Oignon rouge 0.5, Cornichons 30, Moutarde, Vinaigre de vin, Huile de tournesol, Citron 0.5, Sel',
    `Cuire les pommes de terre, les trancher tièdes et les assaisonner d'oignon, cornichons et vinaigrette moutardée.
     Désosser et aplatir les côtes, les paner.
     Les dorer 3 minutes par face dans l'huile.
     Servir avec le citron et la salade.`,
  ),
  recipe(
    'Bœuf crémeux aux cornichons & paprika',
    '🥒 plat viande 20 facile 2 poele 2',
    'Bœuf émincé 300, Oignon 1, Cornichons 40, Crème fraîche 120, Moutarde, Paprika, Riz 150, Beurre 15, Sel',
    `Cuire le riz.
     Saisir le bœuf, réserver.
     Faire fondre l'oignon dans le beurre, ajouter paprika, crème, moutarde et cornichons émincés.
     Remettre le bœuf 1 minute et servir.`,
  ),
  recipe(
    'Hot dogs maison & oignons frits',
    '🌭 plat viande 20 facile 1 poele 2',
    'Saucisse de Strasbourg 4, Baguette 1, Oignon 2, Moutarde, Ketchup, Cornichons 30, Cheddar 40, Huile de tournesol',
    `Faire dorer les oignons émincés dans l'huile jusqu'à ce qu'ils soient croustillants.
     Réchauffer les saucisses à la poêle.
     Fendre des tronçons de baguette, garnir de saucisse, cheddar, oignons et sauces.`,
  ),
  recipe(
    'Bœuf au vin rouge express',
    '🍷 plat viande 35 moyen 3 poele 2',
    'Steak de bœuf 2, Lardons 80, Champignon de Paris 150, Oignon 1, Vin rouge 200, Farine 10, Thym, Tagliatelles 200, Beurre 15, Sel',
    `Cuire les tagliatelles.
     Saisir le bœuf en gros cubes à feu vif, réserver.
     Dorer lardons, oignon et champignons, saupoudrer de farine.
     Verser le vin, ajouter le thym et réduire de moitié ; remettre le bœuf 1 minute.`,
  ),
]
