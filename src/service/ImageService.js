const images = [
    'https://cdn.devdojo.com/images/may2021/fruit.jpg',
    'https://cdn.devdojo.com/images/may2021/workout.jpg',
    'https://cdn.devdojo.com/images/may2021/food.jpg',
    'https://cdn.devdojo.com/images/may2021/books.jpg',
    'https://cdn.devdojo.com/images/may2021/clock.jpg',
    'https://cdn.devdojo.com/images/may2021/lemons.jpg'
]

export const featuredImage = 'https://cdn.devdojo.com/images/may2021/cupcakes.jpg';

export const getPostImage = (index) => {
    return images[index];
}