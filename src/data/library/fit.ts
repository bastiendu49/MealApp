import { recipe } from './dsl'

/**
 * Assiettes healthy pour sportif : protéine maigre en bonne quantité, féculent complet ou
 * légumineuse, légumes, bonnes graisses. Portions d'adulte actif (≈ 150 à 200 g de protéine
 * animale ou équivalent et 80 g de féculent cru par personne). Le marqueur « fit » est
 * contrôlé par test : ≥ 35 g de protéines estimées par portion, un féculent et des légumes.
 */
export const FIT = [
  // ---------------------------------------------------------------- bowls & meal prep
  recipe(
    'Bowl poulet, riz complet & brocoli',
    '💪 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Blanc de poulet 2, Riz 160, Brocoli 1, Avocat 1, Sauce soja 20, Citron 1, Graines de sésame 10, Huile d\'olive, Paprika, Sel',
    `Cuire le riz et le brocoli en petits bouquets (vapeur ou eau salée, 6 minutes).
     Assaisonner les blancs de paprika et de sel, les cuire à la poêle 6 minutes par face, puis les trancher.
     Composer les bols : riz, brocoli, poulet, avocat en lamelles.
     Arroser de soja et de citron, parsemer de sésame.`,
  ),
  recipe(
    'Meal prep poulet, patate douce & haricots verts',
    '🍱 plat volaille 40 facile 1 four,airfryer 2 fit',
    'Blanc de poulet 2, Patate douce 2, Haricot vert 300, Paprika, Ail 1, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 210 °C (ou l'airfryer à 200 °C).
     Couper les patates douces en cubes, les rôtir 25 minutes avec huile, paprika et sel (18 minutes à l'airfryer).
     Cuire le poulet assaisonné 18 minutes au four (14 à l'airfryer) et les haricots 8 minutes à l'eau.
     Répartir en boîtes : se garde 3 jours au frais.`,
  ),
  recipe(
    'Bowl bœuf haché, quinoa & légumes grillés',
    '🥗 plat viande 30 facile 1 poele,casserole 2 fit',
    'Steak haché 300, Quinoa 160, Courgette 1, Poivron 1, Oignon rouge 1, Cumin, Paprika, Yaourt grec 100, Citron 0.5, Huile d\'olive, Sel',
    `Cuire le quinoa 12 minutes à l'eau salée.
     Griller courgette, poivron et oignon en morceaux à la poêle, réserver.
     Saisir la viande avec cumin, paprika et sel.
     Composer les bols et ajouter le yaourt citronné.`,
  ),
  recipe(
    'Bowl saumon, quinoa & petits pois',
    '🐟 plat poisson 25 facile 2 poele,casserole 2 fit',
    'Pavé de saumon 2, Quinoa 160, Petits pois surgelés 150, Concombre 0.5, Avocat 1, Yaourt grec 100, Sauce soja 20, Citron vert 1, Graines de sésame 10, Sel',
    `Cuire le quinoa, ajouter les petits pois 3 minutes avant la fin.
     Cuire le saumon côté peau 6 minutes puis 2 minutes de l'autre côté.
     Mélanger yaourt, citron vert et soja pour la sauce.
     Composer les bols avec concombre, avocat, saumon effeuillé et sésame.`,
  ),
  recipe(
    'Bowl thon, riz, avocat & mangue',
    '🥑 plat poisson 15 facile 2 casserole 2 fit',
    'Thon en boîte 2, Riz 160, Avocat 1, Mangue 0.5, Concombre 0.5, Oignon nouveau 1, Sauce soja 20, Citron vert 1, Graines de sésame 10',
    `Cuire le riz et le laisser tiédir.
     Égoutter le thon, couper avocat, mangue et concombre en dés.
     Composer les bols, arroser de soja et de citron vert.
     Parsemer d'oignon nouveau et de sésame.`,
  ),
  recipe(
    'Bowl crevettes, nouilles de riz & légumes croquants',
    '🦐 plat poisson 20 facile 2 poele 2 fit',
    'Crevette 300, Nouilles de riz 140, Carotte 1, Chou rouge 0.25, Concombre 0.5, Petits pois surgelés 100, Cacahuètes 20, Sauce soja 30, Citron vert 1, Gingembre frais 10, Huile de sésame',
    `Réhydrater les nouilles, les rincer à l'eau froide.
     Saisir les crevettes 3 minutes avec le gingembre.
     Cuire les petits pois 3 minutes.
     Mélanger nouilles, crudités en julienne, crevettes, sauce soja-citron et huile de sésame ; parsemer de cacahuètes.`,
  ),
  recipe(
    'Bowl tofu croustillant, riz & légumes sautés',
    '🌱 plat vege 30 facile 1 airfryer,poele 2 fit',
    'Tofu 400, Maïzena 15, Riz 160, Brocoli 1, Poivron 1, Petits pois surgelés 100, Sauce soja 30, Graines de sésame 15, Huile de sésame, Ail 1',
    `Cuire le riz.
     Couper le tofu en cubes, l'enrober de maïzena et d'un peu d'huile, le cuire 15 minutes à 200 °C à l'airfryer.
     Sauter brocoli, poivron, petits pois et ail 6 minutes à la poêle.
     Assembler avec le soja, l'huile et les graines de sésame.`,
  ),
  recipe(
    'Bowl lentilles, œufs mollets & légumes rôtis',
    '🥚 plat vege 35 facile 1 four,casserole 2 fit',
    'Lentilles 200, Œuf 4, Carotte 2, Courgette 1, Oignon rouge 1, Épinard frais 60, Moutarde, Vinaigre de cidre, Huile d\'olive, Sel',
    `Cuire les lentilles 20 minutes.
     Rôtir carottes, courgette et oignon en morceaux 25 minutes à 210 °C avec huile et sel.
     Cuire les œufs 6 minutes, les rafraîchir et les écaler.
     Composer les bols avec les épinards et une vinaigrette moutardée.`,
  ),
  recipe(
    'Bowl dinde, boulgour & taboulé de légumes',
    '🦃 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Escalope de dinde 2, Boulgour 160, Tomate 2, Concombre 0.5, Persil 1, Menthe 1, Citron 1, Yaourt grec 100, Paprika, Huile d\'olive, Sel',
    `Cuire le boulgour, le laisser tiédir.
     Ajouter tomates et concombre en dés, herbes, citron et huile.
     Cuire la dinde au paprika 4 minutes par face, la trancher.
     Servir avec le yaourt.`,
  ),
  recipe(
    'Poke bowl poulet teriyaki',
    '🍗 plat volaille 25 facile 1 poele,casserole 2 fit',
    'Blanc de poulet 2, Riz 160, Sauce soja 30, Miel 15, Gingembre frais 10, Petits pois surgelés 100, Carotte 1, Concombre 0.5, Chou rouge 0.25, Graines de sésame 10',
    `Cuire le riz et les petits pois.
     Saisir le poulet en dés, ajouter soja, miel et gingembre râpé ; laisser laquer.
     Râper la carotte, émincer chou et concombre.
     Composer les bols et parsemer de sésame.`,
  ),
  recipe(
    'Buddha bowl pois chiches, quinoa & feta',
    '🥙 plat vege 30 facile 1 four,airfryer 2 fit',
    'Pois chiches 2, Quinoa 140, Feta 100, Patate douce 1, Épinard frais 60, Tomate cerise 150, Cumin, Paprika, Citron 1, Huile d\'olive, Sel',
    `Cuire le quinoa.
     Rôtir patate douce en cubes et pois chiches égouttés avec huile, cumin et paprika : 25 minutes à 200 °C (18 à l'airfryer).
     Composer les bols avec épinards, tomates et feta émiettée.
     Assaisonner de citron et d'huile.`,
  ),

  // ---------------------------------------------------------------- poulet & dinde
  recipe(
    'Poulet citron-herbes, riz basmati & courgettes',
    '🍋 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Blanc de poulet 2, Riz 160, Courgette 2, Citron 1, Ail 1, Herbes de Provence, Huile d\'olive, Sel, Poivre',
    `Cuire le riz.
     Mariner rapidement le poulet en dés avec zeste et jus de citron, ail, herbes et un filet d'huile.
     Le saisir 8 minutes, réserver, puis sauter les courgettes en demi-rondelles 6 minutes.
     Mélanger et servir sur le riz.`,
  ),
  recipe(
    'Poulet tikka léger, riz & épinards',
    '🍛 plat volaille 35 facile 1 poele,casserole 2 fit',
    'Blanc de poulet 2, Yaourt grec 150, Garam masala, Curcuma, Ail 1, Gingembre frais 10, Tomates concassées 1, Épinard frais 100, Riz 160, Coriandre 1, Sel',
    `Cuire le riz.
     Mariner le poulet en cubes dans la moitié du yaourt, les épices, l'ail et le gingembre.
     Le saisir, ajouter les tomates et mijoter 12 minutes.
     Hors du feu, ajouter le reste du yaourt et les épinards. Parsemer de coriandre.`,
  ),
  recipe(
    'Fajitas de poulet complètes & haricots rouges',
    '🌮 plat volaille 25 facile 2 poele 2 fit',
    'Blanc de poulet 2, Poivron 2, Oignon rouge 1, Haricots rouges 1, Tortilla de blé 4, Yaourt grec 100, Cumin, Paprika, Citron vert 1, Huile d\'olive, Sel',
    `Saisir le poulet en lanières avec les épices, ajouter poivrons et oignon, 8 minutes.
     Réchauffer les haricots égouttés avec une pincée de cumin.
     Garnir les tortillas chaudes de poulet, haricots, yaourt et citron vert.`,
  ),
  recipe(
    'Wrap poulet, houmous & crudités',
    '🌯 plat volaille 20 facile 1 poele 2 fit',
    'Blanc de poulet 2, Tortilla de blé 4, Pois chiches 1, Citron 1, Ail 1, Carotte 1, Salade verte 0.5, Tomate 1, Cumin, Huile d\'olive, Sel',
    `Houmous express : mixer pois chiches, citron, ail, cumin, 3 c. à s. d'huile et un peu d'eau.
     Cuire le poulet à la poêle, l'émincer.
     Tartiner les tortillas de houmous, garnir de poulet et de crudités, rouler serré.`,
  ),
  recipe(
    'Poulet rôti, quinoa & ratatouille express',
    '🍗 plat volaille 40 facile 1 four,casserole 2 fit',
    'Blanc de poulet 2, Quinoa 160, Courgette 1, Aubergine 1, Poivron 1, Tomates concassées 1, Herbes de Provence, Ail 1, Huile d\'olive, Sel',
    `Faire revenir aubergine, courgette et poivron en dés avec l'ail, ajouter tomates et herbes, mijoter 20 minutes.
     Cuire le quinoa.
     Rôtir les blancs assaisonnés 18 minutes à 200 °C.
     Servir le poulet tranché sur le quinoa et la ratatouille.`,
  ),
  recipe(
    'Salade de poulet, lentilles & légumes croquants',
    '🥗 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Blanc de poulet 2, Lentilles 120, Concombre 0.5, Radis 0.5, Tomate cerise 150, Épinard frais 60, Moutarde, Vinaigre de cidre, Huile d\'olive, Sel',
    `Cuire les lentilles 20 minutes, les laisser tiédir.
     Cuire et trancher le poulet.
     Mélanger lentilles, légumes coupés et épinards avec une vinaigrette moutardée.
     Ajouter le poulet.`,
  ),
  recipe(
    'Dinde au curry coco léger, riz & brocoli',
    '🥥 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Escalope de dinde 2, Lait de coco 150, Curry, Oignon 1, Brocoli 1, Riz 160, Coriandre 1, Huile de tournesol, Sel',
    `Cuire le riz et le brocoli.
     Faire revenir l'oignon et le curry, ajouter la dinde en lanières.
     Verser le lait de coco et 5 cl d'eau, cuire 8 minutes.
     Servir avec le riz, le brocoli et la coriandre.`,
  ),
  recipe(
    'Burger healthy de poulet & patates douces',
    '🍔 plat volaille 35 facile 2 airfryer 2 fit',
    'Blanc de poulet 2, Pain à burger 2, Patate douce 2, Yaourt grec 80, Moutarde, Salade verte 0.25, Tomate 1, Oignon rouge 0.5, Paprika, Huile d\'olive, Sel',
    `Couper les patates douces en frites, les cuire 18 minutes à 200 °C à l'airfryer avec un peu d'huile et de paprika.
     Aplatir les blancs, les assaisonner et les cuire 10 minutes à 200 °C.
     Sauce : yaourt et moutarde.
     Monter les burgers avec crudités et sauce.`,
  ),
  recipe(
    'Brochettes de poulet, semoule complète & légumes',
    '🍢 plat volaille 30 facile 1 airfryer,four 2 fit',
    'Blanc de poulet 2, Semoule 160, Courgette 1, Poivron 1, Oignon rouge 1, Yaourt grec 100, Citron 1, Ras el hanout, Menthe 1, Huile d\'olive, Sel',
    `Mariner le poulet en cubes avec ras el hanout, citron, huile et sel.
     Monter les brochettes avec les légumes, cuire 14 minutes à 200 °C à l'airfryer (20 minutes au four).
     Préparer la semoule à l'eau bouillante.
     Servir avec le yaourt à la menthe.`,
  ),
  recipe(
    'Poulet sauté aux légumes & nouilles de riz',
    '🥢 plat volaille 25 facile 1 poele 2 fit',
    'Blanc de poulet 2, Nouilles de riz 140, Brocoli 1, Carotte 1, Poivron 1, Sauce soja 30, Ail 1, Gingembre frais 10, Huile de sésame',
    `Réhydrater les nouilles.
     Saisir le poulet en lanières, réserver.
     Sauter légumes, ail et gingembre 5 minutes.
     Ajouter nouilles, poulet et soja, finir avec l'huile de sésame.`,
  ),
  recipe(
    'Escalopes de dinde, purée de patate douce & haricots verts',
    '🦃 plat volaille 30 facile 1 poele,casserole 2 fit',
    'Escalope de dinde 2, Patate douce 2, Haricot vert 300, Lait 50, Paprika, Huile d\'olive, Sel, Poivre',
    `Cuire les patates douces en morceaux et les haricots, écraser les patates avec le lait.
     Assaisonner les escalopes de paprika, les cuire 4 minutes par face.
     Servir avec la purée et les haricots.`,
  ),
  recipe(
    'Chili de poulet aux haricots & riz',
    '🌶️ plat volaille 40 facile 1 casserole 4 fit',
    'Blanc de poulet 4, Haricots rouges 2, Tomates concassées 2, Poivron 1, Oignon 1, Maïs en boîte 1, Cumin, Paprika, Riz 300, Huile d\'olive, Sel',
    `Faire revenir oignon et poivron, ajouter le poulet en petits dés et les épices.
     Ajouter tomates, haricots et maïs égouttés, mijoter 25 minutes.
     Servir avec le riz.`,
  ),

  // ---------------------------------------------------------------- bœuf & porc maigres
  recipe(
    'Bœuf sauté, brocoli & riz',
    '🥩 plat viande 25 facile 2 poele 2 fit',
    'Bœuf émincé 350, Brocoli 1, Riz 160, Sauce soja 30, Ail 1, Gingembre frais 10, Maïzena 5, Huile de tournesol',
    `Cuire le riz.
     Enrober le bœuf de maïzena et d'un peu de soja, le saisir à feu très vif, réserver.
     Sauter le brocoli avec un fond d'eau, l'ail et le gingembre.
     Remettre le bœuf avec le reste du soja.`,
  ),
  recipe(
    'Pâtes bolognaise protéinée aux lentilles',
    '🍝 plat viande 40 facile 1 casserole 4 fit',
    'Steak haché 400, Lentilles corail 100, Penne 320, Tomates concassées 2, Carotte 2, Oignon 1, Ail 1, Origan, Parmesan 40, Huile d\'olive, Sel',
    `Faire revenir oignon, carotte et ail hachés, puis la viande.
     Ajouter tomates, lentilles corail, origan et 20 cl d'eau, mijoter 20 minutes.
     Cuire les pâtes et servir avec le parmesan.`,
  ),
  recipe(
    'Steak, pommes de terre rôties & salade complète',
    '🥩 plat viande 35 facile 2 poele,airfryer 2 fit',
    'Steak de bœuf 2, Pomme de terre 500, Salade verte 0.5, Tomate 2, Concombre 0.5, Œuf 2, Huile d\'olive, Vinaigre de vin, Sel, Poivre',
    `Rôtir les pommes de terre en quartiers 22 minutes à 200 °C à l'airfryer (ou 35 minutes au four).
     Cuire les œufs durs 10 minutes.
     Saisir les steaks 2 à 3 minutes par face.
     Servir avec une salade de tomates, concombre et œufs.`,
  ),
  recipe(
    'Chili con carne healthy',
    '🌶️ plat viande 45 facile 1 casserole 4 fit',
    'Steak haché 500, Haricots rouges 2, Tomates concassées 2, Poivron 2, Oignon 1, Ail 2, Cumin, Paprika, Riz 300, Yaourt grec 150, Huile d\'olive, Sel',
    `Faire revenir oignon, poivrons et ail, puis la viande avec les épices.
     Ajouter tomates et haricots, mijoter 30 minutes.
     Servir avec le riz et une cuillère de yaourt grec à la place de la crème.`,
  ),
  recipe(
    'Boulettes de bœuf, sauce tomate & quinoa',
    '🧆 plat viande 35 facile 1 poele,casserole 2 fit',
    'Steak haché 300, Œuf 1, Flocons d\'avoine 30, Coulis de tomate 300, Basilic 1, Quinoa 140, Épinard frais 80, Ail 1, Huile d\'olive, Sel',
    `Mélanger viande, œuf, flocons, ail, sel ; former des boulettes.
     Les dorer, ajouter le coulis et mijoter 15 minutes.
     Cuire le quinoa et y mélanger les épinards hors du feu.
     Servir avec le basilic.`,
  ),
  recipe(
    'Filet mignon, purée de céleri & brocoli',
    '🐖 plat viande 40 moyen 2 four,casserole 2 fit',
    'Filet mignon de porc 400, Céleri-rave 0.5, Pomme de terre 300, Brocoli 1, Lait 100, Moutarde, Thym, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C. Dorer le filet mignon, le badigeonner de moutarde et le finir 20 minutes au four.
     Cuire céleri et pommes de terre en morceaux 20 minutes, mixer avec le lait.
     Cuire le brocoli.
     Trancher la viande et servir.`,
  ),
  recipe(
    'Wok de porc maigre, légumes & riz',
    '🥢 plat viande 25 facile 1 poele 2 fit',
    'Filet mignon de porc 350, Riz 160, Poivron 1, Pak choï 2, Carotte 1, Sauce soja 30, Miel 10, Ail 1, Gingembre frais 10, Huile de tournesol',
    `Cuire le riz.
     Saisir le porc en fines lanières, réserver.
     Sauter les légumes avec ail et gingembre.
     Remettre le porc avec soja et miel.`,
  ),
  recipe(
    'Burrito bowl protéiné',
    '🌯 plat viande 30 facile 2 poele,casserole 2 fit',
    'Steak haché 300, Riz 160, Haricots rouges 1, Maïs en boîte 0.5, Tomate 1, Avocat 1, Salade verte 0.25, Yaourt grec 100, Cumin, Citron vert 1, Sel',
    `Cuire le riz, l'assaisonner de citron vert.
     Saisir la viande avec le cumin et le sel, ajouter les haricots.
     Composer les bols avec maïs, tomate, avocat et salade.
     Napper de yaourt.`,
  ),
  recipe(
    'Kefta, boulgour & salade de crudités',
    '🧆 plat viande 30 facile 2 airfryer,poele 2 fit',
    'Steak haché 300, Cumin, Coriandre 1, Oignon 0.5, Boulgour 160, Tomate 2, Concombre 0.5, Yaourt grec 100, Citron 1, Menthe 1, Huile d\'olive, Sel',
    `Mélanger viande, oignon râpé, cumin, coriandre et sel ; former des petits boudins.
     Les cuire 10 minutes à 200 °C à l'airfryer (ou 8 minutes à la poêle).
     Cuire le boulgour.
     Servir avec tomates, concombre et yaourt à la menthe.`,
  ),

  // ---------------------------------------------------------------- poissons
  recipe(
    'Saumon, riz & légumes vapeur au citron',
    '🐟 plat poisson 25 facile 2 casserole,poele 2 fit',
    'Pavé de saumon 2, Riz 160, Brocoli 1, Carotte 2, Citron 1, Yaourt grec 100, Aneth 1, Sel, Poivre',
    `Cuire le riz.
     Cuire brocoli et carottes à la vapeur ou à l'eau 8 minutes.
     Cuire le saumon côté peau 7 minutes à la poêle.
     Servir avec le yaourt à l'aneth et au citron.`,
  ),
  recipe(
    'Cabillaud, quinoa & poêlée de légumes',
    '🐟 plat poisson 25 facile 2 poele,casserole 2 fit',
    'Cabillaud 400, Quinoa 160, Courgette 1, Poivron 1, Tomate cerise 150, Citron 1, Ail 1, Huile d\'olive, Sel',
    `Cuire le quinoa.
     Sauter courgette, poivron et ail 6 minutes, ajouter les tomates.
     Cuire le cabillaud 3 minutes par face.
     Servir avec le citron.`,
  ),
  recipe(
    'Crevettes, riz sauté & légumes',
    '🦐 plat poisson 20 facile 2 poele 2 fit',
    'Crevette 350, Riz 160, Œuf 2, Petits pois surgelés 100, Carotte 1, Oignon nouveau 1, Sauce soja 30, Huile de tournesol',
    `Utiliser du riz cuit et refroidi.
     Brouiller les œufs, réserver.
     Sauter crevettes, petits pois et carotte en dés 4 minutes.
     Ajouter le riz, le soja, les œufs et l'oignon nouveau.`,
  ),
  recipe(
    'Pâtes complètes au thon, tomates & olives',
    '🍝 plat poisson 20 facile 1 casserole 2 fit',
    'Spaghetti 180, Thon en boîte 2, Tomate cerise 200, Olives noires 30, Câpres 15, Épinard frais 80, Ail 1, Huile d\'olive, Sel',
    `Cuire les pâtes.
     Faire revenir l'ail, ajouter tomates cerises coupées 3 minutes.
     Ajouter thon, olives, câpres et épinards.
     Mélanger avec les pâtes et un filet d'huile.`,
  ),
  recipe(
    'Saumon teriyaki, nouilles & pak choï',
    '🍣 plat poisson 25 facile 2 poele 2 fit',
    'Pavé de saumon 2, Nouilles chinoises 160, Pak choï 2, Sauce soja 30, Miel 15, Gingembre frais 10, Graines de sésame 10',
    `Cuire les nouilles.
     Saisir le saumon, ajouter soja, miel et gingembre et laquer.
     Sauter le pak choï 3 minutes.
     Servir avec le sésame.`,
  ),
  recipe(
    'Colin en papillote, pommes de terre & haricots verts',
    '🐟 plat poisson 30 facile 1 four 2 fit',
    'Filet de colin 400, Pomme de terre 500, Haricot vert 250, Citron 1, Aneth 1, Huile d\'olive, Sel, Poivre',
    `Cuire les pommes de terre et les haricots.
     Mettre le colin en papillote avec citron, aneth, huile, sel et poivre.
     Cuire 15 minutes à 200 °C.`,
  ),
  recipe(
    'Salade complète thon, œufs & pommes de terre',
    '🥗 plat poisson 25 facile 1 casserole 2 fit',
    'Thon en boîte 1, Œuf 4, Pomme de terre 400, Haricot vert 200, Tomate 2, Salade verte 0.5, Olives noires 30, Vinaigre de vin, Huile d\'olive, Sel',
    `Cuire pommes de terre, haricots verts et œufs.
     Couper le tout, ajouter tomates, salade, thon et olives.
     Assaisonner de vinaigrette.`,
  ),
  recipe(
    'Curry de crevettes léger & riz',
    '🍛 plat poisson 25 facile 2 poele 2 fit',
    'Crevette 350, Lait de coco 150, Tomates concassées 1, Épinard frais 100, Oignon 1, Curry, Riz 160, Coriandre 1, Huile de tournesol, Sel',
    `Cuire le riz.
     Faire revenir oignon et curry, ajouter tomates et lait de coco, 8 minutes.
     Ajouter crevettes et épinards, 4 minutes.
     Parsemer de coriandre.`,
  ),
  recipe(
    'Sardines, œufs durs, pommes de terre & tomates',
    '🐟 plat poisson 25 facile 1 casserole 2 fit',
    'Sardines en boîte 2, Œuf 4, Pomme de terre 500, Tomate 3, Oignon rouge 0.5, Persil 1, Citron 1, Huile d\'olive, Sel',
    `Cuire les pommes de terre à l'eau, et les œufs 10 minutes en même temps.
     Couper tomates et oignon, ajouter persil et citron.
     Servir avec les pommes de terre tièdes, les œufs en quartiers et les sardines égouttées.`,
  ),
  recipe(
    'Wrap saumon fumé, fromage frais & crudités',
    '🌯 plat poisson 15 facile 2 sans-cuisson 2 fit',
    'Tortilla de blé 4, Saumon fumé 8, Fromage blanc 150, Concombre 0.5, Roquette 60, Citron 0.5, Aneth 1, Poivre',
    `Mélanger fromage blanc, aneth, citron et poivre.
     Tartiner les tortillas, garnir de saumon, concombre et roquette.
     Rouler serré et couper en deux.`,
  ),

  // ---------------------------------------------------------------- végé protéiné
  recipe(
    'Dahl de lentilles corail, œufs & riz',
    '🍛 plat vege 30 facile 1 casserole 2 fit',
    'Lentilles corail 160, Œuf 4, Lait de coco 150, Tomates concassées 1, Épinard frais 100, Oignon 1, Curry, Curcuma, Riz 100, Huile de tournesol, Sel',
    `Faire revenir oignon et épices, ajouter lentilles, tomates, lait de coco et 40 cl d'eau, cuire 20 minutes.
     Cuire le riz et les œufs 7 minutes.
     Ajouter les épinards au dahl.
     Servir avec les œufs coupés en deux.`,
  ),
  recipe(
    'Omelette protéinée, pommes de terre & salade',
    '🍳 plat vege 25 facile 1 poele 2 fit',
    'Œuf 8, Fromage blanc 150, Pomme de terre 400, Épinard frais 80, Champignon de Paris 150, Salade verte 0.5, Huile d\'olive, Sel, Poivre',
    `Faire sauter les pommes de terre en petits dés 15 minutes.
     Ajouter champignons et épinards.
     Battre les œufs avec le fromage blanc, verser et cuire à feu doux en couvrant.
     Servir avec la salade.`,
  ),
  recipe(
    'Chili sin carne protéiné',
    '🌶️ plat vege 40 facile 1 casserole 4 fit',
    'Haricots rouges 2, Lentilles 150, Tofu 300, Tomates concassées 2, Poivron 1, Oignon 1, Cumin, Paprika, Riz 240, Yaourt grec 150, Huile d\'olive, Sel',
    `Émietter le tofu et le dorer avec oignon et poivron.
     Ajouter épices, tomates, lentilles et 50 cl d'eau, cuire 25 minutes.
     Ajouter les haricots 5 minutes.
     Servir avec le riz et le yaourt.`,
  ),
  recipe(
    'Tofu sauté, quinoa & légumes verts',
    '🌱 plat vege 25 facile 1 poele,casserole 2 fit',
    'Tofu 400, Quinoa 160, Brocoli 1, Haricot vert 150, Sauce soja 30, Ail 1, Gingembre frais 10, Graines de sésame 15, Huile de tournesol',
    `Cuire le quinoa.
     Dorer le tofu en cubes 8 minutes.
     Ajouter brocoli et haricots avec un fond d'eau, puis ail, gingembre et soja.
     Servir sur le quinoa avec le sésame.`,
  ),
  recipe(
    'Salade de pois chiches, œufs & feta',
    '🥗 plat vege 20 facile 1 casserole 2 fit',
    'Pois chiches 2, Œuf 4, Feta 80, Tomate 2, Concombre 1, Oignon rouge 0.5, Persil 1, Citron 1, Huile d\'olive, Sel',
    `Cuire les œufs durs 10 minutes.
     Mélanger pois chiches égouttés, tomates, concombre, oignon et persil.
     Ajouter feta, œufs en quartiers, citron et huile.`,
  ),
  recipe(
    'Shakshuka protéinée & pain complet',
    '🍳 plat vege 25 facile 1 poele 2 fit',
    'Œuf 6, Tomates concassées 1, Poivron 1, Oignon 1, Pois chiches 1, Feta 60, Cumin, Pain de campagne 2, Huile d\'olive, Sel',
    `Faire fondre oignon et poivron, ajouter cumin, tomates et pois chiches, 10 minutes.
     Creuser six puits, y casser les œufs, couvrir 6 minutes.
     Émietter la feta et servir avec le pain.`,
  ),
  recipe(
    'Halloumi, quinoa & légumes rôtis',
    '🧀 plat vege 30 facile 2 four,poele 2 fit',
    'Halloumi 200, Quinoa 160, Courgette 1, Poivron 1, Oignon rouge 1, Pois chiches 1, Citron 1, Huile d\'olive, Sel',
    `Rôtir les légumes et les pois chiches 25 minutes à 210 °C.
     Cuire le quinoa.
     Griller l'halloumi en tranches à la poêle.
     Assembler avec le citron.`,
  ),
  recipe(
    'Pâtes aux lentilles, épinards & ricotta',
    '🍝 plat vege 25 facile 1 casserole 2 fit',
    'Penne 160, Lentilles corail 120, Épinard frais 120, Ricotta 200, Parmesan 30, Ail 1, Citron 0.5, Huile d\'olive, Sel',
    `Cuire ensemble pâtes et lentilles corail dans l'eau salée.
     Égoutter en gardant un peu d'eau, ajouter épinards, ricotta, ail et citron.
     Servir avec le parmesan.`,
  ),
]
