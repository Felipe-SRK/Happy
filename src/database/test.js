const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
  // inserir
  await saveOrphanage(db, {
    lat: "-23.8138853",
    lng: "-47.7240878",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "12345678",
    images: [
      "https://images.unsplash.com/photo-1603297427541-ed9aed6f0dbd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

      "https://images.unsplash.com/photo-1602692091419-bc14b8c341b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 8h até 18h",
    open_on_weekends: "0",
  });

  //consultar
  //const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  //console.log(selectedOrphanages);

  //consultar pelo id
  //const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  //console.log(orphanages);

  //deletar dado da tabela

  //console.log(await db.run("DELETE FROM orphanages WHERE id ='2'"))
  //console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
  //console.log(await db.run("DELETE FROM orphanages"));
});
