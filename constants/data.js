import KRUNCH from '../assets/everydayvalue/KRUNCH.png';
import KrunchBurgerDrink from '../assets/everydayvalue/KrunchBurgerDrink.png';
import Zingeratha from '../assets/everydayvalue/Zingeratha.png';
import RiceSpice from '../assets/everydayvalue/RiceSpice.png';
import KrunchCombo from '../assets/everydayvalue/KrunchCombo.png';
import ChickenChips from '../assets/everydayvalue/ChickenChips.png';
import Chicken3 from '../assets/everydayvalue/Chicken3.png';
import KrunchChickenCombo from '../assets/everydayvalue/KrunchChickenCombo.png';


const Menu = [
    {
      id: "Menu-01",
      name: "Everyday Value",
      to:'EverydayValue',
    },
    {
        id: "Menu-02",
        name: "Make it a Meal",
        to:'MakeItaMeal',
    },
    {
        id: "Menu-03",
        name: "Signature Boxes",
        to:'SignatureBoxes',
    },
    {
        id: "Menu-04",
        name: "Sharing",
        to:'Sharing',
    },
    {
        id: "Menu-05",
        name: "Promotions",
        to:'Promotions',
    },
    {
        id: "Menu-06",
        name: "Midnight Deals",
        to:'MidnightDeals',
    },
    {
        id: "Menu-07",
        name: "Snacks",
        to:'Snacks',
    },
]

const Everyday= [
    {
            id:'01',
            name:'KRUNCH BURGER',
            price:210,
            source:KRUNCH,

    },
    {
        id:'02',
        name:'KRUNCH BURGER WITH DRINK',
        price:290,
        source:KrunchBurgerDrink,
    },
    {
        id:'03',
        name:'ZINGERATHA',
        price:280,
        source: Zingeratha,
    },
    {
        id:'04',
        name:'RICE AND SPICE',
        price:280,
        source:RiceSpice,

},
{
    id:'05',
    name:'KRUNCH COMBO',
    price:410,
    source:KrunchCombo,
},
{
    id:'06',
    name:'CHICKEN AND CHIPS',
    price:425,
    source: ChickenChips,
},
{
    id:'07',
    name:'3 PCS CHICKEN',
    price:450,
    source:Chicken3,

},
{
id:'08',
name:'KRUNCH CHICKEN COMBO',
price:450,
source:KrunchChickenCombo,
},
]

export { Menu,Everyday };