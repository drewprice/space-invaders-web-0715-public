var Spaceship = function (name, crew, phasers, shields) {
  if (!(this instanceof Spaceship)) return new Spaceship (name);

  // Attributes
  this.name    = name;
  this.crew    = crew === undefined ? [] : this.assignCrew(crew);
  this.phasers = phasers;
  this.shields = shields;

  // Status
  this.docked       = crew.length === 0 ? true : false;
  this.cloaked      = false;
  this.warpDrive    = false;
  this.phasersReady = false;
};

Spaceship.prototype.assignCrew = function (crew) {
  for (var i = 0; i < crew.length; i++) {
    crew[i].ship = this;
  }

  return crew;
};
