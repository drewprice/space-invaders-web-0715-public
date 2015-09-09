describe('CrewMember', function() {
  var tristan, jon, katie;
  beforeEach(function() {
    tristan = new CrewMember('Pilot', engageWarpDrive);
    jon     = new CrewMember('Defender', setsInvisibility);
    katie   = new CrewMember('Gunner', chargePhasers);
  });

  it('should know their position', function() {
    expect(tristan.position).toBe('Pilot');
    expect(jon.position).toBe('Defender');
    expect(katie.position).toBe('Gunner');
  });

  it('should return "Looking for a Rig" if they aren\'t assigned to a ship', function() {
    expect(tristan.currentShip()).toBe('Looking for a Rig');
  });

  it('should return "had no effect" when the crew member tries to use their special ability', function() {
    expect(tristan.activatePower()).toBe('had no effect');
    expect(jon.activatePower()).toBe('had no effect');
    expect(katie.activatePower()).toBe('had no effect');
  });
});

describe('Spaceship', function() {
  var spaceship;
  beforeEach(function() {
    spaceship = new Spaceship('The Krestel', [], 5, 4);
  });

  it('should know it\'s own name', function() {
    expect(spaceship.name).toBe('The Krestel');
  });

  it('should have a crew, initialized as an array', function() {
    expect(spaceship.crew instanceof Array).toBe(true);
  });

  it('should have the correct number of phasers (5)', function() {
    expect(spaceship.phasers).toBe(5);
  });

  it('should have the correct layer of shields (4)', function() {
    expect(spaceship.shields).toBe(4);
  });

  it('should have it\'s cloaking down by default', function() {
    expect(spaceship.cloaked).toBe(false);
  });

  it('should have it\'s warp drive disengaged by default', function() {
    expect(spaceship.warpDrive).toBe(false);
  });

  it('should be docked if it has no crew', function() {
    expect(spaceship.docked).toBe(true);
  });

  it('should have it\'s phasers uncharged by default', function() {
    expect(spaceship.phasersReady).toBe(false);
  });
});

describe('Ship with a crew', function() {
  var tristan, jon, katie, spaceship;
  beforeEach(function() {
    tristan   = new CrewMember('Pilot', engageWarpDrive);
    jon       = new CrewMember('Defender', setsInvisibility);
    katie     = new CrewMember('Gunner', chargePhasers);
    spaceship = new Spaceship('The Krestel', [tristan, jon, katie], 5, 4);
  });

  it('`docked` should return false for ships with a crew', function() {
    expect(spaceship.docked).toBe(false);
  });

  it('a crew member should return their ship when `ship` is called on them', function() {
    expect(tristan.ship).toBe(spaceship);
    expect(tristan.ship.name).toBe('The Krestel');
  });

  it('should charge its phasers when a gunner calls `chargePhasers`', function() {
    tristan.activatePower();
    expect(spaceship.phasersReady).toBe(false);
    katie.activatePower();
    expect(spaceship.phasersReady).toBe(true);
  });

  it('should have it\'s warp drive set to "engaged" only when the pilot uses `engageWarpDrive`', function() {
    jon.activatePower();
    expect(spaceship.warpDrive).toBe(false);
    tristan.activatePower();
    expect(spaceship.warpDrive).toBe(true);
  });

  it('should cloak when a defender `setsInvisibility`', function() {
    katie.activatePower();
    expect(spaceship.cloaked).toBe(false);
    jon.activatePower();
    expect(spaceship.cloaked).toBe(true);
  });

});
