import { recipe } from './dsl'

/** Lot 9 : terroirs de France et plats familiaux au four. */
export const PLATS_9 = [
  // ---------------------------------------------------------------- Alpes, Jura, Auvergne
  recipe(
    'Croûte au fromage savoyarde',
    '🧀 plat viande 20 facile 2 four 2',
    'Pain de campagne 4, Vin blanc 60, Jambon cru 4, Comté 120, Œuf 2, Salade verte 0.5, Poivre',
    `Préchauffer le four à 220 °C.
     Arroser les tranches de pain de vin blanc, couvrir de jambon et de comté.
     Gratiner 10 minutes, poser un œuf au plat sur chaque croûte.
     Servir avec la salade.`,
  ),
  recipe(
    'Truffade au comté',
    '🥔 plat viande 35 facile 1 poele 2',
    'Pomme de terre 600, Lardons 100, Ail 1, Comté 150, Persil 1, Salade verte 0.5, Huile de tournesol, Sel',
    `Faire sauter les pommes de terre en fines lamelles 20 minutes avec les lardons.
     Ajouter l'ail et le fromage en lamelles, remuer jusqu'à ce qu'il file.
     Parsemer de persil, servir avec la salade.`,
  ),
  recipe(
    'Gratin de coquillettes au reblochon & jambon cru',
    '🧀 plat viande 35 facile 2 casserole,four 2',
    'Coquillettes 200, Reblochon 0.5, Jambon cru 3, Crème fraîche 80, Oignon 1, Poivre',
    `Cuire les pâtes.
     Faire fondre l'oignon, mélanger avec pâtes, crème et jambon.
     Couvrir de reblochon tranché et gratiner 15 minutes à 210 °C.`,
  ),
  recipe(
    'Potée auvergnate',
    '🥬 plat viande 120 facile 1 casserole 6',
    'Chou vert 1, Échine de porc 600, Saucisse 4, Lardons fumés 200, Carotte 4, Navet 3, Pomme de terre 800, Oignon 1, Laurier, Poivre',
    `Cuire l'échine et les lardons 45 minutes dans une grande cocotte d'eau avec oignon et laurier.
     Ajouter le chou en quartiers, carottes et navets, 30 minutes.
     Ajouter pommes de terre et saucisses, 30 minutes encore.`,
  ),
  recipe(
    'Saucisses de Morteau & purée de pommes de terre',
    '🌭 plat viande 50 facile 1 casserole 4',
    'Saucisse de Morteau 2, Pomme de terre 1000, Lait 200, Beurre 50, Comté 60, Salade verte 1, Sel',
    `Cuire les saucisses 40 minutes dans l'eau frémissante sans les percer.
     Préparer une purée au beurre et au lait, y fondre le comté râpé.
     Trancher les saucisses et servir avec la salade.`,
  ),

  // ---------------------------------------------------------------- Bretagne, Normandie, Nord
  recipe(
    'Galettes complètes aux poireaux & lardons',
    '🥞 plat viande 25 facile 1 poele 2',
    'Galette de sarrasin 2, Poireau 1, Lardons 80, Crème fraîche 40, Œuf 2, Gruyère râpé 40, Beurre 10',
    `Faire fondre le poireau émincé avec les lardons, ajouter la crème.
     Chauffer une galette beurrée, casser un œuf, garnir de poireaux et gruyère.
     Replier les bords et couvrir 2 minutes.`,
  ),
  recipe(
    'Cotriade, marmite de poisson bretonne',
    '🐟 plat poisson 45 moyen 2 casserole 4',
    'Cabillaud 400, Filet de colin 300, Moules 500, Pomme de terre 600, Oignon 2, Beurre 30, Thym, Laurier, Vinaigre de vin, Pain de campagne 4, Sel',
    `Faire fondre les oignons dans le beurre, ajouter pommes de terre, thym, laurier et 1,2 litre d'eau ; cuire 15 minutes.
     Ajouter les poissons en gros morceaux, 6 minutes, puis les moules 4 minutes.
     Servir le bouillon sur le pain, puis poissons et pommes de terre avec une vinaigrette.`,
  ),
  recipe(
    'Poulet vallée d\'Auge',
    '🍏 plat volaille 50 moyen 2 casserole 4',
    'Cuisse de poulet 4, Champignon de Paris 250, Cidre 300, Crème fraîche 150, Pomme 2, Échalote 2, Beurre 30, Riz 300, Sel',
    `Dorer les cuisses dans le beurre avec les échalotes, déglacer au cidre.
     Couvrir et cuire 30 minutes, ajouter champignons et crème.
     Dorer les pommes en quartiers à part, servir avec le riz.`,
  ),
  recipe(
    'Moules à la normande',
    '🦪 plat poisson 30 facile 2 casserole 2',
    'Moules 1500, Cidre 200, Échalote 2, Crème fraîche 100, Lardons 60, Persil 1, Baguette 0.5',
    `Faire revenir lardons et échalotes, ajouter cidre et moules.
     Couvrir 6 minutes à feu vif, ajouter crème et persil.
     Servir avec la baguette.`,
  ),
  recipe(
    'Welsh au cheddar & à la bière',
    '🍺 plat viande 25 facile 2 four 2',
    'Pain de campagne 2, Jambon blanc 2, Cheddar 200, Bière 100, Moutarde 15, Œuf 2, Frites surgelées 300',
    `Cuire les frites.
     Poser les tranches de pain et le jambon dans deux plats.
     Fondre le cheddar avec la bière et la moutarde, napper.
     Gratiner 10 minutes à 220 °C, poser un œuf au plat.`,
  ),
  recipe(
    'Waterzoï de poulet',
    '🍲 plat volaille 50 moyen 2 casserole 4',
    'Blanc de poulet 4, Poireau 2, Carotte 3, Céleri 2, Pomme de terre 500, Bouillon cube 1, Crème liquide 200, Œuf 1, Persil 1, Sel',
    `Pocher le poulet 20 minutes dans 1 litre de bouillon avec les légumes en julienne.
     Ajouter les pommes de terre en dés, 15 minutes.
     Lier le bouillon avec la crème et le jaune d'œuf hors du feu, parsemer de persil.`,
  ),
  recipe(
    'Hochepot, pot-au-feu flamand',
    '🥩 plat viande 180 facile 2 casserole 6',
    'Bœuf à braiser 800, Échine de porc 400, Chou vert 0.5, Carotte 5, Poireau 2, Navet 3, Pomme de terre 800, Oignon 2, Laurier, Thym, Moutarde',
    `Mettre les viandes à l'eau froide, porter à ébullition et écumer.
     Ajouter oignons, laurier, thym ; cuire 2 heures.
     Ajouter légumes et pommes de terre, 45 minutes.
     Servir avec la moutarde.`,
  ),

  // ---------------------------------------------------------------- Sud-Ouest & Provence
  recipe(
    'Poulet basquaise au jambon cru',
    '🫑 plat volaille 50 facile 1 casserole 4',
    'Cuisse de poulet 4, Poivron 3, Tomate 4, Oignon 2, Ail 2, Jambon cru 2, Paprika, Riz 300, Huile d\'olive, Sel',
    `Dorer les cuisses, réserver.
     Faire fondre oignons, poivrons et ail, ajouter tomates en dés, jambon et paprika.
     Remettre le poulet, couvrir 35 minutes.
     Servir avec le riz.`,
  ),
  recipe(
    'Axoa de bœuf aux poivrons',
    '🌶️ plat viande 50 facile 1 casserole 4',
    'Steak haché 600, Poivron 3, Oignon 2, Ail 2, Paprika, Piment, Pomme de terre 800, Huile d\'olive, Sel',
    `Faire revenir oignons, poivrons et ail.
     Ajouter la viande, le paprika et le piment, couvrir 30 minutes à feu doux.
     Servir avec les pommes de terre vapeur.`,
  ),
  recipe(
    'Pissaladière',
    '🧅 plat vege 60 facile 1 four 4',
    'Pâte à pizza 1, Oignon 6, Olives noires 60, Thym, Huile d\'olive, Salade verte 1, Sel',
    `Faire confire les oignons émincés 40 minutes dans l'huile avec le thym.
     Étaler la pâte, la couvrir d'oignons et d'olives.
     Cuire 20 minutes à 220 °C. Servir avec la salade.`,
  ),
  recipe(
    'Soupe de poissons & croûtons à l\'ail',
    '🐟 plat poisson 50 moyen 2 casserole 4',
    'Cabillaud 400, Filet de colin 300, Tomates concassées 1, Fenouil 1, Oignon 1, Ail 3, Curcuma, Orange 1, Baguette 0.5, Gruyère râpé 60, Huile d\'olive, Sel',
    `Faire revenir oignon, fenouil et ail, ajouter tomates, curcuma, zeste d'orange et 1,2 litre d'eau.
     Cuire 20 minutes, ajouter les poissons 10 minutes, mixer.
     Servir avec des croûtons frottés à l'ail et le gruyère.`,
  ),
  recipe(
    'Petits farcis niçois',
    '🍅 plat viande 70 moyen 1 four 4',
    'Tomate 4, Courgette 2, Oignon 2, Poivron 2, Échine de porc 400, Œuf 1, Parmesan 40, Chapelure 30, Ail 1, Persil 1, Huile d\'olive, Sel',
    `Évider tous les légumes, hacher la chair avec ail et persil.
     Mélanger avec la viande hachée, l'œuf, le parmesan et le sel.
     Farcir, parsemer de chapelure, arroser d'huile.
     Cuire 50 minutes à 180 °C.`,
  ),
  recipe(
    'Aïoli de cabillaud & légumes',
    '🧄 plat poisson 40 moyen 2 casserole 4',
    'Cabillaud 600, Pomme de terre 600, Carotte 4, Haricot vert 300, Œuf 6, Ail 4, Mayonnaise, Citron 1, Sel',
    `Cuire séparément pommes de terre, carottes, haricots verts et œufs durs.
     Pocher le cabillaud 8 minutes dans l'eau salée frémissante.
     Mélanger la mayonnaise avec l'ail écrasé et le citron.
     Servir tiède, tout à partager.`,
  ),
  recipe(
    'Daube de bœuf aux carottes & olives',
    '🍷 plat viande 180 moyen 2 casserole 4',
    'Bœuf à braiser 900, Vin rouge 500, Carotte 4, Oignon 2, Olives noires 80, Orange 1, Thym, Laurier, Tagliatelles 300, Huile d\'olive, Sel',
    `Dorer le bœuf, ajouter oignons et carottes.
     Mouiller de vin, ajouter thym, laurier et zeste d'orange, mijoter 2 h 30.
     Ajouter les olives 15 minutes avant la fin ; servir avec les pâtes.`,
  ),
  recipe(
    'Garbure au poulet',
    '🥬 plat volaille 75 facile 1 casserole 4',
    'Cuisse de poulet 3, Chou vert 0.5, Haricots blancs 2, Pomme de terre 400, Carotte 2, Poireau 1, Oignon 1, Bouillon cube 1, Pain de campagne 4',
    `Dorer les cuisses avec l'oignon.
     Ajouter légumes en morceaux et 1,5 litre de bouillon, cuire 50 minutes.
     Ajouter les haricots 10 minutes, effilocher le poulet dans la soupe.
     Servir sur le pain.`,
  ),

  // ---------------------------------------------------------------- Est & Lyon
  recipe(
    'Gnocchis gratinés, sauce tomate-crème & champignons',
    '🧀 plat vege 30 facile 1 four 2',
    'Gnocchis 500, Coulis de tomate 250, Crème liquide 100, Champignon de Paris 150, Gruyère râpé 60, Sel',
    `Préchauffer le four à 210 °C.
     Mélanger coulis, crème et champignons émincés.
     Ajouter les gnocchis crus dans un plat, napper, couvrir de gruyère.
     Cuire 20 minutes.`,
  ),
  recipe(
    'Salade lyonnaise',
    '🥗 plat viande 20 facile 1 poele,casserole 2',
    'Salade verte 1, Lardons 120, Œuf 2, Pain de mie 2, Moutarde, Vinaigre de vin, Huile de tournesol, Échalote 1, Sel',
    `Dorer les lardons, puis les croûtons dans leur graisse.
     Pocher les œufs 3 minutes.
     Assaisonner la salade de vinaigrette moutardée à l'échalote, ajouter lardons, croûtons et œufs.`,
  ),
  recipe(
    'Baeckeoffe simplifié',
    '🥔 plat viande 180 moyen 2 four 6',
    'Échine de porc 500, Épaule d\'agneau 500, Bœuf à braiser 400, Pomme de terre 1200, Oignon 3, Carotte 3, Vin blanc 400, Thym, Laurier, Sel, Poivre',
    `La veille, mariner les viandes en cubes dans le vin avec oignons, thym et laurier.
     Alterner pommes de terre en rondelles, viandes et carottes dans une cocotte, verser la marinade.
     Couvrir hermétiquement et cuire 3 heures à 170 °C.`,
  ),
  recipe(
    'Fleischschnacka, roulés de pâte à la viande',
    '🥩 plat viande 60 difficile 1 poele 4',
    'Farine 300, Œuf 3, Steak haché 400, Oignon 1, Persil 1, Bouillon cube 1, Salade verte 1, Sel',
    `Pâte : farine, œufs, sel et un peu d'eau ; reposer 20 minutes et l'étaler finement.
     Couvrir de viande mélangée à l'oignon et au persil, rouler serré et couper en tranches de 3 cm.
     Les dorer à la poêle puis les cuire 20 minutes à couvert avec un fond de bouillon.`,
  ),
  recipe(
    'Tarte flambée aux champignons',
    '🍄 plat vege 25 facile 1 four 2',
    'Pâte à pizza 1, Fromage blanc 100, Crème fraîche 60, Champignon de Paris 150, Oignon 1, Comté 40, Sel',
    `Préchauffer le four au maximum.
     Étaler finement la pâte, la couvrir de fromage blanc mêlé à la crème.
     Ajouter champignons et oignon émincés, comté.
     Cuire 12 minutes.`,
  ),

  // ---------------------------------------------------------------- familial au four
  recipe(
    'Poulet au four aux tomates & mozzarella',
    '🍅 plat volaille 35 facile 1 four 2',
    'Blanc de poulet 2, Coulis de tomate 200, Mozzarella 1, Basilic 1, Riz 150, Origan, Sel',
    `Cuire le riz.
     Poser les blancs dans un plat sur le coulis, couvrir de mozzarella et d'origan.
     Cuire 25 minutes à 200 °C, ajouter le basilic.`,
  ),
  recipe(
    'Plat de pâtes au four façon pizza',
    '🍕 plat viande 35 facile 1 casserole,four 4',
    'Penne 300, Coulis de tomate 400, Jambon blanc 3, Champignon de Paris 150, Mozzarella 2, Olives noires 30, Origan',
    `Cuire les pâtes 2 minutes de moins qu'indiqué.
     Mélanger avec coulis, jambon, champignons et olives.
     Couvrir de mozzarella et d'origan, gratiner 20 minutes.`,
  ),
  recipe(
    'Gratin de légumes & boulettes de viande',
    '🧆 plat viande 50 facile 1 four 4',
    'Steak haché 400, Œuf 1, Chapelure 30, Courgette 2, Pomme de terre 400, Coulis de tomate 400, Gruyère râpé 80, Sel',
    `Former des boulettes avec viande, œuf, chapelure et sel.
     Disposer légumes en rondelles et boulettes dans un plat, napper de coulis.
     Couvrir de gruyère et cuire 40 minutes à 190 °C.`,
  ),
  recipe(
    'Cuisses de poulet rôties au citron & thym',
    '🍋 plat volaille 50 facile 1 four 2',
    'Cuisse de poulet 2, Citron 1, Thym, Ail 2, Pomme de terre 500, Huile d\'olive, Sel',
    `Préchauffer le four à 200 °C.
     Disposer pommes de terre en quartiers, citron en tranches et ail.
     Poser les cuisses, arroser d'huile, de thym et de sel.
     Cuire 45 minutes.`,
  ),
  recipe(
    'Gratin de riz au poulet & champignons',
    '🍚 plat volaille 40 facile 1 casserole,four 4',
    'Riz 250, Blanc de poulet 2, Champignon de Paris 200, Crème liquide 200, Gruyère râpé 80, Oignon 1, Thym, Sel',
    `Cuire le riz.
     Dorer poulet, oignon et champignons.
     Mélanger avec riz, crème et thym, couvrir de gruyère et gratiner 20 minutes.`,
  ),
  recipe(
    'Hachis de pommes de terre au thon',
    '🐟 plat poisson 35 facile 1 casserole,four 4',
    'Pomme de terre 900, Thon en boîte 2, Lait 200, Beurre 30, Oignon 1, Tomates concassées 1, Gruyère râpé 60, Sel',
    `Préparer une purée au lait et au beurre.
     Faire revenir l'oignon, ajouter tomates et thon émietté.
     Monter le hachis et gratiner 20 minutes.`,
  ),
  recipe(
    'Feuilleté au saumon & poireaux',
    '🥧 plat poisson 45 moyen 2 four 4',
    'Pâte feuilletée 2, Pavé de saumon 3, Poireau 2, Crème fraîche 100, Œuf 1, Citron 0.5, Sel',
    `Faire fondre les poireaux, ajouter la crème.
     Sur une pâte, étaler poireaux puis saumon en dés, citron et sel.
     Couvrir de la seconde pâte, souder, dorer et cuire 30 minutes à 200 °C.`,
  ),
]
