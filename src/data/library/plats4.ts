import { recipe } from './dsl'

/** Lot 4 : un peu de tout — soirs de semaine, végé, poissons, soupes, tartes et gratins. */
export const PLATS_4 = [
  // ---------------------------------------------------------------- soirs de semaine
  recipe(
    'Pâtes à la crème, jambon & champignons',
    '🍝 plat viande 20 facile 1 casserole,poele 2',
    'Tagliatelles 200, Jambon blanc 3, Champignon de Paris 200, Crème fraîche 120, Échalote 1, Parmesan 20, Beurre 10, Sel, Poivre',
    `Cuire les pâtes.
     Faire revenir échalote et champignons dans le beurre.
     Ajouter jambon en lanières et crème, laisser réduire 3 minutes.
     Mélanger avec les pâtes et le parmesan.`,
  ),
  recipe(
    'Riz au poulet façon cantonaise',
    '🍚 plat volaille 25 facile 1 poele 2',
    'Riz 150, Blanc de poulet 1, Œuf 2, Petits pois surgelés 100, Carotte 1, Oignon nouveau 1, Sauce soja 30, Huile de tournesol',
    `Utiliser du riz cuit et refroidi.
     Saisir le poulet en petits dés, réserver ; brouiller les œufs.
     Sauter carotte en dés et petits pois, ajouter riz, poulet, œufs et soja.
     Parsemer d'oignon nouveau.`,
  ),
  recipe(
    'Gratin de pâtes au jambon & béchamel',
    '🧀 plat viande 35 facile 1 casserole,four 4',
    'Coquillettes 300, Jambon blanc 4, Beurre 30, Farine 30, Lait 500, Gruyère râpé 100, Muscade, Sel, Poivre',
    `Cuire les pâtes 2 minutes de moins qu'indiqué.
     Préparer une béchamel avec beurre, farine et lait, assaisonner.
     Mélanger pâtes, jambon et béchamel, couvrir de gruyère.
     Gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Poulet pané & purée de carottes',
    '🍗 plat volaille 30 facile 1 poele,casserole 2',
    'Blanc de poulet 2, Œuf 1, Chapelure 50, Farine 20, Carotte 5, Beurre 20, Cumin, Huile de tournesol, Sel',
    `Cuire les carottes en rondelles 20 minutes, les mixer avec le beurre et le cumin.
     Paner les blancs aplatis : farine, œuf, chapelure.
     Les dorer 4 minutes par face dans l'huile.`,
  ),
  recipe(
    'Quiche jambon-fromage',
    '🥧 plat viande 50 facile 1 four 4',
    'Pâte brisée 1, Jambon blanc 3, Œuf 3, Crème fraîche 200, Lait 100, Gruyère râpé 100, Muscade, Sel, Poivre',
    `Préchauffer le four à 180 °C et foncer le moule.
     Répartir le jambon en lanières sur la pâte.
     Battre œufs, crème, lait, muscade, sel et poivre, verser.
     Parsemer de gruyère et cuire 35 minutes.`,
  ),
  recipe(
    'Croque-tartines tomate, mozzarella & jambon cru',
    '🍅 plat viande 15 facile 1 four,airfryer 2',
    'Pain de campagne 4, Tomate 2, Mozzarella 1, Jambon cru 4, Pesto 30, Roquette 40',
    `Tartiner le pain de pesto, couvrir de tomate et de mozzarella.
     Cuire 8 minutes à 200 °C (6 minutes à l'airfryer).
     Ajouter jambon cru et roquette en sortie.`,
  ),
  recipe(
    'Œufs cocotte crème & lardons, mouillettes',
    '🥚 plat viande 20 facile 1 four 2',
    'Œuf 4, Crème fraîche 60, Lardons 60, Ciboulette 1, Pain de mie 4, Beurre 10, Salade verte 0.5, Sel, Poivre',
    `Préchauffer le four à 180 °C. Faire dorer les lardons.
     Répartir crème et lardons dans des ramequins beurrés, casser un œuf dans chacun.
     Cuire 10 minutes au bain-marie : le blanc pris, le jaune coulant.
     Servir avec des mouillettes grillées et la salade.`,
  ),
  recipe(
    'Hachis de pommes de terre au jambon & fromage',
    '🥔 plat viande 30 facile 1 poele 2',
    'Pomme de terre 500, Jambon blanc 2, Oignon 1, Gruyère râpé 60, Œuf 2, Persil 1, Huile de tournesol, Sel, Poivre',
    `Râper les pommes de terre et les presser dans un torchon.
     Les faire dorer en galette avec l'oignon 15 minutes à couvert.
     Ajouter jambon et gruyère, creuser deux puits pour les œufs, couvrir 5 minutes.`,
  ),
  recipe(
    'Wraps au thon & œufs durs',
    '🌯 plat poisson 15 facile 1 casserole 2',
    'Tortilla de blé 4, Thon en boîte 1, Œuf 2, Mayonnaise, Salade verte 0.25, Tomate 1, Maïs en boîte 0.5',
    `Cuire les œufs durs 10 minutes.
     Mélanger thon, œufs écrasés, maïs et mayonnaise.
     Garnir les tortillas avec salade et tomate, rouler.`,
  ),
  recipe(
    'Spaghetti aglio e olio & parmesan',
    '🧄 plat vege 15 facile 1 casserole 2',
    'Spaghetti 200, Ail 4, Piment, Persil 1, Parmesan 30, Huile d\'olive 50, Sel',
    `Cuire les spaghetti.
     Chauffer doucement l'huile avec l'ail émincé et le piment, sans colorer.
     Mélanger les pâtes avec l'huile, le persil et un peu d'eau de cuisson.
     Servir avec le parmesan.`,
  ),

  // ---------------------------------------------------------------- végé
  recipe(
    'Lasagnes aux légumes du soleil',
    '🍆 plat vege 70 moyen 1 four 4',
    'Feuilles de lasagne 250, Courgette 2, Aubergine 1, Poivron 1, Coulis de tomate 500, Ricotta 200, Mozzarella 1, Parmesan 40, Basilic 1, Huile d\'olive, Sel',
    `Faire revenir les légumes en dés 15 minutes, ajouter le coulis.
     Alterner feuilles, légumes et ricotta dans un plat.
     Finir par mozzarella et parmesan.
     Cuire 40 minutes à 180 °C.`,
  ),
  recipe(
    'Curry de légumes au lait de coco',
    '🥥 plat vege 35 facile 1 casserole 2',
    'Patate douce 1, Chou-fleur 0.5, Pois chiches 1, Lait de coco 300, Tomates concassées 1, Oignon 1, Pâte de curry 20, Épinard frais 80, Riz 150, Huile de tournesol, Sel',
    `Faire revenir l'oignon et la pâte de curry.
     Ajouter patate douce en cubes, chou-fleur, tomates et lait de coco.
     Cuire 20 minutes, ajouter pois chiches et épinards.
     Servir avec le riz.`,
  ),
  recipe(
    'Gratin de légumes d\'hiver au comté',
    '🧀 plat vege 60 facile 1 four 4',
    'Pomme de terre 500, Carotte 2, Panais 2, Poireau 1, Crème liquide 250, Comté 100, Thym, Sel, Poivre',
    `Préchauffer le four à 180 °C.
     Trancher finement les légumes, les disposer en couches dans un plat.
     Verser la crème assaisonnée, couvrir de comté.
     Cuire 50 minutes.`,
  ),
  recipe(
    'Risotto à la courge butternut',
    '🎃 plat vege 40 moyen 1 casserole 2',
    'Riz arborio 160, Courge butternut 0.5, Oignon 1, Vin blanc 80, Bouillon cube 1, Parmesan 40, Beurre 20, Sel',
    `Faire revenir l'oignon et la courge en petits dés.
     Nacrer le riz, déglacer au vin.
     Ajouter 80 cl de bouillon chaud louche par louche, 18 minutes.
     Finir avec beurre et parmesan.`,
  ),
  recipe(
    'Croquettes de lentilles & salade',
    '🟤 plat vege 40 facile 1 poele,airfryer 2',
    'Lentilles corail 150, Carotte 1, Oignon 0.5, Cumin, Chapelure 40, Œuf 1, Yaourt grec 80, Salade verte 0.5, Huile d\'olive, Sel',
    `Cuire les lentilles 12 minutes dans peu d'eau, bien égoutter.
     Mélanger avec carotte râpée, oignon, cumin, œuf et chapelure.
     Former des galettes, les cuire 4 minutes par face à la poêle ou 12 minutes à l'airfryer.
     Servir avec le yaourt et la salade.`,
  ),
  recipe(
    'Tarte à l\'oignon',
    '🧅 plat vege 60 facile 1 four 4',
    'Pâte brisée 1, Oignon 5, Beurre 30, Œuf 3, Crème fraîche 150, Muscade, Sel, Poivre',
    `Faire fondre les oignons émincés 25 minutes dans le beurre à feu doux.
     Préchauffer le four à 180 °C et foncer le moule.
     Mélanger oignons, œufs, crème, muscade, sel et poivre.
     Verser sur la pâte et cuire 30 minutes.`,
  ),
  recipe(
    'Galettes de quinoa aux légumes',
    '🌱 plat vege 35 facile 1 poele 2',
    'Quinoa 120, Courgette 1, Carotte 1, Œuf 2, Feta 60, Farine 30, Menthe 1, Yaourt grec 80, Huile d\'olive, Sel',
    `Cuire le quinoa et le laisser refroidir.
     Mélanger avec légumes râpés, œufs, feta, farine et menthe.
     Cuire des galettes 3 minutes par face dans l'huile.
     Servir avec le yaourt.`,
  ),
  recipe(
    'Velouté de carottes au cumin',
    '🥕 plat vege 30 facile 1 casserole 2',
    'Carotte 6, Pomme de terre 150, Oignon 1, Cumin, Bouillon cube 1, Crème liquide 50, Pain de campagne 2, Sel',
    `Faire revenir l'oignon, ajouter carottes et pomme de terre en morceaux.
     Couvrir de bouillon et cuire 25 minutes.
     Mixer avec la crème et le cumin.
     Servir avec le pain grillé.`,
  ),
  recipe(
    'Soupe de lentilles corail & coco',
    '🥣 plat vege 30 facile 1 casserole 2',
    'Lentilles corail 150, Lait de coco 200, Carotte 2, Oignon 1, Curry, Gingembre frais 10, Citron vert 1, Coriandre 1, Sel',
    `Faire revenir oignon, gingembre et curry.
     Ajouter lentilles, carottes et 70 cl d'eau, cuire 20 minutes.
     Mixer avec le lait de coco, finir avec citron vert et coriandre.`,
  ),
  recipe(
    'Cannellonis épinards & ricotta',
    '🥬 plat vege 60 moyen 1 four 4',
    'Feuilles de lasagne 250, Épinards surgelés 400, Ricotta 250, Coulis de tomate 500, Parmesan 50, Muscade, Ail 1, Sel',
    `Décongeler et presser les épinards, les mélanger à la ricotta, l'ail, la muscade et la moitié du parmesan.
     Ébouillanter les feuilles, les garnir et les rouler.
     Les poser sur le coulis, napper, parsemer de parmesan.
     Cuire 35 minutes à 180 °C.`,
  ),
  recipe(
    'Œufs mimosa & salade de pommes de terre',
    '🥚 plat vege 30 facile 1 casserole 2',
    'Œuf 6, Mayonnaise, Pomme de terre 400, Ciboulette 1, Moutarde, Salade verte 0.5, Vinaigre de vin, Huile d\'olive, Sel',
    `Cuire les œufs 10 minutes et les pommes de terre 20 minutes.
     Couper les œufs en deux, écraser les jaunes avec mayonnaise et moutarde, regarnir.
     Assaisonner les pommes de terre tièdes de vinaigrette et de ciboulette.`,
  ),
  recipe(
    'Tartiflette végétarienne aux champignons',
    '🍄 plat vege 50 facile 2 four 4',
    'Pomme de terre 1000, Reblochon 1, Champignon de Paris 300, Oignon 2, Crème fraîche 100, Vin blanc 80, Salade verte 1, Poivre',
    `Cuire les pommes de terre et les trancher.
     Faire revenir oignons et champignons, déglacer au vin.
     Mélanger avec pommes de terre et crème, poser le reblochon.
     Cuire 25 minutes à 200 °C.`,
  ),
  recipe(
    'Pâtes aux courgettes, citron & ricotta',
    '🥒 plat vege 20 facile 1 casserole,poele 2',
    'Penne 200, Courgette 2, Ricotta 120, Citron 1, Menthe 1, Parmesan 20, Ail 1, Huile d\'olive, Sel',
    `Cuire les pâtes.
     Sauter les courgettes en dés avec l'ail.
     Mélanger pâtes, courgettes, ricotta, zeste et jus de citron.
     Servir avec menthe et parmesan.`,
  ),
  recipe(
    'Bouddha bowl d\'automne',
    '🍂 plat vege 40 facile 1 four,casserole 2',
    'Courge butternut 0.5, Lentilles 120, Chou rouge 0.25, Pomme 1, Noix 30, Bûche de chèvre 80, Roquette 40, Miel 10, Vinaigre de cidre, Huile d\'olive, Sel',
    `Rôtir la courge en cubes 25 minutes à 200 °C.
     Cuire les lentilles 20 minutes.
     Émincer chou et pomme.
     Composer les bols avec chèvre, noix et une vinaigrette au miel.`,
  ),

  // ---------------------------------------------------------------- poissons
  recipe(
    'Filets de colin à la crème & riz',
    '🐟 plat poisson 25 facile 1 poele,casserole 2',
    'Filet de colin 300, Crème fraîche 100, Échalote 1, Citron 0.5, Riz 150, Aneth 1, Beurre 10, Sel',
    `Cuire le riz.
     Faire suer l'échalote dans le beurre, poser le poisson, couvrir 6 minutes.
     Ajouter crème, citron et aneth, laisser napper.`,
  ),
  recipe(
    'Saumon en croûte feuilletée aux épinards',
    '🥧 plat poisson 45 moyen 2 four 4',
    'Pâte feuilletée 2, Pavé de saumon 4, Épinard frais 200, Fromage frais 120, Citron 1, Œuf 1, Sel, Poivre',
    `Préchauffer le four à 200 °C.
     Faire tomber les épinards, les mélanger au fromage frais et au zeste de citron.
     Sur une pâte, poser la moitié des épinards, le saumon, le reste des épinards ; couvrir de la seconde pâte.
     Souder, dorer à l'œuf et cuire 30 minutes.`,
  ),
  recipe(
    'Moules au curry & frites',
    '🦪 plat poisson 30 facile 2 casserole,airfryer 2',
    'Moules 1500, Échalote 2, Curry, Crème liquide 150, Vin blanc 100, Coriandre 1, Frites surgelées 400',
    `Lancer les frites au four ou à l'airfryer.
     Faire suer les échalotes avec le curry, ajouter vin et moules.
     Couvrir 6 minutes à feu vif, ajouter crème et coriandre.`,
  ),
  recipe(
    'Saint-Jacques poêlées & fondue de poireaux',
    '🐚 plat poisson 25 moyen 3 poele 2',
    'Noix de Saint-Jacques 250, Poireau 2, Crème liquide 100, Beurre 20, Riz 120, Citron 0.5, Sel',
    `Cuire le riz.
     Faire fondre les poireaux émincés dans la moitié du beurre, ajouter la crème.
     Saisir les Saint-Jacques bien sèches 1 minute par face dans le reste du beurre très chaud.
     Servir sur les poireaux avec un trait de citron.`,
  ),
  recipe(
    'Crevettes sautées à l\'ail & riz pilaf',
    '🦐 plat poisson 25 facile 2 poele,casserole 2',
    'Crevette 250, Ail 3, Persil 1, Beurre 20, Riz 150, Oignon 0.5, Bouillon cube 1, Citron 0.5',
    `Pilaf : faire revenir l'oignon, ajouter le riz puis 30 cl de bouillon, couvrir 15 minutes.
     Sauter les crevettes avec ail et beurre 3 minutes.
     Ajouter persil et citron.`,
  ),
  recipe(
    'Gratin de cabillaud aux épinards',
    '🐟 plat poisson 40 facile 2 four 2',
    'Cabillaud 350, Épinards surgelés 300, Crème liquide 150, Gruyère râpé 60, Ail 1, Muscade, Pomme de terre 400, Sel',
    `Cuire les pommes de terre à l'eau.
     Disposer épinards égouttés et cabillaud dans un plat.
     Napper de crème à l'ail et à la muscade, couvrir de gruyère.
     Cuire 25 minutes à 200 °C.`,
  ),
  recipe(
    'Pâtes aux sardines, citron & chapelure',
    '🐟 plat poisson 20 facile 1 casserole,poele 2',
    'Spaghetti 200, Sardines en boîte 1, Citron 1, Ail 1, Chapelure 30, Persil 1, Piment, Huile d\'olive, Sel',
    `Cuire les pâtes.
     Dorer la chapelure dans un peu d'huile, réserver.
     Faire revenir l'ail et le piment, ajouter les sardines émiettées.
     Mélanger avec pâtes, citron, persil ; parsemer de chapelure dorée.`,
  ),
  recipe(
    'Rillettes de thon & tartines grillées',
    '🐟 plat poisson 10 facile 1 sans-cuisson 2',
    'Thon en boîte 1, Fromage frais 100, Citron 0.5, Ciboulette 1, Pain de campagne 4, Radis 0.5, Salade verte 0.5, Poivre',
    `Écraser le thon avec le fromage frais, le citron, la ciboulette et le poivre.
     Tartiner le pain, garnir de radis en rondelles.
     Servir avec la salade.`,
  ),
  recipe(
    'Fish tacos au chou & citron vert',
    '🌮 plat poisson 25 facile 2 poele 2',
    'Cabillaud 300, Paprika, Cumin, Tortilla de blé 4, Chou rouge 0.25, Avocat 1, Yaourt grec 80, Citron vert 1, Coriandre 1, Huile d\'olive, Sel',
    `Assaisonner le poisson d'épices, le cuire 3 minutes par face et l'effeuiller.
     Émincer finement le chou, écraser l'avocat.
     Garnir les tortillas avec yaourt citronné et coriandre.`,
  ),
  recipe(
    'Saumon gravlax maison & pommes de terre',
    '🐟 plat poisson 30 moyen 3 sans-cuisson,casserole 4',
    'Pavé de saumon 4, Sel 60, Sucre 60, Aneth 2, Pomme de terre 800, Fromage blanc 150, Moutarde, Citron 1',
    `La veille : couvrir le saumon très frais d'un mélange sel-sucre et d'aneth, filmer et réfrigérer 24 heures.
     Rincer, sécher et trancher finement.
     Servir avec des pommes de terre vapeur et une sauce fromage blanc-moutarde-aneth.`,
  ),

  // ---------------------------------------------------------------- airfryer, encore
  recipe(
    'Poulet mariné au yaourt à l\'airfryer & légumes',
    '🍗 plat volaille 35 facile 1 airfryer 2',
    'Cuisse de poulet 2, Yaourt nature 1, Paprika, Ail 1, Courgette 1, Poivron 1, Oignon rouge 1, Huile d\'olive, Sel',
    `Mariner les cuisses dans yaourt, paprika, ail et sel.
     Cuire 15 minutes à 200 °C, retourner.
     Ajouter les légumes huilés en morceaux et poursuivre 12 minutes.`,
  ),
  recipe(
    'Croque-monsieur à l\'airfryer',
    '🥪 plat viande 15 facile 1 airfryer 2',
    'Pain de mie 4, Jambon blanc 2, Gruyère râpé 60, Beurre 15, Salade verte 0.5',
    `Beurrer l'extérieur du pain, garnir de jambon et de gruyère.
     Cuire 8 minutes à 180 °C en retournant à mi-cuisson.
     Servir avec la salade.`,
  ),
  recipe(
    'Légumes rôtis & halloumi à l\'airfryer',
    '🧀 plat vege 25 facile 2 airfryer 2',
    'Halloumi 200, Courgette 1, Poivron 1, Oignon rouge 1, Tomate cerise 150, Pain pita 2, Origan, Huile d\'olive',
    `Enrober les légumes d'huile et d'origan, cuire 12 minutes à 200 °C.
     Ajouter l'halloumi en tranches et poursuivre 6 minutes.
     Servir avec le pain pita.`,
  ),
  recipe(
    'Tenders de poulet croustillants, sauce miel-moutarde',
    '🍗 plat volaille 25 facile 1 airfryer 2',
    'Blanc de poulet 2, Œuf 1, Chapelure 70, Paprika, Miel 20, Moutarde 20, Salade verte 0.5, Frites surgelées 300, Sel',
    `Couper le poulet en lanières, les passer dans l'œuf puis la chapelure au paprika.
     Cuire les frites 12 minutes à 200 °C, puis les tenders 10 minutes.
     Mélanger miel et moutarde pour la sauce.`,
  ),
  recipe(
    'Pommes de terre hasselback au fromage',
    '🥔 plat vege 50 facile 1 airfryer,four 2',
    'Pomme de terre 6, Beurre 30, Ail 1, Comté 60, Crème fraîche 50, Ciboulette 1, Salade verte 0.5, Sel',
    `Entailler les pommes de terre en fines tranches sans aller jusqu'au bout.
     Badigeonner de beurre fondu à l'ail, saler.
     Cuire 35 minutes à 190 °C à l'airfryer (50 minutes au four), parsemer de comté les 5 dernières minutes.
     Servir avec crème à la ciboulette et salade.`,
  ),
  recipe(
    'Boulettes de bœuf à l\'airfryer & sauce yaourt',
    '🧆 plat viande 25 facile 1 airfryer 2',
    'Steak haché 300, Oignon 0.5, Cumin, Persil 1, Yaourt grec 100, Ail 1, Pain pita 2, Tomate 1, Sel',
    `Mélanger viande, oignon râpé, cumin, persil et sel ; former des boulettes.
     Cuire 10 minutes à 200 °C.
     Sauce : yaourt et ail râpé.
     Servir dans les pitas avec la tomate.`,
  ),

  // ---------------------------------------------------------------- tartes salées & gratins
  recipe(
    'Tarte chèvre, courgette & menthe',
    '🥧 plat vege 45 facile 1 four 4',
    'Pâte brisée 1, Courgette 2, Bûche de chèvre 150, Œuf 3, Crème fraîche 150, Menthe 1, Sel, Poivre',
    `Préchauffer le four à 180 °C, foncer le moule.
     Disposer les courgettes en fines rondelles et le chèvre.
     Verser œufs et crème battus avec la menthe.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Tarte thon, tomate & moutarde',
    '🥧 plat poisson 45 facile 1 four 4',
    'Pâte brisée 1, Thon en boîte 1, Tomate 3, Moutarde 30, Œuf 2, Crème fraîche 100, Gruyère râpé 50, Sel',
    `Préchauffer le four à 180 °C, foncer le moule et tartiner de moutarde.
     Répartir le thon, verser œufs et crème battus.
     Couvrir de tomates en rondelles et de gruyère.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Feuilleté saucisse & moutarde',
    '🌭 plat viande 30 facile 1 four 2',
    'Pâte feuilletée 1, Saucisse 3, Moutarde 20, Œuf 1, Salade verte 0.5',
    `Préchauffer le four à 200 °C.
     Découper la pâte en bandes, les tartiner de moutarde.
     Enrouler les saucisses, dorer à l'œuf.
     Cuire 22 minutes et servir avec la salade.`,
  ),
  recipe(
    'Gratin de tortellini à la crème & au comté',
    '🧀 plat vege 25 facile 1 four 2',
    'Tortellini 400, Crème liquide 200, Comté 80, Ciboulette 1, Salade verte 0.5, Poivre',
    `Préchauffer le four à 200 °C.
     Mettre les tortellini crus dans un plat, verser la crème poivrée.
     Couvrir de comté et cuire 20 minutes.
     Servir avec ciboulette et salade.`,
  ),
  recipe(
    'Gratin de pommes de terre & chou-fleur au curry',
    '🥦 plat vege 50 facile 1 four 4',
    'Chou-fleur 1, Pomme de terre 500, Crème liquide 250, Curry, Gruyère râpé 80, Sel',
    `Préchauffer le four à 190 °C.
     Cuire chou-fleur et pommes de terre 10 minutes à l'eau.
     Les disposer dans un plat, napper de crème au curry, couvrir de gruyère.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Clafoutis salé tomates cerises & feta',
    '🍅 plat vege 40 facile 1 four 4',
    'Tomate cerise 300, Feta 150, Œuf 4, Farine 60, Lait 250, Basilic 1, Salade verte 1, Sel, Poivre',
    `Préchauffer le four à 180 °C.
     Fouetter œufs, farine et lait, assaisonner.
     Disposer tomates et feta dans un plat, verser la pâte, ajouter le basilic.
     Cuire 30 minutes, servir avec la salade.`,
  ),
  recipe(
    'Pizza blanche pommes de terre & lardons',
    '🍕 plat viande 30 facile 1 four 2',
    'Pâte à pizza 1, Crème fraîche 80, Pomme de terre 200, Lardons 100, Oignon rouge 0.5, Mozzarella 1, Romarin',
    `Préchauffer le four au maximum.
     Couper les pommes de terre en rondelles très fines.
     Étaler la crème sur la pâte, ajouter pommes de terre, lardons, oignon, mozzarella et romarin.
     Cuire 15 minutes.`,
  ),
  recipe(
    'Calzone jambon, champignons & mozzarella',
    '🍕 plat viande 30 facile 1 four 2',
    'Pâte à pizza 1, Coulis de tomate 100, Jambon blanc 2, Champignon de Paris 100, Mozzarella 1, Origan, Œuf 1',
    `Préchauffer le four au maximum.
     Garnir une moitié de la pâte de coulis, jambon, champignons, mozzarella et origan.
     Replier, souder les bords, dorer à l'œuf.
     Cuire 15 minutes.`,
  ),

  // ---------------------------------------------------------------- mijotés & cocottes
  recipe(
    'Sauté de dinde aux olives',
    '🫒 plat volaille 50 facile 1 casserole 4',
    'Escalope de dinde 4, Oignon 1, Tomates concassées 1, Olives vertes 80, Vin blanc 100, Herbes de Provence, Riz 300, Huile d\'olive, Sel',
    `Dorer la dinde en cubes, ajouter l'oignon.
     Déglacer au vin, ajouter tomates, olives et herbes.
     Mijoter 30 minutes à couvert.
     Servir avec le riz.`,
  ),
  recipe(
    'Lentilles à la saucisse de Morteau',
    '🫘 plat viande 50 facile 1 casserole 4',
    'Lentilles 300, Saucisse de Morteau 1, Carotte 2, Oignon 1, Lardons 100, Laurier, Thym, Moutarde',
    `Faire revenir oignon et lardons.
     Ajouter lentilles, carottes, laurier, thym et la saucisse piquée ; couvrir d'eau.
     Cuire 40 minutes à feu doux.
     Servir la saucisse tranchée sur les lentilles, avec la moutarde.`,
  ),
  recipe(
    'Poulet au vinaigre',
    '🍷 plat volaille 50 moyen 1 casserole 4',
    'Cuisse de poulet 4, Échalote 3, Vinaigre de vin 100, Vin blanc 100, Concentré de tomate 20, Crème fraîche 50, Pomme de terre 800, Beurre 20, Sel, Poivre',
    `Dorer les cuisses dans le beurre, ajouter les échalotes.
     Déglacer au vinaigre, laisser réduire, puis vin et concentré.
     Couvrir et cuire 30 minutes, ajouter la crème.
     Servir avec les pommes de terre vapeur.`,
  ),
  recipe(
    'Chou farci',
    '🥬 plat viande 120 difficile 1 casserole 4',
    'Chou vert 1, Échine de porc 400, Oignon 1, Œuf 1, Riz 60, Carotte 2, Bouillon cube 1, Tomates concassées 1, Persil 1, Sel, Poivre',
    `Blanchir les grandes feuilles du chou 5 minutes.
     Hacher la viande avec oignon et persil, ajouter œuf, riz cru, sel et poivre.
     Garnir et rouler les feuilles, les serrer dans une cocotte avec carottes et tomates.
     Mouiller de bouillon à mi-hauteur, couvrir et cuire 1 h 30.`,
  ),
  recipe(
    'Cassoulet express',
    '🫘 plat viande 60 facile 2 casserole,four 4',
    'Haricots blancs 3, Saucisse 4, Lardons 150, Cuisse de poulet 2, Tomates concassées 1, Oignon 1, Ail 2, Thym, Chapelure 30',
    `Dorer saucisses, lardons et cuisses, ajouter oignon et ail.
     Ajouter tomates, haricots égouttés, thym et 20 cl d'eau, mijoter 25 minutes.
     Transvaser dans un plat, couvrir de chapelure et gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Cuisses de poulet à la moutarde & tagliatelles',
    '🍗 plat volaille 50 facile 1 casserole 4',
    'Cuisse de poulet 4, Moutarde 60, Échalote 2, Vin blanc 150, Crème fraîche 100, Thym, Tagliatelles 300, Sel, Poivre',
    `Badigeonner les cuisses de moutarde, les dorer avec les échalotes.
     Déglacer au vin, ajouter thym, couvrir et cuire 35 minutes.
     Ajouter la crème.
     Servir avec les tagliatelles.`,
  ),
  recipe(
    'Petit salé aux lentilles',
    '🫘 plat viande 90 facile 1 casserole 4',
    'Échine de porc 600, Lardons fumés 150, Lentilles 300, Carotte 3, Oignon 1, Laurier, Clou de girofle, Thym, Poivre',
    `Mettre le porc et les lardons dans une cocotte, couvrir d'eau froide, porter à ébullition et écumer.
     Ajouter oignon piqué de girofle, carottes, laurier, thym ; cuire 45 minutes.
     Ajouter les lentilles et poursuivre 30 minutes.`,
  ),
]
