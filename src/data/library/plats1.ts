import { recipe } from './dsl'

/** Lot 1 : classiques familiaux, pâtes, gratins, mijotés. */
export const PLATS_1 = [
  recipe(
    'Spaghetti carbonara',
    '🍝 plat viande 20 facile 1 casserole,poele 2',
    'Spaghetti 200, Lardons fumés 120, Œuf 2, Parmesan 50, Poivre, Sel',
    `Cuire les spaghetti dans l'eau salée.
     Faire dorer les lardons à sec dans une poêle.
     Battre les œufs avec le parmesan et beaucoup de poivre.
     Égoutter les pâtes en gardant une louche d'eau, les verser dans la poêle hors du feu.
     Ajouter le mélange œufs-parmesan et un peu d'eau de cuisson en remuant vivement : la sauce doit être crémeuse, pas brouillée.`,
  ),
  recipe(
    'Spaghetti bolognaise',
    '🍝 plat viande 45 facile 1 casserole 2',
    'Spaghetti 200, Steak haché 250, Oignon 1, Carotte 1, Ail 1, Tomates concassées 1, Concentré de tomate 15, Origan, Parmesan 30, Huile d\'olive, Sel, Poivre',
    `Hacher finement oignon, carotte et ail, les faire suer 5 minutes dans l'huile.
     Ajouter la viande et la faire colorer en l'émiettant.
     Ajouter tomates, concentré, origan, sel, poivre et laisser mijoter 30 minutes à couvert.
     Cuire les spaghetti, les mélanger à la sauce et servir avec le parmesan.`,
  ),
  recipe(
    'Lasagnes à la bolognaise',
    '🫕 plat viande 90 moyen 2 casserole,four 4',
    'Feuilles de lasagne 250, Steak haché 400, Oignon 1, Carotte 1, Tomates concassées 2, Beurre 40, Farine 40, Lait 500, Muscade, Gruyère râpé 100, Huile d\'olive, Sel, Poivre',
    `Préparer une bolognaise : oignon et carotte hachés, viande, tomates, 30 minutes de mijotage.
     Béchamel : fondre le beurre, ajouter la farine, puis le lait en fouettant jusqu'à épaississement ; saler, muscader.
     Préchauffer le four à 180 °C.
     Alterner dans un plat béchamel, feuilles, bolognaise, sur 3 ou 4 couches, finir par béchamel et gruyère.
     Cuire 40 minutes et laisser reposer 10 minutes avant de couper.`,
  ),
  recipe(
    'Chili con carne',
    '🌶️ plat viande 60 facile 1 casserole 4',
    'Steak haché 400, Haricots rouges 2, Tomates concassées 2, Oignon 1, Poivron 1, Ail 2, Cumin, Paprika, Piment, Riz 300, Huile d\'olive, Sel',
    `Faire revenir oignon, poivron et ail hachés dans l'huile.
     Ajouter la viande et la faire dorer, puis les épices 1 minute.
     Verser tomates et haricots égouttés, saler et laisser mijoter 40 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Hachis parmentier',
    '🥔 plat viande 60 facile 1 casserole,four 4',
    'Pomme de terre 1000, Steak haché 500, Oignon 2, Lait 200, Beurre 40, Gruyère râpé 80, Persil 1, Muscade, Sel, Poivre',
    `Cuire les pommes de terre épluchées 25 minutes dans l'eau salée, les écraser avec le beurre et le lait chaud ; saler, muscader.
     Faire revenir les oignons émincés puis la viande, saler, poivrer, ajouter le persil.
     Préchauffer le four à 200 °C.
     Étaler la viande dans un plat, couvrir de purée et de gruyère.
     Gratiner 20 minutes.`,
  ),
  recipe(
    'Gratin dauphinois',
    '🥔 plat vege 75 facile 1 four 4',
    'Pomme de terre 1000, Crème liquide 300, Lait 300, Ail 1, Muscade, Beurre 10, Sel, Poivre',
    `Préchauffer le four à 160 °C et frotter un plat avec l'ail puis le beurrer.
     Éplucher et trancher finement les pommes de terre, sans les laver.
     Les porter 10 minutes à frémissement dans le lait et la crème avec sel, poivre, muscade.
     Verser dans le plat et cuire 1 heure, jusqu'à ce que la lame d'un couteau entre sans résistance.`,
  ),
  recipe(
    'Tartiflette',
    '🧀 plat viande 60 facile 2 casserole,four 4',
    'Pomme de terre 1000, Reblochon 1, Lardons fumés 200, Oignon 2, Vin blanc 100, Crème fraîche 100, Salade verte 1, Poivre',
    `Cuire les pommes de terre 20 minutes à l'eau, les peler et les couper en rondelles.
     Faire revenir oignons et lardons, déglacer au vin blanc.
     Préchauffer le four à 200 °C.
     Mélanger pommes de terre, lardons et crème dans un plat, poser le reblochon coupé en deux dans l'épaisseur, croûte vers le haut.
     Cuire 25 minutes et servir avec la salade.`,
  ),
  recipe(
    'Poulet à la crème & champignons',
    '🍄 plat volaille 30 facile 1 poele 2',
    'Blanc de poulet 2, Champignon de Paris 250, Échalote 1, Crème fraîche 150, Vin blanc 50, Riz 150, Persil 1, Beurre 15, Sel, Poivre',
    `Cuire le riz.
     Dorer le poulet en morceaux dans le beurre, réserver.
     Faire suer l'échalote puis les champignons émincés jusqu'à ce qu'ils rendent leur eau.
     Déglacer au vin blanc, ajouter la crème et remettre le poulet 5 minutes.
     Parsemer de persil et servir avec le riz.`,
  ),
  recipe(
    'Bœuf bourguignon',
    '🍷 plat viande 180 moyen 3 casserole 4',
    'Bœuf à braiser 800, Lardons 150, Carotte 3, Oignon 2, Champignon de Paris 250, Vin rouge 750, Farine 20, Ail 2, Laurier, Thym, Huile de tournesol, Sel, Poivre',
    `Faire dorer la viande en cubes par petites quantités dans une cocotte huilée, réserver.
     Faire revenir lardons, oignons et carottes, saupoudrer de farine.
     Remettre la viande, mouiller avec le vin, ajouter ail, thym et laurier, saler, poivrer.
     Couvrir et laisser mijoter 2 h 30 à feu très doux.
     Ajouter les champignons poêlés 15 minutes avant la fin.`,
  ),
  recipe(
    'Poulet basquaise',
    '🫑 plat volaille 50 facile 1 casserole 4',
    'Cuisse de poulet 4, Poivron 3, Oignon 2, Ail 2, Tomates concassées 1, Piment, Riz 300, Huile d\'olive, Sel',
    `Dorer les cuisses dans une cocotte huilée, réserver.
     Faire fondre oignons et poivrons en lanières 10 minutes avec l'ail.
     Ajouter tomates et piment, remettre le poulet, saler.
     Couvrir et mijoter 35 minutes. Servir avec le riz.`,
  ),
  recipe(
    'Ratatouille',
    '🍆 plat vege 60 facile 1 casserole 4',
    'Aubergine 1, Courgette 2, Poivron 2, Tomate 4, Oignon 1, Ail 2, Herbes de Provence, Huile d\'olive, Sel, Poivre',
    `Couper tous les légumes en dés de même taille.
     Faire revenir l'oignon et l'ail, puis l'aubergine 5 minutes, les poivrons et les courgettes.
     Ajouter les tomates et les herbes, saler, poivrer.
     Laisser mijoter 40 minutes à couvert, puis 10 minutes sans couvercle pour réduire.`,
  ),
  recipe(
    'Hachis de courge & lentilles',
    '🎃 plat vege 50 facile 1 casserole,four 4',
    'Courge butternut 1, Lentilles 200, Oignon 1, Carotte 1, Bouillon cube 1, Beurre 30, Comté 60, Cumin, Sel, Poivre',
    `Cuire les lentilles 20 minutes avec carotte, oignon hachés et le bouillon.
     Cuire la courge en cubes 15 minutes à l'eau, l'écraser avec le beurre, saler, poivrer.
     Préchauffer le four à 200 °C.
     Étaler les lentilles relevées de cumin dans un plat, couvrir de purée et de comté.
     Gratiner 15 minutes.`,
  ),
  recipe(
    'Saumon au four, haricots verts & citron',
    '🐟 plat poisson 25 facile 2 four 2',
    'Pavé de saumon 2, Haricot vert 300, Citron 1, Ail 1, Aneth 1, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Étaler les haricots équeutés sur une plaque avec huile, ail haché, sel.
     Poser les pavés dessus, avec des rondelles de citron et l'aneth.
     Cuire 15 à 18 minutes.`,
  ),
  recipe(
    'Saumon teriyaki & riz',
    '🍣 plat poisson 25 facile 2 poele 2',
    'Pavé de saumon 2, Sauce soja 40, Miel 20, Gingembre frais 10, Ail 1, Riz 150, Graines de sésame 10, Oignon nouveau 1, Brocoli 1',
    `Cuire le riz et le brocoli en fleurettes à la vapeur ou à l'eau.
     Mélanger soja, miel, gingembre et ail râpés avec 2 c. à s. d'eau.
     Saisir le saumon 3 minutes côté peau, retourner, verser la sauce et laisser caraméliser 3 minutes.
     Servir sur le riz avec le brocoli, sésame et oignon nouveau.`,
  ),
  recipe(
    'Cabillaud en papillote, légumes du soleil',
    '🐟 plat poisson 30 facile 2 four 2',
    'Cabillaud 300, Courgette 1, Tomate cerise 150, Olives noires 30, Citron 1, Thym, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Sur deux feuilles de papier cuisson, répartir la courgette en rondelles fines et les tomates cerises.
     Poser le poisson, les olives, le thym, une rondelle de citron, un filet d'huile, sel et poivre.
     Fermer les papillotes et cuire 18 minutes.`,
  ),
  recipe(
    'Moules marinières & frites',
    '🦪 plat poisson 30 facile 2 casserole,airfryer 2',
    'Moules 1500, Échalote 2, Vin blanc 150, Persil 1, Beurre 20, Crème fraîche 50, Frites surgelées 400',
    `Lancer les frites au four ou à l'airfryer.
     Gratter et rincer les moules, jeter celles qui sont ouvertes.
     Faire suer les échalotes dans le beurre, ajouter vin blanc et moules.
     Couvrir et cuire 6 minutes à feu vif en secouant : elles doivent toutes s'ouvrir.
     Ajouter crème et persil, servir avec les frites.`,
  ),
  recipe(
    'Fish & chips à l\'airfryer',
    '🐠 plat poisson 30 facile 2 airfryer 2',
    'Filet de colin 300, Farine 30, Œuf 1, Chapelure 60, Pomme de terre 500, Citron 1, Mayonnaise, Cornichons 20, Paprika, Huile de tournesol, Sel',
    `Couper les pommes de terre en frites, les sécher, les enrober d'une cuillère d'huile et de sel.
     Les cuire 20 minutes à 200 °C à l'airfryer en secouant deux fois.
     Paner le poisson en morceaux : farine, œuf battu, chapelure au paprika.
     Cuire 10 minutes à 190 °C en retournant à mi-cuisson.
     Servir avec citron et une sauce mayonnaise aux cornichons hachés.`,
  ),
  recipe(
    'Pilons de poulet croustillants à l\'airfryer',
    '🍗 plat volaille 35 facile 1 airfryer 2',
    'Pilon de poulet 6, Paprika, Ail 1, Miel 15, Sauce soja 20, Pomme de terre 400, Huile d\'olive, Sel',
    `Mélanger paprika, ail râpé, miel, soja et un filet d'huile, en enrober les pilons.
     Couper les pommes de terre en quartiers, huile et sel.
     Cuire les pilons 25 minutes à 190 °C en les retournant à mi-cuisson.
     Cuire les pommes de terre ensuite (ou en même temps si la cuve le permet), 20 minutes à 200 °C.`,
  ),
  recipe(
    'Poulet paprika & frites de patate douce',
    '🍠 plat volaille 30 facile 1 airfryer,four 2',
    'Blanc de poulet 2, Patate douce 2, Paprika, Cumin, Yaourt grec 100, Citron 0.5, Ail 1, Huile d\'olive, Sel',
    `Couper les patates douces en bâtonnets, les enrober d'huile, paprika et sel.
     Les cuire 18 minutes à 200 °C à l'airfryer (25 minutes au four à 220 °C) en remuant.
     Assaisonner le poulet de paprika, cumin et sel, le cuire 12 minutes à 190 °C.
     Mélanger le yaourt avec l'ail râpé et le citron pour la sauce.`,
  ),
  recipe(
    'Falafels à l\'airfryer, pita & sauce yaourt',
    '🧆 plat vege 35 facile 1 airfryer 2',
    'Pois chiches 1, Oignon 0.5, Ail 1, Persil 1, Coriandre 1, Cumin, Farine 20, Pain pita 2, Tomate 1, Concombre 0.5, Yaourt grec 100, Citron 0.5, Huile d\'olive, Sel',
    `Mixer pois chiches égouttés, oignon, ail, herbes, cumin et sel ; ajouter la farine.
     Former des petites boules, les badigeonner d'huile.
     Cuire 14 minutes à 190 °C à l'airfryer en les retournant.
     Mélanger yaourt, citron et sel. Garnir les pitas de falafels, tomate, concombre et sauce.`,
  ),
  recipe(
    'Nuggets de poulet maison',
    '🍗 plat volaille 30 facile 1 airfryer,four 2',
    'Blanc de poulet 2, Farine 30, Œuf 1, Chapelure 80, Paprika, Frites surgelées 300, Ketchup, Sel',
    `Couper le poulet en morceaux, saler.
     Les passer dans la farine, l'œuf battu puis la chapelure au paprika.
     Cuire 12 minutes à 190 °C à l'airfryer (ou 18 minutes au four à 210 °C), en retournant à mi-cuisson.
     Servir avec les frites et le ketchup.`,
  ),
  recipe(
    'Escalopes de dinde panées & purée',
    '🥩 plat volaille 35 facile 1 poele,casserole 2',
    'Escalope de dinde 2, Farine 30, Œuf 1, Chapelure 60, Pomme de terre 600, Lait 150, Beurre 40, Citron 0.5, Muscade, Huile de tournesol, Sel',
    `Cuire les pommes de terre épluchées 20 minutes à l'eau salée, les écraser avec 30 g de beurre et le lait chaud ; muscader.
     Paner les escalopes : farine, œuf, chapelure.
     Les dorer 3 minutes par face dans l'huile et un peu de beurre.
     Servir avec la purée et un quartier de citron.`,
  ),
  recipe(
    'Boulettes de bœuf sauce tomate & spaghetti',
    '🍝 plat viande 40 facile 1 poele,casserole 2',
    'Steak haché 300, Œuf 1, Chapelure 30, Parmesan 30, Ail 1, Persil 1, Coulis de tomate 400, Basilic 1, Spaghetti 200, Huile d\'olive, Sel, Poivre',
    `Mélanger viande, œuf, chapelure, parmesan, ail et persil hachés, sel et poivre ; former des boulettes.
     Les dorer de tous côtés dans l'huile.
     Verser le coulis, couvrir et laisser mijoter 15 minutes.
     Cuire les spaghetti et servir avec la sauce et le basilic.`,
  ),
  recipe(
    'Keftas à l\'airfryer & semoule aux herbes',
    '🧆 plat viande 30 facile 2 airfryer 2',
    'Steak haché 300, Oignon 0.5, Cumin, Ras el hanout, Coriandre 1, Menthe 1, Semoule 150, Yaourt grec 100, Citron 0.5, Huile d\'olive, Sel',
    `Mélanger viande, oignon râpé, épices, la moitié des herbes et du sel ; former des petits boudins.
     Cuire 10 minutes à 200 °C à l'airfryer.
     Verser autant d'eau bouillante salée que de semoule, couvrir 5 minutes, égrainer avec un filet d'huile et le reste des herbes.
     Servir avec le yaourt citronné.`,
  ),
  recipe(
    'Pad thaï aux crevettes',
    '🍜 plat poisson 30 moyen 2 poele 2',
    'Nouilles de riz 150, Crevette 200, Œuf 2, Pousses de soja 100, Oignon nouveau 1, Cacahuètes 30, Citron vert 1, Sauce soja 30, Sucre roux 15, Ail 1, Huile de tournesol, Coriandre 1',
    `Réhydrater les nouilles 10 minutes dans l'eau chaude, égoutter.
     Mélanger soja, sucre et jus d'un demi citron vert.
     Sauter ail et crevettes 2 minutes dans l'huile, pousser sur le côté et brouiller les œufs.
     Ajouter nouilles et sauce, mélanger 2 minutes, puis les pousses de soja et l'oignon nouveau.
     Servir avec cacahuètes concassées, coriandre et citron vert.`,
  ),
  recipe(
    'Nouilles sautées au poulet & légumes',
    '🍜 plat volaille 25 facile 1 poele 2',
    'Nouilles chinoises 150, Blanc de poulet 1, Carotte 1, Poivron 1, Chou vert 0.25, Sauce soja 30, Huile de sésame, Ail 1, Gingembre frais 10, Huile de tournesol',
    `Cuire les nouilles selon le paquet, égoutter.
     Saisir le poulet en lanières à feu vif, réserver.
     Sauter ail, gingembre et légumes en julienne 4 minutes : ils doivent rester croquants.
     Remettre poulet et nouilles, arroser de soja et d'huile de sésame, mélanger 1 minute.`,
  ),
  recipe(
    'Riz cantonais',
    '🍚 plat viande 25 facile 1 poele 2',
    'Riz 150, Œuf 2, Jambon blanc 2, Petits pois surgelés 100, Oignon nouveau 1, Sauce soja 20, Huile de tournesol',
    `Cuire le riz la veille ou au moins 1 heure avant, et le laisser refroidir (il saute mieux).
     Brouiller les œufs dans l'huile chaude, réserver.
     Faire sauter le riz, les petits pois et le jambon en dés 5 minutes à feu vif.
     Ajouter les œufs, le soja et l'oignon nouveau.`,
  ),
  recipe(
    'Bœuf sauté aux oignons & riz',
    '🥢 plat viande 25 facile 2 poele 2',
    'Bœuf émincé 300, Oignon 2, Sauce soja 30, Maïzena 5, Gingembre frais 10, Riz 150, Huile de tournesol, Graines de sésame 5',
    `Cuire le riz. Mélanger le bœuf avec 1 c. à s. de soja et la maïzena.
     Saisir le bœuf 2 minutes à feu très vif, réserver.
     Sauter les oignons en lamelles et le gingembre 4 minutes.
     Remettre le bœuf avec le reste de soja, mélanger et servir sur le riz, avec le sésame.`,
  ),
  recipe(
    'Porc au caramel & riz',
    '🍖 plat viande 40 facile 1 poele 2',
    'Échine de porc 350, Sucre 40, Sauce soja 30, Oignon 1, Ail 1, Riz 150, Oignon nouveau 1, Poivre',
    `Cuire le riz. Couper le porc en cubes.
     Faire un caramel blond avec le sucre et 2 c. à s. d'eau, ajouter oignon et ail émincés.
     Ajouter le porc, le soja et 10 cl d'eau, couvrir et cuire 25 minutes.
     Découvrir et laisser réduire jusqu'à ce que la sauce soit sirupeuse. Poivrer, parsemer d'oignon nouveau.`,
  ),
  recipe(
    'Dahl de lentilles corail',
    '🍛 plat vege 30 facile 1 casserole 2',
    'Lentilles corail 150, Lait de coco 200, Tomates concassées 1, Oignon 1, Ail 1, Gingembre frais 10, Curry, Curcuma, Épinard frais 80, Riz 150, Coriandre 1, Huile de tournesol, Sel',
    `Faire revenir oignon, ail et gingembre, puis les épices 1 minute.
     Ajouter lentilles rincées, tomates, lait de coco et 30 cl d'eau.
     Cuire 20 minutes en remuant, saler, ajouter les épinards à la fin.
     Servir avec le riz et la coriandre.`,
  ),
  recipe(
    'Curry de pois chiches & épinards',
    '🥘 plat vege 25 facile 1 casserole 2',
    'Pois chiches 1, Épinards surgelés 200, Lait de coco 200, Tomates concassées 1, Oignon 1, Ail 1, Garam masala, Riz 150, Huile de tournesol, Sel',
    `Cuire le riz.
     Faire revenir oignon et ail, ajouter le garam masala.
     Ajouter tomates, lait de coco, pois chiches égouttés et épinards.
     Laisser mijoter 15 minutes, saler et servir avec le riz.`,
  ),
  recipe(
    'Velouté de potiron',
    '🎃 plat vege 35 facile 1 casserole 2',
    'Potiron 700, Pomme de terre 200, Oignon 1, Bouillon cube 1, Crème liquide 50, Muscade, Pain de campagne 2, Beurre 10, Sel, Poivre',
    `Faire suer l'oignon dans le beurre, ajouter potiron et pomme de terre en cubes.
     Couvrir d'eau avec le bouillon et cuire 25 minutes.
     Mixer avec la crème, ajuster sel, poivre et muscade.
     Servir avec le pain grillé coupé en croûtons.`,
  ),
  recipe(
    'Soupe poireaux pommes de terre',
    '🥣 plat vege 35 facile 1 casserole 2',
    'Poireau 2, Pomme de terre 300, Oignon 1, Bouillon cube 1, Beurre 15, Crème fraîche 30, Sel, Poivre',
    `Émincer les poireaux et l'oignon, les faire fondre 5 minutes dans le beurre.
     Ajouter les pommes de terre en dés, couvrir d'un litre d'eau et le bouillon.
     Cuire 25 minutes, mixer ou laisser en morceaux, ajouter la crème.`,
  ),
  recipe(
    'Soupe à l\'oignon gratinée',
    '🧅 plat vege 60 facile 1 casserole,four 2',
    'Oignon 4, Beurre 30, Farine 15, Vin blanc 100, Bouillon cube 2, Baguette 0.5, Gruyère râpé 80, Sel, Poivre',
    `Émincer les oignons et les faire caraméliser 25 minutes dans le beurre à feu doux.
     Saupoudrer de farine, déglacer au vin blanc, ajouter 1 litre de bouillon et cuire 20 minutes.
     Répartir dans des bols allant au four, couvrir de tranches de baguette et de gruyère.
     Gratiner 5 minutes sous le gril.`,
  ),
  recipe(
    'Shakshuka',
    '🍳 plat vege 25 facile 1 poele 2',
    'Œuf 4, Tomates concassées 1, Poivron 1, Oignon 1, Ail 1, Cumin, Paprika, Feta 60, Coriandre 1, Pain pita 2, Huile d\'olive, Sel',
    `Faire fondre oignon et poivron émincés 8 minutes dans l'huile avec l'ail.
     Ajouter épices et tomates, laisser réduire 10 minutes, saler.
     Creuser quatre puits, y casser les œufs, couvrir et cuire 6 minutes : les blancs doivent être pris, les jaunes coulants.
     Émietter la feta, parsemer de coriandre et servir avec le pain.`,
  ),
  recipe(
    'Omelette aux champignons & salade',
    '🍳 plat vege 15 facile 1 poele 2',
    'Œuf 5, Champignon de Paris 200, Ciboulette 1, Beurre 20, Gruyère râpé 40, Salade verte 0.5, Vinaigre de vin, Huile d\'olive, Sel, Poivre',
    `Faire sauter les champignons émincés dans la moitié du beurre jusqu'à ce qu'ils soient dorés.
     Battre les œufs avec sel, poivre et ciboulette.
     Cuire l'omelette dans le reste du beurre, ajouter champignons et gruyère, plier.
     Servir avec la salade assaisonnée.`,
  ),
  recipe(
    'Frittata courgette & feta',
    '🥚 plat vege 25 facile 1 poele,four 2',
    'Œuf 5, Courgette 1, Feta 80, Menthe 1, Oignon nouveau 1, Huile d\'olive, Sel, Poivre',
    `Faire dorer la courgette en fines rondelles 5 minutes dans une poêle allant au four.
     Battre les œufs avec la menthe, l'oignon nouveau, sel et poivre, verser sur la courgette.
     Émietter la feta, cuire 5 minutes à feu doux.
     Finir 8 minutes sous le gril du four, jusqu'à ce que le dessus soit pris.`,
  ),
  recipe(
    'Pizza margherita maison',
    '🍕 plat vege 25 facile 1 four 2',
    'Pâte à pizza 1, Coulis de tomate 150, Mozzarella 1, Basilic 1, Origan, Huile d\'olive, Sel',
    `Préchauffer le four à sa température maximale avec la plaque à l'intérieur.
     Étaler la pâte, la couvrir de coulis assaisonné d'origan et de sel.
     Répartir la mozzarella égouttée et déchirée.
     Cuire 10 à 12 minutes, ajouter le basilic et un filet d'huile.`,
  ),
  recipe(
    'Pizza chorizo, poivron & oignon rouge',
    '🍕 plat viande 25 facile 2 four 2',
    'Pâte à pizza 1, Coulis de tomate 150, Mozzarella 1, Chorizo 60, Poivron 1, Oignon rouge 0.5, Origan',
    `Préchauffer le four au maximum avec la plaque.
     Étaler la pâte et le coulis, ajouter mozzarella, chorizo en rondelles, poivron et oignon émincés.
     Parsemer d'origan et cuire 12 minutes.`,
  ),
  recipe(
    'Flammekueche',
    '🥓 plat viande 25 facile 1 four 2',
    'Pâte à pizza 1, Fromage blanc 100, Crème fraîche 80, Lardons fumés 120, Oignon 1, Muscade, Sel, Poivre',
    `Préchauffer le four au maximum.
     Mélanger fromage blanc et crème, saler, poivrer, muscader.
     Étaler la pâte très finement, la couvrir de ce mélange.
     Répartir l'oignon en fines lamelles et les lardons, cuire 10 à 12 minutes.`,
  ),
  recipe(
    'Wraps de poulet croustillant & crudités',
    '🌯 plat volaille 25 facile 1 airfryer,poele 2',
    'Blanc de poulet 2, Chapelure 50, Œuf 1, Paprika, Tortilla de blé 4, Salade verte 0.25, Tomate 1, Carotte 1, Cheddar 60, Mayonnaise, Sel',
    `Couper le poulet en lanières, les passer dans l'œuf puis dans la chapelure au paprika et au sel.
     Cuire 10 minutes à 200 °C à l'airfryer (ou dorer à la poêle dans un peu d'huile).
     Râper la carotte et le cheddar, émincer salade et tomate.
     Garnir les tortillas, ajouter une cuillère de mayonnaise et rouler serré.`,
  ),
  recipe(
    'Salade César au poulet',
    '🥗 plat volaille 25 facile 2 poele 2',
    'Blanc de poulet 2, Salade verte 1, Pain de mie 2, Parmesan 40, Œuf 1, Mayonnaise, Citron 0.5, Ail 1, Sauce Worcestershire, Huile d\'olive, Sel',
    `Cuire l'œuf 10 minutes à l'eau bouillante.
     Dorer le poulet à la poêle 6 minutes par face, le trancher.
     Faire griller le pain en cubes dans la même poêle avec un peu d'huile.
     Sauce : mayonnaise, citron, ail râpé, Worcestershire et la moitié du parmesan.
     Mélanger salade, sauce, poulet, croûtons, œuf en quartiers et copeaux de parmesan.`,
  ),
  recipe(
    'Salade niçoise',
    '🥗 plat poisson 25 facile 2 casserole 2',
    'Thon en boîte 1, Œuf 2, Pomme de terre 250, Haricot vert 150, Tomate 2, Olives noires 30, Salade verte 0.5, Oignon rouge 0.5, Vinaigre de vin, Huile d\'olive, Sel, Poivre',
    `Cuire les pommes de terre 20 minutes, les haricots verts 8 minutes et les œufs 10 minutes.
     Préparer une vinaigrette.
     Disposer salade, pommes de terre, haricots, tomates en quartiers, thon, œufs, olives et oignon.
     Arroser de vinaigrette au moment de servir.`,
  ),
  recipe(
    'Taboulé libanais',
    '🌿 plat vege 20 facile 1 sans-cuisson 2',
    'Boulgour 80, Persil 2, Menthe 1, Tomate 3, Oignon nouveau 1, Citron 2, Huile d\'olive, Sel',
    `Rincer le boulgour et le laisser gonfler 15 minutes dans le jus des citrons et un peu d'eau froide.
     Hacher finement le persil et la menthe, couper les tomates en petits dés.
     Mélanger le tout avec l'oignon nouveau, beaucoup d'huile d'olive et du sel.
     Servir frais : c'est une salade d'herbes, le persil doit dominer.`,
  ),
  recipe(
    'Salade de lentilles, chèvre & noix',
    '🥗 plat vege 30 facile 1 casserole 2',
    'Lentilles 150, Chèvre frais 100, Noix 30, Échalote 1, Carotte 1, Persil 1, Moutarde, Vinaigre de vin, Huile d\'olive, Sel, Poivre',
    `Cuire les lentilles 20 minutes avec la carotte en dés, sans saler, puis égoutter.
     Préparer une vinaigrette moutardée avec l'échalote hachée.
     Mélanger les lentilles tièdes à la vinaigrette, ajouter persil et noix concassées.
     Émietter le chèvre au moment de servir.`,
  ),
  recipe(
    'Buddha bowl patate douce & pois chiches',
    '🥙 plat vege 35 facile 1 four,airfryer 2',
    'Patate douce 1, Pois chiches 1, Quinoa 120, Avocat 1, Chou rouge 0.25, Épinard frais 50, Paprika, Cumin, Yaourt grec 80, Citron 1, Huile d\'olive, Sel',
    `Cuire le quinoa 12 minutes dans deux fois son volume d'eau salée.
     Rôtir patate douce en cubes et pois chiches égouttés avec huile, paprika, cumin et sel : 25 minutes au four à 200 °C ou 18 minutes à l'airfryer.
     Émincer finement le chou rouge, trancher l'avocat.
     Composer les bols et napper de yaourt au citron.`,
  ),
  recipe(
    'Poke bowl au saumon',
    '🍣 plat poisson 25 facile 3 casserole 2',
    'Pavé de saumon 2, Riz rond 150, Avocat 1, Concombre 0.5, Radis 0.5, Mangue 0.5, Sauce soja 30, Vinaigre de cidre, Sucre, Graines de sésame 10, Oignon nouveau 1',
    `Cuire le riz, l'assaisonner d'un peu de vinaigre et de sucre, laisser tiédir.
     Retirer la peau du saumon très frais et le couper en dés, le mariner 10 minutes dans le soja.
     Couper avocat, concombre, radis et mangue.
     Composer les bols sur le riz, parsemer de sésame et d'oignon nouveau.`,
  ),
  recipe(
    'Gratin de courgettes',
    '🥒 plat vege 45 facile 1 four 2',
    'Courgette 3, Œuf 2, Crème fraîche 100, Gruyère râpé 80, Ail 1, Muscade, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Faire revenir les courgettes en rondelles 8 minutes avec l'ail, saler.
     Les étaler dans un plat, couvrir d'œufs battus avec la crème, muscade et poivre.
     Parsemer de gruyère et cuire 25 minutes.`,
  ),
  recipe(
    'Gratin de chou-fleur',
    '🥦 plat vege 45 facile 1 casserole,four 2',
    'Chou-fleur 1, Beurre 30, Farine 30, Lait 400, Muscade, Gruyère râpé 80, Sel, Poivre',
    `Cuire le chou-fleur en bouquets 10 minutes dans l'eau salée, bien égoutter.
     Préparer une béchamel : beurre, farine, lait en fouettant ; saler, poivrer, muscader.
     Préchauffer le four à 200 °C, napper le chou-fleur de béchamel et de gruyère.
     Gratiner 20 minutes.`,
  ),
  recipe(
    'Endives au jambon',
    '🥬 plat viande 60 facile 1 casserole,four 2',
    'Endive 4, Jambon blanc 4, Beurre 30, Farine 30, Lait 400, Gruyère râpé 80, Muscade, Sel, Poivre',
    `Cuire les endives 20 minutes dans l'eau salée, les presser pour en retirer l'eau.
     Préparer une béchamel avec beurre, farine et lait, assaisonner.
     Préchauffer le four à 200 °C, rouler chaque endive dans une tranche de jambon.
     Napper de béchamel et de gruyère, gratiner 25 minutes.`,
  ),
  recipe(
    'Quiche saumon & poireaux',
    '🥧 plat poisson 55 facile 2 four 4',
    'Pâte brisée 1, Pavé de saumon 2, Poireau 2, Œuf 3, Crème fraîche 200, Lait 100, Gruyère râpé 60, Beurre 15, Sel, Poivre',
    `Préchauffer le four à 180 °C et foncer un moule avec la pâte.
     Faire fondre les poireaux émincés 10 minutes dans le beurre.
     Battre œufs, crème et lait, saler, poivrer.
     Répartir poireaux et saumon en dés sur la pâte, verser l'appareil, parsemer de gruyère.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Tarte fine tomate & moutarde',
    '🍅 plat vege 40 facile 1 four 2',
    'Pâte brisée 1, Tomate 4, Moutarde 40, Comté 60, Herbes de Provence, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C, étaler la pâte dans un moule.
     Tartiner le fond de moutarde, parsemer de comté râpé.
     Recouvrir de tomates en rondelles, herbes, sel, poivre et un filet d'huile.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Cake jambon & olives',
    '🍞 plat viande 60 facile 1 four 4',
    'Farine 200, Levure chimique 1, Œuf 3, Lait 100, Huile d\'olive 100, Jambon blanc 3, Olives vertes 80, Gruyère râpé 100, Salade verte 1, Sel, Poivre',
    `Préchauffer le four à 180 °C et chemiser un moule à cake.
     Mélanger farine et levure, ajouter les œufs un à un, puis le lait et l'huile.
     Incorporer jambon en dés, olives et gruyère, saler, poivrer.
     Cuire 45 minutes et servir tiède avec la salade.`,
  ),
  recipe(
    'Gnocchis gratinés tomate & mozzarella',
    '🍅 plat vege 30 facile 1 four 2',
    'Gnocchis 500, Coulis de tomate 300, Mozzarella 1, Basilic 1, Ail 1, Parmesan 20, Huile d\'olive, Sel',
    `Préchauffer le four à 210 °C.
     Mélanger gnocchis crus, coulis, ail haché, un filet d'huile et du sel dans un plat.
     Couvrir de mozzarella et de parmesan.
     Cuire 20 minutes et parsemer de basilic.`,
  ),
  recipe(
    'Pâtes au pesto, tomates cerises & burrata',
    '🍝 plat vege 15 facile 2 casserole 2',
    'Penne 200, Pesto 70, Tomate cerise 200, Burrata 1, Basilic 1, Huile d\'olive, Sel, Poivre',
    `Cuire les pâtes dans l'eau salée.
     Couper les tomates cerises en deux.
     Mélanger pâtes égouttées, pesto et un peu d'eau de cuisson, ajouter les tomates.
     Servir avec la burrata ouverte au centre, basilic, poivre et un filet d'huile.`,
  ),
  recipe(
    'Penne all\'arrabbiata',
    '🌶️ plat vege 20 facile 1 casserole 2',
    'Penne 200, Tomates concassées 1, Ail 2, Piment, Persil 1, Parmesan 20, Huile d\'olive, Sel',
    `Faire chauffer doucement l'ail émincé et le piment dans l'huile sans les colorer.
     Ajouter les tomates, saler et laisser réduire 12 minutes.
     Cuire les penne, les mélanger à la sauce avec le persil.
     Servir avec le parmesan.`,
  ),
  recipe(
    'Tagliatelles au saumon',
    '🐟 plat poisson 20 facile 2 casserole,poele 2',
    'Tagliatelles 200, Pavé de saumon 2, Crème liquide 150, Citron 0.5, Aneth 1, Échalote 1, Beurre 10, Sel, Poivre',
    `Cuire les tagliatelles.
     Faire suer l'échalote dans le beurre, ajouter le saumon en dés 3 minutes.
     Verser la crème, le zeste et le jus du demi-citron, laisser frémir 2 minutes.
     Mélanger aux pâtes avec l'aneth, poivrer.`,
  ),
  recipe(
    'One pot pasta tomate & basilic',
    '🍝 plat vege 20 facile 1 casserole 2',
    'Spaghetti 200, Tomate cerise 250, Oignon 1, Ail 2, Basilic 1, Parmesan 30, Huile d\'olive, Sel, Poivre',
    `Mettre dans une grande casserole les spaghetti crus, les tomates coupées, l'oignon émincé, l'ail, la moitié du basilic, un filet d'huile.
     Couvrir de 60 cl d'eau, saler et porter à ébullition.
     Cuire 10 à 12 minutes en remuant souvent : l'eau doit être presque entièrement absorbée.
     Servir avec parmesan, poivre et le reste du basilic.`,
  ),
  recipe(
    'Mac & cheese gratiné',
    '🧀 plat vege 35 facile 1 casserole,four 2',
    'Coquillettes 200, Cheddar 120, Beurre 25, Farine 25, Lait 400, Moutarde, Chapelure 20, Sel, Poivre',
    `Cuire les pâtes 2 minutes de moins qu'indiqué.
     Préparer une béchamel avec beurre, farine et lait, y fondre le cheddar et une pointe de moutarde.
     Préchauffer le four à 200 °C, mélanger pâtes et sauce dans un plat.
     Parsemer de chapelure et gratiner 15 minutes.`,
  ),
  recipe(
    'Risotto aux champignons',
    '🍄 plat vege 35 moyen 2 casserole 2',
    'Riz arborio 160, Champignon de Paris 250, Échalote 1, Vin blanc 80, Bouillon cube 1, Parmesan 40, Beurre 30, Persil 1, Sel, Poivre',
    `Faire dorer les champignons émincés dans la moitié du beurre, réserver.
     Faire suer l'échalote, nacrer le riz 2 minutes, déglacer au vin blanc.
     Ajouter 75 cl de bouillon chaud louche par louche en remuant, 18 minutes.
     Hors du feu, ajouter champignons, reste de beurre et parmesan ; couvrir 2 minutes et servir avec le persil.`,
  ),
  recipe(
    'Paëlla express poulet, chorizo & crevettes',
    '🥘 plat volaille 45 moyen 2 poele 4',
    'Riz rond 300, Cuisse de poulet 4, Chorizo 100, Crevette 200, Poivron 1, Oignon 1, Tomates concassées 1, Petits pois surgelés 100, Curcuma, Paprika, Bouillon cube 1, Citron 1, Huile d\'olive, Sel',
    `Dorer le poulet en morceaux dans une grande poêle huilée, puis le chorizo, réserver.
     Faire revenir oignon et poivron, ajouter tomates, épices et riz.
     Mouiller avec 80 cl de bouillon, remettre la viande et cuire 18 minutes sans remuer.
     Ajouter crevettes et petits pois les 6 dernières minutes. Servir avec le citron.`,
  ),
  recipe(
    'Couscous poulet & merguez',
    '🥘 plat volaille 70 moyen 2 casserole,poele 4',
    'Cuisse de poulet 4, Merguez 4, Carotte 3, Courgette 2, Navet 2, Oignon 1, Pois chiches 1, Concentré de tomate 30, Ras el hanout, Semoule 300, Beurre 20, Harissa, Huile d\'olive, Sel',
    `Dorer le poulet dans une cocotte avec l'oignon, ajouter concentré et ras el hanout.
     Couvrir d'1,5 L d'eau, ajouter carottes et navets, cuire 30 minutes.
     Ajouter courgettes et pois chiches, 15 minutes de plus ; saler.
     Griller les merguez à la poêle. Préparer la semoule au beurre.
     Servir avec le bouillon et la harissa à part.`,
  ),
  recipe(
    'Tajine de poulet citron & olives',
    '🫒 plat volaille 60 moyen 2 casserole 4',
    'Cuisse de poulet 4, Oignon 2, Citron 2, Olives vertes 100, Ail 2, Gingembre en poudre, Curcuma, Coriandre 1, Semoule 300, Huile d\'olive, Sel',
    `Dorer les cuisses dans l'huile avec les oignons émincés et l'ail.
     Ajouter épices, 30 cl d'eau, sel, couvrir et cuire 35 minutes.
     Ajouter olives et citron en quartiers, 15 minutes à découvert.
     Servir avec la semoule et la coriandre.`,
  ),
  recipe(
    'Poulet rôti & pommes de terre fondantes',
    '🍗 plat volaille 90 facile 2 four 4',
    'Poulet entier 1, Pomme de terre 1000, Ail 4, Thym, Beurre 30, Citron 1, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C. Saler et poivrer le poulet, glisser le citron et le thym à l'intérieur.
     Le badigeonner de beurre, le poser dans un plat entouré des pommes de terre en morceaux et de l'ail.
     Cuire 1 h 15 en arrosant toutes les 20 minutes.
     Laisser reposer 10 minutes avant de découper.`,
  ),
  recipe(
    'Filet mignon à la moutarde',
    '🐖 plat viande 45 moyen 3 four 2',
    'Filet mignon de porc 400, Moutarde 40, Crème fraîche 150, Pomme de terre 500, Échalote 1, Vin blanc 50, Thym, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 200 °C. Rôtir les pommes de terre en quartiers avec huile, thym et sel, 35 minutes.
     Dorer le filet mignon sur toutes les faces, puis le finir 20 minutes au four.
     Dans la poêle, faire suer l'échalote, déglacer au vin, ajouter crème et moutarde.
     Trancher la viande et la napper de sauce.`,
  ),
  recipe(
    'Côtes de porc & purée maison',
    '🐖 plat viande 35 facile 1 poele,casserole 2',
    'Côte de porc 2, Pomme de terre 600, Lait 150, Beurre 40, Thym, Huile de tournesol, Sel, Poivre',
    `Cuire les pommes de terre épluchées 20 minutes, les écraser avec 30 g de beurre et le lait chaud.
     Saisir les côtes 4 minutes par face dans l'huile, ajouter le reste de beurre et le thym.
     Les arroser du beurre mousseux 1 minute, laisser reposer 3 minutes.`,
  ),
  recipe(
    'Saucisses & lentilles mijotées',
    '🌭 plat viande 45 facile 1 casserole 2',
    'Saucisse 4, Lentilles 200, Carotte 2, Oignon 1, Lardons 80, Bouillon cube 1, Laurier, Thym, Moutarde, Sel, Poivre',
    `Dorer les saucisses et les lardons dans une cocotte, ajouter l'oignon émincé.
     Ajouter lentilles, carottes en rondelles, laurier, thym et 70 cl de bouillon.
     Cuire 30 minutes à couvert, jusqu'à ce que les lentilles soient tendres.
     Servir avec la moutarde.`,
  ),
  recipe(
    'Steak, frites à l\'airfryer & salade',
    '🥩 plat viande 30 facile 2 poele,airfryer 2',
    'Steak de bœuf 2, Pomme de terre 500, Salade verte 0.5, Beurre 15, Échalote 1, Huile de tournesol, Vinaigre de vin, Sel, Poivre',
    `Couper les pommes de terre en frites, les rincer, sécher et enrober d'une cuillère d'huile.
     Les cuire 22 minutes à 200 °C à l'airfryer en secouant souvent ; saler.
     Saisir les steaks à feu très vif 2 à 3 minutes par face, finir avec le beurre.
     Servir avec la salade à l'échalote.`,
  ),
  recipe(
    'Chili sin carne',
    '🌶️ plat vege 40 facile 1 casserole 4',
    'Haricots rouges 2, Lentilles corail 100, Tomates concassées 2, Maïs en boîte 1, Oignon 1, Poivron 1, Ail 2, Cumin, Paprika, Piment, Riz 300, Huile d\'olive, Sel',
    `Faire revenir oignon, poivron et ail, ajouter les épices.
     Ajouter tomates, lentilles corail, 30 cl d'eau, haricots et maïs égouttés.
     Mijoter 25 minutes en remuant, saler.
     Servir avec le riz.`,
  ),
  recipe(
    'Fajitas de poulet',
    '🌮 plat volaille 25 facile 2 poele 2',
    'Blanc de poulet 2, Poivron 2, Oignon 1, Tortilla de blé 4, Cumin, Paprika, Citron vert 1, Crème fraîche 60, Cheddar 60, Huile de tournesol, Sel',
    `Couper poulet, poivrons et oignon en lanières.
     Saisir le poulet avec les épices, ajouter les légumes et cuire 8 minutes : ils doivent rester un peu croquants.
     Arroser de citron vert, saler.
     Servir dans les tortillas chaudes avec crème et cheddar râpé.`,
  ),
  recipe(
    'Galette saumon fumé & fromage frais',
    '🥞 plat poisson 15 facile 2 poele 2',
    'Galette de sarrasin 2, Saumon fumé 4, Fromage frais 80, Épinard frais 60, Citron 0.5, Aneth 1, Beurre 10, Poivre',
    `Chauffer une galette dans une poêle beurrée.
     Tartiner de fromage frais, ajouter pousses d'épinard et saumon.
     Replier les bords au carré et laisser 2 minutes.
     Finir avec citron, aneth et poivre. Recommencer pour la seconde.`,
  ),
  recipe(
    'Halloumi grillé & salade de quinoa',
    '🧀 plat vege 25 facile 2 poele 2',
    'Halloumi 200, Quinoa 120, Concombre 0.5, Tomate cerise 150, Menthe 1, Citron 1, Huile d\'olive, Sel',
    `Cuire le quinoa 12 minutes, l'égoutter et le laisser tiédir.
     Mélanger avec concombre en dés, tomates, menthe, citron et huile ; saler.
     Griller l'halloumi en tranches 2 minutes par face dans une poêle sans matière grasse.
     Servir sur la salade.`,
  ),
  recipe(
    'Tofu sauté au sésame & brocoli',
    '🥦 plat vege 25 facile 1 poele 2',
    'Tofu 300, Brocoli 1, Sauce soja 30, Miel 10, Ail 1, Gingembre frais 10, Maïzena 10, Graines de sésame 10, Riz 150, Huile de tournesol',
    `Cuire le riz. Couper le tofu en cubes, les rouler dans la maïzena.
     Les dorer dans l'huile 8 minutes, réserver.
     Sauter le brocoli en petits bouquets 5 minutes avec un fond d'eau, ajouter ail et gingembre.
     Remettre le tofu avec soja et miel, laisser napper, parsemer de sésame.`,
  ),
  recipe(
    'Tortellini crème & jambon',
    '🍝 plat viande 15 facile 1 casserole 2',
    'Tortellini 300, Jambon blanc 2, Crème liquide 150, Parmesan 30, Petits pois surgelés 100, Poivre',
    `Cuire tortellini et petits pois ensemble dans l'eau salée.
     Égoutter, remettre dans la casserole avec la crème et le jambon en lanières.
     Chauffer 2 minutes, ajouter le parmesan et poivrer.`,
  ),
  recipe(
    'Butter chicken',
    '🍛 plat volaille 40 moyen 2 poele 2',
    'Blanc de poulet 2, Yaourt nature 1, Garam masala, Curcuma, Ail 2, Gingembre frais 10, Oignon 1, Coulis de tomate 200, Crème liquide 100, Beurre 30, Riz 150, Coriandre 1, Sel',
    `Mariner le poulet en cubes 15 minutes dans le yaourt avec la moitié des épices et du sel.
     Le dorer dans la moitié du beurre, réserver.
     Faire fondre oignon, ail et gingembre dans le reste du beurre, ajouter le reste d'épices et le coulis.
     Cuire 10 minutes, ajouter crème et poulet, 5 minutes encore.
     Servir avec le riz et la coriandre.`,
  ),
  recipe(
    'Bœuf Stroganoff',
    '🍲 plat viande 30 moyen 3 poele 2',
    'Bœuf émincé 350, Champignon de Paris 200, Oignon 1, Paprika, Crème fraîche 150, Moutarde, Tagliatelles 200, Beurre 20, Sel, Poivre',
    `Cuire les tagliatelles.
     Saisir le bœuf à feu vif 2 minutes, réserver.
     Faire revenir oignon et champignons dans le beurre, ajouter le paprika.
     Ajouter crème et moutarde, remettre le bœuf 1 minute ; saler, poivrer, servir sur les pâtes.`,
  ),
  recipe(
    'Croquettes de thon à l\'airfryer',
    '🐟 plat poisson 30 facile 1 airfryer 2',
    'Thon en boîte 2, Pomme de terre 300, Œuf 1, Persil 1, Chapelure 50, Citron 0.5, Salade verte 0.5, Mayonnaise, Sel, Poivre',
    `Cuire les pommes de terre et les écraser.
     Mélanger avec le thon égoutté, l'œuf, le persil, le zeste de citron, sel et poivre.
     Former des galettes, les rouler dans la chapelure.
     Cuire 12 minutes à 200 °C à l'airfryer. Servir avec la salade et la mayonnaise citronnée.`,
  ),
  recipe(
    'Courgettes farcies à la viande',
    '🥒 plat viande 50 facile 1 four 2',
    'Courgette 2, Steak haché 250, Oignon 1, Ail 1, Tomates concassées 1, Riz 60, Gruyère râpé 50, Herbes de Provence, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 190 °C. Couper les courgettes en deux et les évider.
     Faire revenir oignon, ail, la chair hachée et la viande ; ajouter herbes, sel, poivre.
     Garnir les courgettes, les poser sur les tomates concassées mélangées au riz cru et à 15 cl d'eau.
     Parsemer de gruyère et cuire 35 minutes.`,
  ),
  recipe(
    'Tomates farcies',
    '🍅 plat viande 60 facile 1 four 4',
    'Tomate 8, Échine de porc 400, Oignon 1, Ail 1, Persil 1, Œuf 1, Chapelure 30, Riz 120, Huile d\'olive, Sel, Poivre',
    `Préchauffer le four à 180 °C. Décalotter et évider les tomates, garder la pulpe.
     Hacher la viande avec oignon, ail, persil ; ajouter œuf, chapelure, sel, poivre.
     Farcir les tomates, remettre les chapeaux.
     Mettre le riz cru et la pulpe au fond du plat avec 20 cl d'eau, poser les tomates et cuire 45 minutes.`,
  ),
  recipe(
    'Poivrons farcis au riz & feta',
    '🫑 plat vege 50 facile 1 four 2',
    'Poivron 2, Riz 100, Feta 100, Tomate 1, Oignon 0.5, Origan, Olives noires 30, Huile d\'olive, Sel, Poivre',
    `Cuire le riz et préchauffer le four à 190 °C.
     Mélanger riz, feta émiettée, tomate et oignon en dés, olives, origan, huile.
     Couper les poivrons en deux, les évider et les garnir.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Pâtes au thon & à la tomate',
    '🍝 plat poisson 20 facile 1 casserole 2',
    'Penne 200, Thon en boîte 1, Tomates concassées 1, Oignon 1, Câpres 15, Olives noires 30, Origan, Huile d\'olive, Sel',
    `Faire revenir l'oignon, ajouter tomates et origan et laisser réduire 10 minutes.
     Ajouter thon émietté, câpres et olives.
     Mélanger avec les pâtes cuites.`,
  ),
  recipe(
    'Salade grecque',
    '🥗 plat vege 15 facile 1 sans-cuisson 2',
    'Tomate 3, Concombre 1, Poivron 1, Oignon rouge 0.5, Feta 150, Olives noires 50, Origan, Huile d\'olive, Vinaigre de vin, Pain pita 2',
    `Couper tomates, concombre et poivron en gros morceaux, l'oignon en fines lamelles.
     Ajouter olives, origan, huile et un trait de vinaigre.
     Poser la feta en tranche épaisse sur le dessus et servir avec le pain.`,
  ),
  recipe(
    'Salade de chèvre chaud',
    '🧀 plat vege 20 facile 2 four,airfryer 2',
    'Bûche de chèvre 150, Baguette 0.5, Miel 15, Salade verte 1, Noix 30, Lardons 80, Vinaigre balsamique, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C (ou l'airfryer à 180 °C).
     Poser des rondelles de chèvre sur des tranches de baguette, un filet de miel.
     Cuire 6 à 8 minutes jusqu'à ce que le fromage soit doré.
     Dorer les lardons à la poêle, les ajouter à la salade avec noix et vinaigrette ; poser les toasts chauds dessus.`,
  ),
  recipe(
    'Club sandwich au poulet',
    '🥪 plat volaille 20 facile 2 poele 2',
    'Pain de mie 6, Blanc de poulet 1, Bacon 4, Tomate 1, Salade verte 0.25, Œuf 2, Mayonnaise, Sel',
    `Cuire le poulet à la poêle et le trancher ; griller le bacon.
     Cuire les œufs durs 10 minutes et les trancher.
     Toaster le pain, tartiner de mayonnaise.
     Monter sur trois étages : salade, poulet, tomate / œuf, bacon. Couper en triangles.`,
  ),
  recipe(
    'Gaspacho',
    '🍅 plat vege 15 facile 1 sans-cuisson 2',
    'Tomate 5, Concombre 0.5, Poivron 0.5, Oignon rouge 0.25, Ail 1, Pain de mie 1, Vinaigre de vin, Huile d\'olive, Sel',
    `Mixer tous les légumes en morceaux avec le pain, l'ail, 3 c. à s. d'huile et 1 de vinaigre.
     Saler, ajouter un peu d'eau froide si c'est trop épais.
     Réserver au frais au moins 1 heure : il se sert très froid.`,
  ),
  recipe(
    'Cabillaud sauce vierge & riz',
    '🐟 plat poisson 25 facile 2 poele 2',
    'Cabillaud 300, Tomate 2, Basilic 1, Citron 1, Olives noires 20, Riz 150, Huile d\'olive, Sel, Poivre',
    `Cuire le riz.
     Sauce vierge : tomates en petits dés, basilic ciselé, olives, jus de citron, 4 c. à s. d'huile, sel.
     Cuire le poisson 3 minutes par face dans une poêle huilée.
     Servir avec le riz, napper de sauce vierge.`,
  ),
  recipe(
    'Crevettes à l\'ail & tagliatelles',
    '🦐 plat poisson 20 facile 2 poele 2',
    'Crevette 250, Tagliatelles 200, Ail 3, Persil 1, Citron 0.5, Piment, Beurre 20, Huile d\'olive, Sel',
    `Cuire les tagliatelles.
     Faire chauffer l'huile et le beurre avec l'ail émincé et le piment, sans colorer.
     Saisir les crevettes 3 minutes, ajouter persil et jus de citron.
     Mélanger avec les pâtes et un peu d'eau de cuisson.`,
  ),
  recipe(
    'Saumon & brocolis rôtis à l\'airfryer',
    '🐟 plat poisson 20 facile 2 airfryer 2',
    'Pavé de saumon 2, Brocoli 1, Citron 1, Ail 1, Sauce soja 15, Huile d\'olive, Sel',
    `Couper le brocoli en bouquets, l'enrober d'huile, d'ail et de sel.
     Badigeonner le saumon de soja et de jus de citron.
     Cuire le brocoli 5 minutes à 190 °C, ajouter le saumon et poursuivre 10 minutes.`,
  ),
  recipe(
    'Patates douces rôties, feta & pois chiches',
    '🍠 plat vege 35 facile 1 four,airfryer 2',
    'Patate douce 2, Pois chiches 1, Feta 100, Oignon rouge 1, Paprika, Yaourt grec 80, Menthe 1, Huile d\'olive, Sel',
    `Couper les patates douces en quartiers, l'oignon en pétales, ajouter pois chiches égouttés, huile, paprika et sel.
     Rôtir 30 minutes au four à 210 °C (20 minutes à l'airfryer à 200 °C).
     Servir avec la feta émiettée, le yaourt et la menthe.`,
  ),
  recipe(
    'Gnocchis croustillants à l\'airfryer, sauce tomate',
    '🥔 plat vege 25 facile 1 airfryer 2',
    'Gnocchis 500, Coulis de tomate 250, Ail 1, Basilic 1, Mozzarella 1, Huile d\'olive, Sel',
    `Enrober les gnocchis d'une cuillère d'huile.
     Les cuire 15 minutes à 200 °C à l'airfryer en secouant : ils doivent être dorés et croustillants.
     Chauffer le coulis avec l'ail et le sel.
     Servir les gnocchis sur la sauce avec la mozzarella et le basilic.`,
  ),
]
