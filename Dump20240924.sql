CREATE DATABASE  IF NOT EXISTS `tablo` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tablo`;
-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (x86_64)
--
-- Host: localhost    Database: tablo
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `boardColumns`
--

DROP TABLE IF EXISTS `boardColumns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardColumns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `boardId` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `order` int DEFAULT NULL,
  `titleColor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_board_columns_boards1_idx` (`boardId`),
  CONSTRAINT `fk_board_columns_boards1` FOREIGN KEY (`boardId`) REFERENCES `boards` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardColumns`
--

LOCK TABLES `boardColumns` WRITE;
/*!40000 ALTER TABLE `boardColumns` DISABLE KEYS */;
INSERT INTO `boardColumns` VALUES (1,1,'To do',NULL,'#F788CC'),(2,1,'Doing',NULL,'#FC7309'),(3,1,'Done',NULL,'#816AD3');
/*!40000 ALTER TABLE `boardColumns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boards`
--

DROP TABLE IF EXISTS `boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (1,'board1');
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int NOT NULL,
  `orginalName` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `mimeType` varchar(45) DEFAULT NULL,
  `size` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans`
--

DROP TABLE IF EXISTS `plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `maxUsers` int DEFAULT NULL,
  `maxBoards` int DEFAULT NULL,
  `maxTasks` int DEFAULT NULL,
  `maxPoints` int DEFAULT NULL,
  `maxStorage` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans`
--

LOCK TABLES `plans` WRITE;
/*!40000 ALTER TABLE `plans` DISABLE KEYS */;
/*!40000 ALTER TABLE `plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `points`
--

DROP TABLE IF EXISTS `points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `points` (
  `id` int NOT NULL AUTO_INCREMENT,
  `taskId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `cordX` varchar(255) DEFAULT NULL,
  `cordY` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_points_tasks1_idx` (`taskId`),
  KEY `fk_points_users1_idx` (`userId`),
  CONSTRAINT `fk_points_tasks1` FOREIGN KEY (`taskId`) REFERENCES `tasks` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_points_users1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `points`
--

LOCK TABLES `points` WRITE;
/*!40000 ALTER TABLE `points` DISABLE KEYS */;
/*!40000 ALTER TABLE `points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pointsFiles`
--

DROP TABLE IF EXISTS `pointsFiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pointsFiles` (
  `point_id` int NOT NULL,
  `file_id` int NOT NULL,
  PRIMARY KEY (`point_id`,`file_id`),
  KEY `fk_points_files_files1_idx` (`file_id`),
  CONSTRAINT `fk_points_files_files1` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_points_files_points1` FOREIGN KEY (`point_id`) REFERENCES `points` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pointsFiles`
--

LOCK TABLES `pointsFiles` WRITE;
/*!40000 ALTER TABLE `pointsFiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `pointsFiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `boardColumnId` int NOT NULL,
  `userId` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `priority` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `dueDate` datetime DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  ` createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tasks_board_columns1_idx` (`boardColumnId`),
  KEY `fk_tasks_users1_idx` (`userId`),
  CONSTRAINT `fk_tasks_board_columns1` FOREIGN KEY (`boardColumnId`) REFERENCES `boardColumns` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_tasks_users1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasksFiles`
--

DROP TABLE IF EXISTS `tasksFiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasksFiles` (
  `taskId` int NOT NULL,
  `fileId` int NOT NULL,
  PRIMARY KEY (`taskId`,`fileId`),
  KEY `fk_tasks_files_files1_idx` (`fileId`),
  CONSTRAINT `fk_tasks_files_files1` FOREIGN KEY (`fileId`) REFERENCES `files` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_tasks_files_tasks1` FOREIGN KEY (`taskId`) REFERENCES `tasks` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasksFiles`
--

LOCK TABLES `tasksFiles` WRITE;
/*!40000 ALTER TABLE `tasksFiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasksFiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `avatarId` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `subscribe` varchar(45) DEFAULT NULL,
  `agree` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `fieldList` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_files1_idx` (`avatarId`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'patgotsz@gmail.com','$2b$10$RXpAdBMhen2Xi8oWDy.nK.GOgPpS5yAfzpoaYeVohcwhnqYT40/uO','pati',NULL,NULL,'2024-09-21 10:00:06','2024-09-21 10:00:06',NULL),(2,NULL,'kacper@gmail.com','$2b$10$MGs7K7MRWZl4Gq56jw7hvOFoemtG4q9euI7q8uMd1vQ91MffwzOUW','Kacper',NULL,NULL,'2024-09-21 10:06:39','2024-09-21 10:06:39',NULL),(3,NULL,'wojtek@gmail.com','$2b$10$B.snFZxxzid43sU90mJqIuEgqWGdaug2YmbW.BlTj/l3NnDJox4r.','wojtek',NULL,NULL,'2024-09-21 10:52:21','2024-09-21 10:52:21',NULL),(4,NULL,'kasia@gmail.com','$2b$10$vXWRbI0pK3bhsnpf0bZ8fuYkk.uRYUXvMJQ8XpTrKEdfuqdzq71Hm','kasia',NULL,NULL,'2024-09-21 11:37:05','2024-09-21 11:37:05',NULL),(5,NULL,'patrycja@gmail.com','$2b$10$4YkGpuu7ZauwQbnP9ZhMjeroFIY5fw7rrKDAQi2EeUNE/Qq.xo4Gq','pati2',NULL,NULL,'2024-09-21 12:08:55','2024-09-21 12:08:55',NULL),(6,NULL,'iza@gmail.com','$2b$10$S3XRxr.Oy79C3RuKKdYVf.xhMyxaQJQL/oWfnukTGqJn56uiguAUm','Iza',NULL,NULL,'2024-09-21 16:10:37','2024-09-21 16:10:37',NULL),(7,NULL,'patgotsz@gmail.com','$2b$10$H0vghYS4mfxoUv3lxBy66e.Ieqc7xsBGhUDk.6/XoWk//syPWD3k2',NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,'patgotsz@gmail.com','$2b$10$dURCsH3WbjVOCQDMftLVYO7NHZTkuGxKj54RsiopjONK4QVs77yFO',NULL,NULL,NULL,NULL,NULL,NULL),(9,NULL,'karolina@gmail.com','$2b$10$HJp0hxbfzr15ZUC5FT.3ZuninMM4CDxk0Cum.Do8jqNBwdvSwKue2','Karolina','1','1',NULL,NULL,NULL),(10,NULL,'patgotsz@gmail.com','$2b$10$GUUOHT2dFz9Yqau0kZWqHO/RRASzG8MJExjGHFXlcQfQbxObLgiPe',NULL,NULL,NULL,NULL,NULL,NULL),(11,NULL,'patgotsz@gmail.com','$2b$10$6Z6ci1n90SG39fBPzOb1kehs.YUli1xJJQYFRex8ke46kxC8JcmUG',NULL,NULL,NULL,NULL,NULL,NULL),(12,NULL,'patgotsz@gmail.com','$2b$10$Nxxhv29kFWAzVOlOExsNaeWrCfUAIobiQyhD9QlEApShb3x0DC/TC',NULL,NULL,NULL,NULL,NULL,NULL),(13,NULL,'patgotsz@gmail.com','$2b$10$0UtiYYfc34vE6Jj3KAVO9ONV6AGWaLpaa0j9/9c.4JaucXoPfNwBK',NULL,NULL,NULL,NULL,NULL,NULL),(14,NULL,'matylda@gmail.com','$2b$10$lT72ckZCiMT7EzHHAaagyeBdpWRcflIBDz0Pq9VovQDFyWhenJC6S','Matylda','1','1',NULL,NULL,NULL),(15,NULL,'patgotsz@gmail.com','$2b$10$BB.WC1c9DVFrvbLKt6cHcONaVZyHWw1vduCxLcZ11TE9xqlKf4FLW',NULL,NULL,NULL,NULL,NULL,NULL),(16,NULL,'patgotsz@gmail.com','$2b$10$eSX72JWt2irDIvkZVkDUhO.yNahaosnnZMjIkaBvZM48fCXSJ8h6y',NULL,NULL,NULL,NULL,NULL,NULL),(17,NULL,'patgotsz@gmail.com','$2b$10$Bz2eWb4VU/Zw4Jw1mhZ4xuz.mZgghni4N75Z73qg0r1OhL4.Y1XFG',NULL,NULL,NULL,NULL,NULL,NULL),(18,NULL,'patgotsz@gmail.com','$2b$10$fMlKXkf8TOl.kl12LGxmZO9j3mYRUgNHvkEuLHV.FaOnnXVctUX42',NULL,NULL,NULL,NULL,NULL,NULL),(19,NULL,'patgotsz@gmail.com','$2b$10$iR.pVkNu4Snl2VQbkbc3PeLj09dWA6vnZ89K0Sd5QYyzVOo305kDW',NULL,NULL,NULL,NULL,NULL,NULL),(20,NULL,'patgotsz@gmail.com','$2b$10$EqXZNmhqJ3NKjy.UP4/ZduCWEcAzzsimlM3Y8sE6T.zHs2CYj7R2S',NULL,NULL,NULL,NULL,NULL,NULL),(21,NULL,'patgotsz@gmail.com','$2b$10$8hB6APCpRewlaYOfl.od6uj78B2c0ybFG0BSbxCxmPxHaZW2GcQQu',NULL,NULL,NULL,NULL,NULL,NULL),(22,NULL,'patgotsz@gmail.com','$2b$10$oo9i2TCEt2yJiqh96UOYtODa9hQ3wOJvuseyt/ErziNAL2XtASU7u',NULL,NULL,NULL,NULL,NULL,NULL),(23,NULL,'patgotsz@gmail.com','$2b$10$sQYRT93BVgzKEK7WNoMy2uOoohskkT85SDxac9c8ZdDOqsV8K8dGS',NULL,NULL,NULL,NULL,NULL,NULL),(24,NULL,'patgotsz@gmail.com','$2b$10$V/a8f8rfA1zgk8AItO.jUOFmnt.7syfsiG6NBvX8kyYbOmHRKbdEW',NULL,NULL,NULL,NULL,NULL,NULL),(25,NULL,'patgotsz@gmail.com','$2b$10$H.hr94eSKzlgZmUnLdQkBOHtpAstwVtYmaHm3g5jUEUDUqu1pi1M6',NULL,NULL,NULL,NULL,NULL,NULL),(26,NULL,'wiktoria@gmail.com','$2b$10$nLng7fEv1tQrDVQ8ktAL1ujEYjriYwFgiyGN6R5gugsLqV0upyS3i','Wiktoria','1','1',NULL,NULL,NULL),(27,NULL,'patgotsz@gmail.com','$2b$10$R299epSafSR.NKNUy5Jt9e9FnmowW.YT5dTL0rzSYJdA94qlRXIlW',NULL,NULL,NULL,NULL,NULL,NULL),(28,NULL,'patgotsz@gmail.com','$2b$10$lWIVYCoX1Smwrxo0Q7K8nuL6eabMZRArzLKgIMsmT9qK5fg1Qd3t6',NULL,NULL,NULL,NULL,NULL,NULL),(29,NULL,'patgotsz@gmail.com','$2b$10$PoYDGUEd.d.RqLn4vBlyQOoLhE9.WyWfrtKHUVNVo.hdPQ9FyhU4a',NULL,NULL,NULL,NULL,NULL,NULL),(30,NULL,'patgotsz@gmail.com','$2b$10$4Z9e1XQcJFe2rGurdNY3K.iYHhu9WxjUHEVgunzxfFIqcPUvOiy1u',NULL,NULL,NULL,NULL,NULL,NULL),(31,NULL,'patgotsz@gmail.com','$2b$10$omCMe06dpLlTOQzivpmq9OaSlkdc9wbS0gx0oLZ4y2L5pfAGQEQyq',NULL,NULL,NULL,NULL,NULL,NULL),(32,NULL,'patgotsz@gmail.com','$2b$10$epiypkimojA1y.nQMJHBT.nHzLc.SEfdldS0ArU.UWmnzAPqQD3nW',NULL,NULL,NULL,NULL,NULL,NULL),(33,NULL,'patgotsz@gmail.com','$2b$10$25YlYo3lcT6XovmChDlR/ecwWLr/9UcMOgkzhfWwOZzg0kEHtIXte',NULL,NULL,NULL,NULL,NULL,NULL),(34,NULL,'patgotsz@gmail.com','$2b$10$KtYcFdFhpr8ECzAFGBQKGe/ZVXuw8s7wJuLs0XNelDuZTV7NT3kdi',NULL,NULL,NULL,NULL,NULL,NULL),(35,NULL,'patgotsz@gmail.com','$2b$10$8dnNswj58EAWEty9S9k69OVmvpzcqkVQGQfhiwZ0/9Mk1lDf9iFmO',NULL,NULL,NULL,NULL,NULL,NULL),(36,NULL,'aleksandra@gmail.com','$2b$10$NWCiCa7wfhIunn4RwM0/6O9Df4MtR93NKcBd96dt7D.rbaoQd.uPK','aleksandra','1','1',NULL,NULL,NULL),(37,NULL,'patgotsz@gmail.com','$2b$10$bLD.QoO8LMT6hTJ0udyxh.qB7ekY5gm1rtEgTgsvD4GUAVafLproa',NULL,NULL,NULL,NULL,NULL,NULL),(38,NULL,'patgotsz@gmail.com','$2b$10$M9SOItZ0VY6cPUcrXiAZz.7pj8hE8nSUHsDz6T/2dUPIGHPDgAWNG',NULL,NULL,NULL,NULL,NULL,NULL),(39,NULL,'karo@gmail.com','$2b$10$MRTSm1Je6E//UlCbP2nyVOK.aYNhyD9pPPexwpZ18IPl1Ll.bmj6.','Karolina','1','1',NULL,NULL,NULL),(40,NULL,'szymon@gmail.com','$2b$10$G5szI34DOym6dpdCyhmkE.1QcwEQ.yPFBeWIZZZvScM79WoyIQLdG','szymon','1','1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersBoards`
--

DROP TABLE IF EXISTS `usersBoards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersBoards` (
  `userId` int NOT NULL,
  `boardId` int NOT NULL,
  `isOwner` tinyint(1) DEFAULT NULL,
  `isInvited` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`userId`,`boardId`),
  KEY `fk_users_boards_boards1_idx` (`boardId`),
  CONSTRAINT `fk_users_boards_boards1` FOREIGN KEY (`boardId`) REFERENCES `boards` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_users_projects_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersBoards`
--

LOCK TABLES `usersBoards` WRITE;
/*!40000 ALTER TABLE `usersBoards` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersBoards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersPlans`
--

DROP TABLE IF EXISTS `usersPlans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersPlans` (
  `userId` int NOT NULL,
  `planId` int NOT NULL,
  `startedAt` datetime DEFAULT NULL,
  `endedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`userId`,`planId`),
  KEY `fk_users_plans_plans1_idx` (`planId`),
  CONSTRAINT `fk_users_plans_plans1` FOREIGN KEY (`planId`) REFERENCES `plans` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_users_plans_users1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersPlans`
--

LOCK TABLES `usersPlans` WRITE;
/*!40000 ALTER TABLE `usersPlans` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersPlans` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-24 19:38:20
