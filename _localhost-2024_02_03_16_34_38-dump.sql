-- Host: 127.0.0.1    Database: newsSite

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `news_id` int NOT NULL,
  `author` text,
  `comment` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_news__fk` (`news_id`),
  CONSTRAINT `comments_news__fk` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,4,'Жилина Антонина','Потрясающяя новость за сегодняшний день'),(2,2,'Anonymous','Чрезвычайно негативная новость'),(3,4,NULL,'Боже как уже устали от постоянных морозов. Сил больше нет!'),(4,5,'Петоров Сергей','Вау Супер найс! Супер класс! Обожайю новости про квесты!'),(5,6,'Anonymous','Китайцы, большие молодцы не только стены могут возводить. но и замки');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `datetime` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'Авария на ТЭЦ','Сегодня в 22:00 произола страшная авария на ТЭЦ в Бишкеке',NULL,'2024-02-03 00:00:00'),(2,'Авария на ТЭЦ','Сегодня в 22:00 произола страшная авария на ТЭЦ в Бишкеке',NULL,'2024-02-03 13:27:33'),(3,'Кошка ухаживает за цыплятами','Удивительная новость, кошке подложили яйца и она выседела цыплят. Теперь няньчится!','images/e6123b80-b25c-4a74-90fc-bd0316280215.png','2024-02-03 13:31:22'),(4,'Из-за мороза и ветра на ветках растений появились удивительные ледяные «цветы»','Природа готова показывать нам немало удивительных чудес, и одним таким чудом можно полюбоваться на горе Цзиньфо (провинция Чунцин, Китай). Морозная погода привела к тому, что на ветках растений появились ледяные образования, но это ещё не самое поразительное. Пока лёд застывал, его обдувало ветром, и результатом стало то, что льдинки под воздействием воздушных потоков приняли вид причудливых «цветов», каждый из которых уникален.','images/27a6816a-1e42-4a5e-823f-c09efd2afcc4.png','2024-02-03 13:37:28'),(5,'Любителям квестов и головоломок предлагают лечь в гроб и выбраться оттуда за полчаса','Немало людей любят квесты, и особенно испытания, известные как «escape room» («эскейп-румы» или «побеги из комнаты»). Суть такого аттракциона состоит в том, что участникам нужно найти выход из некоего замкнутого пространства — например, из комнаты. Вот только аттракцион «Catalepsy» (Барселона, Испания) заставляет смельчаков пересмотреть отношение к побегам. Всех желающих запирают вовсе не в комнатах, а в гробах и, лёжа внутри и решая головоломки, люди должны выбраться наружу, причём за полчаса.',NULL,'2024-02-03 13:39:00'),(6,'Умельцы построили в горах удивительный снежный дворец','Снег является источником вдохновения для многих креативных людей, ведь из него можно сделать удивительные скульптуры. Впрочем, эти умельцы просто скульптурами не ограничились и возвели в горах Чанбай (провинция Гирин, Китай) целый дворец. На строение, высота которого составляет 12 метров и которое поражает своей детализацией, ушло 4000 кубометров снега. Пользователи китайских соцсетей по достоинству оценили показанное им зрелище — и это даже несмотря на то, что в тот момент дворец был не закончен. Впрочем, работы движутся к завершению.','images/d325a40c-91fa-40aa-91b1-593e76d0541b.png','2024-02-03 13:40:45');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

