-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 06, 2014 at 02:22 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `takka`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_score_v1`
--

CREATE TABLE IF NOT EXISTS `tbl_score_v1` (
  `scr_id` int(11) NOT NULL AUTO_INCREMENT,
  `scr_usr_id` int(11) NOT NULL,
  `scr_score` int(11) NOT NULL,
  `scr_level` int(11) NOT NULL,
  `scr_status` enum('New','Continue','Game Over') NOT NULL,
  PRIMARY KEY (`scr_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbl_score_v1`
--

INSERT INTO `tbl_score_v1` (`scr_id`, `scr_usr_id`, `scr_score`, `scr_level`, `scr_status`) VALUES
(2, 1, 1, 1, 'Continue');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_score_v2`
--

CREATE TABLE IF NOT EXISTS `tbl_score_v2` (
  `scr_id` int(11) NOT NULL AUTO_INCREMENT,
  `scr_usr_id` int(11) NOT NULL,
  `scr_score` int(11) NOT NULL,
  `scr_status` enum('New','Continue','Game Over') NOT NULL,
  PRIMARY KEY (`scr_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_score_v2`
--

INSERT INTO `tbl_score_v2` (`scr_id`, `scr_usr_id`, `scr_score`, `scr_status`) VALUES
(1, 1, 0, 'New');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_score_v11`
--

CREATE TABLE IF NOT EXISTS `tbl_score_v11` (
  `scr_id` int(11) NOT NULL AUTO_INCREMENT,
  `scr_usr_id` int(11) NOT NULL,
  `scr_score` int(11) NOT NULL,
  `scr_level` int(11) NOT NULL,
  `scr_status` enum('New','Continue','Game Over') NOT NULL,
  PRIMARY KEY (`scr_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tbl_score_v11`
--

INSERT INTO `tbl_score_v11` (`scr_id`, `scr_usr_id`, `scr_score`, `scr_level`, `scr_status`) VALUES
(3, 1, 3, 1, 'Game Over');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
