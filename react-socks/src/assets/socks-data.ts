import {SockModel} from '../models';

export const productList: SockModel[] = [{
  id: 1,
  name: "Vue Socks",
  brand: "Vue",
  price: 5,
  variants: [
    {id: 1, color: "green", fancyColor: "#42AF7C"},
    {id: 2, color: "blue", fancyColor: "#27384F"}
  ],
  inventory: 3,
  reviews: []
},
{
  id: 2,
  name: "Angular Socks",
  brand: "Angular",
  price: 15,
  variants: [
    {id: 1, color: "red", fancyColor: "#B51020"},
    {id: 2, color: "blue", fancyColor: "#584FB8"}
  ],
  inventory: 3,
  reviews: []
},
{
  id: 3,
  name: "React Socks",
  brand: "React",
  price: 9,
  variants: [
    {id: 1, color: "blue", fancyColor: "#23A3AC"},
  ],
  inventory: 5,
  reviews: []
},
{
  id: 4,
  name: "npm Socks",
  brand: "npm",
  price: 3,
  variants: [
    {id: 1, color: "red", fancyColor: "#DD1F41"},
  ],
  inventory: 3,
  reviews: []
}];
