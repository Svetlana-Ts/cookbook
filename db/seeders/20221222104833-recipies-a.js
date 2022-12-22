/** @type {import('sequelize-cli').Migration} */
const getRandomTime = () => Math.floor(Math.random() * (12 - 3) + 3) * 10;

module.exports = {
  async up(queryInterface) {
    let cards = [];

    try {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      const list = [];
      data.meals.map((item) => list.push(item));

      const ingredList = [];

      for (let i = 0; i < list.length; i += 1) {
        const ingred = [];
        for (let j = 1; j <= 20; j += 1) {
          if (list[i][`strIngredient${j}`]) {
            const str = `${list[i][`strIngredient${j}`]} - ${list[i][
              `strMeasure${j}`
            ].trim()}`;
            ingred.push(str);
          }
        }
        ingredList.push({
          ingredientsCount: ingred.length,
          ingredients: ingred.join('|'),
        });
      }
      cards = list.map((item, i) => ({
        photo: item.strMealThumb,
        title: item.strMeal,
        ingredients: ingredList[i].ingredients,
        ingredientsCount: ingredList[i].ingredientsCount,
        instruction: item.strInstructions,
        time: getRandomTime(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    } catch (error) {
      console.log(error.message);
    }

    await queryInterface.bulkInsert('Cards', cards, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards');
  },
};
