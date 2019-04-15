-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2019 at 11:38 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.1.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react-web`
--

-- --------------------------------------------------------

--
-- Table structure for table `setup_country`
--

CREATE TABLE `setup_country` (
  `Country_id` int(55) NOT NULL,
  `Country_name` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `CreatedDate` datetime(6) NOT NULL,
  `CreatedBy` int(55) NOT NULL,
  `ModifiedDate` datetime(6) NOT NULL,
  `ModifiedBy` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_country`
--

INSERT INTO `setup_country` (`Country_id`, `Country_name`, `isActive`, `CreatedDate`, `CreatedBy`, `ModifiedDate`, `ModifiedBy`) VALUES
(1, 'Pakistan', 1, '2019-04-09 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(2, 'China', 1, '2019-04-09 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(3, 'UAE', 1, '2019-04-09 06:37:08.000000', 1, '0000-00-00 00:00:00.000000', 0),
(4, 'Italy', 0, '2019-04-09 08:19:04.000000', 1, '0000-00-00 00:00:00.000000', 0),
(5, 'Italy', 1, '2019-04-09 11:31:54.000000', 17, '0000-00-00 00:00:00.000000', 0),
(6, 'Australia', 1, '2019-04-09 11:32:03.000000', 17, '0000-00-00 00:00:00.000000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `setup_department`
--

CREATE TABLE `setup_department` (
  `Department_Id` int(55) NOT NULL,
  `DepartmentName` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `CreatedDate` datetime(6) NOT NULL,
  `CreatedBy` int(55) NOT NULL,
  `ModifiedDate` datetime(6) NOT NULL,
  `ModifiedBy` int(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_department`
--

INSERT INTO `setup_department` (`Department_Id`, `DepartmentName`, `isActive`, `CreatedDate`, `CreatedBy`, `ModifiedDate`, `ModifiedBy`) VALUES
(1, 'Development', 1, '2019-03-27 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(2, 'Marketing', 1, '2019-03-27 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(3, 'Communication', 1, '2019-03-27 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `setup_hall`
--

CREATE TABLE `setup_hall` (
  `Hall_id` int(55) NOT NULL,
  `Hall_Name` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `CreatedDate` datetime(6) NOT NULL,
  `CreatedBy` int(55) NOT NULL,
  `ModifiedDate` datetime(6) NOT NULL,
  `ModifiedBy` int(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_hall`
--

INSERT INTO `setup_hall` (`Hall_id`, `Hall_Name`, `isActive`, `CreatedDate`, `CreatedBy`, `ModifiedDate`, `ModifiedBy`) VALUES
(1, 'Hall 1', 1, '2019-04-09 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(2, 'Hall 2', 1, '2019-04-09 07:27:36.000000', 1, '0000-00-00 00:00:00.000000', 0),
(3, 'Hall 3', 1, '2019-04-09 08:17:51.000000', 1, '0000-00-00 00:00:00.000000', 0),
(4, 'Hall 4', 1, '2019-04-09 11:32:24.000000', 17, '0000-00-00 00:00:00.000000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `setup_menu`
--

CREATE TABLE `setup_menu` (
  `MenuId` int(55) NOT NULL,
  `Menu_Name` varchar(255) NOT NULL,
  `Menu_Url` varchar(255) NOT NULL,
  `Parent_Id` int(55) NOT NULL,
  `Active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_menu`
--

INSERT INTO `setup_menu` (`MenuId`, `Menu_Name`, `Menu_Url`, `Parent_Id`, `Active`) VALUES
(1, 'Home', 'Home', 0, 1),
(2, 'Angular', 'Angular', 0, 1),
(3, 'Laravel', 'Laravel', 0, 1),
(4, 'Setup_User', 'Setup_User', 1, 1),
(5, 'Setup_Company', 'Setup_Company', 1, 1),
(6, 'Setup_Products', 'Setup_Products', 1, 1),
(7, 'Setup_Country', 'Setup_Country', 1, 1),
(8, 'Setup_Hall', 'Setup_Hall', 1, 1),
(9, 'Setup_Stall', 'Setup_Stall', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `setup_products`
--

CREATE TABLE `setup_products` (
  `Product_id` int(55) NOT NULL,
  `Product_name` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `CreatedDate` datetime(6) NOT NULL,
  `CreatedBy` int(55) NOT NULL,
  `ModifiedDate` datetime(6) NOT NULL,
  `ModifiedBy` int(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_products`
--

INSERT INTO `setup_products` (`Product_id`, `Product_name`, `isActive`, `CreatedDate`, `CreatedBy`, `ModifiedDate`, `ModifiedBy`) VALUES
(1, 'Laptops', 1, '2019-03-27 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(2, 'Mobiles', 1, '2019-04-08 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(3, 'Headphone', 1, '2019-03-27 00:00:00.000000', 17, '0000-00-00 00:00:00.000000', 0),
(13, 'Laptops', 0, '2019-04-08 13:20:37.000000', 1, '0000-00-00 00:00:00.000000', 0),
(14, 'wwww', 0, '2019-04-08 13:21:52.000000', 1, '0000-00-00 00:00:00.000000', 0),
(15, 'eeee', 0, '2019-04-08 13:23:07.000000', 1, '0000-00-00 00:00:00.000000', 0),
(16, 'Fridge', 1, '2019-04-08 13:53:15.000000', 1, '0000-00-00 00:00:00.000000', 0),
(17, 'LCD', 1, '2019-04-09 09:52:19.000000', 1, '0000-00-00 00:00:00.000000', 0),
(18, 'Tv', 1, '2019-04-09 11:31:24.000000', 17, '0000-00-00 00:00:00.000000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `setup_role`
--

CREATE TABLE `setup_role` (
  `Role_Id` int(55) NOT NULL,
  `RoleName` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `CreatedDate` datetime(6) NOT NULL,
  `CreatedBy` int(55) NOT NULL,
  `ModifiedDate` datetime(6) NOT NULL,
  `ModifiedBy` int(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_role`
--

INSERT INTO `setup_role` (`Role_Id`, `RoleName`, `isActive`, `CreatedDate`, `CreatedBy`, `ModifiedDate`, `ModifiedBy`) VALUES
(1, 'Super Admin', 1, '2019-03-27 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(2, 'Admin', 1, '2019-03-27 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `setup_role_access`
--

CREATE TABLE `setup_role_access` (
  `Role_Access_Id` int(55) NOT NULL,
  `Role_Id` int(55) NOT NULL,
  `Menu_Id` int(55) NOT NULL,
  `Active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_role_access`
--

INSERT INTO `setup_role_access` (`Role_Access_Id`, `Role_Id`, `Menu_Id`, `Active`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 1),
(4, 1, 4, 1),
(5, 2, 1, 1),
(6, 2, 2, 1),
(7, 2, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `setup_stall`
--

CREATE TABLE `setup_stall` (
  `Stall_id` int(55) NOT NULL,
  `Stall_name` varchar(255) NOT NULL,
  `Hall_No` int(55) NOT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `CreatedDate` datetime(6) NOT NULL,
  `CreateBy` int(55) NOT NULL,
  `ModifiedDate` datetime(6) NOT NULL,
  `ModifiedBy` int(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_stall`
--

INSERT INTO `setup_stall` (`Stall_id`, `Stall_name`, `Hall_No`, `IsActive`, `CreatedDate`, `CreateBy`, `ModifiedDate`, `ModifiedBy`) VALUES
(1, 'A011', 2, 1, '2019-04-09 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(2, 'F02', 2, 1, '2019-04-09 10:53:16.000000', 1, '0000-00-00 00:00:00.000000', 0),
(3, 'F022', 3, 1, '2019-04-09 10:53:31.000000', 1, '0000-00-00 00:00:00.000000', 0),
(4, 'C02', 1, 1, '2019-04-09 10:53:57.000000', 1, '0000-00-00 00:00:00.000000', 0),
(5, 'undefined', 4, 0, '2019-04-09 11:32:52.000000', 17, '0000-00-00 00:00:00.000000', 0),
(6, 'undefined', 3, 0, '2019-04-09 11:33:05.000000', 17, '0000-00-00 00:00:00.000000', 0),
(7, 'D02', 4, 1, '2019-04-09 11:33:52.000000', 17, '0000-00-00 00:00:00.000000', 0),
(8, 'B10', 2, 1, '2019-04-09 11:34:04.000000', 17, '0000-00-00 00:00:00.000000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `setup_user`
--

CREATE TABLE `setup_user` (
  `id` int(55) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `RoleId` int(55) NOT NULL,
  `DepartmentId` int(55) NOT NULL,
  `IsEnable` tinyint(1) NOT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `CreatedDate` datetime(6) NOT NULL,
  `CreatedBy` int(55) NOT NULL,
  `ModifiedDate` datetime(6) NOT NULL,
  `ModifiedBy` int(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_user`
--

INSERT INTO `setup_user` (`id`, `FullName`, `Email`, `Password`, `RoleId`, `DepartmentId`, `IsEnable`, `IsActive`, `CreatedDate`, `CreatedBy`, `ModifiedDate`, `ModifiedBy`) VALUES
(1, 'Maaz Mehtab', 'maaz@gmail.com', '123123', 1, 1, 1, 1, '2019-03-27 00:00:00.000000', 0, '0000-00-00 00:00:00.000000', 0),
(2, 'Ahsan Ghori', 'ahsan@gmail.com', '123123', 2, 1, 1, 1, '2019-03-27 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(17, 'Arsalan', 'Arsalan@gmail.com', '123123', 1, 3, 1, 1, '0000-00-00 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0),
(18, 'Junaid Naeem', 'junaid@gmail.com', '123123', 2, 3, 1, 0, '0000-00-00 00:00:00.000000', 1, '0000-00-00 00:00:00.000000', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `setup_country`
--
ALTER TABLE `setup_country`
  ADD PRIMARY KEY (`Country_id`),
  ADD KEY `CreatedBy` (`CreatedBy`);

--
-- Indexes for table `setup_department`
--
ALTER TABLE `setup_department`
  ADD PRIMARY KEY (`Department_Id`),
  ADD KEY `id` (`Department_Id`);

--
-- Indexes for table `setup_hall`
--
ALTER TABLE `setup_hall`
  ADD PRIMARY KEY (`Hall_id`),
  ADD KEY `Hall_id` (`Hall_id`),
  ADD KEY `CreatedBy` (`CreatedBy`);

--
-- Indexes for table `setup_menu`
--
ALTER TABLE `setup_menu`
  ADD PRIMARY KEY (`MenuId`),
  ADD KEY `MenuId` (`MenuId`);

--
-- Indexes for table `setup_products`
--
ALTER TABLE `setup_products`
  ADD PRIMARY KEY (`Product_id`),
  ADD KEY `Product_id` (`Product_id`),
  ADD KEY `CreatedBy` (`CreatedBy`);

--
-- Indexes for table `setup_role`
--
ALTER TABLE `setup_role`
  ADD PRIMARY KEY (`Role_Id`),
  ADD KEY `id` (`Role_Id`),
  ADD KEY `Role_Id` (`Role_Id`);

--
-- Indexes for table `setup_role_access`
--
ALTER TABLE `setup_role_access`
  ADD PRIMARY KEY (`Role_Access_Id`),
  ADD KEY `Role_Id` (`Role_Id`),
  ADD KEY `Menu_Id` (`Menu_Id`);

--
-- Indexes for table `setup_stall`
--
ALTER TABLE `setup_stall`
  ADD PRIMARY KEY (`Stall_id`),
  ADD KEY `CreateBy` (`CreateBy`),
  ADD KEY `Hall_No` (`Hall_No`);

--
-- Indexes for table `setup_user`
--
ALTER TABLE `setup_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `RoleId` (`RoleId`),
  ADD KEY `DepartmentId` (`DepartmentId`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `setup_country`
--
ALTER TABLE `setup_country`
  MODIFY `Country_id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `setup_department`
--
ALTER TABLE `setup_department`
  MODIFY `Department_Id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `setup_hall`
--
ALTER TABLE `setup_hall`
  MODIFY `Hall_id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `setup_menu`
--
ALTER TABLE `setup_menu`
  MODIFY `MenuId` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `setup_products`
--
ALTER TABLE `setup_products`
  MODIFY `Product_id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `setup_role`
--
ALTER TABLE `setup_role`
  MODIFY `Role_Id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `setup_role_access`
--
ALTER TABLE `setup_role_access`
  MODIFY `Role_Access_Id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `setup_stall`
--
ALTER TABLE `setup_stall`
  MODIFY `Stall_id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `setup_user`
--
ALTER TABLE `setup_user`
  MODIFY `id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `setup_country`
--
ALTER TABLE `setup_country`
  ADD CONSTRAINT `setup_country_ibfk_1` FOREIGN KEY (`CreatedBy`) REFERENCES `setup_user` (`id`);

--
-- Constraints for table `setup_hall`
--
ALTER TABLE `setup_hall`
  ADD CONSTRAINT `setup_hall_ibfk_1` FOREIGN KEY (`CreatedBy`) REFERENCES `setup_user` (`id`);

--
-- Constraints for table `setup_products`
--
ALTER TABLE `setup_products`
  ADD CONSTRAINT `setup_products_ibfk_1` FOREIGN KEY (`CreatedBy`) REFERENCES `setup_user` (`id`);

--
-- Constraints for table `setup_role_access`
--
ALTER TABLE `setup_role_access`
  ADD CONSTRAINT `setup_role_access_ibfk_1` FOREIGN KEY (`Role_Id`) REFERENCES `setup_role` (`Role_Id`),
  ADD CONSTRAINT `setup_role_access_ibfk_2` FOREIGN KEY (`Menu_Id`) REFERENCES `setup_menu` (`MenuId`);

--
-- Constraints for table `setup_stall`
--
ALTER TABLE `setup_stall`
  ADD CONSTRAINT `setup_stall_ibfk_1` FOREIGN KEY (`Hall_No`) REFERENCES `setup_hall` (`Hall_id`),
  ADD CONSTRAINT `setup_stall_ibfk_2` FOREIGN KEY (`CreateBy`) REFERENCES `setup_user` (`id`);

--
-- Constraints for table `setup_user`
--
ALTER TABLE `setup_user`
  ADD CONSTRAINT `setup_user_ibfk_1` FOREIGN KEY (`RoleId`) REFERENCES `setup_role` (`Role_Id`),
  ADD CONSTRAINT `setup_user_ibfk_2` FOREIGN KEY (`DepartmentId`) REFERENCES `setup_department` (`Department_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
