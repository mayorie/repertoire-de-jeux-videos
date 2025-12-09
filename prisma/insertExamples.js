import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // -------------------------------
  // Création des éditeurs
  // -------------------------------
  const nintendo = await prisma.editeur.upsert({ where: { nom: "Nintendo" }, update: {}, create: { nom: "Nintendo" } })
  const square = await prisma.editeur.upsert({ where: { nom: "Square Enix" }, update: {}, create: { nom: "Square Enix" } })
  const ea = await prisma.editeur.upsert({ where: { nom: "Electronic Arts" }, update: {}, create: { nom: "Electronic Arts" } })
  const ubisoft = await prisma.editeur.upsert({ where: { nom: "Ubisoft" }, update: {}, create: { nom: "Ubisoft" } })
  const valve = await prisma.editeur.upsert({ where: { nom: "Valve" }, update: {}, create: { nom: "Valve" } })

  // -------------------------------
  // Création des genres
  // -------------------------------
  const action = await prisma.genre.upsert({ where: { nom: "Action" }, update: {}, create: { nom: "Action" } })
  const aventure = await prisma.genre.upsert({ where: { nom: "Aventure" }, update: {}, create: { nom: "Aventure" } })
  const rpg = await prisma.genre.upsert({ where: { nom: "RPG" }, update: {}, create: { nom: "RPG" } })
  const simulation = await prisma.genre.upsert({ where: { nom: "Simulation" }, update: {}, create: { nom: "Simulation" } })
  const sport = await prisma.genre.upsert({ where: { nom: "Sport" }, update: {}, create: { nom: "Sport" } })
  const mmorpg = await prisma.genre.upsert({ where: { nom: "MMORPG" }, update: {}, create: { nom: "MMORPG" } })

  // -------------------------------
  // Création des jeux
  // -------------------------------
  const jeuxData = [
    {
      titre: "Zelda: Breath of the Wild",
      desc: "Jeu d'aventure en monde ouvert",
      date: new Date("2017-03-03"),
      miseEnAvant: true,
      editeur: nintendo,
      genres: [action, aventure]
    },
    {
      titre: "Final Fantasy VII",
      desc: "RPG classique légendaire",
      date: new Date("1997-01-31"),
      miseEnAvant: false,
      editeur: square,
      genres: [rpg, aventure]
    },
    {
      titre: "FIFA 23",
      desc: "Jeu de football",
      date: new Date("2022-09-27"),
      miseEnAvant: true,
      editeur: ea,
      genres: [sport]
    },
    {
      titre: "Assassin's Creed Valhalla",
      desc: "Action et aventure en monde ouvert",
      date: new Date("2020-11-10"),
      miseEnAvant: false,
      editeur: ubisoft,
      genres: [action, aventure]
    },
    {
      titre: "World of Warcraft",
      desc: "MMORPG incontournable",
      date: new Date("2004-11-23"),
      miseEnAvant: true,
      editeur: ea,
      genres: [mmorpg, rpg]
    },
    {
      titre: "The Witcher 3",
      desc: "RPG épique avec un monde ouvert immense",
      date: new Date("2015-05-19"),
      miseEnAvant: true,
      editeur: square,
      genres: [rpg, aventure]
    },
    {
      titre: "SimCity",
      desc: "Simulation urbaine",
      date: new Date("2013-03-05"),
      miseEnAvant: false,
      editeur: ea,
      genres: [simulation]
    },
    {
      titre: "Portal 2",
      desc: "Jeu de puzzle et aventure",
      date: new Date("2011-04-19"),
      miseEnAvant: true,
      editeur: valve,
      genres: [action, aventure]
    },
    {
      titre: "NBA 2K23",
      desc: "Jeu de basketball réaliste",
      date: new Date("2022-09-09"),
      miseEnAvant: false,
      editeur: ea,
      genres: [sport]
    },
    {
      titre: "Final Fantasy XIV",
      desc: "MMORPG très populaire",
      date: new Date("2013-09-30"),
      miseEnAvant: true,
      editeur: square,
      genres: [mmorpg, rpg]
    }
  ]

  // Création dans la base
  for (const j of jeuxData) {
    await prisma.jeu.create({
      data: {
        titre: j.titre,
        desc: j.desc,
        date: j.date,
        miseEnAvant: j.miseEnAvant,
        editeur: { connect: { id: j.editeur.id } },
        genres: { connect: j.genres.map(g => ({ id: g.id })) }
      }
    })
  }

  console.log("10 exemples de jeux insérés avec succès !")
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
