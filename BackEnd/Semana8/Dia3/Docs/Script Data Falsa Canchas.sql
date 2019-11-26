USE CANCHAS;
INSERT INTO T_USUARIO ( usu_nomb, usu_ape, usu_hash, usu_salt, usu_tipo, usu_fono, usu_mail) 
VALUES( 'Eduardo', 'De Rivero', '$2b$12$5LVaK7k612U7aIyLA7nK1eu1qUiir/dcxu51CfgbJLpn2Lcs4C2xS', '$2b$12$5LVaK7k612U7aIyLA7nK1e', '1', '974207075', 'ederiveroman@gmail.com'),
( 'Ronal', 'Rodriguez', '$2b$12$5LVaK7k612U7aIyLA7nK1eu1qUiir/dcxu51CfgbJLpn2Lcs4C2xS', '$2b$12$5LVaK7k612U7aIyLA7nK1e', '2', '12345', 'rrodriguez@gmail.com'),
( 'Jean', 'Juarez', '$2b$12$5LVaK7k612U7aIyLA7nK1eu1qUiir/dcxu51CfgbJLpn2Lcs4C2xS', '$2b$12$5LVaK7k612U7aIyLA7nK1e', '2', '958726585', 'jjuarez@gmail.com'),
( 'Ernesto', 'Amado', '$2b$12$5LVaK7k612U7aIyLA7nK1eu1qUiir/dcxu51CfgbJLpn2Lcs4C2xS', '$2b$12$5LVaK7k612U7aIyLA7nK1e', '1', '935187249', 'eamado@gmail.com');

INSERT INTO T_LOCAL (loc_nombre, loc_lat, loc_lng, loc_direccion, loc_fono, usu_id) VALUES
('Colosso', '22.20000000', '16.12000000', 'Av Parra S/N', '54859674', '1'),
('Jawara', '22.20560000', '16.12000000', 'Av Dolores', '54258469', '4'),
('Aviacion', '21.15874', '16.12000000', 'Av Aviacion', '54325856', '1'),
('Marina', '22.25252', '16.12000000', 'Av La Marina', '54258569', '1');

INSERT INTO T_OPCIONESLOCAL (ol_desc) VALUES
('Estacionamiento'),
('Car Wash'),
('Cervezas'),
('Guarderia'),
('Juegos para niños'),
('Comida'),
('Alquiler de equipos');

INSERT INTO T_LOCALOPC (loc_id, ol_id) VALUES
('1','1'),
('1','2'),
('1','3'),
('1','7'),
('2','2'),
('2','3'),
('2','4'),
('3','1'),
('3','2'),
('3','3'),
('4','1'),
('4','3'),
('4','5'),
('4','7');


INSERT INTO T_TIPO (tipo_desc) VALUES
('Sintetica'),
('Natural'),
('Cemento'),
('Jebe');

INSERT INTO T_CANCHITA (can_tam, can_foto, loc_id, tipo_id) VALUES
('Mediano', 'https://www.guatemala.com/fotos/2019/08/La-cancha-de-futbol-mas-grande-de-Centroamerica-esta-en-Guatemala-885x500.png', '1', '1'),
('Grande', 'https://us.123rf.com/450wm/yaryhee/yaryhee1402/yaryhee140200001/25598929-vista-superior-de-la-cancha-de-f%C3%BAtbol-o-campo-de-f%C3%BAtbol.jpg?ver=6', '2', '1'),
('Grande', 'https://www.epm.com.co/site/Portals/0/Noticias%20y%20Novedades/2016/Cancha_ituango.png', '2', '2'),
('Pequeño', 'https://lh5.googleusercontent.com/US4dkH_geD1iMaRwC2YCfbeU5i3_18TnaHuwCC26Z5Y3F0TMMqhJdwWYa0Ciis2K7HBbIpLy4KWXnNjfz-q_qG1lUO5LGBHiATQ9FxzG7u97tbczQQeLExnW4nJStt_2xwA', '1', '4'),
('Profesional', 'https://recreasport.com/wp-content/uploads/2017/04/DSCN4094.jpg', '1', '2'),
('Mediano', 'https://www.guatemala.com/fotos/2019/08/La-cancha-de-futbol-mas-grande-de-Centroamerica-esta-en-Guatemala-885x500.png', '1', '1'),
('Pequeño', 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/needish/is-prod-deals/dVuSiwYQcdgRDk8Bgq_Vpw.jpg&w=338&h=220', '1', '1'),
('Mediano', 'https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_jogging-sports.jpg', '1', '3');


INSERT INTO T_PRECIOCANCHA (pc_desc, pc_monto, pc_disponibilidad, can_id) VALUES
('OFERTA', '35.00', '0', '1'),
('PRECIO NORMAL', '45.00', '1', '2'),
('PRECIO NORMAL', '28.00', '0', '3'),
('PRECIO NORMAL', '32.00', '1', '4'),
('OFERTA FIESTAS', '32.00', '0', '5'),
('OFERTA FIESTAS', '30.00', '0', '6'),
('PRECIO NORMAL', '48.00', '1', '1'),
('PRECIO NORMAL', '42.00', '1', '3'),
('PRECIO NORMAL', '42.00', '1', '5'),
('PRECIO NORMAL', '35.00', '1', '6');


INSERT INTO T_RESERVA (res_fechin, res_fechfin, res_monto, res_adelanto, usu_id, pc_id) VALUES
('2019-11-16 18:00:00', '2019-11-16 21:00:00', '90.00', '50.00', '2', '2'),
('2019-11-18 19:00:00', '2019-11-18 21:00:00', '60.00', '35.00', '3', '4'),
('2019-11-22 22:00:00', '2019-11-22 23:00:00', '70.00', '40.00', '2', '4'),
('2019-11-23 18:00:00', '2019-11-23 20:00:00', '80.00', '48.00', '2', '4'),
('2019-11-23 18:00:00', '2019-11-23 20:00:00', '80.00', '45.00', '3', '7'),
('2019-11-23 20:00:00', '2019-11-23 22:00:00', '60.00', '35.00', '3', '8'),
('2019-11-23 22:00:00', '2019-11-23 23:00:00', '60.00', '35.00', '2', '9'),
('2019-11-24 20:00:00', '2019-11-24 22:00:00', '60.00', '30.00', '2', '7'),
('2019-11-25 23:00:00', '2019-11-26 00:00:00', '50.00', '35.00', '2', '10');


INSERT INTO T_VALORACIONES (val_comentario, val_estrellas, res_id) VALUES
('MUY BUENO','5','1'),
('BUEN CARWASH','4','2'),
('RICA COMIDA','5','3'),
('BUEN ESTADO DE LA CANCHA','5','4'),
('LA CANCHA ESTABA EN MAL ESTADO','2','5'),
('SE DEMORARON EN PRENDER LAS LUCES','1','6'),
('BUEN PARTIDO','3','7'),
('LE FALTO SAL A LA MAYONESA','2','8'),
('ESTACIONAMIENTO FULL','2','9');
