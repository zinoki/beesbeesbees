var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}

ForagerBee.prototype.constructor = ForagerBee;
