import { recipe } from './dsl'

/** Lot 14 : dernier lot varié — sportif, airfryer, végé, poisson, cocottes. */
export const PLATS_14 = [
  // ---------------------------------------------------------------- sportif
  recipe(
    'Poulet mariné citron-paprika, quinoa & courgettes',
    '💪 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Blanc de poulet 2, Citron 1, Paprika, Quinoa 160, Courgette 2, Yaourt grec 80, Ail 1, Huile d\'olive, Sel',
    `Mariner le poulet en lanières avec citron, paprika, ail et huile.
     Cuire le quinoa 12 minutes.
     Saisir le poulet, puis les courgettes en demi-rondelles.
     Servir avec le yaourt.`,
  ),
  recipe(
    'Steak haché, purée de patate douce & brocoli',
    '🥩 plat viande 30 facile 1 poele,casserole 2 fit',
    'Steak haché 350, Patate douce 2, Brocoli 1, Lait 50, Sel, Poivre',
    `Cuire patates douces et brocoli, écraser les patates avec le lait.
     Cuire les steaks 3 minutes par face.
     Servir avec le brocoli.`,
  ),
  recipe(
    'Bowl thon, quinoa, œuf & avocat',
    '🥑 plat poisson 20 facile 1 casserole 2 fit',
    'Thon en boîte 1, Quinoa 140, Œuf 2, Avocat 1, Tomate cerise 150, Épinard frais 60, Citron 1, Huile d\'olive, Sel',
    `Cuire le quinoa et les œufs 7 minutes.
     Composer les bols avec épinards, tomates, avocat et thon.
     Ajouter les œufs coupés, citron et huile.`,
  ),
  recipe(
    'Dinde sautée aux légumes & riz complet',
    '🦃 plat volaille 25 facile 1 poele,casserole 2 fit',
    'Escalope de dinde 2, Riz 160, Poivron 1, Courgette 1, Carotte 1, Sauce soja 30, Gingembre frais 10, Huile de tournesol',
    `Cuire le riz.
     Saisir la dinde en lanières, ajouter les légumes en julienne et le gingembre.
     Arroser de soja et servir sur le riz.`,
  ),
  recipe(
    'Crevettes, patate douce rôtie & haricots rouges',
    '🦐 plat poisson 30 facile 2 four,poele 2 fit',
    'Crevette 350, Patate douce 2, Haricots rouges 1, Avocat 1, Citron vert 1, Paprika, Cumin, Huile d\'olive, Sel',
    `Rôtir la patate douce en cubes 25 minutes à 210 °C avec paprika et cumin.
     Saisir les crevettes 3 minutes.
     Assembler avec haricots, avocat et citron vert.`,
  ),
  recipe(
    'Œufs, lentilles & légumes verts',
    '🥚 plat vege 30 facile 1 casserole 2 fit',
    'Lentilles 160, Œuf 4, Brocoli 1, Haricot vert 150, Moutarde, Vinaigre de cidre, Huile d\'olive, Sel',
    `Cuire les lentilles 20 minutes, les légumes verts 6 minutes, les œufs 7 minutes.
     Assaisonner les lentilles d'une vinaigrette moutardée.
     Servir avec légumes et œufs.`,
  ),
  recipe(
    'Saumon, boulgour & concombre au yaourt',
    '🐟 plat poisson 25 facile 2 poele,casserole 2 fit',
    'Pavé de saumon 2, Boulgour 150, Concombre 1, Yaourt grec 120, Menthe 1, Citron 1, Sel',
    `Cuire le boulgour.
     Cuire le saumon côté peau 7 minutes.
     Mélanger concombre râpé, yaourt, menthe et citron.`,
  ),
  recipe(
    'Bœuf, haricots verts & pommes de terre vapeur',
    '🥩 plat viande 25 facile 2 poele,casserole 2 fit',
    'Steak de bœuf 2, Pomme de terre 500, Haricot vert 300, Ail 1, Persil 1, Huile d\'olive, Sel',
    `Cuire pommes de terre et haricots verts.
     Saisir les steaks 2 à 3 minutes par face.
     Faire sauter les haricots avec ail et persil.`,
  ),

  // ---------------------------------------------------------------- airfryer
  recipe(
    'Chipolatas & légumes rôtis à l\'airfryer',
    '🌭 plat viande 25 facile 1 airfryer 2',
    'Chipolata 6, Courgette 1, Poivron 1, Oignon rouge 1, Herbes de Provence, Semoule 120, Huile d\'olive, Sel',
    `Enrober les légumes d'huile et d'herbes, cuire 10 minutes à 200 °C.
     Ajouter les chipolatas, poursuivre 12 minutes.
     Servir avec la semoule.`,
  ),
  recipe(
    'Pommes de terre rôties au paprika & œufs mollets',
    '🥔 plat vege 30 facile 1 airfryer,casserole 2',
    'Pomme de terre 500, Paprika, Œuf 4, Yaourt grec 80, Ciboulette 1, Huile d\'olive, Sel',
    `Rôtir les pommes de terre en dés au paprika 20 minutes à 200 °C.
     Cuire les œufs 6 minutes.
     Servir avec le yaourt à la ciboulette.`,
  ),
  recipe(
    'Cabillaud & légumes méditerranéens à l\'airfryer',
    '🐟 plat poisson 25 facile 2 airfryer 2',
    'Cabillaud 350, Courgette 1, Tomate cerise 150, Olives noires 30, Citron 1, Origan, Huile d\'olive, Sel',
    `Couper la courgette en demi-rondelles, l'enrober d'huile et de sel avec les tomates cerises.
     Cuire 8 minutes à 200 °C à l'airfryer.
     Ajouter le poisson avec olives, origan, un filet d'huile et des rondelles de citron, poursuivre 9 minutes.`,
  ),
  recipe(
    'Wings de chou-fleur à l\'airfryer',
    '🥦 plat vege 30 facile 1 airfryer 2',
    'Chou-fleur 1, Farine 60, Paprika, Sauce barbecue 60, Yaourt grec 100, Pain pita 2, Sel',
    `Délayer farine, paprika, sel et 8 cl d'eau, enrober les bouquets de chou-fleur.
     Cuire 18 minutes à 200 °C.
     Les enrober de sauce barbecue et remettre 3 minutes ; servir avec yaourt et pitas.`,
  ),
  recipe(
    'Côtes de porc & pommes à l\'airfryer',
    '🍎 plat viande 30 facile 1 airfryer 2',
    'Côte de porc 2, Pomme 2, Thym, Moutarde, Pomme de terre 300, Huile d\'olive, Sel',
    `Cuire les pommes de terre en dés huilées 10 minutes à 200 °C.
     Ajouter les côtes badigeonnées de moutarde et les pommes en quartiers.
     Poursuivre 14 minutes en retournant.`,
  ),
  recipe(
    'Mini-pizzas pita à l\'airfryer',
    '🍕 plat vege 15 facile 1 airfryer 2',
    'Pain pita 2, Coulis de tomate 80, Mozzarella 1, Champignon de Paris 60, Olives noires 20, Roquette 30, Origan',
    `Garnir les pitas de coulis, mozzarella, champignons, olives et origan.
     Cuire 7 minutes à 190 °C.
     Ajouter la roquette.`,
  ),

  // ---------------------------------------------------------------- végé
  recipe(
    'Curry de lentilles & épinards au lait de coco',
    '🍛 plat vege 30 facile 1 casserole 2',
    'Lentilles 150, Lait de coco 200, Épinards surgelés 200, Tomates concassées 1, Oignon 1, Curry, Riz 150, Sel',
    `Faire revenir oignon et curry.
     Ajouter lentilles, tomates, lait de coco et 40 cl d'eau, cuire 25 minutes.
     Ajouter les épinards, servir avec le riz.`,
  ),
  recipe(
    'Pâtes aux légumes rôtis & feta',
    '🍝 plat vege 35 facile 1 four,casserole 2',
    'Penne 200, Courgette 1, Poivron 1, Tomate cerise 150, Oignon rouge 1, Feta 100, Basilic 1, Huile d\'olive, Sel',
    `Rôtir les légumes 25 minutes à 210 °C avec la feta entière au milieu.
     Cuire les pâtes.
     Écraser la feta fondue avec les légumes, mélanger aux pâtes et au basilic.`,
  ),
  recipe(
    'Omelette aux légumes du jardin',
    '🍳 plat vege 20 facile 1 poele 2',
    'Œuf 5, Courgette 1, Tomate 1, Oignon nouveau 1, Fromage frais 40, Salade verte 0.5, Huile d\'olive, Sel',
    `Faire revenir courgette, tomate et oignon nouveau.
     Verser les œufs battus, ajouter le fromage frais.
     Cuire à couvert à feu doux, servir avec la salade.`,
  ),
  recipe(
    'Galettes de pois chiches & salade de tomates',
    '🧆 plat vege 30 facile 1 poele 2',
    'Pois chiches 1, Farine 30, Œuf 1, Cumin, Persil 1, Tomate 3, Oignon rouge 0.5, Yaourt grec 80, Huile d\'olive, Sel',
    `Écraser les pois chiches avec farine, œuf, cumin, persil et sel.
     Cuire des galettes 4 minutes par face.
     Servir avec la salade de tomates et le yaourt.`,
  ),
  recipe(
    'Risotto de petit pois, menthe & citron',
    '🫛 plat vege 30 moyen 1 casserole 2',
    'Riz arborio 160, Petits pois surgelés 200, Oignon 1, Bouillon cube 1, Menthe 1, Citron 1, Parmesan 30, Beurre 15',
    `Faire suer l'oignon, nacrer le riz.
     Ajouter 75 cl de bouillon peu à peu, avec les petits pois à mi-cuisson, 18 minutes.
     Finir avec beurre, parmesan, menthe et zeste de citron.`,
  ),
  recipe(
    'Gratin de brocoli & pommes de terre au cheddar',
    '🥦 plat vege 45 facile 1 four 4',
    'Brocoli 1, Pomme de terre 500, Crème liquide 200, Cheddar 100, Ail 1, Sel',
    `Cuire brocoli et pommes de terre 10 minutes.
     Les disposer dans un plat, verser la crème à l'ail.
     Couvrir de cheddar et cuire 25 minutes à 200 °C.`,
  ),

  // ---------------------------------------------------------------- poissons
  recipe(
    'Papillote de saumon aux légumes & riz',
    '🐟 plat poisson 30 facile 2 four,casserole 2',
    'Pavé de saumon 2, Courgette 1, Carotte 1, Citron 1, Aneth 1, Riz 150, Huile d\'olive, Sel',
    `Cuire le riz.
     Disposer légumes en julienne et saumon sur du papier cuisson, avec citron, aneth, huile et sel.
     Fermer et cuire 18 minutes à 200 °C.`,
  ),
  recipe(
    'Crevettes à la provençale & riz',
    '🦐 plat poisson 25 facile 2 poele,casserole 2',
    'Crevette 250, Tomates concassées 1, Ail 2, Herbes de Provence, Persil 1, Riz 150, Huile d\'olive, Sel',
    `Cuire le riz.
     Faire réduire les tomates avec ail et herbes.
     Ajouter les crevettes 3 minutes et le persil.`,
  ),
  recipe(
    'Thon à la tomate & pâtes',
    '🐟 plat poisson 20 facile 1 casserole 2',
    'Spaghetti 200, Thon en boîte 1, Coulis de tomate 250, Oignon 1, Basilic 1, Huile d\'olive, Sel',
    `Faire revenir l'oignon, ajouter coulis et thon émietté.
     Mijoter 8 minutes.
     Mélanger avec les pâtes et le basilic.`,
  ),
  recipe(
    'Colin en croûte d\'herbes & purée',
    '🐟 plat poisson 30 facile 1 four,casserole 2',
    'Filet de colin 300, Chapelure 30, Persil 1, Ail 1, Beurre 20, Pomme de terre 500, Lait 120, Sel',
    `Préparer une purée.
     Couvrir le poisson d'un mélange chapelure, persil, ail et beurre fondu.
     Cuire 14 minutes à 200 °C.`,
  ),

  // ---------------------------------------------------------------- cocottes & familial
  recipe(
    'Poulet aux poivrons & chorizo en cocotte',
    '🌶️ plat volaille 50 facile 1 casserole 4',
    'Cuisse de poulet 4, Chorizo 80, Poivron 2, Oignon 1, Tomates concassées 1, Paprika, Riz 300, Huile d\'olive, Sel',
    `Dorer les cuisses et le chorizo.
     Ajouter oignon, poivrons, tomates et paprika.
     Couvrir 35 minutes et servir avec le riz.`,
  ),
  recipe(
    'Sauté de porc aux champignons & crème',
    '🍄 plat viande 40 facile 1 casserole 2',
    'Échine de porc 350, Champignon de Paris 200, Oignon 1, Vin blanc 80, Crème fraîche 80, Tagliatelles 200, Sel',
    `Dorer le porc en cubes avec l'oignon.
     Déglacer au vin, couvrir 25 minutes.
     Ajouter champignons et crème, 8 minutes ; servir avec les pâtes.`,
  ),
  recipe(
    'Bœuf aux légumes façon pot-au-feu express',
    '🥕 plat viande 60 facile 2 casserole 4',
    'Steak de bœuf 3, Carotte 3, Poireau 2, Pomme de terre 500, Navet 2, Bouillon cube 2, Moutarde, Cornichons 30',
    `Cuire les légumes 35 minutes dans 1,5 litre de bouillon.
     Pocher les steaks coupés en gros cubes 5 minutes dans le bouillon frémissant.
     Servir avec moutarde et cornichons.`,
  ),
  recipe(
    'Gratin de pâtes aux légumes & mozzarella',
    '🧀 plat vege 35 facile 1 casserole,four 4',
    'Penne 300, Courgette 1, Poivron 1, Coulis de tomate 400, Mozzarella 2, Origan',
    `Cuire les pâtes 2 minutes de moins.
     Faire revenir les légumes, ajouter le coulis.
     Mélanger avec les pâtes, couvrir de mozzarella et gratiner 15 minutes.`,
  ),
  recipe(
    'Poulet à la crème de parmesan & épinards',
    '🧀 plat volaille 25 facile 1 poele 2',
    'Blanc de poulet 2, Crème liquide 150, Parmesan 40, Épinard frais 100, Ail 1, Tagliatelles 200, Sel',
    `Cuire les pâtes.
     Dorer le poulet, ajouter ail, crème et parmesan.
     Ajouter les épinards et laisser tomber 1 minute.`,
  ),
  recipe(
    'Parmentier de poulet aux champignons',
    '🥔 plat volaille 50 facile 1 casserole,four 4',
    'Cuisse de poulet 3, Champignon de Paris 200, Oignon 1, Pomme de terre 900, Lait 200, Beurre 40, Gruyère râpé 60, Sel',
    `Pocher les cuisses 25 minutes, les effilocher.
     Faire revenir oignon et champignons, ajouter le poulet.
     Couvrir de purée et de gruyère, gratiner 20 minutes.`,
  ),
  recipe(
    'Escalopes de dinde panées au sésame & riz',
    '🦃 plat volaille 25 facile 1 poele,casserole 2',
    'Escalope de dinde 2, Œuf 1, Graines de sésame 40, Chapelure 30, Riz 150, Brocoli 1, Sauce soja 20, Huile de tournesol',
    `Cuire le riz et le brocoli.
     Paner les escalopes dans l'œuf puis le mélange sésame-chapelure.
     Les dorer 3 minutes par face, servir avec le soja.`,
  ),
  recipe(
    'Soupe de légumes au pistou & croûtons',
    '🌿 plat vege 40 facile 1 casserole 4',
    'Courgette 2, Carotte 2, Pomme de terre 300, Tomate 2, Haricots blancs 1, Pesto 50, Pain de campagne 4, Sel',
    `Cuire les légumes en dés 25 minutes dans 1,5 litre d'eau salée.
     Ajouter les haricots 5 minutes.
     Servir avec une cuillère de pesto et les croûtons.`,
  ),
  recipe(
    'Poêlée de pâtes, saucisses & légumes',
    '🌭 plat viande 25 facile 1 poele 2',
    'Penne 180, Saucisse 3, Courgette 1, Poivron 1, Coulis de tomate 200, Parmesan 20',
    `Cuire les pâtes.
     Dorer les saucisses en rondelles avec les légumes.
     Ajouter coulis et pâtes, parsemer de parmesan.`,
  ),
  recipe(
    'Riz au poulet & légumes en cocotte',
    '🍚 plat volaille 40 facile 1 casserole 4',
    'Cuisse de poulet 4, Riz 300, Carotte 2, Petits pois surgelés 150, Oignon 1, Bouillon cube 1, Curcuma, Sel',
    `Dorer les cuisses avec l'oignon.
     Ajouter riz, curcuma, carottes et 70 cl de bouillon, couvrir 20 minutes.
     Ajouter les petits pois 5 minutes avant la fin.`,
  ),
  recipe(
    'Salade de pâtes poulet-pesto & mozzarella',
    '🥗 plat volaille 20 facile 1 casserole,poele 2',
    'Penne 180, Blanc de poulet 1, Pesto 50, Mozzarella 1, Tomate cerise 200, Roquette 40',
    `Cuire les pâtes et les rafraîchir.
     Cuire et couper le poulet.
     Mélanger avec pesto, mozzarella, tomates et roquette.`,
  ),
  recipe(
    'Gratin de chou-fleur & lardons',
    '🥦 plat viande 40 facile 1 four 4',
    'Chou-fleur 1, Lardons 120, Crème liquide 200, Gruyère râpé 80, Muscade, Sel',
    `Cuire le chou-fleur 10 minutes et dorer les lardons.
     Mélanger dans un plat avec la crème muscadée.
     Couvrir de gruyère et gratiner 20 minutes.`,
  ),
  recipe(
    'Wrap saumon, avocat & quinoa',
    '🌯 plat poisson 20 facile 2 casserole 2',
    'Tortilla de blé 2, Saumon fumé 4, Avocat 1, Quinoa 60, Fromage frais 60, Roquette 30, Citron 0.5',
    `Cuire le quinoa et le laisser refroidir.
     Tartiner les tortillas de fromage frais citronné.
     Garnir de quinoa, saumon, avocat et roquette, rouler.`,
  ),
  recipe(
    'Velouté de champignons & poulet',
    '🍄 plat volaille 30 facile 1 casserole 2',
    'Champignon de Paris 300, Blanc de poulet 1, Oignon 1, Bouillon cube 1, Crème liquide 60, Persil 1',
    `Faire revenir oignon et champignons, ajouter 60 cl de bouillon, 15 minutes.
     Mixer avec la crème.
     Ajouter le poulet poché en dés et le persil.`,
  ),
  recipe(
    'Tartines de houmous, œufs & légumes croquants',
    '🥚 plat vege 15 facile 1 casserole 2',
    'Pain de campagne 4, Pois chiches 1, Citron 1, Ail 1, Œuf 3, Radis 0.5, Concombre 0.5, Cumin, Huile d\'olive, Sel',
    `Mixer pois chiches, citron, ail, cumin, huile et un peu d'eau.
     Cuire les œufs durs.
     Tartiner le pain, garnir d'œufs, radis et concombre.`,
  ),
  recipe(
    'Cuisses de poulet à la tomate & olives, semoule',
    '🫒 plat volaille 45 facile 1 casserole 2',
    'Cuisse de poulet 2, Tomates concassées 1, Olives noires 40, Oignon 1, Ail 1, Herbes de Provence, Semoule 150, Huile d\'olive, Sel',
    `Dorer les cuisses avec oignon et ail.
     Ajouter tomates, olives et herbes, couvrir 30 minutes.
     Servir avec la semoule.`,
  ),
  recipe(
    'Pâtes aux épinards, ail & parmesan',
    '🥬 plat vege 15 facile 1 casserole 2',
    'Spaghetti 200, Épinard frais 150, Ail 2, Parmesan 40, Citron 0.5, Huile d\'olive, Sel',
    `Cuire les pâtes.
     Faire chauffer l'ail dans l'huile, ajouter les épinards.
     Mélanger avec pâtes, parmesan et citron.`,
  ),
  recipe(
    'Boulettes de saumon & riz au citron',
    '🐟 plat poisson 30 facile 2 poele,casserole 2',
    'Pavé de saumon 2, Œuf 1, Chapelure 30, Aneth 1, Riz 150, Citron 1, Yaourt grec 80, Sel',
    `Cuire le riz avec le zeste de citron.
     Hacher le saumon, mélanger avec œuf, chapelure, aneth et sel ; former des boulettes.
     Les dorer 8 minutes, servir avec le yaourt citronné.`,
  ),
  recipe(
    'Fondue de poireaux, œufs mollets & pain grillé',
    '🧄 plat vege 25 facile 1 poele,casserole 2',
    'Poireau 3, Crème fraîche 60, Œuf 4, Pain de campagne 4, Beurre 15, Sel',
    `Faire fondre les poireaux émincés dans le beurre 15 minutes, ajouter la crème.
     Cuire les œufs 6 minutes.
     Servir sur le pain grillé.`,
  ),
  recipe(
    'Bœuf haché, riz & haricots verts à l\'asiatique',
    '🥢 plat viande 25 facile 1 poele 2',
    'Steak haché 300, Riz 150, Haricot vert 250, Sauce soja 30, Ail 1, Gingembre frais 10, Huile de sésame',
    `Cuire le riz.
     Saisir la viande avec ail et gingembre, ajouter les haricots coupés et un fond d'eau.
     Couvrir 6 minutes, arroser de soja et d'huile de sésame.`,
  ),
  recipe(
    'Feuilleté au chèvre, miel & noix, salade',
    '🥐 plat vege 25 facile 2 four 2',
    'Pâte feuilletée 1, Bûche de chèvre 150, Miel 20, Noix 30, Salade verte 0.5, Vinaigre balsamique, Huile d\'olive',
    `Découper la pâte en carrés, garnir de chèvre, miel et noix.
     Cuire 15 minutes à 200 °C.
     Servir avec la salade au balsamique.`,
  ),
  recipe(
    'Poulet sauté aux brocolis & noix de cajou, riz',
    '🥦 plat volaille 25 facile 2 poele 2 fit',
    'Blanc de poulet 2, Brocoli 1, Noix de cajou 30, Riz 160, Sauce soja 30, Ail 1, Gingembre frais 10, Huile de tournesol',
    `Cuire le riz.
     Saisir le poulet en dés, ajouter brocoli en petits bouquets, ail et gingembre avec un fond d'eau.
     Ajouter soja et noix de cajou grillées, servir sur le riz.`,
  ),
  recipe(
    'Galettes de sarrasin au saumon & poireaux',
    '🥞 plat poisson 25 facile 2 poele 2',
    'Galette de sarrasin 2, Pavé de saumon 1, Poireau 1, Crème fraîche 40, Beurre 10, Sel',
    `Faire fondre le poireau émincé dans le beurre, ajouter la crème.
     Cuire le saumon et l'effeuiller.
     Garnir les galettes chaudes, replier les bords et servir.`,
  ),
  recipe(
    'Tomates mozzarella rôties & pâtes au basilic',
    '🍅 plat vege 25 facile 1 four,casserole 2',
    'Tomate cerise 300, Mozzarella 1, Spaghetti 200, Basilic 1, Ail 1, Huile d\'olive, Sel',
    `Rôtir tomates cerises et ail 15 minutes à 210 °C avec huile et sel.
     Cuire les pâtes et les mélanger aux tomates éclatées.
     Ajouter mozzarella déchirée et basilic.`,
  ),
  recipe(
    'Escalopes de dinde aux champignons & purée de carottes',
    '🦃 plat volaille 30 facile 1 poele,casserole 2',
    'Escalope de dinde 2, Champignon de Paris 150, Crème fraîche 60, Carotte 4, Beurre 20, Sel',
    `Cuire les carottes et les écraser avec le beurre.
     Dorer les escalopes, réserver ; faire sauter les champignons.
     Ajouter la crème, remettre la dinde 2 minutes.`,
  ),
  recipe(
    'Soupe de patate douce, gingembre & coco',
    '🍠 plat vege 30 facile 1 casserole 2',
    'Patate douce 2, Gingembre frais 15, Oignon 1, Lait de coco 200, Bouillon cube 1, Citron vert 1, Coriandre 1',
    `Faire revenir oignon et gingembre.
     Ajouter patates douces en cubes et 60 cl de bouillon, cuire 20 minutes.
     Mixer avec le lait de coco, finir avec citron vert et coriandre.`,
  ),
  recipe(
    'Poêlée de crevettes, chorizo & riz',
    '🦐 plat poisson 25 facile 2 poele 2',
    'Crevette 200, Chorizo 60, Riz 150, Poivron 1, Petits pois surgelés 80, Paprika, Bouillon cube 1, Huile d\'olive',
    `Dorer chorizo et poivron, ajouter riz et paprika.
     Mouiller de 35 cl de bouillon, couvrir 15 minutes.
     Ajouter crevettes et petits pois, 5 minutes.`,
  ),
  recipe(
    'Clafoutis salé courgettes & lardons',
    '🥒 plat viande 40 facile 1 four 4',
    'Courgette 2, Lardons 120, Œuf 4, Farine 60, Lait 250, Gruyère râpé 60, Salade verte 1, Sel',
    `Faire revenir courgettes en rondelles et lardons.
     Fouetter œufs, farine et lait, assaisonner.
     Verser sur les légumes dans un plat, parsemer de gruyère et cuire 30 minutes à 180 °C.`,
  ),
]
