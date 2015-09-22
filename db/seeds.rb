Planes.destroy_all
Flights.destroy_all
Users.destroy_all
Reservations.destroy_all

p1 = Plane.create({ name: 'T-bird', num_rows: 6, num_cols: 1000 });
p2 = Plane.create({ name: 'Fairey Swordfish', num_rows: 6, num_cols: 120 });

f1 = Flight.create({ flight_number: '63', origin: 'Sydney', destination: 'Melbourne', date: 15-12-2015, time: 18:10:12 });
f2 = Flight.create({ flight_number: '13', origin: 'Perth', destination: 'Sydney', 15-12-2015, time: 19:32:12 });

u1 = Users.create({ name: 'Aile', address: '32 Cute st, Cute Town, Cutecute, 2001, NSW', phone_number: '612 8923 7878', passport_number: 'M892 345' });
u2 = Users.create({ name: 'Rob', address: '2 Hot Lane, Sassy Town, Robsville, 2003, NSW', phone_number: '612 9999 6666', passport_number: 'M991 309' });

r1 = Reservations.create
r2 = Reservations.create
r3 = Reservations.create

r1 << f1 << u1
r2 << f1 << u2
r3 << f2 << u1