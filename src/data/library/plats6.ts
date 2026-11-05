import { recipe } from './dsl'

/** Lot 6 : bistrot, cuisines du monde, mer, végé, airfryer et one pot. */
export const PLATS_6 = [
  // ---------------------------------------------------------------- bistrot
  recipe(
    'Œufs meurette',
    '🍷 plat viande 40 moyen 2 casserole 2',
    'Œuf 4, Vin rouge 400, Lardons 80, Échalote 2, Champignon de Paris 100, Beurre 20, Farine 10, Pain de campagne 4, Thym, Sel',
    `Faire réduire le vin de moitié avec les échalotes et le thym.
     Dorer lardons et champignons, ajouter au vin et lier avec le beurre manié de farine.
     Pocher les œufs 3 minutes dans la sauce frémissante.
     Servir sur le pain grillé.`,
  ),
  recipe(
    'Tartare de bœuf & frites',
    '🥩 plat viande 30 moyen 3 sans-cuisson,airfryer 2',
    'Steak de bœuf 2, Œuf 2, Échalote 1, Câpres 15, Cornichons 30, Persil 1, Moutarde, Ketchup, Sauce Worcestershire, Frites surgelées 400, Sel, Poivre',
    `Cuire les frites à l'airfryer ou au four.
     Hacher le bœuf très frais au couteau.
     Mélanger avec échalote, câpres, cornichons et persil hachés, moutarde, ketchup, Worcestershire, sel et poivre.
     Dresser avec un jaune d'œuf sur chaque tartare.`,
  ),
  recipe(
    'Saucisses grillées & purée à la moutarde',
    '🌭 plat viande 30 facile 1 poele,casserole 2',
    'Saucisse 4, Pomme de terre 600, Moutarde 30, Lait 150, Beurre 30, Salade verte 0.5, Sel',
    `Préparer une purée avec le lait et le beurre, incorporer la moutarde.
     Griller les saucisses à la poêle 12 minutes.
     Servir avec la salade.`,
  ),
  recipe(
    'Poulet rôti à l\'ail & jus court',
    '🧄 plat volaille 75 facile 2 four 4',
    'Poulet entier 1, Ail 10, Thym, Beurre 30, Vin blanc 100, Pomme de terre 800, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C. Saler, poivrer et beurrer le poulet.
     L'entourer des gousses d'ail en chemise et des pommes de terre, ajouter le thym.
     Cuire 1 h 10, déglacer le plat au vin blanc pour le jus.
     Écraser l'ail confit sur la viande.`,
  ),
  recipe(
    'Croque-monsieur béchamel gratiné',
    '🧀 plat viande 25 facile 1 casserole,four 2',
    'Pain de mie 4, Jambon blanc 2, Beurre 20, Farine 15, Lait 200, Gruyère râpé 80, Muscade, Salade verte 0.5',
    `Préparer une béchamel épaisse avec beurre, farine, lait et muscade.
     Monter les croques avec jambon, béchamel et gruyère.
     Napper le dessus de béchamel et de gruyère.
     Gratiner 10 minutes à 220 °C, servir avec la salade.`,
  ),
  recipe(
    'Hachis de bœuf aux oignons confits',
    '🧅 plat viande 40 facile 1 casserole,four 2',
    'Steak haché 300, Oignon 3, Pomme de terre 500, Lait 100, Beurre 30, Thym, Sel, Poivre',
    `Préparer une purée avec le beurre et le lait.
     Faire confire les oignons 15 minutes, ajouter la viande et le thym.
     Monter dans un plat et gratiner 15 minutes à 210 °C.`,
  ),
  recipe(
    'Bavette, sauce au bleu & haricots verts',
    '🥩 plat viande 25 facile 2 poele 2',
    'Steak de bœuf 2, Roquefort 60, Crème liquide 100, Haricot vert 300, Beurre 15, Sel, Poivre',
    `Cuire les haricots verts.
     Saisir la viande 2 à 3 minutes par face dans le beurre, réserver.
     Fondre le roquefort dans la crème dans la même poêle.
     Napper et servir.`,
  ),
  recipe(
    'Velouté de champignons & tartines',
    '🍄 plat vege 30 facile 1 casserole 2',
    'Champignon de Paris 500, Oignon 1, Pomme de terre 150, Bouillon cube 1, Crème liquide 100, Pain de campagne 4, Comté 60, Sel',
    `Faire revenir oignon et champignons, ajouter la pomme de terre et 60 cl de bouillon, 20 minutes.
     Mixer avec la crème.
     Servir avec des tartines gratinées au comté.`,
  ),
  recipe(
    'Soupe au pistou',
    '🌿 plat vege 50 facile 1 casserole 4',
    'Haricots blancs 1, Haricot vert 150, Courgette 1, Carotte 2, Pomme de terre 200, Tomate 2, Coquillettes 80, Pesto 60, Parmesan 30, Sel',
    `Couper tous les légumes en dés, les cuire 25 minutes dans 1,5 litre d'eau salée.
     Ajouter haricots blancs et pâtes, 10 minutes.
     Hors du feu, incorporer le pesto ; servir avec le parmesan.`,
  ),
  recipe(
    'Soupe paysanne au chou & lardons',
    '🥬 plat viande 70 facile 1 casserole 4',
    'Chou vert 0.5, Lardons fumés 150, Haricots blancs 1, Pomme de terre 400, Carotte 2, Navet 1, Poireau 1, Oignon 1, Bouillon cube 1, Pain de campagne 4',
    `Faire revenir lardons et oignon.
     Ajouter les légumes en morceaux et 1,5 litre de bouillon, cuire 45 minutes.
     Ajouter les haricots 10 minutes.
     Servir sur une tranche de pain grillé.`,
  ),

  // ---------------------------------------------------------------- Italie
  recipe(
    'Spaghetti alle vongole aux moules',
    '🦪 plat poisson 30 moyen 2 casserole 2',
    'Spaghetti 200, Moules 800, Ail 2, Vin blanc 80, Persil 1, Piment, Huile d\'olive, Sel',
    `Ouvrir les moules 5 minutes à couvert avec le vin, les décortiquer et filtrer le jus.
     Faire chauffer ail et piment dans l'huile, ajouter le jus de cuisson.
     Cuire les pâtes 2 minutes de moins, les finir dans le jus avec les moules et le persil.`,
  ),
  recipe(
    'Pâtes cacio e pepe',
    '🧀 plat vege 15 moyen 1 casserole 2',
    'Spaghetti 200, Parmesan 80, Poivre, Sel',
    `Cuire les pâtes dans peu d'eau salée.
     Griller le poivre concassé à sec dans une poêle, ajouter une louche d'eau de cuisson.
     Hors du feu, ajouter les pâtes et le parmesan en remuant vivement jusqu'à ce que la sauce soit crémeuse.`,
  ),
  recipe(
    'Risotto aux crevettes & citron',
    '🦐 plat poisson 35 moyen 2 casserole 2',
    'Riz arborio 160, Crevette 200, Échalote 1, Vin blanc 80, Bouillon cube 1, Citron 1, Persil 1, Beurre 20, Parmesan 20, Sel',
    `Faire suer l'échalote, nacrer le riz, déglacer au vin.
     Ajouter 80 cl de bouillon louche par louche, 18 minutes.
     Ajouter les crevettes 3 minutes avant la fin.
     Finir avec beurre, parmesan, zeste de citron et persil.`,
  ),
  recipe(
    'Gnocchis au roquefort & noix',
    '🧀 plat vege 15 facile 2 casserole 2',
    'Gnocchis 500, Roquefort 80, Crème liquide 100, Noix 30, Épinard frais 60, Poivre',
    `Cuire les gnocchis.
     Fondre le roquefort dans la crème.
     Mélanger avec gnocchis et épinards, parsemer de noix.`,
  ),
  recipe(
    'Pâtes à la ricotta, citron & petits pois',
    '🍋 plat vege 20 facile 1 casserole 2',
    'Penne 200, Petits pois surgelés 150, Ricotta 150, Citron 1, Menthe 1, Parmesan 20, Sel, Poivre',
    `Cuire les pâtes avec les petits pois.
     Mélanger ricotta, zeste et jus de citron, un peu d'eau de cuisson.
     Assembler, ajouter menthe et parmesan.`,
  ),
  recipe(
    'Polpette alla pizzaiola',
    '🍅 plat viande 35 facile 1 poele 2',
    'Steak haché 300, Œuf 1, Parmesan 20, Pain de mie 1, Lait 30, Coulis de tomate 300, Mozzarella 1, Origan, Pain de campagne 4, Huile d\'olive, Sel',
    `Tremper le pain dans le lait, mélanger avec viande, œuf, parmesan et sel ; former des boulettes.
     Les dorer, ajouter coulis et origan, mijoter 15 minutes.
     Poser la mozzarella, couvrir 2 minutes. Servir avec le pain.`,
  ),
  recipe(
    'Focaccia garnie tomates & olives',
    '🍞 plat vege 40 facile 1 four 4',
    'Pâte à pizza 2, Tomate cerise 250, Olives noires 60, Romarin, Huile d\'olive 50, Mozzarella 1, Roquette 60, Sel',
    `Préchauffer le four à 220 °C.
     Étaler la pâte épaisse dans un plat huilé, enfoncer les doigts pour faire des alvéoles.
     Garnir de tomates, olives, romarin, huile et gros sel.
     Cuire 20 minutes, servir avec mozzarella et roquette.`,
  ),

  // ---------------------------------------------------------------- Asie
  recipe(
    'Bœuf loc lac & riz à la tomate',
    '🥩 plat viande 30 moyen 2 poele 2',
    'Steak de bœuf 2, Sauce soja 30, Sucre 10, Ail 1, Riz 150, Concentré de tomate 20, Salade verte 0.5, Tomate 1, Oignon rouge 0.5, Citron vert 1, Poivre',
    `Mariner le bœuf en cubes avec soja, sucre et ail.
     Cuire le riz puis le sauter avec le concentré de tomate.
     Saisir le bœuf 2 minutes à feu très vif.
     Servir sur salade, tomate et oignon, avec une sauce citron vert-poivre.`,
  ),
  recipe(
    'Porc haché sauté aux haricots verts',
    '🫛 plat viande 20 facile 1 poele 2',
    'Échine de porc 250, Haricot vert 300, Ail 2, Sauce soja 30, Piment, Riz 150, Huile de tournesol',
    `Cuire le riz.
     Hacher le porc au couteau, le sauter avec ail et piment.
     Ajouter les haricots verts coupés et un fond d'eau, couvrir 6 minutes.
     Assaisonner de soja.`,
  ),
  recipe(
    'Nouilles dan dan',
    '🌶️ plat viande 25 moyen 1 poele 2',
    'Nouilles chinoises 160, Échine de porc 200, Beurre de cacahuète 30, Sauce soja 30, Piment, Ail 1, Pak choï 2, Oignon nouveau 1, Huile de sésame',
    `Cuire les nouilles et le pak choï.
     Sauter le porc haché avec ail et piment jusqu'à ce qu'il croustille.
     Sauce : beurre de cacahuète, soja, huile de sésame et un peu d'eau de cuisson.
     Assembler et parsemer d'oignon nouveau.`,
  ),
  recipe(
    'Curry japonais de légumes',
    '🍛 plat vege 35 facile 1 casserole 2',
    'Pomme de terre 300, Carotte 2, Oignon 1, Curry, Farine 20, Beurre 20, Sauce soja 15, Miel 10, Riz 150, Œuf 2',
    `Faire revenir l'oignon dans le beurre, ajouter farine et curry pour un roux.
     Mouiller de 50 cl d'eau, ajouter carottes et pommes de terre en morceaux, soja et miel.
     Cuire 20 minutes. Servir avec le riz et un œuf mollet.`,
  ),
  recipe(
    'Soupe thaïe au poulet & lait de coco',
    '🥥 plat volaille 25 facile 1 casserole 2',
    'Blanc de poulet 1, Lait de coco 400, Bouillon cube 1, Champignon de Paris 120, Gingembre frais 15, Citron vert 2, Nuoc-mâm, Coriandre 1, Piment',
    `Porter lait de coco et 40 cl de bouillon à frémissement avec le gingembre tranché.
     Ajouter le poulet en lamelles et les champignons, 8 minutes.
     Assaisonner de nuoc-mâm, citron vert et piment ; parsemer de coriandre.`,
  ),
  recipe(
    'Riz frit au chou pimenté & bacon',
    '🍚 plat viande 20 facile 1 poele 2',
    'Riz 150, Chou vert 0.25, Bacon 4, Œuf 2, Sauce soja 20, Piment, Oignon nouveau 1, Huile de tournesol',
    `Utiliser du riz cuit refroidi.
     Dorer le bacon en morceaux, ajouter le chou émincé et le piment.
     Ajouter le riz et le soja, faire sauter à feu vif.
     Servir avec un œuf au plat et l'oignon nouveau.`,
  ),
  recipe(
    'Poulet au gingembre & oignons nouveaux',
    '🫚 plat volaille 25 facile 1 poele 2',
    'Blanc de poulet 2, Gingembre frais 25, Oignon nouveau 2, Sauce soja 30, Miel 10, Maïzena 5, Riz 150, Huile de tournesol',
    `Cuire le riz.
     Saisir le poulet en morceaux enrobés de maïzena.
     Ajouter le gingembre en julienne et les oignons nouveaux, puis soja et miel.`,
  ),
  recipe(
    'Bœuf mijoté à la badiane & carottes',
    '🥕 plat viande 120 moyen 2 casserole 4',
    'Bœuf à braiser 800, Carotte 4, Sauce soja 60, Sucre roux 20, Badiane, Cannelle, Gingembre frais 20, Ail 2, Riz 300',
    `Dorer le bœuf en cubes.
     Ajouter soja, sucre, épices, ail, gingembre et eau à hauteur.
     Couvrir 1 h 30, ajouter les carottes et cuire 30 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Saumon laqué au miel & sésame, riz et concombre',
    '🍣 plat poisson 25 facile 2 four,casserole 2',
    'Pavé de saumon 2, Miel 20, Sauce soja 30, Graines de sésame 15, Riz 150, Concombre 1, Vinaigre de cidre, Sucre',
    `Cuire le riz.
     Badigeonner le saumon de miel et de soja, rouler le dessus dans le sésame.
     Cuire 12 minutes à 200 °C.
     Servir avec le concombre mariné au vinaigre et au sucre.`,
  ),

  // ---------------------------------------------------------------- Inde & Moyen-Orient
  recipe(
    'Chana masala',
    '🫘 plat vege 30 facile 1 casserole 2',
    'Pois chiches 2, Tomates concassées 1, Oignon 1, Ail 2, Gingembre frais 10, Garam masala, Cumin, Citron 0.5, Riz 150, Coriandre 1, Huile de tournesol, Sel',
    `Faire revenir oignon, ail, gingembre et épices.
     Ajouter tomates et pois chiches, mijoter 20 minutes.
     Finir avec citron et coriandre ; servir avec le riz.`,
  ),
  recipe(
    'Aloo gobi',
    '🥔 plat vege 35 facile 1 poele 2',
    'Pomme de terre 400, Chou-fleur 0.5, Oignon 1, Tomate 2, Curcuma, Cumin, Garam masala, Coriandre 1, Pain pita 2, Huile de tournesol, Sel',
    `Faire revenir oignon et épices.
     Ajouter pommes de terre et chou-fleur en morceaux, tomates et 10 cl d'eau.
     Couvrir 20 minutes en remuant de temps en temps.
     Servir avec la coriandre et le pain.`,
  ),
  recipe(
    'Palak paneer au halloumi',
    '🥬 plat vege 30 facile 2 poele 2',
    'Halloumi 200, Épinards surgelés 400, Oignon 1, Ail 2, Gingembre frais 10, Garam masala, Crème liquide 80, Riz 150, Sel',
    `Faire revenir oignon, ail, gingembre et épices.
     Ajouter les épinards, cuire 10 minutes, mixer avec la crème.
     Dorer l'halloumi en cubes et l'ajouter.
     Servir avec le riz.`,
  ),
  recipe(
    'Poulet au beurre d\'épices & naans maison',
    '🫓 plat volaille 50 moyen 2 poele 2',
    'Blanc de poulet 2, Coulis de tomate 200, Crème liquide 80, Beurre 30, Garam masala, Ail 1, Farine 200, Yaourt nature 1, Levure chimique 0.5, Sel',
    `Naans : pâte avec farine, yaourt, levure, sel et un peu d'eau ; reposer 20 minutes.
     Dorer le poulet en cubes dans le beurre avec ail et épices, ajouter coulis et crème, 12 minutes.
     Étaler des galettes fines et les cuire 2 minutes par face à la poêle sèche.`,
  ),
  recipe(
    'Mujadara (lentilles, riz & oignons frits)',
    '🧅 plat vege 45 facile 1 casserole,poele 2',
    'Lentilles 120, Riz 100, Oignon 3, Cumin, Yaourt grec 100, Concombre 0.5, Huile d\'olive, Sel',
    `Cuire les lentilles 10 minutes, ajouter le riz, le cumin et le sel, poursuivre 15 minutes à couvert.
     Faire frire les oignons émincés jusqu'à ce qu'ils soient bien dorés.
     Servir surmonté d'oignons, avec yaourt et concombre.`,
  ),
  recipe(
    'Fattoush au poulet',
    '🥗 plat volaille 25 facile 1 poele 2',
    'Blanc de poulet 2, Pain pita 2, Salade verte 0.5, Tomate 2, Concombre 1, Radis 0.5, Menthe 1, Persil 1, Citron 1, Huile d\'olive, Sel',
    `Griller les pitas en morceaux à la poêle avec un peu d'huile.
     Cuire et trancher le poulet.
     Mélanger légumes, herbes, citron et huile, ajouter pain et poulet.`,
  ),
  recipe(
    'Kofta de bœuf au four & boulgour',
    '🍢 plat viande 35 facile 1 four,casserole 2',
    'Steak haché 300, Oignon 0.5, Cumin, Cannelle, Persil 1, Boulgour 150, Tomate 1, Yaourt grec 100, Huile d\'olive, Sel',
    `Mélanger viande, oignon râpé, épices, persil et sel ; former des boudins.
     Cuire 15 minutes à 220 °C.
     Cuire le boulgour avec la tomate en dés.
     Servir avec le yaourt.`,
  ),

  // ---------------------------------------------------------------- Amériques
  recipe(
    'Jambalaya végétarien',
    '🌶️ plat vege 40 facile 1 casserole 2',
    'Riz 150, Haricots rouges 1, Poivron 1, Oignon 1, Céleri 1, Tomates concassées 1, Paprika, Bouillon cube 1, Huile d\'olive, Sel',
    `Faire revenir oignon, poivron et céleri.
     Ajouter riz, paprika, tomates et 40 cl de bouillon, couvrir 18 minutes.
     Ajouter les haricots 5 minutes.`,
  ),
  recipe(
    'Sloppy joes',
    '🍔 plat viande 25 facile 1 poele 2',
    'Steak haché 300, Oignon 1, Poivron 0.5, Ketchup 60, Sauce Worcestershire, Moutarde, Pain à burger 2, Salade verte 0.25',
    `Faire revenir oignon et poivron, puis la viande.
     Ajouter ketchup, Worcestershire, moutarde et 5 cl d'eau, mijoter 10 minutes.
     Garnir les pains toastés avec la salade.`,
  ),
  recipe(
    'Mac & cheese au bacon',
    '🥓 plat viande 30 facile 1 casserole,four 2',
    'Coquillettes 200, Bacon 4, Cheddar 120, Lait 300, Beurre 20, Farine 20, Chapelure 20',
    `Cuire les pâtes et griller le bacon.
     Préparer une sauce au cheddar avec beurre, farine et lait.
     Mélanger avec pâtes et bacon émietté, couvrir de chapelure et gratiner 12 minutes.`,
  ),
  recipe(
    'Quesadillas haricots rouges & maïs',
    '🫓 plat vege 20 facile 1 poele 2',
    'Tortilla de blé 4, Haricots rouges 1, Maïs en boîte 0.5, Cheddar 100, Cumin, Coriandre 1, Crème fraîche 50, Citron vert 1',
    `Écraser grossièrement les haricots avec cumin et citron vert.
     Garnir les tortillas de haricots, maïs et cheddar, refermer.
     Dorer 2 minutes par face, servir avec crème et coriandre.`,
  ),
  recipe(
    'Poulet cajun & maïs grillé',
    '🌽 plat volaille 30 facile 1 poele,four 2',
    'Blanc de poulet 2, Paprika, Cumin, Ail 1, Origan, Maïs en boîte 1, Pomme de terre 400, Beurre 15, Salade verte 0.5, Sel',
    `Frotter le poulet d'épices et de sel, le rôtir 20 minutes à 200 °C avec les pommes de terre en quartiers.
     Faire griller le maïs égoutté au beurre à la poêle.
     Servir avec la salade.`,
  ),
  recipe(
    'Ceviche de cabillaud & patate douce',
    '🍋 plat poisson 30 moyen 2 sans-cuisson,casserole 2',
    'Cabillaud 300, Citron vert 4, Oignon rouge 0.5, Coriandre 1, Piment, Patate douce 1, Avocat 1, Sel',
    `Couper le poisson très frais en dés, le couvrir de jus de citron vert avec l'oignon, le piment et le sel ; 15 minutes au frais.
     Cuire la patate douce en rondelles.
     Servir avec l'avocat et la coriandre.`,
  ),

  // ---------------------------------------------------------------- mer
  recipe(
    'Cabillaud en croûte de chorizo',
    '🐟 plat poisson 25 facile 2 four 2',
    'Cabillaud 300, Chorizo 40, Chapelure 20, Pomme de terre 400, Huile d\'olive, Sel',
    `Rôtir les pommes de terre en dés 25 minutes à 210 °C.
     Mixer chorizo et chapelure, en couvrir le poisson.
     Cuire le poisson 12 minutes avec les pommes de terre.`,
  ),
  recipe(
    'Brochettes de crevettes & ananas',
    '🍍 plat poisson 20 facile 2 poele,airfryer 2',
    'Crevette 300, Ananas 0.5, Poivron 1, Sauce soja 20, Miel 10, Riz 150, Citron vert 1',
    `Cuire le riz.
     Monter les brochettes avec crevettes, ananas et poivron, badigeonner de soja et miel.
     Griller 6 minutes à la poêle ou 8 minutes à l'airfryer à 200 °C.`,
  ),
  recipe(
    'Bouillabaisse simplifiée',
    '🐟 plat poisson 50 moyen 3 casserole 4',
    'Cabillaud 400, Filet de colin 300, Moules 500, Tomates concassées 1, Fenouil 1, Oignon 1, Ail 3, Curcuma, Orange 1, Pomme de terre 400, Baguette 0.5, Huile d\'olive, Sel',
    `Faire revenir oignon, fenouil et ail, ajouter tomates, curcuma, zeste d'orange et 1 litre d'eau.
     Ajouter les pommes de terre en rondelles, 15 minutes.
     Ajouter les poissons en morceaux puis les moules, 8 minutes.
     Servir avec la baguette grillée.`,
  ),
  recipe(
    'Pavé de saumon, beurre blanc & poireaux',
    '🐟 plat poisson 30 moyen 2 poele,casserole 2',
    'Pavé de saumon 2, Échalote 2, Vin blanc 80, Vinaigre de vin 30, Beurre 80, Poireau 2, Riz 150, Sel',
    `Cuire le riz et faire fondre les poireaux.
     Réduire échalotes, vin et vinaigre presque à sec, monter au beurre froid en fouettant.
     Cuire le saumon 7 minutes côté peau.
     Napper de beurre blanc.`,
  ),
  recipe(
    'Croquettes de saumon & pommes de terre',
    '🐟 plat poisson 35 facile 2 poele,airfryer 2',
    'Pavé de saumon 2, Pomme de terre 400, Œuf 1, Aneth 1, Chapelure 50, Citron 1, Salade verte 0.5, Yaourt grec 80, Sel',
    `Cuire saumon et pommes de terre, écraser ensemble avec œuf, aneth, zeste et sel.
     Former des croquettes, les rouler dans la chapelure.
     Les dorer à la poêle ou 12 minutes à l'airfryer.
     Servir avec yaourt citronné et salade.`,
  ),
  recipe(
    'Tagliatelles aux crevettes & tomates cerises',
    '🦐 plat poisson 20 facile 2 casserole,poele 2',
    'Tagliatelles 200, Crevette 250, Tomate cerise 200, Ail 2, Basilic 1, Vin blanc 50, Huile d\'olive, Sel',
    `Cuire les pâtes.
     Sauter ail et tomates cerises 3 minutes, déglacer au vin.
     Ajouter les crevettes 3 minutes, puis pâtes et basilic.`,
  ),
  recipe(
    'Sardines poêlées, pommes de terre & salade',
    '🐟 plat poisson 15 facile 1 poele 2',
    'Sardines en boîte 2, Pomme de terre 400, Salade verte 0.5, Tomate 2, Citron 1, Persil 1, Huile d\'olive, Sel',
    `Cuire les pommes de terre.
     Réchauffer les sardines égouttées 2 minutes par face à la poêle.
     Servir avec salade, tomates, citron et persil.`,
  ),

  // ---------------------------------------------------------------- one pot & cocotte
  recipe(
    'One pot pasta poulet & champignons',
    '🍝 plat volaille 25 facile 1 casserole 2',
    'Penne 200, Blanc de poulet 1, Champignon de Paris 150, Oignon 1, Bouillon cube 1, Crème liquide 80, Parmesan 30, Thym',
    `Mettre dans une casserole pâtes, poulet en dés, champignons, oignon, thym et 60 cl de bouillon.
     Cuire 12 minutes en remuant souvent.
     Ajouter crème et parmesan.`,
  ),
  recipe(
    'One pot riz, chorizo & poivrons',
    '🍚 plat viande 30 facile 1 casserole 2',
    'Riz 150, Chorizo 80, Poivron 1, Oignon 1, Tomates concassées 1, Paprika, Bouillon cube 1, Petits pois surgelés 80',
    `Dorer chorizo, oignon et poivron.
     Ajouter riz, paprika, tomates et 35 cl de bouillon, couvrir 18 minutes.
     Ajouter les petits pois 5 minutes avant la fin.`,
  ),
  recipe(
    'One pot lentilles corail, épinards & feta',
    '🫘 plat vege 25 facile 1 casserole 2',
    'Lentilles corail 150, Épinard frais 100, Tomates concassées 1, Oignon 1, Cumin, Feta 80, Pain pita 2, Sel',
    `Faire revenir oignon et cumin, ajouter lentilles, tomates et 40 cl d'eau.
     Cuire 15 minutes, ajouter les épinards.
     Servir avec la feta émiettée et le pain.`,
  ),
  recipe(
    'One pot gnocchis tomate & mozzarella',
    '🍅 plat vege 20 facile 1 poele 2',
    'Gnocchis 500, Coulis de tomate 300, Épinard frais 80, Mozzarella 1, Ail 1, Basilic 1, Sel',
    `Chauffer coulis, ail et 10 cl d'eau, ajouter les gnocchis crus.
     Cuire 6 minutes en remuant, ajouter les épinards.
     Poser la mozzarella, couvrir 2 minutes et ajouter le basilic.`,
  ),
  recipe(
    'One pot coquillettes au poulet & citron',
    '🍋 plat volaille 25 facile 1 casserole 2',
    'Coquillettes 180, Blanc de poulet 2, Citron 1, Ail 1, Bouillon cube 1, Épinard frais 80, Parmesan 30',
    `Dorer le poulet en dés avec l'ail.
     Ajouter coquillettes et 50 cl de bouillon, cuire 10 minutes en remuant.
     Ajouter épinards, zeste et jus de citron, parmesan.`,
  ),

  // ---------------------------------------------------------------- airfryer
  recipe(
    'Poisson pané & frites à l\'airfryer',
    '🐠 plat poisson 25 facile 1 airfryer 2',
    'Poisson pané 4, Frites surgelées 400, Salade verte 0.5, Citron 1, Mayonnaise',
    `Cuire les frites 12 minutes à 200 °C.
     Ajouter le poisson pané et poursuivre 10 minutes en secouant.
     Servir avec citron, mayonnaise et salade.`,
  ),
  recipe(
    'Chipolatas, pommes de terre & oignons à l\'airfryer',
    '🌭 plat viande 30 facile 1 airfryer 2',
    'Chipolata 6, Pomme de terre 500, Oignon 1, Thym, Moutarde, Huile d\'olive, Sel',
    `Couper pommes de terre et oignon, huile, thym et sel ; cuire 15 minutes à 200 °C.
     Ajouter les chipolatas et poursuivre 12 minutes.
     Servir avec la moutarde.`,
  ),
  recipe(
    'Brocolis & pois chiches rôtis, sauce yaourt-citron',
    '🥦 plat vege 25 facile 1 airfryer 2',
    'Brocoli 1, Pois chiches 1, Paprika, Yaourt grec 120, Citron 1, Ail 1, Quinoa 120, Huile d\'olive, Sel',
    `Cuire le quinoa.
     Enrober brocoli et pois chiches d'huile et de paprika, cuire 15 minutes à 200 °C.
     Sauce : yaourt, citron, ail, sel.`,
  ),
  recipe(
    'Croque-poulet barbecue à l\'airfryer',
    '🍗 plat volaille 20 facile 1 airfryer 2',
    'Pain de mie 4, Blanc de poulet 1, Sauce barbecue 30, Cheddar 60, Oignon rouge 0.5, Salade verte 0.5',
    `Cuire et émincer le poulet, le mélanger à la sauce barbecue.
     Monter les croques avec cheddar et oignon.
     Cuire 8 minutes à 180 °C en retournant.`,
  ),
]
