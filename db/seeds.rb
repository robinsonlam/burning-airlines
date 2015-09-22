
Plane.destroy_all
Flight.destroy_all
User.destroy_all
Reservation.destroy_all
Seat.destroy_all

p1 = Plane.create({ name: 'T-bird', num_rows: 1, num_cols: 2  });
p2 = Plane.create({ name: 'Fairey Swordfish', num_rows: 2, num_cols: 1 });

f1 = Flight.create({ flight_number: '63', origin: 'Sydney', destination: 'Melbourne', date: '12/15/2015', time: '18:10:12' });
f2 = Flight.create({ flight_number: '13', origin: 'Perth', destination: 'Sydney', date: '12/15/2015', time: '19:32:12' });

u1 = User.create({ name: 'Aile', address: '32 Cute st, Cute Town, Cutecute, 2001, NSW', phone_number: '612 8923 7878', passport_number: 'M892 345' });
u2 = User.create({ name: 'Rob', address: '2 Hot Lane, Sassy Town, Robsville, 2003, NSW', phone_number: '612 9999 6666', passport_number: 'M991 309' });

s1 = Seat.create({ seat_number: 'T1' })
s2 = Seat.create({ seat_number: 'T2' })

s3 = Seat.create({ seat_number: 'F1' })
s4 = Seat.create({ seat_number: 'F2' })

r1 = Reservation.create
r2 = Reservation.create
r3 = Reservation.create

p1.seats << s1 << s2
p2.seats << s3 << s4

p1.flights << f1
p2.flights << f2

u1.reservations << r1 << r2
u2.reservations << r3

f1.reservations << r1
f2.reservations << r2 << r3









