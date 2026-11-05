import { recipe } from './dsl'

/** Lot 10 : tour du monde, deuxième étape, et poissons. */
export const PLATS_10 = [
  // ---------------------------------------------------------------- Asie
  recipe(
    'Poulet au citron à la chinoise',
    '🍋 plat volaille 30 moyen 1 poele 2',
    'Blanc de poulet 2, Maïzena 30, Œuf 1, Citron 2, Sucre 30, Sauce soja 15, Riz 150, Oignon nouveau 1, Huile de tournesol',
    `Cuire le riz.
     Passer le poulet en morceaux dans l'œuf puis la maïzena, le frire dans un fond d'huile.
     Chauffer jus et zeste de citron, sucre, soja et 5 cl d'eau jusqu'à épaississement.
     Napper le poulet, parsemer d'oignon nouveau.`,
  ),
  recipe(
    'Bœuf bulgogi & riz',
    '🥩 plat viande 30 moyen 2 poele 2',
    'Bœuf émincé 300, Sauce soja 40, Sucre roux 15, Poire 0.5, Ail 2, Huile de sésame, Oignon 1, Riz 150, Graines de sésame 10, Salade verte 0.5',
    `Mixer poire, ail, soja, sucre et huile de sésame ; y mariner le bœuf 15 minutes.
     Cuire le riz.
     Saisir bœuf et oignon émincé à feu très vif.
     Servir avec le riz et des feuilles de salade pour envelopper.`,
  ),
  recipe(
    'Yakitori de poulet & riz',
    '🍢 plat volaille 30 facile 1 airfryer,poele 2',
    'Cuisse de poulet 3, Oignon nouveau 2, Sauce soja 40, Miel 20, Gingembre frais 10, Riz 150',
    `Désosser les cuisses, couper la chair en cubes.
     Monter des brochettes en alternant avec l'oignon nouveau.
     Cuire 12 minutes à 200 °C à l'airfryer (ou à la poêle), en badigeonnant de soja-miel-gingembre réduit.
     Servir avec le riz.`,
  ),
  recipe(
    'Curry massaman de bœuf',
    '🥜 plat viande 120 moyen 2 casserole 4',
    'Bœuf à braiser 700, Lait de coco 400, Pâte de curry 40, Pomme de terre 500, Oignon 1, Cacahuètes 50, Cannelle, Nuoc-mâm, Sucre roux 15, Riz 300',
    `Faire revenir la pâte de curry, ajouter le bœuf en cubes et l'oignon.
     Verser lait de coco, 20 cl d'eau, cannelle ; mijoter 1 h 15.
     Ajouter pommes de terre et cacahuètes, 30 minutes.
     Assaisonner de nuoc-mâm et de sucre ; servir avec le riz.`,
  ),
  recipe(
    'Larb de bœuf & riz',
    '🌿 plat viande 20 facile 2 poele 2',
    'Steak haché 300, Citron vert 2, Nuoc-mâm, Oignon rouge 0.5, Menthe 1, Coriandre 1, Piment, Riz rond 150, Salade verte 0.5',
    `Cuire le riz.
     Cuire la viande à sec en l'émiettant.
     Hors du feu, ajouter citron vert, nuoc-mâm, piment, oignon et herbes.
     Servir dans des feuilles de salade.`,
  ),
  recipe(
    'Nouilles sautées au bœuf, champignons & pak choï',
    '🍜 plat viande 25 facile 2 poele 2',
    'Nouilles chinoises 180, Bœuf émincé 250, Champignon de Paris 120, Pak choï 2, Sauce soja 40, Miel 10, Ail 1, Gingembre frais 10, Huile de tournesol',
    `Cuire les nouilles.
     Saisir le bœuf, réserver.
     Sauter champignons, pak choï, ail et gingembre.
     Ajouter nouilles, bœuf, soja et miel.`,
  ),
  recipe(
    'Poisson vapeur au gingembre & soja',
    '🐟 plat poisson 25 facile 2 casserole 2',
    'Cabillaud 350, Gingembre frais 20, Oignon nouveau 2, Sauce soja 30, Huile de sésame, Riz 150, Pak choï 2',
    `Cuire le riz.
     Cuire le poisson et le pak choï 10 minutes à la vapeur avec gingembre et oignon en julienne.
     Arroser de soja et d'huile de sésame chaude.`,
  ),
  recipe(
    'Soupe de nouilles au porc & champignons',
    '🍜 plat viande 30 facile 1 casserole 2',
    'Échine de porc 200, Nouilles chinoises 120, Champignon de Paris 120, Bouillon cube 2, Sauce soja 30, Gingembre frais 10, Pak choï 2, Œuf 2, Oignon nouveau 1',
    `Porter 1 litre de bouillon à frémissement avec soja et gingembre.
     Ajouter le porc en fines lanières et les champignons, 6 minutes, puis le pak choï.
     Cuire nouilles et œufs mollets à part.
     Assembler dans les bols.`,
  ),
  recipe(
    'Mapo tofu, tofu au porc pimenté',
    '🌶️ plat viande 25 moyen 1 poele 2',
    'Tofu 300, Échine de porc 150, Ail 2, Gingembre frais 10, Piment, Sauce soja 30, Maïzena 5, Oignon nouveau 1, Riz 150, Huile de tournesol',
    `Cuire le riz.
     Sauter le porc haché avec ail, gingembre et piment.
     Ajouter soja, 15 cl d'eau et le tofu en cubes, mijoter 5 minutes.
     Lier à la maïzena, parsemer d'oignon nouveau.`,
  ),

  // ---------------------------------------------------------------- Inde
  recipe(
    'Poulet korma',
    '🍛 plat volaille 40 facile 2 casserole 2',
    'Blanc de poulet 2, Oignon 1, Ail 1, Gingembre frais 10, Garam masala, Curcuma, Poudre d\'amande 40, Yaourt nature 1, Crème liquide 80, Riz 150, Sel',
    `Faire revenir oignon, ail, gingembre et épices.
     Ajouter le poulet en cubes, puis yaourt, poudre d'amande et 10 cl d'eau.
     Mijoter 15 minutes, ajouter la crème.
     Servir avec le riz.`,
  ),
  recipe(
    'Keema, curry de bœuf haché aux petits pois',
    '🍛 plat viande 30 facile 1 poele 2',
    'Steak haché 300, Petits pois surgelés 150, Oignon 1, Ail 1, Gingembre frais 10, Tomates concassées 1, Garam masala, Riz 150, Coriandre 1, Huile de tournesol, Sel',
    `Faire revenir oignon, ail, gingembre et épices.
     Ajouter la viande, puis tomates et petits pois, 15 minutes.
     Servir avec le riz et la coriandre.`,
  ),
  recipe(
    'Dahl makhani aux haricots rouges',
    '🫘 plat vege 35 facile 1 casserole 2',
    'Haricots rouges 2, Lentilles 60, Tomates concassées 1, Oignon 1, Ail 2, Gingembre frais 10, Garam masala, Beurre 20, Crème liquide 60, Riz 150, Sel',
    `Cuire les lentilles 20 minutes.
     Faire revenir oignon, ail, gingembre et épices dans le beurre.
     Ajouter tomates, haricots et lentilles, mijoter 15 minutes.
     Finir avec la crème ; servir avec le riz.`,
  ),
  recipe(
    'Samoussas de légumes au four',
    '🥟 plat vege 45 moyen 1 four 4',
    'Pâte feuilletée 2, Pomme de terre 300, Petits pois surgelés 100, Oignon 1, Curry, Coriandre 1, Yaourt nature 1, Menthe 1, Salade verte 1, Sel',
    `Cuire les pommes de terre en dés, les mélanger avec petits pois, oignon fondu, curry et coriandre.
     Découper la pâte en bandes, garnir et plier en triangles.
     Cuire 20 minutes à 200 °C.
     Servir avec un yaourt à la menthe et la salade.`,
  ),

  // ---------------------------------------------------------------- Afrique & Orient
  recipe(
    'Poulet DG aux bananes & légumes',
    '🍌 plat volaille 45 moyen 2 poele 4',
    'Cuisse de poulet 4, Banane 2, Carotte 2, Poivron 1, Haricot vert 200, Oignon 1, Tomate 2, Ail 2, Gingembre frais 10, Huile de tournesol, Sel',
    `Dorer les cuisses, réserver.
     Faire revenir oignon, ail, gingembre, tomates, puis carottes, poivron et haricots.
     Remettre le poulet, couvrir 25 minutes.
     Ajouter les bananes en rondelles dorées à part.`,
  ),
  recipe(
    'Thieboudienne, riz au poisson & légumes',
    '🐟 plat poisson 60 moyen 2 casserole 4',
    'Cabillaud 500, Riz 300, Carotte 3, Chou vert 0.25, Aubergine 1, Patate douce 1, Oignon 2, Concentré de tomate 60, Persil 1, Ail 2, Huile de tournesol, Sel',
    `Faire revenir oignons, ail et concentré.
     Ajouter 1,5 litre d'eau, les légumes en gros morceaux ; cuire 25 minutes.
     Pocher le poisson 8 minutes dans le bouillon, réserver avec les légumes.
     Cuire le riz dans le bouillon restant, 20 minutes ; tout servir ensemble.`,
  ),
  recipe(
    'Chorba, soupe orientale à l\'agneau',
    '🥣 plat viande 70 moyen 2 casserole 4',
    'Épaule d\'agneau 400, Tomates concassées 1, Oignon 1, Pois chiches 1, Coquillettes 80, Coriandre 1, Ras el hanout, Citron 1, Huile d\'olive, Sel',
    `Dorer l'agneau en petits morceaux avec l'oignon et les épices.
     Ajouter tomates et 1,5 litre d'eau, cuire 45 minutes.
     Ajouter pois chiches et pâtes, 10 minutes.
     Servir avec coriandre et citron.`,
  ),
  recipe(
    'Mechouia, salade de poivrons grillés & œufs',
    '🫑 plat vege 40 facile 1 four 2',
    'Poivron 4, Tomate 3, Ail 2, Œuf 2, Thon en boîte 1, Olives noires 30, Cumin, Huile d\'olive, Pain de campagne 2, Sel',
    `Griller poivrons et tomates 25 minutes à 230 °C, les peler.
     Les hacher avec l'ail, le cumin, l'huile et le sel.
     Servir avec œufs durs, thon et olives, et le pain.`,
  ),
  recipe(
    'Couscous royal poulet, merguez & boulettes',
    '🥘 plat viande 80 moyen 2 casserole,poele 6',
    'Cuisse de poulet 4, Merguez 6, Steak haché 300, Carotte 4, Courgette 3, Navet 2, Pois chiches 1, Oignon 2, Concentré de tomate 40, Ras el hanout, Semoule 500, Beurre 30, Harissa, Sel',
    `Dorer le poulet avec les oignons, ajouter concentré, épices et 2 litres d'eau, puis carottes et navets ; 30 minutes.
     Ajouter courgettes et pois chiches, 15 minutes.
     Former des boulettes épicées et les dorer avec les merguez.
     Servir avec la semoule beurrée et la harissa.`,
  ),
  recipe(
    'Shakshuka verte aux épinards & feta',
    '🥬 plat vege 20 facile 1 poele 2',
    'Œuf 4, Épinard frais 200, Poireau 1, Ail 1, Feta 80, Cumin, Pain pita 2, Huile d\'olive, Sel',
    `Faire fondre le poireau émincé avec l'ail et le cumin.
     Ajouter les épinards et les laisser tomber.
     Casser les œufs, couvrir 5 minutes, émietter la feta.
     Servir avec le pain.`,
  ),

  // ---------------------------------------------------------------- Amériques
  recipe(
    'Burritos au poulet & riz',
    '🌯 plat volaille 30 facile 1 poele,casserole 2',
    'Tortilla de blé 2, Blanc de poulet 1, Riz 80, Haricots rouges 1, Cheddar 60, Tomate 1, Salade verte 0.25, Cumin, Paprika, Crème fraîche 40, Sel',
    `Cuire le riz.
     Saisir le poulet en dés avec les épices, ajouter les haricots.
     Garnir les tortillas de riz, poulet, cheddar, crudités et crème ; rouler serré.
     Dorer 1 minute par face à la poêle.`,
  ),
  recipe(
    'Chili blanc au poulet',
    '🤍 plat volaille 40 facile 1 casserole 4',
    'Blanc de poulet 4, Haricots blancs 2, Oignon 1, Ail 2, Bouillon cube 1, Cumin, Crème fraîche 100, Maïs en boîte 1, Citron vert 1, Coriandre 1, Huile d\'olive, Sel',
    `Faire revenir oignon, ail et cumin, ajouter le poulet en dés.
     Ajouter haricots, maïs et 50 cl de bouillon, cuire 25 minutes.
     Ajouter crème, citron vert et coriandre.`,
  ),
  recipe(
    'Poulet piri-piri & riz',
    '🌶️ plat volaille 40 facile 1 four,casserole 2',
    'Cuisse de poulet 3, Paprika, Piment, Ail 2, Citron 1, Riz 150, Poivron 1, Huile d\'olive, Sel',
    `Mariner les cuisses avec paprika, piment, ail, citron et huile.
     Rôtir 35 minutes à 210 °C avec le poivron en lanières.
     Servir avec le riz.`,
  ),
  recipe(
    'Bœuf mijoté à la mexicaine en tacos',
    '🌮 plat viande 150 moyen 2 casserole 4',
    'Bœuf à braiser 800, Tomates concassées 1, Oignon 2, Ail 3, Cumin, Paprika, Piment, Tortilla de blé 8, Chou rouge 0.25, Citron vert 2, Coriandre 1, Sel',
    `Dorer le bœuf avec oignons, ail et épices.
     Ajouter tomates et 30 cl d'eau, couvrir 2 heures.
     Effilocher la viande dans sa sauce réduite.
     Servir dans les tortillas avec chou, citron vert et coriandre.`,
  ),
  recipe(
    'Arepas, galettes de maïs garnies',
    '🫓 plat vege 40 moyen 1 poele 2',
    'Farine 150, Maïs en boîte 1, Fromage frais 80, Haricots rouges 1, Avocat 1, Cheddar 60, Sel',
    `Mixer le maïs égoutté avec la farine, le sel et un peu d'eau en pâte souple.
     Former des galettes épaisses, les cuire 6 minutes par face à la poêle sèche.
     Les fendre et garnir de fromage frais, haricots, avocat et cheddar.`,
  ),

  // ---------------------------------------------------------------- Europe
  recipe(
    'Goulash végétarien aux haricots',
    '🫘 plat vege 45 facile 1 casserole 4',
    'Haricots rouges 2, Pomme de terre 500, Poivron 2, Oignon 2, Paprika, Tomates concassées 1, Crème fraîche 60, Huile de tournesol, Sel',
    `Faire fondre oignons et poivrons, ajouter le paprika.
     Ajouter pommes de terre en dés, tomates et 40 cl d'eau, cuire 25 minutes.
     Ajouter les haricots, servir avec la crème.`,
  ),
  recipe(
    'Pierogi pommes de terre & fromage',
    '🥟 plat vege 70 difficile 1 casserole,poele 4',
    'Farine 300, Œuf 1, Pomme de terre 400, Fromage frais 150, Oignon 2, Beurre 30, Crème fraîche 80, Sel',
    `Pâte : farine, œuf, sel et 12 cl d'eau tiède ; reposer 30 minutes.
     Farce : pommes de terre écrasées, fromage frais et un oignon fondu.
     Étaler, découper des disques, garnir et souder en demi-lunes.
     Les pocher 3 minutes puis les dorer au beurre avec le second oignon ; servir avec la crème.`,
  ),
  recipe(
    'Fish pie, gratin de poisson à l\'anglaise',
    '🐟 plat poisson 50 moyen 2 casserole,four 4',
    'Cabillaud 400, Saumon fumé 4, Crevette 150, Lait 400, Beurre 50, Farine 30, Petits pois surgelés 100, Pomme de terre 900, Persil 1, Sel',
    `Pocher le cabillaud 5 minutes dans le lait, réserver le lait.
     Faire une sauce avec beurre, farine et ce lait, ajouter poissons, crevettes, petits pois et persil.
     Couvrir de purée au beurre.
     Gratiner 25 minutes à 200 °C.`,
  ),
  recipe(
    'Cottage pie au bœuf & légumes',
    '🥔 plat viande 60 facile 1 casserole,four 4',
    'Steak haché 500, Carotte 2, Oignon 1, Petits pois surgelés 100, Concentré de tomate 20, Sauce Worcestershire, Bouillon cube 1, Pomme de terre 900, Lait 150, Beurre 40, Cheddar 60, Sel',
    `Faire revenir oignon et carottes en dés, puis la viande.
     Ajouter concentré, Worcestershire, 20 cl de bouillon et petits pois, 15 minutes.
     Couvrir de purée et de cheddar, gratiner 20 minutes à 200 °C.`,
  ),
  recipe(
    'Smørrebrød, tartines danoises au saumon',
    '🥪 plat poisson 15 facile 2 sans-cuisson 2',
    'Pain de campagne 4, Saumon fumé 4, Œuf 2, Fromage frais 80, Concombre 0.5, Aneth 1, Radis 0.5, Citron 0.5',
    `Cuire les œufs durs 10 minutes.
     Tartiner le pain de fromage frais.
     Garnir de saumon, œuf, concombre, radis et aneth, citronner.`,
  ),
  recipe(
    'Spätzle au fromage & oignons frits',
    '🧀 plat vege 40 moyen 1 casserole,poele 2',
    'Farine 200, Œuf 3, Lait 50, Comté 100, Oignon 2, Beurre 20, Salade verte 0.5, Muscade, Sel',
    `Pâte : farine, œufs, lait, sel, muscade, bien battue.
     La faire tomber en petits morceaux dans l'eau bouillante salée ; ils sont cuits quand ils remontent.
     Faire dorer les oignons dans le beurre.
     Alterner spätzle et comté dans un plat chaud, couvrir d'oignons.`,
  ),
  recipe(
    'Tortilla de patatas au chorizo',
    '🥔 plat viande 40 facile 1 poele 2',
    'Œuf 5, Pomme de terre 400, Oignon 1, Chorizo 60, Huile d\'olive 60, Salade verte 0.5, Sel',
    `Confire pommes de terre et oignon émincés 20 minutes dans l'huile.
     Ajouter le chorizo en dés, mélanger aux œufs battus.
     Cuire 6 minutes, retourner sur une assiette et cuire 3 minutes.`,
  ),
  recipe(
    'Paella aux fruits de mer',
    '🦐 plat poisson 50 moyen 3 poele 4',
    'Riz rond 300, Crevette 300, Moules 600, Cabillaud 300, Poivron 1, Oignon 1, Tomates concassées 1, Curcuma, Paprika, Petits pois surgelés 100, Bouillon cube 1, Citron 1, Huile d\'olive, Sel',
    `Faire revenir oignon et poivron, ajouter tomates, épices et riz.
     Mouiller de 80 cl de bouillon, cuire 12 minutes sans remuer.
     Ajouter poisson, crevettes, moules et petits pois, poursuivre 8 minutes.
     Servir avec le citron.`,
  ),
  recipe(
    'Gratin de pâtes à la grecque, feta & épinards',
    '🧀 plat vege 35 facile 1 casserole,four 4',
    'Penne 300, Épinards surgelés 300, Feta 150, Tomates concassées 1, Origan, Œuf 2, Yaourt grec 150, Sel',
    `Cuire les pâtes.
     Mélanger avec épinards égouttés, tomates, feta émiettée et origan.
     Couvrir du yaourt battu avec les œufs.
     Gratiner 25 minutes à 190 °C.`,
  ),

  // ---------------------------------------------------------------- poissons
  recipe(
    'Cabillaud rôti, purée de patate douce & épinards',
    '🐟 plat poisson 30 facile 2 four,casserole 2',
    'Cabillaud 350, Patate douce 2, Épinard frais 100, Beurre 15, Citron 1, Sel',
    `Cuire les patates douces et les écraser avec le beurre.
     Rôtir le cabillaud 12 minutes à 200 °C.
     Faire tomber les épinards.
     Servir avec le citron.`,
  ),
  recipe(
    'Saumon grillé, lentilles & sauce yaourt',
    '🐟 plat poisson 30 facile 2 poele,casserole 2',
    'Pavé de saumon 2, Lentilles 120, Échalote 1, Yaourt grec 100, Aneth 1, Citron 1, Sel',
    `Cuire les lentilles 20 minutes avec l'échalote.
     Cuire le saumon côté peau 7 minutes.
     Sauce : yaourt, aneth, citron.`,
  ),
  recipe(
    'Colin à la provençale & semoule',
    '🐟 plat poisson 25 facile 1 poele 2',
    'Filet de colin 300, Tomates concassées 1, Olives noires 30, Ail 1, Herbes de Provence, Semoule 150, Huile d\'olive, Sel',
    `Faire réduire les tomates avec l'ail, les herbes et les olives, 8 minutes.
     Déposer le poisson, couvrir 7 minutes.
     Servir avec la semoule.`,
  ),
  recipe(
    'Crevettes sautées au chorizo & pommes de terre',
    '🦐 plat poisson 30 facile 2 poele 2',
    'Crevette 250, Chorizo 60, Pomme de terre 400, Ail 1, Persil 1, Huile d\'olive, Sel',
    `Faire sauter les pommes de terre en dés 15 minutes à couvert.
     Ajouter chorizo et ail, puis les crevettes 3 minutes.
     Parsemer de persil.`,
  ),
  recipe(
    'Moules gratinées à l\'ail',
    '🦪 plat poisson 30 moyen 2 casserole,four 2',
    'Moules 1200, Beurre 60, Ail 3, Persil 1, Chapelure 30, Baguette 0.5',
    `Ouvrir les moules 5 minutes à couvert, retirer une coquille.
     Mélanger beurre mou, ail et persil hachés.
     Garnir chaque moule, parsemer de chapelure.
     Gratiner 5 minutes sous le gril, servir avec la baguette.`,
  ),
]
