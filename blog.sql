/*
Navicat MySQL Data Transfer

Source Server         : wamp
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : testblog

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2021-04-05 18:43:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ps` varchar(255) DEFAULT NULL,
  `text` varchar(255) NOT NULL,
  `reading` int(255) NOT NULL,
  `agree` int(255) NOT NULL,
  `delete` int(255) NOT NULL,
  `exhibition` int(255) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '\\u6587\\u7ae0\\u9898\\u76ee', '2017-10-02 17:23:05', '\\u8c22\\u6657\\u9633', '\\u7248\\u6743\\u6240\\u6709a', 'article1.txt', '0', '0', '0', '1', '1');
INSERT INTO `article` VALUES ('2', '\\u7b2c\\u4e8c\\u7bc7\\u6587\\u7ae0', '2017-10-03 11:34:16', '\\u8c22\\u5927\\u5e05\\u54e5', '\\u7248\\u6743\\u6240\\u6709a', 'article1.txt', '0', '0', '0', '1', '1');
INSERT INTO `article` VALUES ('3', '\\u006d\\u0061\\u0072\\u006b\\u0064\\u006f\\u0077\\u006e\\u4ecb\\u7ecd', '2017-10-03 11:36:32', '\\u8349\\u4f9d\\u5c71', '\\u8f6c\\u8f7d\\u81ea\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u006d\\u0061\\u0068\\u0075\\u0061\\u002e\\u006a\\u0073\\u0065\\u0072\\u002e\\u006d\\u0065\\u002f', 'article2.txt', '0', '0', '0', '1', '2');

-- ----------------------------
-- Table structure for axis
-- ----------------------------
DROP TABLE IF EXISTS `axis`;
CREATE TABLE `axis` (
  `title` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `delete` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of axis
-- ----------------------------
INSERT INTO `axis` VALUES ('\\u9898\\u76ee', '1', 'axis1.txt', '2017-10-03 11:36:32', '0');
INSERT INTO `axis` VALUES ('\\u9898\\u76ee', '2', 'axis2.txt', '2017-10-03 11:36:32', '0');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `delete` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '\\u0075\\u006e\\u0064\\u0065\\u0066\\u0069\\u006e\\u0065\\u0064', '2017-10-17 15:08:25', 'comment1.txt', '1');
INSERT INTO `comment` VALUES ('2', '\\u8c22\\u5927\\u5e05\\u54e5', '2017-10-17 15:08:25', 'comment2.txt', '0');

-- ----------------------------
-- Table structure for conf
-- ----------------------------
DROP TABLE IF EXISTS `conf`;
CREATE TABLE `conf` (
  `name` varchar(255) NOT NULL,
  `header` varchar(255) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `msg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of conf
-- ----------------------------
INSERT INTO `conf` VALUES ('\\u8c22\\u5927\\u5e05\\u54e5', '\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u002e\\u0070\\u006e\\u0067', '\\u0062\\u0061\\u006e\\u006e\\u0065\\u0072\\u002e\\u0070\\u006e\\u0067', '\\u006c\\u006f\\u0067\\u006f\\u002e\\u0070\\u006e\\u0067', '\\u6b22\\u8fce\\u6765\\u5230\\u6211\\u7684\\u535a\\u5ba2');
