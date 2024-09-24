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
