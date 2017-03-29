-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2017 at 04:22 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `que_ans_table`
--

CREATE TABLE `que_ans_table` (
  `id` int(11) NOT NULL,
  `question` mediumtext NOT NULL,
  `answer` longtext NOT NULL,
  `reffernce` int(111) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `que_ans_table`
--

INSERT INTO `que_ans_table` (`id`, `question`, `answer`, `reffernce`) VALUES
(1, 'aaa', 'fff', 121),
(2, 'bbb', 'ddd', 141),
(3, 'HH', 'YY', 32108),
(4, 'HH', 'YY', 32565),
(5, 'HH', 'YY', 32714),
(6, 'ggggg', 'gggggg', 20299),
(7, 'ggggg', 'gggggg', 19752),
(8, 'Hello ', 'Hiiii', 6933),
(9, 'Whats yoiur Name', 'Saket', 7722),
(10, 'For', 'jjijij', 27342),
(11, 'lklklkl', 'jnjunjbhj', 28143),
(14, 'dd', 'ggg', 20418);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `que_ans_table`
--
ALTER TABLE `que_ans_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `que_ans_table`
--
ALTER TABLE `que_ans_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
