// const productsManufacturers = [
//     'Drennan',
//     'Shimano',
//     'Preston Innovations',
//     'Spro',
//     'Daiwa',
//     'St Croix',
//     'Stinger',
//     'Mikado',
//     'Shimanо',
//     'Black Hole',
//   ];
//   const partsManufacturers = [
//     'Trabucco',
//     'Balzer',
//     'Middy',
//     'Fenwick',
//     'GRFISH',
//     'Maximus',
//     'Graphiteleader',
//     'Lucky John',
//     'G Loomis',
//     'Mifine',
//   ];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
      const manualData = [
        { 
          products_manufacturer: 'Drennan',
          parts_manufacturer: 'Trabucco',
          price: 90,
          name: '123',
          description: 'Sed do eiusmod tempor incididunt',
          images: JSON.stringify([ 'https://www.prestoninnovations.com/globalassets/preston-catalog/pp-11139/pp-11139_durapelletwaggler10ft_main.jpg?format=png&height=450&width=550&transBg=true']),
          vendor_code: 'GHI789',
          in_stock: 8,
          bestseller: 8,
          new: 8,
          popularity: 25,
          compatibility: 'Suitable for DEF',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Добавьте другие объекты данных по аналогии
      ];
  
      // Вставить вручную введенные данные в таблицу
      return queryInterface.bulkInsert('products', manualData, {});
    },
  
    async down(queryInterface, Sequelize) {
      // Удаление вручную введенных данных при откате миграции (можно оставить пустым)
      return queryInterface.bulkDelete('products', null, {});
    }
  };