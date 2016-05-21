

// (function() {
//   var Particle;

//   Particle = (function() {
//     function Particle(x, y) {
//       this.x = x;
//       this.y = y;
//       this.radius = 2;
//       this.decayRate = .003;
//     }

//     Particle.prototype.update = function(ctx, index) {
//       if (this.radius > this.decayRate) {
//         return this.radius -= this.decayRate;
//       } else {
//         return ctx.particles.splice(index, 1);
//       }
//     };

//     Particle.prototype.draw = function(ctx, index) {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
//       ctx.fillStyle = 'rgba(255, 255, 255, 1)';
//       return ctx.fill();
//     };

//     return Particle;

//   })();

//   Sketch.create({
//     setup: function() {
//       this.tick = 0;
//       this.particles = [];
//       this.hue = 0;
//       return this.anchor = {
//         x: this.width / 2,
//         y: this.height / 2,
//         radius: 180,
//         angle: 00,
//         speed: 0.01
//       };
//     },
//     update: function() {
//       var i, results;
//       this.anchor.angle += this.anchor.speed;
//       this.particles.push(new Particle(this.anchor.x + cos(this.anchor.angle) * this.anchor.radius, this.anchor.y + sin(this.anchor.angle) * this.anchor.radius));
//       this.hue += 1;
//       i = (this.particles.length);
//       results = [];
//       while (i--) {
//         results.push(this.particles[i].update(this, i));
//       }
//       return results;
//     },
//     draw: function() {
//       var i, results;
//       i = this.particles.length;
//       results = [];
//       while (i--) {
//         results.push(this.particles[i].draw(this, i));
//       }
//       return results;
//     }
//   });

// }).call(this);
