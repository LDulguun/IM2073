create database if not exists eshop;

drop table if exists items;

create table items (
	item_id	varchar(50),
	item_name	varchar(50),
	price	float,
	stock	int
);

drop table if exists items;
create table items(
  item_id varchar(50),
  item_name varchar(50),
  price  float,
  stock    int);
insert into items values (	001	, '	Star Wars Value Pack	', 	52.34	, 	120	);
insert into items values (	002	, '	Star Wars Bucket	', 	70.62	, 	35	);
insert into items values (	003	, '	MINI TIE Fighter	', 	31.10	, 	113	);
insert into items values (	004	, '	Emperor Palpatine, Darth Maul and Darth Vader	', 	42.60	, 	137	);
insert into items values (	005	, '	Luke Skywalker, Han Solo and Boba Fett	', 	114.76	, 	110	);
insert into items values (	006	, '	Chewbacca and 2 Biker Scouts	', 	1.71	, 	59	);
insert into items values (	007	, '	Battle Droids and Command Officer	', 	9.97	, 	38	);
insert into items values (	008	, '	Jabbas Message	', 	29.56	, 	8	);
insert into items values (	009	, '	Jabbas Prize	', 	137.25	, 	7	);
insert into items values (	010	, '	T-16 Skyhopper	', 	6.19	, 	124	);
insert into items values (	011	, '	Geonosian Fighter	', 	62.96	, 	121	);
insert into items values (	012	, '	TIE Bomber	', 	9.54	, 	133	);
insert into items values (	013	, '	Jabbas Palace	', 	4.69	, 	2	);
insert into items values (	014	, '	AT-TE	', 	122.65	, 	37	);
insert into items values (	015	, '	AT-AT	', 	1.30	, 	13	);
insert into items values (	016	, '	MINI X-wing Fighter & TIE Advanced	', 	6.93	, 	55	);
insert into items values (	017	, '	MINI Sebulbas Podracer & Anakins Podracer	', 	16.98	, 	42	);
insert into items values (	018	, '	MINI AT-ST & Snowspeeder	', 	38.68	, 	95	);
insert into items values (	019	, '	MINI Jedi Starfighter & Slave I	', 	89.30	, 	92	);
insert into items values (	020	, '	MINI Millennium Falcon	', 	231.41	, 	15	);
insert into items values (	021	, '	MINI AT-AT	', 	11.80	, 	60	);
insert into items values (	022	, '	MINI Republic Gunship	', 	18.48	, 	141	);
insert into items values (	023	, '	 MINI MTT	', 	25.59	, 	139	);
insert into items values (	024	, '	MINI Star Destroyer	', 	1.84	, 	110	);
insert into items values (	025	, '	MINI Sith Infiltrator	', 	8.08	, 	11	);
insert into items values (	026	, '	MINI Imperial Shuttle	', 	101.75	, 	74	);
insert into items values (	027	, '	MINI AT-TE	', 	10.61	, 	67	);
insert into items values (	028	, '	Rebel Snowspeeder	', 	27.81	, 	44	);
insert into items values (	029	, '	Mos Eisley Cantina	', 	2.88	, 	141	);
insert into items values (	030	, '	X-wing Fighter	', 	2.72	, 	80	);
insert into items values (	031	, '	Millennium Falcon	', 	14.42	, 	32	);
insert into items values (	032	, '	V-Wing Fighter	', 	14.21	, 	63	);
insert into items values (	033	, '	TIE Interceptor	', 	12.95	, 	129	);
insert into items values (	034	, '	 A-Wing Fighter	', 	1.19	, 	72	);
insert into items values (	035	, '	B-Wing Fighter	', 	10.97	, 	32	);
insert into items values (	036	, '	Slave I	', 	45.63	, 	126	);
insert into items values (	037	, '	Jabbas Sail Barge	', 	27.62	, 	146	);
insert into items values (	038	, '	Imperial Star Destroyer	', 	79.60	, 	48	);
insert into items values (	039	, '	Imperial Star Destroyer [revised]	', 	40.49	, 	2	);
insert into items values (	040	, '	X-wing Fighter	', 	9.67	, 	46	);
insert into items values (	041	, '	X-wing Fighter	', 	1.65	, 	35	);
insert into items values (	042	, '	Boba Fetts Slave I	', 	105.09	, 	28	);
insert into items values (	043	, '	TIE Interceptor	', 	105.51	, 	85	);
insert into items values (	044	, '	Mini Jedi Starfighter	', 	87.79	, 	75	);
insert into items values (	045	, '	Mini ARC Fighter	', 	89.52	, 	64	);
insert into items values (	046	, '	Mini Wookiee Attack	', 	56.21	, 	29	);
insert into items values (	047	, '	Lightsaber Duel	', 	58.08	, 	86	);
insert into items values (	048	, '	Jedi Duel	', 	2.77	, 	51	);
insert into items values (	049	, '	Desert Skiff	', 	66.64	, 	20	);
insert into items values (	050	, '	Droid Escape	', 	75.15	, 	5	);
insert into items values (	051	, '	Landspeeder	', 	31.65	, 	48	);
insert into items values (	052	, '	Droid Fighter	', 	91.63	, 	123	);
insert into items values (	053	, '	Tusken Raider Encounter	', 	44.68	, 	7	);
insert into items values (	054	, '	Gungan Patrol	', 	49.24	, 	66	);
insert into items values (	055	, '	 Twin-Pod Cloud Car	', 	98.48	, 	30	);
insert into items values (	056	, '	Naboo Swamp	', 	8.64	, 	127	);
insert into items values (	057	, '	Flash Speeder	', 	24.40	, 	139	);
insert into items values (	058	, '	Battle Droid Carrier	', 	159.58	, 	53	);
insert into items values (	059	, '	Imperial AT-ST	', 	38.77	, 	94	);
insert into items values (	060	, '	Speeder Bikes	', 	24.08	, 	27	);
insert into items values (	061	, '	Snowspeeder	', 	32.85	, 	20	);
insert into items values (	062	, '	Anakins Podracer	', 	84.31	, 	115	);
insert into items values (	063	, '	Bounty Hunter Pursuit	', 	3.17	, 	125	);
insert into items values (	064	, '	 A-wing Fighter	', 	3.24	, 	48	);
insert into items values (	065	, '	Ewok Attack	', 	25.88	, 	147	);
insert into items values (	066	, '	X-wing Fighter	', 	16.36	, 	56	);
insert into items values (	067	, '	Naboo Fighter	', 	2.74	, 	66	);
insert into items values (	068	, '	X-wing Fighter	', 	23.09	, 	100	);
insert into items values (	069	, '	Jedi Starfighter	', 	49.60	, 	101	);
insert into items values (	070	, '	Slave I	', 	31.48	, 	110	);
insert into items values (	071	, '	TIE Fighter	', 	55.49	, 	103	);
insert into items values (	072	, '	TIE Fighter & Y-wing	', 	5.35	, 	132	);
insert into items values (	073	, '	Sith Infiltrator	', 	72.52	, 	51	);
insert into items values (	074	, '	TIE Fighter and Y-wing	', 	46.20	, 	144	);
insert into items values (	075	, '	Jango Fetts Slave I	', 	51.91	, 	124	);
insert into items values (	076	, '	Trade Federation AAT	', 	9.96	, 	142	);
insert into items values (	077	, '	Podracing bucket	', 	3.78	, 	97	);
insert into items values (	078	, '	7161 Gungan Sub	', 	3.37	, 	2	);
insert into items values (	079	, '	Republic Gunship	', 	16.54	, 	103	);
insert into items values (	080	, '	Imperial Shuttle	', 	107.98	, 	32	);
insert into items values (	081	, '	Mos Espa Podrace	', 	12.44	, 	90	);
insert into items values (	082	, '	B-wing at Rebel Control Center	', 	5.92	, 	75	);
insert into items values (	083	, '	TIE Interceptor	', 	13.86	, 	11	);
insert into items values (	084	, '	Trade Federation MTT	', 	9.06	, 	108	);
insert into items values (	085	, '	Wattos Junkyard	', 	1.00	, 	80	);
insert into items values (	086	, '	Millennium Falcon	', 	29.49	, 	80	);
insert into items values (	087	, '	X-wing Fighter	', 	64.84	, 	35	);
insert into items values (	088	, '	Yoda	', 	37.96	, 	117	);
insert into items values (	089	, '	Final Duel I	', 	4.19	, 	150	);
insert into items values (	090	, '	Final Duel II	', 	68.29	, 	63	);
insert into items values (	091	, '	Jedi Defense I	', 	53.38	, 	64	);
insert into items values (	092	, '	Jedi Defense II	', 	4.94	, 	133	);
insert into items values (	093	, '	Clone Scout Walker	', 	12.40	, 	86	);
insert into items values (	094	, '	Darth Vader Transformation	', 	11.73	, 	6	);
insert into items values (	095	, '	Droid Tri-Fighter	', 	4.96	, 	101	);
insert into items values (	096	, '	General Grievous Chase	', 	5.66	, 	17	);
insert into items values (	097	, '	Jedi Starfighter and Vulture Droid	', 	32.11	, 	23	);
insert into items values (	098	, '	Ultimate Lightsaber Duel	', 	36.06	, 	60	);
insert into items values (	099	, '	Wookiee Attack	', 	14.46	, 	51	);
insert into items values (	100	, '	ARC-170 Starfighter	', 	86.58	, 	139	);
insert into items values (	101	, '	Wookiee Catamaran	', 	157.70	, 	130	);
insert into items values (	102	, '	Clone Turbo Tank [2005 edition w/ Lighted Figure]	', 	132.90	, 	106	);
insert into items values (	103	, '	Clone Turbo Tank [2006 edition w/ plain figure]	', 	27.20	, 	79	);
insert into items values (	104	, '	TIE Fighter and Y-wing	', 	190.63	, 	19	);
insert into items values (	105	, '	TIE Fighter	', 	213.15	, 	28	);
insert into items values (	106	, '	Imperial Inspection	', 	67.14	, 	120	);
insert into items values (	107	, '	Ultimate Space Battle	', 	2.59	, 	11	);
insert into items values (	108	, '	Droids Battle Pack	', 	4.86	, 	124	);
insert into items values (	109	, '	Clone Troopers Battle Pack	', 	16.39	, 	125	);
insert into items values (	110	, '	 General Grievous Starfighter	', 	94.29	, 	125	);
insert into items values (	111	, '	AT-ST	', 	22.94	, 	56	);
insert into items values (	112	, '	 Y-wing Fighter	', 	17.00	, 	38	);
insert into items values (	113	, '	Imperial Landing Craft	', 	79.75	, 	43	);
insert into items values (	114	, '	 Naboo N-1 Starfighter and Vulture Droid	', 	1.30	, 	45	);
insert into items values (	115	, '	Jedi Starfighter with Hyperdrive Booster Ring	', 	60.79	, 	65	);
insert into items values (	116	, '	 Trade Federation MTT	', 	231.88	, 	142	);
insert into items values (	117	, '	 Sith Infiltrator	', 	4.00	, 	41	);
insert into items values (	118	, '	TIE Crawler	', 	12.73	, 	107	);
insert into items values (	119	, '	Republic Cruiser	', 	30.79	, 	86	);
insert into items values (	120	, '	Hoth Rebel Base	', 	5.40	, 	2	);
insert into items values (	121	, '	 Imperial Dropship	', 	2.60	, 	146	);
insert into items values (	122	, '	 Rebel Scout Speeder	', 	54.83	, 	134	);
insert into items values (	123	, '	Anakins Jedi Starfighter	', 	36.21	, 	29	);
insert into items values (	124	, '	 Anakins Jedi Starfighter, White Box	', 	48.56	, 	136	);
insert into items values (	125	, '	Hailfire Droid and Spider Droid, Tan Box	', 	18.27	, 	110	);
insert into items values (	126	, '	Hailfire Droid and Spider Droid	', 	41.19	, 	32	);
insert into items values (	127	, '	AT-AP Walker	', 	3.75	, 	11	);
insert into items values (	128	, '	Rogue Shadow	', 	21.85	, 	13	);
insert into items values (	129	, '	Magna Guard Starfighter	', 	52.65	, 	17	);
insert into items values (	130	, '	 V-19 Torrent	', 	75.49	, 	105	);
insert into items values (	131	, '	AT-TE Walker	', 	79.44	, 	39	);
insert into items values (	132	, '	Republic Gunship	', 	64.88	, 	69	);
insert into items values (	133	, '	 Droid Gunship	', 	1.74	, 	26	);
insert into items values (	134	, '	 Republic Fighter Tank	', 	187.87	, 	98	);
insert into items values (	135	, '	The Twilight	', 	52.20	, 	15	);
insert into items values (	136	, '	Separatist Spider Droid	', 	25.76	, 	49	);
insert into items values (	137	, '	 Corporate Alliance Tank Droid	', 	21.65	, 	15	);
insert into items values (	138	, '	 Echo Base	', 	52.88	, 	128	);
insert into items values (	139	, '	Ahsokas Starfighter & Droids	', 	114.31	, 	74	);
insert into items values (	140	, '	Count Dookus Solar Sailer	', 	5.43	, 	52	);
insert into items values (	141	, '	Pirate Tank	', 	22.12	, 	48	);
insert into items values (	142	, '	Home One Mon Calamari Star Cruiser	', 	85.54	, 	82	);
insert into items values (	143	, '	 Midi-scale Millenium Falcon	', 	13.07	, 	10	);
insert into items values (	144	, '	Mace Windus Jedi Starfighter	', 	4.92	, 	70	);
insert into items values (	145	, '	Battle for Geonosis	', 	21.82	, 	31	);
insert into items values (	146	, '	Naboo Fighter	', 	18.77	, 	3	);
insert into items values (	147	, '	Hoth Echo Base	', 	12.63	, 	5	);
insert into items values (	148	, '	Clone Trooper Battle Pack	', 	43.21	, 	9	);
insert into items values (	149	, '	Mandalorian Battle Pack	', 	6.09	, 	86	);
insert into items values (	150	, '	Imperial V-wing Starfighter	', 	25.23	, 	34	);
insert into items values (	151	, '	The Battle of Naboo	', 	80.00	, 	67	);
insert into items values (	152	, '	 Bounty Hunter Assault Gunship	', 	4.25	, 	28	);
insert into items values (	153	, '	T-6 Jedi Shuttle	', 	1.81	, 	84	);
insert into items values (	154	, '	 Ewok Attack	', 	68.52	, 	30	);
insert into items values (	155	, '	 Sith Nightspeeder	', 	1.12	, 	35	);
insert into items values (	156	, '	Geonosian Starfighter	', 	12.43	, 	119	);
insert into items values (	157	, '	 Darth Mauls Sith Infiltrator	', 	222.86	, 	126	);
insert into items values (	158	, '	 Anakins and Sebulbas Podracers	', 	80.48	, 	85	);
insert into items values (	159	, '	 Republic Frigate	', 	1.02	, 	112	);
insert into items values (	160	, '	Millennium Falcon	', 	39.20	, 	24	);
insert into items values (	161	, '	Clone Walker Battle Pack	', 	31.10	, 	133	);
insert into items values (	162	, '	Assassin Droids Battle Pack	', 	81.28	, 	68	);
insert into items values (	163	, '	Hyena Droid Bomber	', 	9.38	, 	8	);
insert into items values (	164	, '	Darth Vaders TIE Fighter	', 	10.86	, 	112	);
insert into items values (	165	, '	Armored Assault Tank (AAT)	', 	2.63	, 	20	);
insert into items values (	166	, '	Republic Attack Shuttle	', 	23.99	, 	149	);
insert into items values (	167	, '	 TIE Fighter	', 	72.39	, 	57	);
insert into items values (	168	, '	V-19 Torrent	', 	76.73	, 	12	);
insert into items values (	169	, '	General Grievous Starfighter	', 	10.28	, 	28	);
insert into items values (	170	, '	Separatist Shuttle	', 	23.03	, 	52	);
insert into items values (	171	, '	Anakins Y-Wing Starfighter	', 	8.40	, 	87	);
insert into items values (	172	, '	The Battle of Endor	', 	48.78	, 	150	);
insert into items values (	173	, '	Venator-Class Republic Attack Cruiser	', 	106.64	, 	135	);
insert into items values (	174	, '	 Rebel Trooper Battle Pack	', 	53.61	, 	112	);
insert into items values (	175	, '	Snowtrooper Battle Pack	', 	62.40	, 	21	);
insert into items values (	176	, '	Freeco Speeder	', 	15.86	, 	121	);
insert into items values (	177	, '	 Droid Tri-Fighter	', 	35.14	, 	140	);
insert into items values (	178	, '	TIE Defender	', 	11.37	, 	46	);
insert into items values (	179	, '	Arc-170 Starfighter	', 	2.87	, 	75	);
insert into items values (	180	, '	 Hoth Wampa Cave	', 	124.46	, 	102	);
insert into items values (	181	, '	 Republic Swamp Speeder	', 	52.31	, 	48	);
insert into items values (	182	, '	 Lukes Landspeeder	', 	2.31	, 	150	);
insert into items values (	183	, '	Plo Koons Jedi Starfighter	', 	6.87	, 	26	);
insert into items values (	184	, '	General Grievous Starfighter	', 	7.32	, 	61	);
insert into items values (	185	, '	Emperor Palpatines Shuttle	', 	6.46	, 	58	);
insert into items values (	186	, '	Slave I	', 	74.57	, 	28	);
insert into items values (	187	, '	Clone Turbo Tank	', 	27.11	, 	121	);
insert into items values (	188	, '	Midi-Scale Imperial Star Destroyer	', 	30.82	, 	57	);
insert into items values (	189	, '	Cad Banes Speeder	', 	1.32	, 	139	);
insert into items values (	190	, '	AT-AT Walker	', 	81.19	, 	31	);
insert into items values (	191	, '	Darth Maul Bust	', 	160.93	, 	7	);
insert into items values (	192	, '	Tantive IV / Rebel Blockade Runner	', 	65.90	, 	17	);
insert into items values (	193	, '	SE Naboo Starfighter	', 	32.48	, 	131	);
insert into items values (	194	, '	Imperial Star Destroyer	', 	1.87	, 	131	);
insert into items values (	195	, '	Cloud City	', 	18.12	, 	126	);
insert into items values (	196	, '	Rebel Snowspeeder	', 	11.30	, 	31	);
insert into items values (	197	, '	TIE Collection	', 	92.40	, 	148	);
insert into items values (	198	, '	Y-wing Attack Starfighter	', 	90.26	, 	90	);
insert into items values (	199	, '	Death Star II	', 	22.58	, 	48	);
insert into items values (	200	, '	Sandcrawler	', 	4.74	, 	107	);

drop table if exists users;

create table users (
	user_id	varchar(50),
	user_name	varchar(50),
	email	varchar(50),
	mob_num	varchar(50),
	password varchar(100)
);

drop table if exists cart;

create table cart (
	user_id varchar(50),
	item_id varchar(50),
	qty		int
);

drop table if exists orders;

create table orders (
	user_id varchar(50),
	item_id varchar(50),
	qty		int,
	ordered_date varchar(20)
);

drop table if exists tokens;

create table tokens (
	value varchar(50),
	stamp bigint,
	user_id varchar(50)
);

insert into items values ('1001', 'item 1', 1.1, 100);
insert into items values ('1002', 'item 2', 2.2, 200);

insert into users values ('ld', 'yaminari', 'yaminarild@gmail.com', '99732224', '123');