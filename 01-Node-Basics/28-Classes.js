//Example using Class

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'I am the Victoria of hearts, now bow down to me! attack with ' + this.weapon
    }
}

//class JLInherit extends Character {
//    constructor(name, weapon, place) {
//        super(name,weapon);
//        this.place = place;
//    }
//}


//class Truth extends Character {
//    constructor(name, weapon, superpower) {
//        super(name,weapon);
//        this.superpower = superpower;
//    }
//    makeThemSpeak() {
//        return 'I am Vengeance!  I am the Knight!!  I am BATMAN!!!!';
//    }
//    burnThem(){
//            return 'Feel My Wrath!';
//    }
//}

//const Batman = new Truth('Batman', 'Batarang', 'MaritalArts');
//console.log('Batman');
//console.log(Batman.attack());
//console.log(Batman.makeThemSpeak());

//const GreenArrow = new JLInherit('GreenArrow', 'Bow&Arrow', 'centralcity');
//console.log('GreenArrow');
//console.log(GreenArrow.attack());

//const Superman = new Truth('Superman', 'Laser-Vision', 'Super-Strength');
//console.log('Superman');
//console.log(Superman.attack());
//console.log(Superman.burnThem());


//Given problem:const victoria = new Queen('Victoria', 'army', 'hearts');
//create a new instance with the queen having (name, weapon, type). Type includes: 'hearts', 'clubs', 'spades', 'diamonds'
//victoria.attack()
//will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

class queenInherit extends Character{
    constructor(name,weapon,type) {
        super(name,weapon);
        this.type = type;
    }
}

const victoria = new queenInherit('Victoria', 'Army', 'Hearts');
console.log(victoria.attack());