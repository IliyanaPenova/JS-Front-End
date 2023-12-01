function jsObjects(input){
    let heroes=[];
    for (const heroData of input) {
        let[name,level,items]=heroData.split(" / ");
        let hero={
            name,
            level:Number(level),
            items:items
        };
        heroes.push(hero);
    }
    heroes.sort((a,b)=>a.level - b.level);
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

        
    }
    
}
jsObjects([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );