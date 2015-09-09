var CrewMember = function (position, power, ship) {
  if (!(this instanceof CrewMember)) return new CrewMember (position, power);

  this.position = position;
  this.ship     = ship;
  this.power    = power === undefined ? powerless : power;
};


CrewMember.prototype.currentShip = function () {
  if (this.hasShip()) {

    return this.ship;

  } else {

    return "Looking for a Rig";

  }
};

CrewMember.prototype.hasShip = function () {
  return this.ship !== undefined;
};

CrewMember.prototype.activatePower = function () {
  if (this.hasShip()) {

    return this.power();

  } else {

    return "had no effect";

  }
};
