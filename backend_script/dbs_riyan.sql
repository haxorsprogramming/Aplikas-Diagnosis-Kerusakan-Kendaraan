/* Database export results for db dbs_riyan */

/* Preserve session variables */
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS=0;

/* Export data */

/* Table structure for tbl_gejala */
CREATE TABLE `tbl_gejala` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `kd_gejala` varchar(5) DEFAULT NULL,
  `gejala_kerusakan` text,
  `kd_kerusakan` varchar(111) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

/* data for Table tbl_gejala */
INSERT INTO `tbl_gejala` VALUES (20,"G1","Mesin Brebet Saat Akselerasi","G1");
INSERT INTO `tbl_gejala` VALUES (21,"G2","Waktu IDLE mesin normal (Tidak Pincang)","G1");
INSERT INTO `tbl_gejala` VALUES (22,"G3","Mesin Di Start Hidup","K02");
INSERT INTO `tbl_gejala` VALUES (23,"G4","Mesin Sekian Detik Mati","K02");
INSERT INTO `tbl_gejala` VALUES (24,"G5","Kunci Kontak Tidak On/Start","K03");
INSERT INTO `tbl_gejala` VALUES (25,"G6","Lampu-lampu pada spidometer mati semua","K03");
INSERT INTO `tbl_gejala` VALUES (26,"G7","Mesin Timbul Bunyi Siul Saat Jalan Lama","K04");
INSERT INTO `tbl_gejala` VALUES (27,"G8","Amper panas naik atau lampu amper panas menyala","K05");
INSERT INTO `tbl_gejala` VALUES (28,"G9","Oli Mesin Sering Berkurang","S06");
INSERT INTO `tbl_gejala` VALUES (29,"G10","Bunyi Cit-cit pada awal stater dipagi hari","K07");
INSERT INTO `tbl_gejala` VALUES (30,"G11","Mesin Pincang pada saat IDLE di Gas terasa berat","K08");
INSERT INTO `tbl_gejala` VALUES (31,"G12","Bunyi Tek-tek saat akselerasi","K09");
INSERT INTO `tbl_gejala` VALUES (32,"G13","Lampu MIL menyala di spidometer","K010");
INSERT INTO `tbl_gejala` VALUES (33,"G14","Start Panjang di pagi hari","K11");
INSERT INTO `tbl_gejala` VALUES (34,"G15","Mesin Terkadang terasa berat di pagi hari","K11");
INSERT INTO `tbl_gejala` VALUES (35,"G16","Mesin Getar saat IDLE getarannya tidak biasa","K012");
INSERT INTO `tbl_gejala` VALUES (36,"G17","Air Radiator di tangki cadangan berbuih","K13");
INSERT INTO `tbl_gejala` VALUES (37,"G18","Air Radiator Di Tangki selalu berkurang","K13");
INSERT INTO `tbl_gejala` VALUES (38,"G19","Pedal rem terasa getar pada saat kecepatan 60km/jam","K14");
INSERT INTO `tbl_gejala` VALUES (39,"G20","Steer terasa getar pada kecepatan di atas 60km/jam","K14");
INSERT INTO `tbl_gejala` VALUES (40,"G21","Terasa getaran pada lantai pengemudi di kecepatan 40km/jam","K15");
INSERT INTO `tbl_gejala` VALUES (41,"G22","Steer narik kiri","K16");
INSERT INTO `tbl_gejala` VALUES (42,"G23","Steer narik kanan","K16");
INSERT INTO `tbl_gejala` VALUES (43,"G24","Noise tuk-tuk di kolong saat jalan rusak","K17");
INSERT INTO `tbl_gejala` VALUES (44,"G25","Noise tek-tek saat steer belok mentok (putar arah)","K18");
INSERT INTO `tbl_gejala` VALUES (45,"G26","Nosie Duk-duk saat steer di belokan kanan","K19");
INSERT INTO `tbl_gejala` VALUES (46,"G27","Nosie duk-duk saat steer di belokan kiri","B");
INSERT INTO `tbl_gejala` VALUES (47,"G28","Noise Dengung pada kecepatan di atas 80km/jam","K20");
INSERT INTO `tbl_gejala` VALUES (48,"G29","Noise Krek-krek di aera pintu FR RH/LH RR RLH","K21");
INSERT INTO `tbl_gejala` VALUES (49,"G30","Noise kretek-kretek di kolong saat jalan rusak","K22");
INSERT INTO `tbl_gejala` VALUES (50,"G31","Noise kretek-kretek saat saat jalan rusak","K23");
INSERT INTO `tbl_gejala` VALUES (51,"G32","Getaran sampai ke steer","K23");
INSERT INTO `tbl_gejala` VALUES (52,"G33","Body Terasa Melayang (Goyang) di kecepatan 60km/jam","K24");
INSERT INTO `tbl_gejala` VALUES (53,"G34","Bantingan keras saat Melewati polisi tidur atau jalan rusak","K25");
INSERT INTO `tbl_gejala` VALUES (54,"G35","Ster Terasa Berat (Type Hidrolik)","K26");
INSERT INTO `tbl_gejala` VALUES (55,"G36","Timbul suara ngek-ngek saat steer di putar","K26");
INSERT INTO `tbl_gejala` VALUES (56,"G37","Ban termakan luar/dalam (termakan tipis)","K27");
INSERT INTO `tbl_gejala` VALUES (57,"G38","Ban termakan luar/dalam (termakan tebal)","K28");
INSERT INTO `tbl_gejala` VALUES (58,"G39","rem terasa keras","K29");
INSERT INTO `tbl_gejala` VALUES (59,"G40","rem di injak pelan ngempos","K30");
INSERT INTO `tbl_gejala` VALUES (60,"G41","rem di injak mendadak normal","K30");
INSERT INTO `tbl_gejala` VALUES (61,"G42","rem ngempos saat di injak","K31");
INSERT INTO `tbl_gejala` VALUES (62,"G43","pedal rem getar pada saat di injak kecepatan di atas 60km/jam","K32");
INSERT INTO `tbl_gejala` VALUES (63,"G44","steer getar pada saat rem di injak pada kecepatan diatas 60km/jam","K32");
INSERT INTO `tbl_gejala` VALUES (64,"G45","rem lengket","K33");
INSERT INTO `tbl_gejala` VALUES (65,"G46","Ban tidak bisa di putar","K33");
INSERT INTO `tbl_gejala` VALUES (66,"G47","Klakson Mati","K34");
INSERT INTO `tbl_gejala` VALUES (67,"G48","Lampu indikator baterai menyala di speedometer","K34");
INSERT INTO `tbl_gejala` VALUES (68,"G49","Baterai mobil sering rusak","K35");
INSERT INTO `tbl_gejala` VALUES (69,"G50","Tabung Hidup saat di putar-putar","K36");
INSERT INTO `tbl_gejala` VALUES (70,"G51","lampu-lampu kendaraan ada yang mati","K37");
INSERT INTO `tbl_gejala` VALUES (71,"G52","AC tidak dingin saat jalan lama","K38");
INSERT INTO `tbl_gejala` VALUES (72,"G53","Lampu MIL menyala di speedometer","K39");

/* Table structure for tbl_hasil */
CREATE TABLE `tbl_hasil` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `kd_hasil` varchar(5) DEFAULT NULL,
  `kd_uji` varchar(5) DEFAULT NULL,
  `kd_kerusakan` varchar(5) DEFAULT NULL,
  `nilai` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* data for Table tbl_hasil */

/* Table structure for tbl_jenis_kerusakan */
CREATE TABLE `tbl_jenis_kerusakan` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `kd_jenis` varchar(2) DEFAULT NULL,
  `jenis_kerusakan` varchar(222) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/* data for Table tbl_jenis_kerusakan */
INSERT INTO `tbl_jenis_kerusakan` VALUES (1,"A","Sistem Listrik");
INSERT INTO `tbl_jenis_kerusakan` VALUES (2,"B","Sistem Kemudi");
INSERT INTO `tbl_jenis_kerusakan` VALUES (3,"C","Sistem Pengereman");
INSERT INTO `tbl_jenis_kerusakan` VALUES (4,"D","Sistem Mesin");

/* Table structure for tbl_kerusakan */
CREATE TABLE `tbl_kerusakan` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `kd_kerusakan` varchar(12) DEFAULT NULL,
  `kd_jenis_kerusakan` varchar(12) DEFAULT NULL,
  `kerusakan` text,
  `saran_solusi` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

/* data for Table tbl_kerusakan */
INSERT INTO `tbl_kerusakan` VALUES (1,"K1","A","Busi Kotor atau celahnya tidak sesuai spesifikasi","Bersihkan Busi dan stel seusai standar nya atau ganti busi");
INSERT INTO `tbl_kerusakan` VALUES (2,"K2","A","Diduga bola bola lampu putus","Lakukan penggantian\r\nbola lampu yang bar");
INSERT INTO `tbl_kerusakan` VALUES (3,"K3","A","Skring pada kabel bermasalah","Pastikan kabel dan socket terpasang dengan baik");
INSERT INTO `tbl_kerusakan` VALUES (6,"K12","C","Rem tidak macet  u","Ganti minyak rem da");
INSERT INTO `tbl_kerusakan` VALUES (10,"K67","B","Kemudi selalu oleng ke kanan up","Periksa amplas ban 22");
INSERT INTO `tbl_kerusakan` VALUES (11,"K10","A","Makan Oli","Cek Kebocoran PCV(Pentilasi Oli Mesin) dan cek kebocoran di bawah kendaraan jika ada kebocoran segera perbaiki dan jika asap mobil putih tebal, terjadi kehausan di dalam komponen engine (OverHpoul Engine)");
INSERT INTO `tbl_kerusakan` VALUES (12,"G1","D","Busi Kotor atau celahnya sudah tidak sesuai spesifikasi","Bersihkan Busi dan stel sesuai spesifikasi atau ganti busi");
INSERT INTO `tbl_kerusakan` VALUES (13,"K01","D","Busi Kotor atau celahnya sudah tidak sesuai spesifikasi","Bersihkan Busi dan Steel sesuai standar nya atau ganti busi");
INSERT INTO `tbl_kerusakan` VALUES (14,"K02","D","Adanya udara yang masuk atau sensor udara masuk rusak","cek saringan udara, bersihkan saringan udara dan lakukan pergantian sensor udara jika ada yang rusak");
INSERT INTO `tbl_kerusakan` VALUES (15,"K03","D","FUSEBLINK Putus Plus/Min baterai ada yang kendur","cek FUSEBLINK yang 100A jika putus ganti atau repair dan jika plus/min kendur kencangkan");
INSERT INTO `tbl_kerusakan` VALUES (16,"K04","D","Pompa Air kerjanya tidak normal","Ganti pompa air");
INSERT INTO `tbl_kerusakan` VALUES (17,"K05","D","OVERHEAT","Cek motor FAN dan cek kebocoran Radiator (Sistem Pendingin Mesin) jika ada yang rusak/bocor ganti");
INSERT INTO `tbl_kerusakan` VALUES (18,"S06","D","Makan Oli","cek kebocoran PCV(pentilasi oli mesin) dan cek kebocoran di bawah kendaraan jika ada kebocoran segera diperbaiki dan jika asap mobil putih tebal, terjadi kehausan di dalam komponen engine (overhoul engine)");
INSERT INTO `tbl_kerusakan` VALUES (19,"K07","D","Drive Belt Retak atau kendur","Ganti Drive Belt atau di stel");
INSERT INTO `tbl_kerusakan` VALUES (20,"K08","D","Terjadi kebocoran api pada coil atau salah satu coil ada yang mati","lakukan pergantian coil");
INSERT INTO `tbl_kerusakan` VALUES (21,"K09","D","DENTONASI (Banting Klep)","Cuci ruang bakar atau ganti BBM minial dengan octane 92");
INSERT INTO `tbl_kerusakan` VALUES (22,"K010","D","Ada kerusakan pada sensor atau acuator","Lakukan pengecekan komputer ke bengkel resmi");
INSERT INTO `tbl_kerusakan` VALUES (23,"K11","D","pompa minyak lemah atau saringan minyak kotor","bersihkan pompa minyak atau ganti pompa minyak");
INSERT INTO `tbl_kerusakan` VALUES (24,"K012","D","Engine Mounting (Bangku Mesin) kanan pecah","Lakukan pergantian bangku mesin (Engine Mounting)");
INSERT INTO `tbl_kerusakan` VALUES (25,"K13","D","Cylinder Head Baling Terjadi kebocoran atau kerusakan pada sistem pendingin","OH Cylinder Head dan Ganti Paking Cylinder Head Jika ada komponen lain yg rusak ganti");
INSERT INTO `tbl_kerusakan` VALUES (26,"K14","B","Rotor Disc Baling","cek rotor disc dan bubut rotor disc jika diperlukan");
INSERT INTO `tbl_kerusakan` VALUES (27,"K15","B","Drive Shaft AUS RH/LH","Ganti Drive Shaft RH/LH");
INSERT INTO `tbl_kerusakan` VALUES (28,"K16","B","di duga Spooring atau angin ban kurang (jika ban masih bagus)","Cek spooring atau kestabilan tekanan ban");
INSERT INTO `tbl_kerusakan` VALUES (29,"K17","B","CON ROD AUS/Bushing Stabil RH/LH AUS","cek CON ROD RH/LH jika bushing stabil, yang rusak atau AUS sementara bisa di ganjal");
INSERT INTO `tbl_kerusakan` VALUES (30,"K18","B","Drive Shaft Outher AUS RH/LH","Ganti Drive Shaft Outher RH/LH");
INSERT INTO `tbl_kerusakan` VALUES (31,"K19","B","Tapak Shock Koyak RH/LH atau lahar Tapak Shock AUS","Ganti Tapak Shock dan lumasi Lahar Tapak shock");
INSERT INTO `tbl_kerusakan` VALUES (32,"K20","B","Lahar Roda AUS FR RH/LH, RR RH/LH","Ganti Lahar Roda  FR RH/LH, RR RH/LH");
INSERT INTO `tbl_kerusakan` VALUES (33,"K21","B","Striker Pintu Aus","Stel dan lumasi stiker pintu FR RH/LH RR RH/LH");
INSERT INTO `tbl_kerusakan` VALUES (34,"K22","B","Ball Joint Rusak dan Karet-karet Bagian Kolong ada yang pecah","Cek under body+cek karet-karet di kolong kendaraan dan cek kondisi ball joint jika rusak ganti");
INSERT INTO `tbl_kerusakan` VALUES (35,"K23","B","Rack steer aus atau long tie rod aus","cek rack steer dan cek long tie rod jika oplak ganti");
INSERT INTO `tbl_kerusakan` VALUES (36,"K24","B","Lower Arm Karetnya pecah dan Member karetnya pecah","Ganti karet lower dan cek karet member");
INSERT INTO `tbl_kerusakan` VALUES (37,"K25","B","Shock Bocor atau Mati","Ganti Shock");
INSERT INTO `tbl_kerusakan` VALUES (38,"K26","B","Kekurangan oli di power steering","cek kebocoran sistem power steering");
INSERT INTO `tbl_kerusakan` VALUES (39,"K27","B","Ban nya terlalu To In/To Out","Lakukan spooring");
INSERT INTO `tbl_kerusakan` VALUES (40,"K28","B","Chamber nya tidak sesuai","Cek Kaki dan kerusakan seperti Lower Arm, Ball Joint, kebengkokan Shock Jika ada yang rusak ganti");
INSERT INTO `tbl_kerusakan` VALUES (41,"K29","C","Booster Rem bocor","ganti booster rem");
INSERT INTO `tbl_kerusakan` VALUES (42,"K30","C","Master rem sealnya Aus","Ganti Master Rem atau Ganti Seal Master Rem");
INSERT INTO `tbl_kerusakan` VALUES (43,"K31","C","Ada Kebocoran di Sistem Rem","Cek Seal Piston Rem dan bersihkan korosi piston rem");
INSERT INTO `tbl_kerusakan` VALUES (44,"K32","C","Rotor Disc Baling","Bubut Rotor Disck atau Ganti Rotor Disc");
INSERT INTO `tbl_kerusakan` VALUES (45,"K33","C","kerusakan pada seal piston rem yang kaku dan piston rem sudah korosi","cek seal piston dan bersihkan korosi piston rem");
INSERT INTO `tbl_kerusakan` VALUES (46,"K34","A","Fuse Klakson Putar jika fuse klakson dengan altemator satu arus","ganti fuse, periksa kabel power suplai klakson ada yang tidak bersentuhan dengan body kendaraan");
INSERT INTO `tbl_kerusakan` VALUES (47,"K35","A","Altermator indikasi perawatan baterai tidak rutin, kendaraan lebih dari dua kali tidak dipanasi dan adanya accessoris tambahan","Ganti Altemator ke tukang dinamo, perawatan baterai harus rutin dan accessoris kelistrikan tidak direkomendasikan");
INSERT INTO `tbl_kerusakan` VALUES (48,"K36","A","Spikel kabel (mobil yang menggunakan spikel kabel)","Ganti spikel kabel atau repair");
INSERT INTO `tbl_kerusakan` VALUES (49,"K37","A","Kerusakan pada bola lampu dan fuse","ganti bola lampu dan ganti fuse (jika putus)");
INSERT INTO `tbl_kerusakan` VALUES (50,"K38","A","Compressor AC","Ganti Compressor AC");
INSERT INTO `tbl_kerusakan` VALUES (51,"K39","A","Sensor atau akuator ada yang bermasalah","Lakukan pengecekan pada sistem komputer");

/* Table structure for tbl_uji */
CREATE TABLE `tbl_uji` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `kd_uji` varchar(11) DEFAULT NULL,
  `kd_gejala` varchar(5) DEFAULT NULL,
  `kd_kerusakan` varchar(5) DEFAULT NULL,
  `solusi` text,
  `waktu_uji` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `nama_pelanggan` varchar(111) DEFAULT NULL,
  `nama_mobil` varchar(111) DEFAULT NULL,
  `nomor_polisi` varchar(111) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

/* data for Table tbl_uji */
INSERT INTO `tbl_uji` VALUES (33,"taxu2m8z","","K2","Lakukan penggantian\r\nbola lampu yang bar","2020-06-27 15:35:18","Diana","Xenia","BK12AF");
INSERT INTO `tbl_uji` VALUES (34,"bft17paq","","K1","Lakukan servis dan\r\npenambahan preyon","2020-06-27 15:36:49","Diana","Xenia","BK12AF");
INSERT INTO `tbl_uji` VALUES (35,"5k7tzcmm","","K2","Lakukan penggantian\r\nbola lampu yang bar","2020-06-27 15:37:20","Hasnah","Tronton","BK12AF");
INSERT INTO `tbl_uji` VALUES (36,"8342z85n","","K67","Periksa amplas ban 22","2020-06-27 15:38:50","Adit","Xenia","BK12AF");
INSERT INTO `tbl_uji` VALUES (37,"d0xeqvpk","","K2","Lakukan penggantian\r\nbola lampu yang bar","2020-06-27 15:40:51","Adit","Xenia","BK12AF");
INSERT INTO `tbl_uji` VALUES (38,"7dh0ln56","","K2","Lakukan penggantian\r\nbola lampu yang bar","2020-06-27 15:42:03","Hasnah","Toyota Avanza","BK12AF");
INSERT INTO `tbl_uji` VALUES (39,"96fyp4iw","","K1","Lakukan servis dan\r\npenambahan preyon","2020-06-27 19:19:45","Liliana","Honda Jazz","GK 2569 HZ");
INSERT INTO `tbl_uji` VALUES (40,"obyckcxs","","K2","Lakukan penggantian\r\nbola lampu yang bar","2020-06-28 05:29:23","gobang","Go Panca","BK 1 LU");
INSERT INTO `tbl_uji` VALUES (41,"spfd4y1b","","K3","Pastikan kabel dan socket terpasang dengan baik","2020-06-28 05:30:33","Riyan","Go plus","BK 2 LU");
INSERT INTO `tbl_uji` VALUES (42,"ffxhv0a4","","K34","ganti fuse, periksa kabel power suplai klakson ada yang tidak bersentuhan dengan body kendaraan","2020-06-29 15:46:09","Gobang","Go panca","BK 3 LU");
INSERT INTO `tbl_uji` VALUES (43,"x4jkbvrp","","G1","Bersihkan Busi dan stel sesuai spesifikasi atau ganti busi","2020-06-29 15:52:24","riyan","Pajero Sport","BK 123 U");
INSERT INTO `tbl_uji` VALUES (44,"4ka2pf29","","K34","ganti fuse, periksa kabel power suplai klakson ada yang tidak bersentuhan dengan body kendaraan","2020-06-29 21:12:20","boy","Fortuner","BK 77 N");
INSERT INTO `tbl_uji` VALUES (46,"9tw17w76","","K34","ganti fuse, periksa kabel power suplai klakson ada yang tidak bersentuhan dengan body kendaraan","2020-06-29 21:14:57","Sayia","Merci","BB 1 N");
INSERT INTO `tbl_uji` VALUES (47,"ajcuecvl","","K33","cek seal piston dan bersihkan korosi piston rem","2020-06-29 21:17:56","Alex","BMW","B 33 L");
INSERT INTO `tbl_uji` VALUES (48,"lmjg3k68","","G1","Bersihkan Busi dan stel sesuai spesifikasi atau ganti busi","2020-07-01 16:50:18","Riyan","Go Panca","BK 1 LU");

/* Table structure for tbl_uji_probabilitas */
CREATE TABLE `tbl_uji_probabilitas` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `kd_prob` varchar(111) DEFAULT NULL,
  `kd_uji` varchar(111) DEFAULT NULL,
  `kd_gejala` varchar(15) DEFAULT NULL,
  `kd_kerusakan` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=222 DEFAULT CHARSET=latin1;

/* data for Table tbl_uji_probabilitas */
INSERT INTO `tbl_uji_probabilitas` VALUES (134,"q53rn0ay16","xgjc2gwt","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (135,"fcbgron7h8","xgjc2gwt","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (136,"spwe2b9xnt","xgjc2gwt","G22","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (137,"8yopjma159","xgjc2gwt","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (138,"nwzth51olr","mkx2geve","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (139,"cmt65e913r","z8j53e6g","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (140,"xia1mud58h","z8j53e6g","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (141,"5lgo9e3uwt","z8j53e6g","M78","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (142,"hivbrdx6pc","z8j53e6g","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (143,"slkij7hc42","50i7ocx9","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (144,"zrh9l0gsfy","50i7ocx9","G22","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (145,"3wi2dnpjro","50i7ocx9","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (146,"td48pagv7n","p7tddvdk","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (147,"mq35ycvniu","p7tddvdk","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (148,"oeiqkgf4s7","p7tddvdk","G2","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (149,"r4yqbp6izx","qlsy8uos","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (150,"yhfa561kbn","qlsy8uos","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (151,"kf617ih3v4","qlsy8uos","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (152,"yfzgx2cqbj","c1q60kad","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (153,"u3mc5o6znh","c1q60kad","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (154,"ecinztsdu8","8gafhiur","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (155,"uh8end4tgo","8gafhiur","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (156,"9ht4befm1v","8gafhiur","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (157,"gi37z2ybld","nh6mm5o2","G22","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (158,"jn3u7lb1wx","nh6mm5o2","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (159,"0sk8m36ojn","nh6mm5o2","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (160,"45dytio9s7","nu9gby7w","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (161,"ok2fseql3c","nu9gby7w","G22","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (162,"9vx8nf6aye","nu9gby7w","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (163,"ht742o8ase","l3bt06f6","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (164,"djhyxpsga1","g11258rr","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (165,"lx3bqtzd81","medtqq3d","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (166,"a7duvtz1yk","medtqq3d","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (167,"yzfu64bcwd","v71nxjdh","G22","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (168,"x8z3ib6ewd","taxu2m8z","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (169,"5h9n3oxqj6","bft17paq","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (170,"c9snr1og76","bft17paq","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (171,"op85vxid9t","5k7tzcmm","G2","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (172,"zihesymc0t","5k7tzcmm","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (173,"lu31yrg7wb","8342z85n","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (174,"bh73ufvakl","d0xeqvpk","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (175,"fiqdmpgor0","7dh0ln56","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (176,"ph83vwfzki","7dh0ln56","G2","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (177,"fzekiwv81h","7dh0ln56","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (178,"sa4gu2fj6h","7dh0ln56","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (179,"5pjleag40m","7dh0ln56","M78","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (180,"jhl4v1krqs","96fyp4iw","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (181,"r87ux2oqen","96fyp4iw","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (182,"v9371irbhl","96fyp4iw","G4","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (183,"l681wv5obh","obyckcxs","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (184,"6xyh8n47vs","obyckcxs","G12","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (185,"ytl6qr1403","obyckcxs","G3","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (186,"dv7zx2g1fi","spfd4y1b","G22","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (187,"54worm07p2","spfd4y1b","G1","K1");
INSERT INTO `tbl_uji_probabilitas` VALUES (188,"gtepkch39r","spfd4y1b","M78","K3");
INSERT INTO `tbl_uji_probabilitas` VALUES (189,"rsn7cxy16o","spfd4y1b","G2","K2");
INSERT INTO `tbl_uji_probabilitas` VALUES (190,"m9ivetbs58","ffxhv0a4","G51","K37");
INSERT INTO `tbl_uji_probabilitas` VALUES (191,"8ykgwm7zdr","ffxhv0a4","G52","K38");
INSERT INTO `tbl_uji_probabilitas` VALUES (192,"xtday04qgf","ffxhv0a4","G48","K34");
INSERT INTO `tbl_uji_probabilitas` VALUES (193,"uoqim25nc3","ffxhv0a4","G45","K33");
INSERT INTO `tbl_uji_probabilitas` VALUES (194,"f39hsrqu08","x4jkbvrp","G1","G1");
INSERT INTO `tbl_uji_probabilitas` VALUES (195,"hv27ft1neg","x4jkbvrp","G14","K11");
INSERT INTO `tbl_uji_probabilitas` VALUES (196,"o54ycvniwt","x4jkbvrp","G5","K03");
INSERT INTO `tbl_uji_probabilitas` VALUES (197,"ewoz81fhk7","x4jkbvrp","G2","G1");
INSERT INTO `tbl_uji_probabilitas` VALUES (198,"co9fj5ig7b","x4jkbvrp","G10","K07");
INSERT INTO `tbl_uji_probabilitas` VALUES (199,"6v8ojble4c","4ka2pf29","G48","K34");
INSERT INTO `tbl_uji_probabilitas` VALUES (200,"ng03467fps","4ka2pf29","G50","K36");
INSERT INTO `tbl_uji_probabilitas` VALUES (201,"gxcyj7b10l","4ka2pf29","G47","K34");
INSERT INTO `tbl_uji_probabilitas` VALUES (202,"dtf9n4jyr3","s6p4nhbo","G53","K39");
INSERT INTO `tbl_uji_probabilitas` VALUES (203,"ly8atbk0je","s6p4nhbo","G50","K36");
INSERT INTO `tbl_uji_probabilitas` VALUES (204,"8qnz2lxjch","s6p4nhbo","G52","K38");
INSERT INTO `tbl_uji_probabilitas` VALUES (205,"v9sz5jl4ho","s6p4nhbo","G47","K34");
INSERT INTO `tbl_uji_probabilitas` VALUES (206,"j0lr2zf9wa","9tw17w76","G47","K34");
INSERT INTO `tbl_uji_probabilitas` VALUES (207,"5x3svyujwl","9tw17w76","G50","K36");
INSERT INTO `tbl_uji_probabilitas` VALUES (208,"l8mqytg3kw","ajcuecvl","G44","K32");
INSERT INTO `tbl_uji_probabilitas` VALUES (209,"o1h7pbdxn0","ajcuecvl","G39","K29");
INSERT INTO `tbl_uji_probabilitas` VALUES (210,"zxwb6lh70o","ajcuecvl","G45","K33");
INSERT INTO `tbl_uji_probabilitas` VALUES (211,"q7wol49x5k","ajcuecvl","G41","K30");
INSERT INTO `tbl_uji_probabilitas` VALUES (212,"k4p8zuwsj3","ajcuecvl","G46","K33");
INSERT INTO `tbl_uji_probabilitas` VALUES (213,"m3htex9kjc","lmjg3k68","G6","K03");
INSERT INTO `tbl_uji_probabilitas` VALUES (214,"5f2cj0uw8e","lmjg3k68","G10","K07");
INSERT INTO `tbl_uji_probabilitas` VALUES (215,"slg5cyd7zf","lmjg3k68","G11","K08");
INSERT INTO `tbl_uji_probabilitas` VALUES (216,"pgyo6tez8l","lmjg3k68","G8","K05");
INSERT INTO `tbl_uji_probabilitas` VALUES (217,"0mtxdzbw6v","lmjg3k68","G2","G1");
INSERT INTO `tbl_uji_probabilitas` VALUES (218,"wti4kangxv","pwtfn5lr","G2","G1");
INSERT INTO `tbl_uji_probabilitas` VALUES (219,"o8fpuhwc9r","pwtfn5lr","G3","K02");
INSERT INTO `tbl_uji_probabilitas` VALUES (220,"bn86doeq3y","pwtfn5lr","G5","K03");
INSERT INTO `tbl_uji_probabilitas` VALUES (221,"cq325hvi1g","pwtfn5lr","G8","K05");

/* Table structure for tbl_user */
CREATE TABLE `tbl_user` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(111) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `type` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/* data for Table tbl_user */
INSERT INTO `tbl_user` VALUES (1,"admin","21232f297a57a5a743894a0e4a801fc3","2020-02-02 14:41:47","a");
INSERT INTO `tbl_user` VALUES (2,"riyan","21232f297a57a5a743894a0e4a801fc3","2020-06-26 08:10:36","a");
INSERT INTO `tbl_user` VALUES (6,"diana","d41d8cd98f00b204e9800998ecf8427e","2020-06-26 11:55:11","a");

/* Restore session variables to original values */
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
