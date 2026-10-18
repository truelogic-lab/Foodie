import burgerImg from '../assets/images/burger.png';
import pastaImg from '../assets/images/pasta.png';
import sandwichImg from '../assets/images/sandwich.png';
import pizzaImg from '../assets/images/pizza.png';

export const blogPosts = [
  {
    id: 1,
    title: 'The Secret Behind Our Perfectly Grilled Burgers',
    excerpt: 'Find out how we source our ingredients and the passion that goes into every single dish we serve at Foodie.',
    date: 'Oct 12, 2023',
    category: 'Foodie Kitchen',
    image: burgerImg,
    content: `
      <p>At Foodie, we believe that a great burger starts long before it hits the grill. It begins with the freshest, locally sourced ingredients. Our beef is ground daily, ensuring that every patty is as juicy and flavorful as possible.</p>
      <br/>
      <p>The secret to our perfect grill marks isn't just the temperature—it's the timing. Our chefs have mastered the art of the flip, sealing in the juices while creating that iconic smoky char that our customers love.</p>
      <br/>
      <p>But a burger is nothing without its companions. We bake our buns fresh every morning and use only the crispest lettuce and ripest tomatoes. Next time you bite into a Foodie burger, know that it's a masterpiece of flavor and care.</p>
    `
  },
  {
    id: 2,
    title: 'Fresh Pasta Made Daily: A Look Inside Our Kitchen',
    excerpt: 'Discover the traditional techniques we use to craft our signature pasta dishes from scratch every morning.',
    date: 'Oct 08, 2023',
    category: 'Behind the Scenes',
    image: pastaImg,
    content: `
      <p>There is nothing quite like the taste of fresh pasta. At Foodie, we don't settle for store-bought. Our dedicated pasta team starts early every morning, mixing, kneading, and rolling dough to perfection.</p>
      <br/>
      <p>We use a simple, time-honored recipe: just flour, eggs, and a pinch of salt. But it's the technique that makes all the difference. The dough is rested, rolled thin, and cut to exactly the right thickness to hold our rich, slow-simmered sauces.</p>
      <br/>
      <p>Whether you're ordering our classic Spaghetti or a creamy Alfredo, you can taste the difference that freshness makes.</p>
    `
  },
  {
    id: 3,
    title: 'Why Our Sandwiches Are The Talk Of The Town',
    excerpt: 'Layered with flavor and packed with premium meats, our sandwiches are quickly becoming a local legend.',
    date: 'Oct 01, 2023',
    category: 'Menu Spotlight',
    image: sandwichImg,
    content: `
      <p>We didn't set out to reinvent the sandwich, we just wanted to make the best one you've ever had. It all starts with the bread. We use a custom-baked artisan loaf that's crusty on the outside and soft on the inside.</p>
      <br/>
      <p>Inside, you'll find a generous stack of premium deli meats, perfectly melted cheese, and our secret house-made spread. We balance textures and flavors carefully to ensure every bite is satisfying.</p>
      <br/>
      <p>It's no wonder our sandwiches have become a lunchtime favorite for so many of our regulars. Come try one today and see what the buzz is about!</p>
    `
  },
  {
    id: 4,
    title: 'The Art of the Perfect Pizza Crust',
    excerpt: 'From dough hydration to oven temperature, learn how we achieve the ultimate crispy, chewy crust.',
    date: 'Sep 25, 2023',
    category: 'Behind the Scenes',
    image: pizzaImg,
    content: `
      <p>A pizza is only as good as its foundation. Our dough undergoes a 48-hour cold fermentation process, which develops complex flavors and a beautifully airy texture.</p>
      <br/>
      <p>When it comes to baking, we rely on high heat to get that classic "leopard spotting" on the crust. The result is a crust that is slightly charred, perfectly crispy on the outside, and wonderfully chewy on the inside.</p>
      <br/>
      <p>Top it with our house-made tomato sauce and fresh mozzarella, and you have a slice of perfection.</p>
    `
  }
];
