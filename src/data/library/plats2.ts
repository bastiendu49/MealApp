import { recipe } from './dsl'

/**
 * Lot 2 : airfryer, « juste une poêle », cuisines du monde, mijotés et plats de saison.
 * Proportions et cuissons des classiques, formulations à nous.
 */
export const PLATS_2 = [
  // ---------------------------------------------------------------- airfryer
  recipe(
    'Butternut rôtie au miel & à l\'ail, chèvre & lardons',
    '🎃 plat viande 35 facile 1 airfryer 2',
    'Courge butternut 1, Miel 30, Ail 2, Lardons fumés 120, Bûche de chèvre 100, Thym, Huile d\'olive, Sel, Poivre',
    `Couper la butternut en deux, retirer les graines et la tailler en cubes de 2 cm (la peau se mange une fois rôtie).
     Mélanger avec 2 c. à s. d'huile, l'ail écrasé, le thym, sel et poivre.
     Cuire 15 minutes à 200 °C à l'airfryer en secouant à mi-cuisson.
     Ajouter les lardons et le miel, mélanger et poursuivre 8 minutes : la courge doit être fondante et caramélisée.
     Parsemer de chèvre émietté, laisser 2 minutes dans la cuve pour qu'il tiédisse, puis servir.`,
  ),
  recipe(
    'Ailes de poulet barbecue & coleslaw',
    '🍗 plat volaille 35 facile 1 airfryer 2',
    'Pilon de poulet 8, Sauce barbecue 80, Paprika, Chou vert 0.25, Carotte 1, Mayonnaise, Vinaigre de cidre, Sucre, Sel',
    `Assaisonner le poulet de paprika et de sel.
     Cuire 22 minutes à 200 °C à l'airfryer en retournant à mi-cuisson.
     Badigeonner de sauce barbecue et poursuivre 4 minutes pour laquer.
     Coleslaw : chou et carotte râpés finement, mayonnaise, un trait de vinaigre, une pincée de sucre et de sel.`,
  ),
  recipe(
    'Saucisses & pommes de terre grenaille à l\'airfryer',
    '🌭 plat viande 30 facile 1 airfryer 2',
    'Saucisse 4, Pomme de terre 500, Oignon rouge 1, Romarin, Moutarde, Huile d\'olive, Sel',
    `Couper les pommes de terre en deux et l'oignon en quartiers, enrober d'huile, de romarin et de sel.
     Cuire 15 minutes à 200 °C à l'airfryer.
     Ajouter les saucisses piquées à la fourchette et poursuivre 12 minutes en secouant à mi-cuisson.
     Servir avec la moutarde.`,
  ),
  recipe(
    'Courgettes panées à l\'airfryer & sauce au yaourt',
    '🥒 plat vege 25 facile 1 airfryer 2',
    'Courgette 2, Œuf 1, Chapelure 60, Parmesan 30, Yaourt grec 120, Ail 1, Menthe 1, Citron 0.5, Huile d\'olive, Sel',
    `Couper les courgettes en bâtonnets, saler.
     Les passer dans l'œuf battu puis dans la chapelure mêlée au parmesan.
     Vaporiser ou badigeonner d'un peu d'huile, cuire 12 minutes à 200 °C en retournant.
     Mélanger yaourt, ail râpé, menthe, citron et sel pour la sauce.`,
  ),
  recipe(
    'Aubergines rôties à l\'airfryer, feta & menthe',
    '🍆 plat vege 30 facile 1 airfryer 2',
    'Aubergine 2, Feta 100, Menthe 1, Miel 15, Citron 0.5, Pain pita 2, Cumin, Huile d\'olive, Sel',
    `Couper les aubergines en gros cubes, les enrober généreusement d'huile, cumin et sel.
     Cuire 18 minutes à 200 °C à l'airfryer en secouant deux fois.
     Arroser de miel et de citron, parsemer de feta émiettée et de menthe.
     Servir avec le pain pita réchauffé.`,
  ),
  recipe(
    'Cordon bleu maison à l\'airfryer',
    '🧀 plat volaille 30 facile 1 airfryer 2',
    'Escalope de dinde 2, Jambon blanc 2, Comté 60, Œuf 1, Farine 30, Chapelure 60, Haricots verts surgelés 300, Beurre 10, Sel',
    `Aplatir les escalopes, poser sur une moitié une tranche de jambon et le comté en lamelles, refermer.
     Paner : farine, œuf battu, chapelure ; saler.
     Cuire 15 minutes à 190 °C à l'airfryer en retournant à mi-cuisson.
     Cuire les haricots verts à l'eau et les servir au beurre.`,
  ),
  recipe(
    'Galettes de pommes de terre au comté',
    '🥔 plat vege 30 facile 1 airfryer,poele 2',
    'Pomme de terre 500, Comté 80, Œuf 1, Farine 20, Ciboulette 1, Salade verte 0.5, Huile d\'olive, Sel, Poivre',
    `Râper les pommes de terre, les presser fort dans un torchon pour en retirer l'eau.
     Mélanger avec comté râpé, œuf, farine, ciboulette, sel et poivre.
     Former des galettes fines, les badigeonner d'huile.
     Cuire 15 minutes à 200 °C à l'airfryer en retournant (ou 4 minutes par face à la poêle). Servir avec la salade.`,
  ),
  recipe(
    'Brochettes de poulet citron & origan',
    '🍢 plat volaille 30 facile 2 airfryer 2',
    'Blanc de poulet 2, Citron 1, Origan, Ail 1, Poivron 1, Oignon rouge 1, Yaourt grec 100, Semoule 120, Huile d\'olive, Sel',
    `Couper le poulet en cubes, le mariner 10 minutes avec zeste et jus de citron, ail, origan, huile et sel.
     Monter les brochettes en alternant poulet, poivron et oignon.
     Cuire 14 minutes à 200 °C à l'airfryer en retournant.
     Servir avec la semoule et le yaourt.`,
  ),
  recipe(
    'Camembert rôti & pommes de terre',
    '🧀 plat vege 30 facile 2 airfryer,four 2',
    'Camembert 1, Pomme de terre 500, Ail 1, Romarin, Salade verte 0.5, Cornichons 30, Huile d\'olive, Sel',
    `Couper les pommes de terre en quartiers, huile, sel, romarin ; cuire 20 minutes à 200 °C à l'airfryer.
     Retirer l'emballage plastique du camembert, le remettre dans sa boîte en bois, entailler le dessus et y piquer l'ail en lamelles.
     Cuire 8 minutes à 180 °C (15 minutes au four à 200 °C).
     Tremper les pommes de terre dans le fromage coulant, avec salade et cornichons.`,
  ),
  recipe(
    'Chou-fleur rôti au curry & riz',
    '🥦 plat vege 30 facile 1 airfryer,casserole 2',
    'Chou-fleur 1, Curry, Yaourt grec 100, Pois chiches 1, Riz 150, Coriandre 1, Citron 0.5, Huile d\'olive, Sel',
    `Cuire le riz.
     Détailler le chou-fleur en bouquets, mélanger avec pois chiches égouttés, huile, curry et sel.
     Cuire 18 minutes à 200 °C à l'airfryer en secouant.
     Servir sur le riz avec le yaourt citronné et la coriandre.`,
  ),
  recipe(
    'Crevettes croustillantes & riz sauté',
    '🦐 plat poisson 25 facile 2 airfryer,poele 2',
    'Crevette 250, Œuf 1, Chapelure 50, Noix de coco râpée 20, Riz 150, Petits pois surgelés 80, Sauce soja 20, Citron vert 1, Huile de tournesol, Sel',
    `Cuire le riz.
     Passer les crevettes dans l'œuf puis dans le mélange chapelure-coco, saler.
     Cuire 8 minutes à 200 °C à l'airfryer.
     Sauter le riz et les petits pois à la poêle avec le soja, servir avec les crevettes et le citron vert.`,
  ),
  recipe(
    'Côtes de porc marinées & haricots verts',
    '🐖 plat viande 30 facile 1 airfryer 2',
    'Côte de porc 2, Sauce soja 20, Miel 15, Ail 1, Paprika, Haricot vert 300, Huile d\'olive, Sel',
    `Mariner les côtes 10 minutes dans soja, miel, ail et paprika.
     Enrober les haricots équeutés d'huile et de sel, les cuire 8 minutes à 200 °C à l'airfryer, réserver.
     Cuire les côtes 12 minutes à 200 °C en retournant à mi-cuisson.
     Laisser reposer 3 minutes et servir.`,
  ),
  recipe(
    'Pommes de terre en robe des champs, crème & lardons',
    '🥔 plat viande 45 facile 1 airfryer,four 2',
    'Pomme de terre 600, Crème fraîche 100, Ciboulette 1, Lardons fumés 100, Salade verte 0.5, Huile d\'olive, Sel, Poivre',
    `Frotter les pommes de terre entières avec un peu d'huile et de gros sel.
     Les cuire 40 minutes à 200 °C à l'airfryer (1 heure au four) : la pointe d'un couteau doit entrer sans résistance.
     Dorer les lardons à sec à la poêle.
     Fendre les pommes de terre, garnir de crème à la ciboulette et de lardons. Servir avec la salade.`,
  ),
  recipe(
    'Tofu croustillant & nouilles sautées',
    '🥢 plat vege 25 facile 1 airfryer,poele 2',
    'Tofu 300, Maïzena 15, Sauce soja 30, Nouilles chinoises 150, Carotte 1, Pak choï 2, Ail 1, Huile de sésame, Graines de sésame 10',
    `Couper le tofu en cubes, l'enrober de maïzena et d'un peu d'huile.
     Le cuire 15 minutes à 200 °C à l'airfryer en secouant : il doit être bien doré.
     Cuire les nouilles, puis les sauter avec carotte en julienne, pak choï émincé, ail et soja.
     Ajouter le tofu, l'huile et les graines de sésame.`,
  ),
  recipe(
    'Cuisses de poulet & carottes au miel',
    '🥕 plat volaille 40 facile 1 airfryer 2',
    'Cuisse de poulet 2, Carotte 4, Miel 20, Cumin, Thym, Huile d\'olive, Sel, Poivre',
    `Assaisonner les cuisses de thym, sel et poivre.
     Couper les carottes en bâtonnets, les mélanger avec huile, miel et cumin.
     Cuire les cuisses 15 minutes à 190 °C peau dessous, retourner, ajouter les carottes et poursuivre 15 minutes.`,
  ),
  recipe(
    'Saumon en croûte de parmesan',
    '🐟 plat poisson 20 facile 2 airfryer,four 2',
    'Pavé de saumon 2, Parmesan 30, Chapelure 20, Persil 1, Citron 1, Moutarde, Haricot vert 250, Huile d\'olive, Sel',
    `Badigeonner le dessus du saumon d'un peu de moutarde.
     Presser par-dessus le mélange parmesan, chapelure, persil haché et zeste de citron.
     Cuire 10 minutes à 190 °C à l'airfryer (14 minutes au four à 200 °C).
     Servir avec les haricots verts cuits à l'eau et un filet d'huile.`,
  ),
  recipe(
    'Burger de poulet croustillant',
    '🍔 plat volaille 30 facile 2 airfryer 2',
    'Blanc de poulet 2, Œuf 1, Chapelure 60, Paprika, Pain à burger 2, Cheddar 40, Salade verte 0.25, Tomate 1, Mayonnaise, Frites surgelées 300, Sel',
    `Aplatir les blancs, les paner dans l'œuf puis la chapelure au paprika ; saler.
     Cuire les frites 15 minutes à 200 °C à l'airfryer, réserver au chaud.
     Cuire le poulet 12 minutes à 200 °C en retournant, poser le cheddar la dernière minute.
     Monter les burgers avec mayonnaise, salade et tomate.`,
  ),
  recipe(
    'Pizza tortilla express',
    '🍕 plat vege 15 facile 1 airfryer,four 2',
    'Tortilla de blé 2, Coulis de tomate 100, Mozzarella 1, Champignon de Paris 80, Olives noires 20, Origan, Roquette 30',
    `Étaler le coulis sur les tortillas, ajouter mozzarella, champignons émincés, olives et origan.
     Cuire chaque pizza 6 minutes à 190 °C à l'airfryer (8 minutes au four à 220 °C).
     Ajouter la roquette en sortie de cuisson.`,
  ),
  recipe(
    'Champignons farcis au chèvre & pommes de terre',
    '🍄 plat vege 30 facile 1 airfryer 2',
    'Champignon de Paris 300, Chèvre frais 100, Ail 1, Persil 1, Chapelure 20, Pomme de terre 400, Huile d\'olive, Sel, Poivre',
    `Lancer les pommes de terre en quartiers, huile et sel, 20 minutes à 200 °C.
     Retirer les pieds des champignons, les hacher avec ail et persil, mélanger au chèvre.
     Garnir les chapeaux, parsemer de chapelure.
     Cuire 10 minutes à 180 °C à l'airfryer.`,
  ),
  recipe(
    'Patates douces farcies, haricots rouges & cheddar',
    '🍠 plat vege 45 facile 1 airfryer,four 2',
    'Patate douce 2, Haricots rouges 1, Maïs en boîte 0.5, Cheddar 80, Cumin, Crème fraîche 50, Coriandre 1, Huile d\'olive, Sel',
    `Piquer les patates douces, les huiler et les cuire 35 minutes à 190 °C à l'airfryer (50 minutes au four à 200 °C).
     Chauffer haricots et maïs égouttés avec le cumin et le sel.
     Fendre les patates, garnir, couvrir de cheddar et remettre 3 minutes.
     Servir avec la crème et la coriandre.`,
  ),

  // ---------------------------------------------------------------- juste une poêle
  recipe(
    'Poêlée de gnocchis, champignons & épinards',
    '🍄 plat vege 20 facile 1 poele 2',
    'Gnocchis 500, Champignon de Paris 200, Épinard frais 100, Ail 1, Crème liquide 100, Parmesan 30, Huile d\'olive, Sel, Poivre',
    `Dorer les gnocchis 6 minutes dans l'huile, réserver.
     Dans la même poêle, faire sauter les champignons émincés avec l'ail.
     Ajouter la crème et les épinards, laisser tomber 2 minutes.
     Remettre les gnocchis, parsemer de parmesan et poivrer.`,
  ),
  recipe(
    'Omelette espagnole aux pommes de terre',
    '🥚 plat vege 40 facile 1 poele 2',
    'Œuf 5, Pomme de terre 400, Oignon 1, Huile d\'olive 80, Salade verte 0.5, Sel',
    `Émincer finement pommes de terre et oignon, les confire 20 minutes à feu doux dans l'huile, sans les dorer.
     Égoutter et mélanger aux œufs battus salés, laisser reposer 5 minutes.
     Cuire dans la poêle avec une cuillère d'huile, 6 minutes à feu moyen.
     Retourner à l'aide d'une assiette et cuire 3 minutes de l'autre côté. Servir tiède avec la salade.`,
  ),
  recipe(
    'Poêlée chorizo, pommes de terre & poivrons',
    '🌶️ plat viande 30 facile 1 poele 2',
    'Pomme de terre 450, Chorizo 100, Poivron 1, Oignon 1, Œuf 2, Persil 1, Huile d\'olive, Sel',
    `Dorer les pommes de terre en petits cubes 15 minutes à couvert dans l'huile.
     Ajouter oignon et poivron émincés, puis le chorizo en rondelles, 8 minutes.
     Creuser deux puits, y casser les œufs, couvrir 4 minutes.
     Parsemer de persil.`,
  ),
  recipe(
    'Œufs brouillés au saumon fumé',
    '🍳 plat poisson 15 facile 2 poele 2',
    'Œuf 5, Saumon fumé 3, Crème fraîche 30, Ciboulette 1, Beurre 15, Pain de campagne 4, Poivre',
    `Battre les œufs avec la crème et du poivre.
     Les cuire dans le beurre à feu très doux en remuant sans cesse : ils doivent rester crémeux.
     Hors du feu, ajouter le saumon en lanières et la ciboulette.
     Servir sur le pain grillé à la poêle.`,
  ),
  recipe(
    'Galette champignons, chèvre & miel',
    '🥞 plat vege 20 facile 1 poele 2',
    'Galette de sarrasin 2, Champignon de Paris 150, Chèvre frais 80, Miel 15, Noix 20, Beurre 15, Sel, Poivre',
    `Faire sauter les champignons émincés dans la moitié du beurre, saler.
     Chauffer une galette avec un peu de beurre, garnir de champignons et de chèvre.
     Replier les bords au carré, laisser fondre 2 minutes.
     Finir avec miel et noix concassées. Recommencer pour la seconde.`,
  ),
  recipe(
    'Steak haché, oignons confits & haricots verts',
    '🥩 plat viande 25 facile 1 poele 2',
    'Steak haché 250, Oignon 2, Haricots verts surgelés 300, Vinaigre balsamique, Beurre 20, Sel, Poivre',
    `Faire confire les oignons émincés dans le beurre 15 minutes à feu doux, finir d'un trait de balsamique ; réserver.
     Dans la même poêle, faire sauter les haricots verts 8 minutes avec un fond d'eau, saler.
     Former deux steaks et les cuire 3 minutes par face. Servir avec les oignons.`,
  ),
  recipe(
    'Escalopes de dinde à la crème & poêlée de courgettes',
    '🦃 plat volaille 25 facile 1 poele 2',
    'Escalope de dinde 2, Crème fraîche 100, Moutarde, Courgette 2, Ail 1, Huile d\'olive, Sel, Poivre',
    `Faire sauter les courgettes en demi-rondelles avec l'ail 8 minutes, saler, réserver.
     Dorer les escalopes 3 minutes par face.
     Ajouter crème et moutarde, laisser napper 2 minutes. Servir avec les courgettes.`,
  ),
  recipe(
    'Crevettes à l\'ail & courgettes sautées',
    '🦐 plat poisson 15 facile 2 poele 2',
    'Crevette 250, Courgette 2, Ail 2, Persil 1, Citron 0.5, Piment, Huile d\'olive, Sel',
    `Faire sauter les courgettes en bâtonnets à feu vif 5 minutes, saler, réserver.
     Saisir les crevettes avec l'ail et une pincée de piment 3 minutes.
     Remettre les courgettes, ajouter persil et citron.`,
  ),
  recipe(
    'Wok de bœuf, brocoli & nouilles de riz',
    '🥢 plat viande 25 facile 2 poele 2',
    'Bœuf émincé 300, Brocoli 1, Nouilles de riz 150, Sauce soja 30, Miel 10, Ail 1, Gingembre frais 10, Huile de tournesol',
    `Réhydrater les nouilles 10 minutes dans l'eau chaude.
     Saisir le bœuf 2 minutes à feu très vif, réserver.
     Sauter le brocoli en petits bouquets 5 minutes avec un fond d'eau, ajouter ail et gingembre.
     Remettre bœuf et nouilles avec soja et miel, mélanger 1 minute.`,
  ),
  recipe(
    'Quesadillas champignons & fromage',
    '🫓 plat vege 20 facile 1 poele 2',
    'Tortilla de blé 4, Champignon de Paris 200, Oignon rouge 0.5, Cheddar 100, Mozzarella 1, Cumin, Coriandre 1, Huile d\'olive, Sel',
    `Faire sauter champignons et oignon émincés avec le cumin, saler.
     Garnir deux tortillas de fromages et de champignons, couvrir des deux autres.
     Dorer 2 à 3 minutes de chaque côté. Couper en parts, parsemer de coriandre.`,
  ),
  recipe(
    'Tacos de poisson croustillant',
    '🌮 plat poisson 25 facile 2 poele 2',
    'Filet de colin 300, Farine 30, Paprika, Tortilla de blé 4, Chou rouge 0.25, Citron vert 1, Mayonnaise, Coriandre 1, Huile de tournesol, Sel',
    `Couper le poisson en morceaux, les fariner avec paprika et sel.
     Les dorer 3 minutes par face dans un fond d'huile.
     Mélanger mayonnaise et jus de citron vert, émincer très finement le chou rouge.
     Garnir les tortillas chaudes : chou, poisson, sauce, coriandre.`,
  ),
  recipe(
    'Poêlée de légumes d\'hiver & œuf au plat',
    '🥕 plat vege 30 facile 1 poele 2',
    'Panais 1, Carotte 2, Poireau 1, Pomme de terre 300, Œuf 2, Thym, Huile d\'olive, Sel, Poivre',
    `Couper panais, carottes et pommes de terre en petits dés, les cuire 15 minutes à couvert dans l'huile.
     Ajouter le poireau émincé et le thym, poursuivre 8 minutes à découvert.
     Faire cuire les œufs au plat sur les légumes, couvrir 3 minutes.`,
  ),
  recipe(
    'Saumon à l\'unilatérale & fondue de poireaux',
    '🐟 plat poisson 25 facile 2 poele 2',
    'Pavé de saumon 2, Poireau 2, Crème fraîche 80, Beurre 15, Citron 0.5, Sel, Poivre',
    `Faire fondre les poireaux émincés 12 minutes dans le beurre, ajouter la crème, saler ; réserver.
     Cuire le saumon côté peau seulement, 7 à 8 minutes à feu moyen : le dessus doit rester nacré.
     Servir sur les poireaux avec un trait de citron.`,
  ),
  recipe(
    'Aiguillettes de poulet au paprika & poivrons',
    '🫑 plat volaille 20 facile 1 poele 2',
    'Blanc de poulet 2, Poivron 2, Oignon 1, Paprika, Crème fraîche 60, Huile d\'olive, Sel',
    `Couper le poulet en aiguillettes, les saisir 5 minutes avec le paprika.
     Ajouter oignon et poivrons émincés, cuire 8 minutes.
     Ajouter la crème, saler et laisser napper 2 minutes.`,
  ),
  recipe(
    'Fajitas de bœuf',
    '🌮 plat viande 25 facile 2 poele 2',
    'Steak de bœuf 2, Poivron 2, Oignon rouge 1, Tortilla de blé 4, Cumin, Paprika, Avocat 1, Citron vert 1, Huile de tournesol, Sel',
    `Saisir le bœuf en lanières 2 minutes à feu vif avec les épices, réserver.
     Sauter poivrons et oignon 6 minutes, remettre la viande.
     Écraser l'avocat avec le citron vert et du sel.
     Garnir les tortillas chaudes.`,
  ),
  recipe(
    'Gnocchis poêlés au pesto & tomates cerises',
    '🍅 plat vege 15 facile 1 poele 2',
    'Gnocchis 500, Pesto 60, Tomate cerise 200, Mozzarella 1, Basilic 1, Huile d\'olive',
    `Dorer les gnocchis 6 minutes dans l'huile.
     Ajouter les tomates cerises coupées en deux, 2 minutes.
     Hors du feu, mélanger avec le pesto, ajouter la mozzarella et le basilic.`,
  ),
  recipe(
    'Poêlée de chou-fleur, pois chiches & curry',
    '🥦 plat vege 25 facile 1 poele 2',
    'Chou-fleur 1, Pois chiches 1, Oignon 1, Curry, Lait de coco 150, Épinard frais 60, Coriandre 1, Huile de tournesol, Sel',
    `Faire dorer le chou-fleur en petits bouquets 8 minutes dans l'huile.
     Ajouter oignon et curry, puis pois chiches et lait de coco.
     Couvrir et cuire 8 minutes, ajouter les épinards à la fin. Parsemer de coriandre.`,
  ),
  recipe(
    'Smash burger maison',
    '🍔 plat viande 20 facile 2 poele 2',
    'Steak haché 300, Pain à burger 2, Cheddar 4, Oignon 1, Cornichons 30, Ketchup, Moutarde, Salade verte 0.25, Sel',
    `Former quatre boules de viande.
     Dans une poêle très chaude, les écraser fortement à la spatule, saler, cuire 2 minutes.
     Retourner, poser le cheddar et cuire 1 minute.
     Toaster les pains dans la poêle, monter avec deux galettes, oignon cru, cornichons et sauces.`,
  ),

  // ---------------------------------------------------------------- cuisines du monde
  recipe(
    'Poulet tikka masala',
    '🍛 plat volaille 40 moyen 2 poele 2',
    'Blanc de poulet 2, Yaourt nature 1, Garam masala, Paprika, Ail 2, Gingembre frais 15, Oignon 1, Tomates concassées 1, Crème liquide 80, Riz 150, Coriandre 1, Huile de tournesol, Sel',
    `Mariner le poulet en cubes dans le yaourt avec la moitié des épices, l'ail et le sel.
     Le saisir à feu vif pour le marquer, réserver.
     Faire fondre l'oignon avec le gingembre et le reste d'épices, ajouter les tomates et cuire 10 minutes.
     Ajouter crème et poulet, mijoter 8 minutes. Servir avec le riz et la coriandre.`,
  ),
  recipe(
    'Korma de légumes',
    '🥘 plat vege 35 facile 1 casserole 2',
    'Pomme de terre 300, Carotte 2, Petits pois surgelés 100, Chou-fleur 0.5, Oignon 1, Garam masala, Curcuma, Poudre d\'amande 30, Lait de coco 200, Riz 150, Huile de tournesol, Sel',
    `Faire revenir l'oignon avec les épices.
     Ajouter pommes de terre, carottes et chou-fleur en morceaux, lait de coco et 10 cl d'eau.
     Couvrir et cuire 20 minutes, ajouter petits pois et poudre d'amande 5 minutes.
     Saler et servir avec le riz.`,
  ),
  recipe(
    'Biryani de poulet',
    '🍚 plat volaille 60 moyen 2 casserole 4',
    'Cuisse de poulet 4, Riz 300, Oignon 2, Yaourt nature 1, Garam masala, Curcuma, Cannelle, Raisins secs 30, Amandes effilées 20, Coriandre 1, Huile de tournesol, Sel',
    `Mariner le poulet dans le yaourt, les épices et le sel.
     Faire dorer longuement les oignons émincés, en garder une partie pour la fin.
     Saisir le poulet, ajouter le riz rincé, 60 cl d'eau et les raisins.
     Couvrir et cuire 20 minutes à feu doux, laisser reposer 10 minutes.
     Servir avec oignons frits, amandes grillées et coriandre.`,
  ),
  recipe(
    'Ramen au poulet',
    '🍜 plat volaille 40 moyen 2 casserole 2',
    'Blanc de poulet 1, Nouilles chinoises 150, Bouillon cube 2, Sauce soja 40, Gingembre frais 15, Ail 2, Œuf 2, Pak choï 2, Oignon nouveau 1, Huile de sésame',
    `Porter 1 litre d'eau à frémissement avec bouillon, soja, gingembre et ail tranchés.
     Y pocher le poulet 12 minutes, le sortir et l'émincer.
     Cuire les œufs 6 minutes 30, les écaler.
     Cuire nouilles et pak choï dans le bouillon, répartir dans les bols avec poulet, œuf coupé en deux, oignon nouveau et un filet d'huile de sésame.`,
  ),
  recipe(
    'Soupe pho au bœuf',
    '🍲 plat viande 45 moyen 2 casserole 2',
    'Steak de bœuf 1, Nouilles de riz 120, Bouillon cube 2, Oignon 1, Gingembre frais 20, Badiane, Cannelle, Nuoc-mâm, Pousses de soja 80, Menthe 1, Coriandre 1, Citron vert 1',
    `Griller oignon et gingembre coupés en deux à sec dans une casserole, ajouter 1,2 litre d'eau, bouillon, badiane et cannelle.
     Laisser infuser 30 minutes à frémissement, assaisonner de nuoc-mâm.
     Réhydrater les nouilles, les répartir dans les bols avec le bœuf cru tranché très finement.
     Verser le bouillon bouillant dessus : il cuit la viande. Servir avec pousses de soja, herbes et citron vert.`,
  ),
  recipe(
    'Bibimbap au bœuf',
    '🍚 plat viande 40 moyen 2 casserole,poele 2',
    'Riz rond 150, Bœuf émincé 200, Carotte 1, Courgette 1, Épinard frais 100, Pousses de soja 80, Œuf 2, Sauce soja 30, Ail 1, Huile de sésame, Graines de sésame 10, Piment',
    `Cuire le riz.
     Mariner le bœuf dans soja, ail et huile de sésame.
     Sauter séparément carotte et courgette en julienne, épinards et pousses de soja, puis le bœuf.
     Cuire les œufs au plat.
     Disposer chaque élément en bouquets sur le riz, l'œuf au centre, sésame et piment.`,
  ),
  recipe(
    'Poulet teriyaki & riz',
    '🍗 plat volaille 25 facile 1 poele 2',
    'Cuisse de poulet 2, Sauce soja 40, Miel 25, Gingembre frais 10, Ail 1, Riz 150, Brocoli 1, Graines de sésame 10',
    `Cuire le riz et le brocoli.
     Désosser les cuisses ou les couper en morceaux, les dorer côté peau 8 minutes.
     Mélanger soja, miel, gingembre et ail râpés, verser et laisser caraméliser en retournant.
     Servir sur le riz avec le brocoli et le sésame.`,
  ),
  recipe(
    'Nouilles yakisoba au porc',
    '🍜 plat viande 25 facile 1 poele 2',
    'Nouilles chinoises 150, Échine de porc 200, Chou vert 0.25, Carotte 1, Oignon 1, Sauce Worcestershire 30, Ketchup, Sauce soja 20, Huile de tournesol',
    `Cuire les nouilles, égoutter.
     Saisir le porc en fines lanières, ajouter oignon, carotte et chou émincés.
     Ajouter les nouilles et la sauce (Worcestershire, une cuillère de ketchup, soja).
     Sauter 2 minutes à feu vif.`,
  ),
  recipe(
    'Curry vert de poulet',
    '🥥 plat volaille 30 facile 2 poele 2',
    'Blanc de poulet 2, Pâte de curry 30, Lait de coco 400, Courgette 1, Poivron 1, Basilic 1, Nuoc-mâm, Sucre, Riz 150, Citron vert 1',
    `Cuire le riz.
     Faire revenir la pâte de curry 1 minute dans un peu de lait de coco.
     Ajouter le poulet en lanières, puis le reste du lait de coco et les légumes.
     Cuire 12 minutes, assaisonner de nuoc-mâm et d'une pincée de sucre.
     Finir avec basilic et citron vert.`,
  ),
  recipe(
    'Bo bun au bœuf',
    '🥗 plat viande 30 moyen 2 poele 2',
    'Bœuf émincé 250, Nouilles de riz 120, Salade verte 0.5, Carotte 1, Concombre 0.5, Pousses de soja 80, Menthe 1, Cacahuètes 30, Nuoc-mâm, Sucre, Citron vert 1, Ail 1, Oignon 1, Huile de tournesol',
    `Réhydrater les nouilles, les rincer à l'eau froide.
     Sauce : 3 c. à s. de nuoc-mâm, 2 de sucre, le jus du citron vert et 6 c. à s. d'eau.
     Saisir le bœuf avec l'oignon et l'ail.
     Dresser salade, nouilles, carotte et concombre en julienne, pousses de soja, bœuf chaud, menthe et cacahuètes ; arroser de sauce.`,
  ),
  recipe(
    'Rouleaux de printemps aux crevettes',
    '🥬 plat poisson 30 moyen 2 sans-cuisson 2',
    'Galette de riz 8, Crevette 200, Nouilles de riz 60, Salade verte 0.5, Carotte 1, Menthe 1, Coriandre 1, Beurre de cacahuète 30, Sauce soja 20, Citron vert 1',
    `Réhydrater les nouilles à l'eau chaude, égoutter. Couper les crevettes cuites en deux dans l'épaisseur.
     Tremper une galette 5 secondes dans l'eau tiède, la poser à plat.
     Garnir de salade, nouilles, carotte râpée et herbes, rouler à moitié, poser les crevettes et finir de rouler serré.
     Sauce : beurre de cacahuète, soja, citron vert et un peu d'eau chaude.`,
  ),
  recipe(
    'Burrito bowl au bœuf',
    '🌯 plat viande 30 facile 2 poele,casserole 2',
    'Steak haché 250, Riz 150, Haricots rouges 1, Maïs en boîte 0.5, Avocat 1, Tomate 1, Cheddar 50, Citron vert 1, Cumin, Paprika, Crème fraîche 50, Coriandre 1, Sel',
    `Cuire le riz, l'assaisonner de citron vert et de coriandre.
     Faire revenir la viande avec cumin et paprika, ajouter les haricots égouttés.
     Couper avocat et tomate.
     Composer les bols : riz, viande, maïs, avocat, tomate, cheddar, crème.`,
  ),
  recipe(
    'Tacos de porc à l\'ananas',
    '🍍 plat viande 30 facile 2 poele 2',
    'Échine de porc 300, Ananas 0.25, Paprika, Cumin, Ail 1, Tortilla de blé 4, Oignon rouge 0.5, Coriandre 1, Citron vert 1, Huile de tournesol, Sel',
    `Couper le porc en fines lanières, l'assaisonner d'épices, ail et sel.
     Le saisir à feu vif 6 minutes, ajouter l'ananas en petits dés et le caraméliser 3 minutes.
     Garnir les tortillas chaudes d'oignon émincé, coriandre et citron vert.`,
  ),
  recipe(
    'Nachos gratinés au bœuf',
    '🧀 plat viande 25 facile 2 four,poele 2',
    'Tortilla de blé 4, Steak haché 200, Haricots rouges 1, Tomates concassées 0.5, Cheddar 120, Cumin, Avocat 1, Crème fraîche 50, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C. Couper les tortillas en triangles, les huiler et les cuire 8 minutes.
     Faire revenir la viande avec le cumin, ajouter haricots et tomates, 8 minutes.
     Couvrir les chips de sauce et de cheddar, gratiner 6 minutes.
     Servir avec l'avocat et la crème.`,
  ),
  recipe(
    'Moussaka',
    '🍆 plat viande 90 moyen 2 four,poele 4',
    'Aubergine 3, Steak haché 400, Oignon 1, Ail 2, Tomates concassées 1, Cannelle, Beurre 40, Farine 40, Lait 500, Parmesan 40, Huile d\'olive, Sel, Poivre',
    `Trancher les aubergines, les huiler et les rôtir 20 minutes au four à 200 °C.
     Faire revenir oignon, ail et viande, ajouter tomates et cannelle, mijoter 15 minutes.
     Préparer une béchamel avec beurre, farine et lait, ajouter le parmesan.
     Alterner aubergines et viande dans un plat, couvrir de béchamel.
     Cuire 40 minutes à 180 °C et laisser reposer avant de servir.`,
  ),
  recipe(
    'Souvlaki de porc & tzatziki',
    '🥙 plat viande 30 facile 2 poele 2',
    'Échine de porc 300, Citron 1, Origan, Ail 2, Yaourt grec 150, Concombre 0.5, Menthe 1, Pain pita 2, Tomate 1, Oignon rouge 0.5, Huile d\'olive, Sel',
    `Mariner le porc en cubes avec citron, origan, ail, huile et sel.
     Tzatziki : concombre râpé et pressé, yaourt, ail, menthe, sel.
     Saisir les morceaux 8 minutes à la poêle bien chaude.
     Servir dans les pitas avec tomate, oignon et tzatziki.`,
  ),
  recipe(
    'Kebab maison au poulet',
    '🥙 plat volaille 35 facile 1 four 2',
    'Cuisse de poulet 3, Yaourt nature 1, Paprika, Cumin, Ail 1, Pain pita 2, Salade verte 0.25, Tomate 1, Oignon rouge 0.5, Mayonnaise, Frites surgelées 300, Sel',
    `Désosser les cuisses, les mariner dans le yaourt avec épices, ail et sel.
     Les rôtir 25 minutes au four à 220 °C avec les frites, puis les émincer finement.
     Mélanger mayonnaise et un peu de yaourt pour la sauce blanche.
     Garnir les pitas de poulet, crudités et sauce.`,
  ),
  recipe(
    'Tajine d\'agneau aux pruneaux',
    '🍑 plat viande 120 moyen 3 casserole 4',
    'Épaule d\'agneau 800, Pruneaux 150, Oignon 2, Miel 20, Cannelle, Ras el hanout, Amandes effilées 30, Semoule 300, Huile d\'olive, Sel',
    `Dorer l'agneau en morceaux dans l'huile avec les oignons.
     Ajouter épices, sel et 40 cl d'eau, couvrir et cuire 1 h 30 à feu doux.
     Ajouter pruneaux et miel, 15 minutes à découvert.
     Servir avec la semoule et les amandes grillées.`,
  ),
  recipe(
    'Couscous de légumes',
    '🥕 plat vege 50 facile 1 casserole 4',
    'Carotte 3, Courgette 2, Navet 2, Oignon 1, Pois chiches 1, Concentré de tomate 30, Ras el hanout, Raisins secs 30, Semoule 300, Beurre 20, Harissa, Huile d\'olive, Sel',
    `Faire revenir l'oignon, ajouter concentré et épices.
     Ajouter carottes et navets, couvrir d'1,5 litre d'eau, cuire 25 minutes.
     Ajouter courgettes, pois chiches et raisins, 15 minutes ; saler.
     Servir avec la semoule beurrée et la harissa.`,
  ),
  recipe(
    'Risotto au poulet & petits pois',
    '🍚 plat volaille 35 moyen 2 casserole 2',
    'Riz arborio 160, Blanc de poulet 1, Petits pois surgelés 120, Oignon 1, Vin blanc 80, Bouillon cube 1, Parmesan 40, Beurre 25, Sel, Poivre',
    `Dorer le poulet en dés dans un peu de beurre, réserver.
     Faire suer l'oignon, nacrer le riz, déglacer au vin.
     Ajouter 75 cl de bouillon chaud louche par louche en remuant, 18 minutes ; petits pois et poulet les 5 dernières minutes.
     Hors du feu, ajouter beurre et parmesan.`,
  ),
  recipe(
    'Pâtes alla norma',
    '🍆 plat vege 30 facile 1 poele,casserole 2',
    'Penne 200, Aubergine 1, Tomates concassées 1, Ail 1, Basilic 1, Ricotta 60, Huile d\'olive, Sel',
    `Dorer l'aubergine en cubes dans l'huile, saler.
     Ajouter l'ail et les tomates, mijoter 10 minutes.
     Mélanger avec les pâtes cuites, servir avec ricotta et basilic.`,
  ),
  recipe(
    'Saltimbocca de dinde',
    '🍃 plat volaille 25 facile 2 poele 2',
    'Escalope de dinde 2, Jambon cru 2, Vin blanc 50, Beurre 20, Pomme de terre 400, Huile d\'olive, Sel, Poivre',
    `Faire sauter les pommes de terre en dés à couvert 20 minutes dans l'huile, saler.
     Couvrir chaque escalope d'une tranche de jambon cru, maintenir avec un pique.
     Les dorer 2 minutes par face dans le beurre, déglacer au vin blanc, laisser réduire 1 minute.`,
  ),
  recipe(
    'Minestrone',
    '🥣 plat vege 45 facile 1 casserole 4',
    'Carotte 2, Courgette 1, Céleri 1, Oignon 1, Haricots blancs 1, Tomates concassées 1, Coquillettes 80, Bouillon cube 1, Pesto 40, Parmesan 30, Huile d\'olive, Sel',
    `Faire revenir oignon, carotte et céleri en dés.
     Ajouter tomates, 1,2 litre d'eau et le bouillon, cuire 15 minutes.
     Ajouter courgette, haricots et pâtes, 12 minutes de plus.
     Servir avec une cuillère de pesto et du parmesan.`,
  ),
  recipe(
    'Lasagnes épinards & ricotta',
    '🥬 plat vege 70 moyen 2 four 4',
    'Feuilles de lasagne 250, Épinards surgelés 500, Ricotta 250, Mozzarella 1, Coulis de tomate 400, Parmesan 50, Ail 1, Muscade, Sel, Poivre',
    `Préchauffer le four à 180 °C. Faire décongeler et presser les épinards.
     Les mélanger à la ricotta, l'ail, la muscade, sel et poivre.
     Alterner coulis, feuilles et farce, finir par coulis, mozzarella et parmesan.
     Cuire 40 minutes.`,
  ),
  recipe(
    'Pizza quatre fromages',
    '🍕 plat vege 25 facile 2 four 2',
    'Pâte à pizza 1, Crème fraîche 60, Mozzarella 1, Roquefort 40, Bûche de chèvre 50, Parmesan 20, Origan',
    `Préchauffer le four au maximum avec la plaque.
     Étaler la pâte, la couvrir de crème.
     Répartir les quatre fromages et l'origan.
     Cuire 10 à 12 minutes.`,
  ),
  recipe(
    'Patatas bravas & chorizo',
    '🌶️ plat viande 35 facile 1 four,airfryer 2',
    'Pomme de terre 600, Chorizo 80, Coulis de tomate 150, Paprika, Piment, Ail 1, Mayonnaise, Huile d\'olive, Sel',
    `Couper les pommes de terre en cubes, les enrober d'huile, paprika et sel.
     Les rôtir 30 minutes au four à 220 °C (20 minutes à l'airfryer à 200 °C), ajouter le chorizo les 5 dernières minutes.
     Sauce : coulis réduit 5 minutes avec ail, paprika et piment.
     Servir avec la sauce tomate et une mayonnaise à l'ail.`,
  ),
  recipe(
    'Goulash de bœuf',
    '🥘 plat viande 120 moyen 2 casserole 4',
    'Bœuf à braiser 800, Oignon 3, Poivron 1, Paprika, Cumin, Concentré de tomate 30, Pomme de terre 500, Bouillon cube 1, Crème fraîche 50, Huile de tournesol, Sel',
    `Faire dorer la viande en cubes, réserver.
     Faire fondre longuement les oignons, ajouter paprika, cumin et concentré.
     Remettre la viande, mouiller de 75 cl de bouillon, couvrir et cuire 1 h 30.
     Ajouter poivron et pommes de terre en cubes, 25 minutes. Servir avec la crème.`,
  ),
  recipe(
    'Choucroute garnie',
    '🥬 plat viande 75 facile 2 casserole 4',
    'Choucroute crue 1000, Saucisse de Strasbourg 4, Saucisse de Morteau 1, Lardons fumés 200, Pomme de terre 800, Oignon 1, Vin blanc 200, Laurier, Baies de genièvre, Beurre 20',
    `Rincer et presser la choucroute.
     Faire revenir l'oignon dans le beurre, ajouter choucroute, lardons, Morteau, vin, laurier et genièvre.
     Couvrir et cuire 45 minutes à feu doux.
     Ajouter les pommes de terre épluchées, 25 minutes, puis les saucisses de Strasbourg les 10 dernières minutes.`,
  ),
  recipe(
    'Curry de poisson au lait de coco',
    '🐟 plat poisson 25 facile 2 poele 2',
    'Cabillaud 300, Lait de coco 250, Tomate 2, Oignon 1, Ail 1, Gingembre frais 10, Curry, Curcuma, Riz 150, Coriandre 1, Citron vert 1, Huile de tournesol, Sel',
    `Cuire le riz.
     Faire revenir oignon, ail, gingembre et épices.
     Ajouter tomates en dés et lait de coco, laisser réduire 8 minutes, saler.
     Déposer le poisson en gros morceaux, couvrir 6 minutes.
     Finir avec citron vert et coriandre.`,
  ),
  recipe(
    'Poulet yassa',
    '🍋 plat volaille 60 moyen 1 casserole 4',
    'Cuisse de poulet 4, Oignon 5, Citron 3, Moutarde 40, Ail 2, Bouillon cube 1, Olives vertes 50, Riz 300, Huile de tournesol, Sel, Poivre',
    `Mariner le poulet au moins 30 minutes avec les oignons émincés, jus de citron, moutarde, ail, sel et poivre.
     Dorer les cuisses égouttées, réserver.
     Faire fondre les oignons de la marinade 15 minutes jusqu'à ce qu'ils soient bien tendres.
     Remettre le poulet, la marinade, 20 cl de bouillon et les olives ; cuire 25 minutes. Servir avec le riz.`,
  ),
  recipe(
    'Rougail saucisses',
    '🌶️ plat viande 50 facile 1 casserole 4',
    'Saucisse 6, Tomate 5, Oignon 2, Ail 2, Gingembre frais 15, Curcuma, Piment, Riz 300, Huile de tournesol, Sel',
    `Piquer les saucisses et les blanchir 5 minutes à l'eau bouillante, puis les couper en rondelles.
     Les faire dorer dans l'huile, ajouter oignons, ail et gingembre.
     Ajouter tomates en dés, curcuma et piment, couvrir et mijoter 30 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Jambalaya au poulet & chorizo',
    '🍤 plat volaille 45 moyen 2 casserole 4',
    'Blanc de poulet 2, Chorizo 100, Crevette 200, Riz 300, Poivron 1, Oignon 1, Céleri 1, Tomates concassées 1, Paprika, Bouillon cube 1, Huile d\'olive, Sel',
    `Dorer poulet en cubes et chorizo, réserver.
     Faire revenir oignon, poivron et céleri, ajouter riz et paprika.
     Ajouter tomates et 60 cl de bouillon, remettre la viande, couvrir et cuire 18 minutes.
     Ajouter les crevettes 5 minutes avant la fin.`,
  ),

  // ---------------------------------------------------------------- mijotés & saison
  recipe(
    'Blanquette de poulet',
    '🍲 plat volaille 50 moyen 2 casserole 4',
    'Blanc de poulet 4, Carotte 3, Champignon de Paris 250, Oignon 1, Bouillon cube 1, Beurre 30, Farine 30, Crème fraîche 150, Citron 0.5, Riz 300, Sel',
    `Pocher le poulet en morceaux 25 minutes dans 1 litre de bouillon avec carottes et oignon.
     Faire sauter les champignons à part.
     Roux : beurre et farine, mouiller avec 50 cl du bouillon en fouettant.
     Ajouter crème, champignons, poulet et carottes ; finir avec un trait de citron. Servir avec le riz.`,
  ),
  recipe(
    'Navarin d\'agneau aux légumes',
    '🐑 plat viande 100 moyen 3 casserole 4',
    'Épaule d\'agneau 800, Carotte 3, Navet 3, Pomme de terre 500, Oignon 2, Concentré de tomate 30, Farine 20, Bouillon cube 1, Thym, Laurier, Petits pois surgelés 150, Huile d\'olive, Sel',
    `Dorer l'agneau en morceaux, ajouter oignons, saupoudrer de farine et ajouter le concentré.
     Mouiller de bouillon à hauteur, thym et laurier, cuire 50 minutes à couvert.
     Ajouter carottes, navets et pommes de terre, 30 minutes.
     Ajouter les petits pois 10 minutes avant la fin.`,
  ),
  recipe(
    'Pot-au-feu',
    '🥩 plat viande 210 facile 2 casserole 6',
    'Bœuf à braiser 1200, Carotte 6, Poireau 3, Navet 4, Pomme de terre 800, Oignon 1, Clou de girofle, Laurier, Thym, Sel, Moutarde, Cornichons 50',
    `Mettre la viande dans une grande marmite d'eau froide, porter à ébullition et écumer.
     Ajouter l'oignon piqué de girofle, laurier, thym et gros sel, cuire 2 heures à frémissement.
     Ajouter carottes, poireaux et navets, 45 minutes.
     Cuire les pommes de terre à part dans un peu de bouillon. Servir avec moutarde, cornichons et gros sel.`,
  ),
  recipe(
    'Potée au chou',
    '🥬 plat viande 120 facile 1 casserole 6',
    'Chou vert 1, Lardons fumés 250, Saucisse de Morteau 1, Saucisse 4, Carotte 4, Navet 3, Pomme de terre 800, Oignon 1, Laurier, Thym, Poivre',
    `Blanchir le chou en quartiers 5 minutes.
     Dans une grande cocotte, mettre lardons, Morteau, oignon, chou, laurier et thym, couvrir d'eau.
     Cuire 1 heure, ajouter carottes et navets, puis 20 minutes après les pommes de terre et les saucisses.
     Poursuivre 30 minutes et poivrer.`,
  ),
  recipe(
    'Carbonade flamande',
    '🍺 plat viande 180 moyen 2 casserole 4',
    'Bœuf à braiser 800, Oignon 3, Bière 500, Pain d\'épices 2, Moutarde, Sucre roux 15, Thym, Laurier, Frites surgelées 600, Beurre 20, Sel, Poivre',
    `Dorer la viande en morceaux dans le beurre, réserver.
     Faire fondre les oignons émincés avec le sucre.
     Remettre la viande, verser la bière, ajouter thym et laurier, et le pain d'épices tartiné de moutarde.
     Couvrir et mijoter 2 h 30 à feu très doux. Servir avec les frites.`,
  ),
  recipe(
    'Poulet au cidre & aux pommes',
    '🍏 plat volaille 50 facile 2 casserole 4',
    'Cuisse de poulet 4, Cidre 400, Pomme 3, Échalote 2, Crème fraîche 100, Beurre 30, Thym, Pomme de terre 800, Sel, Poivre',
    `Dorer les cuisses dans le beurre avec les échalotes.
     Verser le cidre, ajouter thym, sel et poivre, couvrir et cuire 30 minutes.
     Dorer les pommes en quartiers dans un peu de beurre.
     Ajouter la crème à la sauce, servir avec les pommes et les pommes de terre vapeur.`,
  ),
  recipe(
    'Parmentier de poisson',
    '🐟 plat poisson 50 facile 2 casserole,four 4',
    'Cabillaud 500, Pomme de terre 1000, Lait 400, Beurre 40, Épinards surgelés 300, Gruyère râpé 60, Muscade, Sel, Poivre',
    `Cuire les pommes de terre, les écraser avec le beurre et 20 cl de lait chaud.
     Pocher le poisson 6 minutes dans le reste du lait, l'émietter.
     Préchauffer le four à 200 °C, étaler épinards égouttés et poisson, couvrir de purée et de gruyère.
     Gratiner 20 minutes.`,
  ),
  recipe(
    'Gratin de poireaux au jambon',
    '🧄 plat viande 45 facile 1 casserole,four 2',
    'Poireau 4, Jambon blanc 4, Beurre 30, Farine 30, Lait 400, Gruyère râpé 60, Muscade, Sel, Poivre',
    `Cuire les blancs de poireaux 15 minutes à l'eau salée, bien égoutter.
     Les rouler dans le jambon et les serrer dans un plat.
     Napper de béchamel muscadée et de gruyère.
     Gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Gratin de butternut au chèvre',
    '🎃 plat vege 55 facile 1 four 4',
    'Courge butternut 1, Bûche de chèvre 150, Crème liquide 200, Ail 1, Noix 30, Thym, Sel, Poivre',
    `Préchauffer le four à 190 °C.
     Éplucher la butternut et la couper en fines tranches.
     Les disposer dans un plat, verser la crème à l'ail, saler, poivrer, ajouter le thym.
     Couvrir de rondelles de chèvre et de noix, cuire 40 minutes.`,
  ),
  recipe(
    'Velouté de butternut au lait de coco',
    '🥥 plat vege 35 facile 1 casserole 2',
    'Courge butternut 1, Oignon 1, Lait de coco 200, Gingembre frais 10, Curry, Bouillon cube 1, Coriandre 1, Sel',
    `Faire revenir l'oignon et le gingembre, ajouter le curry.
     Ajouter la courge en cubes et couvrir de bouillon, cuire 25 minutes.
     Mixer avec le lait de coco, saler. Servir avec la coriandre.`,
  ),
  recipe(
    'Soupe de légumes d\'hiver',
    '🥣 plat vege 45 facile 1 casserole 4',
    'Carotte 3, Poireau 1, Navet 2, Céleri-rave 0.5, Pomme de terre 300, Oignon 1, Bouillon cube 1, Crème fraîche 50, Sel, Poivre',
    `Éplucher et couper tous les légumes en morceaux.
     Les faire revenir 5 minutes, couvrir de 1,5 litre d'eau avec le bouillon.
     Cuire 35 minutes, mixer et ajouter la crème.`,
  ),
  recipe(
    'Tarte aux poireaux',
    '🥧 plat vege 50 facile 1 four 4',
    'Pâte brisée 1, Poireau 3, Œuf 3, Crème fraîche 200, Comté 80, Beurre 20, Muscade, Sel, Poivre',
    `Préchauffer le four à 180 °C et foncer le moule.
     Faire fondre les poireaux émincés 15 minutes dans le beurre.
     Battre œufs et crème avec muscade, sel et poivre.
     Garnir la pâte de poireaux, verser l'appareil, parsemer de comté et cuire 35 minutes.`,
  ),
  recipe(
    'Quiche aux légumes du soleil',
    '🥧 plat vege 55 facile 1 four 4',
    'Pâte brisée 1, Courgette 1, Poivron 1, Tomate cerise 150, Œuf 3, Crème fraîche 200, Feta 80, Herbes de Provence, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 180 °C et foncer le moule.
     Faire revenir courgette et poivron en dés 8 minutes.
     Battre œufs, crème, herbes, sel et poivre.
     Répartir légumes, tomates et feta sur la pâte, verser l'appareil et cuire 35 minutes.`,
  ),
  recipe(
    'Salade de pâtes méditerranéenne',
    '🥗 plat vege 20 facile 1 casserole 2',
    'Penne 180, Tomate cerise 200, Concombre 0.5, Olives noires 40, Feta 100, Tomates séchées 40, Basilic 1, Vinaigre balsamique, Huile d\'olive, Sel',
    `Cuire les pâtes, les rincer à l'eau froide.
     Couper tomates, concombre, tomates séchées.
     Mélanger le tout avec olives, feta en dés, basilic, huile et balsamique.`,
  ),
  recipe(
    'Salade de riz au thon',
    '🥗 plat poisson 25 facile 1 casserole 2',
    'Riz 150, Thon en boîte 1, Maïs en boîte 0.5, Tomate 2, Œuf 2, Poivron 0.5, Olives vertes 30, Mayonnaise, Vinaigre de vin, Huile d\'olive, Sel',
    `Cuire le riz et les œufs durs, laisser refroidir.
     Couper tomates, poivron et œufs.
     Mélanger avec thon, maïs, olives, une vinaigrette et une cuillère de mayonnaise.`,
  ),
  recipe(
    'Salade de quinoa, avocat & crevettes',
    '🥑 plat poisson 25 facile 2 casserole 2',
    'Quinoa 120, Crevette 200, Avocat 1, Tomate cerise 150, Maïs en boîte 0.5, Coriandre 1, Citron vert 1, Huile d\'olive, Sel',
    `Cuire le quinoa 12 minutes, le laisser tiédir.
     Mélanger avec crevettes cuites, avocat en dés, tomates, maïs et coriandre.
     Assaisonner de citron vert, huile et sel.`,
  ),
  recipe(
    'Asperges vertes, œuf mollet & parmesan',
    '🌱 plat vege 20 facile 2 casserole 2',
    'Asperge verte 2, Œuf 4, Parmesan 30, Pain de campagne 2, Beurre 10, Huile d\'olive, Sel, Poivre',
    `Cuire les asperges 6 minutes à l'eau salée, elles doivent rester croquantes.
     Cuire les œufs 6 minutes, les rafraîchir et les écaler.
     Disposer asperges, œufs ouverts, copeaux de parmesan, huile et poivre.
     Servir avec le pain grillé beurré pour tremper.`,
  ),
  recipe(
    'Melon, jambon cru & mozzarella',
    '🍈 plat viande 10 facile 2 sans-cuisson 2',
    'Melon 1, Jambon cru 4, Mozzarella 1, Roquette 40, Basilic 1, Huile d\'olive, Poivre',
    `Couper le melon en tranches et retirer la peau.
     Disposer avec le jambon, la mozzarella déchirée et la roquette.
     Arroser d'huile, poivrer et parsemer de basilic.`,
  ),
  recipe(
    'Salade caprese',
    '🍅 plat vege 10 facile 2 sans-cuisson 2',
    'Tomate 4, Mozzarella 2, Basilic 1, Vinaigre balsamique, Huile d\'olive, Sel, Poivre, Pain de campagne 2',
    `Couper tomates et mozzarella en tranches.
     Les alterner sur le plat avec les feuilles de basilic.
     Assaisonner d'huile, d'un trait de balsamique, sel et poivre. Servir avec le pain.`,
  ),
  recipe(
    'Tian de légumes',
    '🍅 plat vege 60 facile 1 four 4',
    'Courgette 2, Tomate 4, Aubergine 1, Oignon 1, Ail 2, Thym, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 180 °C. Faire fondre l'oignon émincé et l'étaler au fond d'un plat.
     Trancher finement les légumes et les disposer debout en les alternant.
     Ajouter ail, thym, sel, poivre et un bon filet d'huile.
     Cuire 50 minutes.`,
  ),
  recipe(
    'Brandade de cabillaud',
    '🐟 plat poisson 50 facile 2 casserole,four 4',
    'Cabillaud 500, Pomme de terre 800, Lait 300, Ail 2, Huile d\'olive 80, Persil 1, Chapelure 20, Sel, Poivre',
    `Pocher le poisson 8 minutes dans le lait avec l'ail.
     Cuire les pommes de terre et les écraser avec le lait de cuisson et l'huile.
     Mélanger avec le poisson émietté et le persil, saler, poivrer.
     Mettre dans un plat, parsemer de chapelure et gratiner 15 minutes à 200 °C.`,
  ),
  recipe(
    'Colin pané & purée de carottes',
    '🐟 plat poisson 30 facile 1 poele,casserole 2',
    'Filet de colin 300, Farine 30, Œuf 1, Chapelure 50, Carotte 5, Pomme de terre 200, Beurre 30, Cumin, Huile de tournesol, Sel',
    `Cuire carottes et pomme de terre en morceaux 20 minutes, mixer avec le beurre et une pincée de cumin.
     Paner le poisson : farine, œuf, chapelure.
     Le dorer 3 minutes par face dans l'huile.`,
  ),

  // ---------------------------------------------------------------- express
  recipe(
    'Wrap thon & crudités',
    '🌯 plat poisson 10 facile 1 sans-cuisson 2',
    'Tortilla de blé 2, Thon en boîte 1, Fromage frais 60, Carotte 1, Salade verte 0.25, Concombre 0.5, Citron 0.5, Poivre',
    `Mélanger le thon égoutté avec le fromage frais, citron et poivre.
     Râper la carotte, émincer salade et concombre.
     Garnir les tortillas et les rouler serré.`,
  ),
  recipe(
    'Pâtes au citron & parmesan',
    '🍋 plat vege 15 facile 1 casserole 2',
    'Spaghetti 200, Citron 1, Parmesan 50, Beurre 30, Poivre, Sel',
    `Cuire les spaghetti dans l'eau salée.
     Faire fondre le beurre avec le zeste du citron.
     Mélanger les pâtes avec le beurre, le jus de citron, le parmesan et un peu d'eau de cuisson jusqu'à ce que ce soit crémeux. Poivrer.`,
  ),
  recipe(
    'Tartines chèvre, miel & noix',
    '🍯 plat vege 15 facile 1 four,airfryer 2',
    'Pain de campagne 4, Bûche de chèvre 120, Miel 20, Noix 30, Thym, Roquette 50, Huile d\'olive',
    `Poser des rondelles de chèvre sur les tranches de pain, ajouter thym et un filet de miel.
     Cuire 6 minutes à 200 °C au four ou à 180 °C à l'airfryer.
     Servir avec la roquette, les noix et un filet d'huile.`,
  ),
  recipe(
    'Riz sauté aux crevettes & ananas',
    '🍍 plat poisson 20 facile 2 poele 2',
    'Riz 150, Crevette 200, Ananas 0.25, Œuf 2, Oignon nouveau 1, Petits pois surgelés 80, Sauce soja 30, Noix de cajou 30, Huile de tournesol',
    `Utiliser du riz cuit et refroidi (la veille, idéalement).
     Brouiller les œufs dans l'huile, réserver.
     Sauter crevettes, ananas en dés et petits pois 3 minutes, ajouter le riz et le soja.
     Remettre les œufs, ajouter oignon nouveau et noix de cajou.`,
  ),
]
