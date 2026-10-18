import { MapPin, Phone, Mail } from 'lucide-react';
import burgerImg from '../assets/images/burger.png';
import pastaImg from '../assets/images/pasta.png';
import friesImg from '../assets/images/fries.png';
import drinksImg from '../assets/images/drinks.png';
import sandwichImg from '../assets/images/sandwich.png';
import comboImg from '../assets/images/combo.png';
import pizzaImg from '../assets/images/pizza.png';

export const products = [
  { id: 1, name: 'Spicy Burger', price: 10.90, category: 'Burger', image: burgerImg },
  { id: 2, name: 'French Fry', price: 10.90, category: 'French Fry', image: friesImg },
  { id: 3, name: 'Pasta', price: 10.90, category: 'Pasta', image: pastaImg },
  { id: 4, name: 'Sandwich', price: 10.90, category: 'Sandwich', image: sandwichImg },
  { id: 5, name: 'Cold Drinks', price: 10.90, category: 'Cold Drinks', image: drinksImg },
  { id: 6, name: 'Combo 1', price: 10.90, category: 'Combo', image: comboImg },
  { id: 7, name: 'Combo 2', price: 10.90, category: 'Combo', image: comboImg },
  { id: 8, name: 'Pepperoni Pizza', price: 15.90, category: 'Pizza', image: pizzaImg },
];

export const categories = ['All Food', 'Burger', 'Pizza', 'Sandwich', 'Cold Drinks', 'Pasta', 'Combo'];

export const quickLinks = ['About Us', 'Menu', 'Testimonial', 'Blog', 'Contact Us'];
export const menuLinks = ['Burgers', 'Pasta', 'Sandwich', 'Cold Drinks'];

export const contactInfo = [
  { icon: MapPin, text: 'Eldoret, Kenya\nNear Rupa Mall' },
  { icon: Phone, text: '+254 116 726 222' },
  { icon: Mail, text: 'foodie@gmail.com' }
];
