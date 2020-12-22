-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `photopath` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `fk_userid` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `posts to users_idx` (`fk_userid`),
  CONSTRAINT `posts to users` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Post Test','This is a test of a post!','public/images/uploads/d1dec73d9258eaf901b272b40d587759a37db7949ab2.png','public/images/uploads/thumbnail -d1dec73d9258eaf901b272b40d587759a37db7949ab2.png',0,'2020-12-21 22:13:49',1234568),(2,'Retro Futurism Woman','This is a woman in a retro future','public/images/uploads/0aafaea32b61404a9bf87fe0789d4b94c12db714de7b.jpeg','public/images/uploads/thumbnail -0aafaea32b61404a9bf87fe0789d4b94c12db714de7b.jpeg',0,'2020-12-22 13:32:19',1234568),(3,'Neon Car','This is a neon green car driving away','public/images/uploads/8b5415bb14f2ec7584fc90874fd37e3fafd98822bf21.png','public/images/uploads/thumbnail -8b5415bb14f2ec7584fc90874fd37e3fafd98822bf21.png',0,'2020-12-22 13:33:35',1234568),(4,'Neon Purple Tunnel','This is a neon purple Tunnel','public/images/uploads/77760c4e263b2c4480c6943372e80ec19f62a0ab82d9.jpeg','public/images/uploads/thumbnail -77760c4e263b2c4480c6943372e80ec19f62a0ab82d9.jpeg',0,'2020-12-22 13:34:39',1234568),(5,'Retrovisor','post post post retrovisor','public/images/uploads/f6ded82fe41e22301be59d0250e6802324da585b8851.jpeg','public/images/uploads/thumbnail -f6ded82fe41e22301be59d0250e6802324da585b8851.jpeg',0,'2020-12-22 13:35:40',1234568),(6,'Sunset','This is a sunset','public/images/uploads/c306a6e83b96414254d645f39240345dcb4da62d9ff6.jpeg','public/images/uploads/thumbnail -c306a6e83b96414254d645f39240345dcb4da62d9ff6.jpeg',0,'2020-12-22 13:37:10',1234568);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(128) NOT NULL,
  `usertype` int NOT NULL DEFAULT '0',
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1234569 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1234567,'FakeUser','FakeEmail@mail.com','FakePassword',0,0,'2020-12-15 20:26:05'),(1234568,'Test3','test3@test.com','$2b$15$ZniofY6BEgQhuX01J3R0ROJUDee0NT87jDCXSoWjTRJc6t297CkcO',0,0,'2020-12-21 20:46:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-22 15:21:12
