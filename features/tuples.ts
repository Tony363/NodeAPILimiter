const drink = {
    color:'brown',
    carbonated: true,
    sugar:40
};

type Drink = [string,boolean,number]

const pepsi:Drink = [drink.color,drink.carbonated,drink.sugar];
pepsi[0] = drink.color;
pepsi[2] = drink.sugar;

const sprite:Drink = ['clear',true,40];
const tea:Drink = ['brow',false,0];

const carSpecs:[number,number] = [400.,3354]

const carStats = {
    horsepower:400,
    weight:3354
};
