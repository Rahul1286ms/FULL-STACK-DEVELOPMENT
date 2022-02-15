const menu = ['Chole Bhature', 'Butter Chicken', 'Rajma Chawal', 'Chicken Biryani', 'Dal Makhni', 'Kadhai Panner', 'Garlic Bread',
    'Onion rings', 'Amritsari Naan', 'Paav Bhaji', 'Ras Malai', 'Onion Pizza', 'Egg Cury', 'Egg Omlet', 'Garlic Naan',
    'Garlic Rice', 'Shahi Paneer', 'Chai', 'Momos', 'Chicken Korma', 'Dosa', 'Uttapam', 'Sambhar', 'Vada Paav'];

function isVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1)
        return false;

    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1)
        return false;

    return true;
}
function isNonVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1)
        return true;
    else
        return false;
}

const vegMenu = menu.filter(isVeg);
const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);
const nonVeg = menu.filter(isNonVeg);


console.log(menu);
console.log(vegMenu);
console.log(jainMenu);
console.log(nonVeg);