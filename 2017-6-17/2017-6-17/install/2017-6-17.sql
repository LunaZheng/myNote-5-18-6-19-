-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-17 05:21:23
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `imgURL` varchar(500) NOT NULL,
  `url` varchar(500) NOT NULL,
  `tag` varchar(50) NOT NULL,
  `subTitle` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `createTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `userId`, `title`, `imgURL`, `url`, `tag`, `subTitle`, `content`, `createTime`) VALUES
(1, 1, 'DB-Blog接口文档', 'upload/article/blog-note/bg-img.jpg', 'upload/article/blog-note/', 'db-blog', '本文详细描述db-blog的所有接口调用以及响应数据信息', '# 很不错的一篇文章 \n\n```\nwindow.onload = function(e) {\n  console.log(e.type)\n}\n```', 1495600744),
(2, 1, 'react', 'upload/article/svg-1/bg-img.jpg', 'upload/article/svg-1/', 'svg', '一个组件化开发框架', '# [React](https://facebook.github.io/react/) &middot; [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![Build Status](https://img.shields.io/travis/facebook/react/master.svg?style=flat)](https://travis-ci.org/facebook/react) [![Coverage Status](https://img.shields.io/coveralls/facebook/react/master.svg?style=flat)](https://coveralls.io/github/facebook/react?branch=master) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)\n\nReact is a JavaScript library for building user interfaces.\n\n* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.\n* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.\n* **Learn Once, Write Anywhere:** We don''t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).\n\n[Learn how to use React in your own project](https://facebook.github.io/react/docs/getting-started.html).\n\n## Examples\n\nWe have several examples [on the website](https://facebook.github.io/react/). Here is the first one to get you started:\n\n```jsx\nclass HelloMessage extends React.Component {\n  render() {\n    return <div>Hello {this.props.name}</div>;\n  }\n}\n\nReactDOM.render(\n  <HelloMessage name="John" />,\n  document.getElementById(''container'')\n);\n```\n\nThis example will render "Hello John" into a container on the page.\n\nYou''ll notice that we used an HTML-like syntax; [we call it JSX](https://facebook.github.io/react/docs/introducing-jsx.html). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. We recommend using [Babel](https://babeljs.io/) with a [React preset](https://babeljs.io/docs/plugins/preset-react/) to convert JSX into native JavaScript for browsers to digest.\n\n## Installation\n\nReact is available as the `react` package on [npm](https://www.npmjs.com/). It is also available on a [CDN](https://facebook.github.io/react/docs/installation.html#using-a-cdn).\n\nReact is flexible and can be used in a variety of projects. You can create new apps with it, but you can also gradually introduce it into an existing codebase without doing a rewrite.\n\nThe recommended way to install React depends on your project. Here you can find short guides for the most common scenarios:\n\n* [Trying Out React](https://facebook.github.io/react/docs/installation.html#trying-out-react)\n* [Creating a New Application](https://facebook.github.io/react/docs/installation.html#creating-a-new-application)\n* [Adding React to an Existing Application](https://facebook.github.io/react/docs/installation.html#adding-react-to-an-existing-application)\n\n## Contributing\n\nThe main purpose of this repository is to continue to evolve React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.\n\n### [Code of Conduct](https://code.facebook.com/codeofconduct)\n\nFacebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.facebook.com/codeofconduct) so that you can understand what actions will and will not be tolerated.\n\n### Contributing Guide\n\nRead our [contributing guide](https://facebook.github.io/react/contributing/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.\n\n### Beginner Friendly Bugs\n\nTo help you get your feet wet and get you familiar with our contribution process, we have a list of [beginner friendly bugs](https://github.com/facebook/react/labels/Difficulty%3A%20beginner) that contain bugs which are fairly easy to fix. This is a great place to get started.\n\n### License\n\nReact is [BSD licensed](./LICENSE). We also provide an additional [patent grant](./PATENTS).\n\nReact documentation is [Creative Commons licensed](./LICENSE-docs).\n\nExamples provided in this repository and in the documentation are [separately licensed](./LICENSE-examples).', 1495782076),
(3, 1, 'aaaaaaa', '/upload/article/svg-1/bg-img.jpg', 'aaaaaaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaa', 1497407306);

-- --------------------------------------------------------

--
-- 表的结构 `demo`
--

DROP TABLE IF EXISTS `demo`;
CREATE TABLE IF NOT EXISTS `demo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `tag` varchar(50) NOT NULL,
  `imgURL` varchar(500) NOT NULL,
  `subTitle` varchar(200) NOT NULL,
  `url` varchar(400) NOT NULL,
  `createTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `demo`
--

INSERT INTO `demo` (`id`, `userId`, `title`, `tag`, `imgURL`, `subTitle`, `url`, `createTime`) VALUES
(1, 1, '贪食蛇', '贪食蛇 js', '/upload/demo/snake/bg-img.jpg', '使用JS写的贪吃蛇游戏,个人练习之用,感兴趣的额朋友可以参考下哈,希望对大家学习js有所帮助', '/upload/demo/snake/', 1495599493),
(2, 1, 'canvas 小动画', 'canva', '/upload/demo/fly-circle/bg-img.jpg', '学习canvas动画，使用canvas绘制图形，使用js动态计算图形坐标，配合requestAnimation实现动画', '/upload/demo/fly-circle/', 1495600183),
(3, 1, 'canvas - 线条残影', 'canvas 残影', '/upload/demo/canvas-shadow-line/bg-img.jpg', '使用 html5 绘图Canvas线条动画特效，巧妙运用数组，配合canvas绘图API，轻松实现', '/upload/demo/canvas-shadow-line/', 1495608815),
(4, 1, 'canvas - bug', 'canvas bug', '/upload/demo/canvas-bug/bg-img.jpg', '写代码写出了bug，结果却挺好玩的，good', '/upload/demo/canvas-bug', 1495609237),
(5, 1, '3D 甜甜圈', '3D 甜甜圈', '/upload/demo/ttl/bg-img.jpg', '有一天无聊，做了一个无聊的图片，然后做了一个无聊的3D甜甜圈', '/upload/demo/ttl/', 1495609662),
(6, 1, '蜗牛壳 - 1', '蜗牛壳', '/upload/demo/woniu/woniu1.jpg', '有一天和一个屌丝讨论做银河系，结果做出来个怪东西', '/upload/demo/woniu/woniu1.html', 1495610786),
(7, 1, '蜗牛壳 - 2', '蜗牛壳', '/upload/demo/woniu/woniu2.jpg', '有一天和一个屌丝讨论做银河系，结果做出来个怪东西', '/upload/demo/woniu/woniu2.html', 1495610810),
(8, 1, '蜗牛壳 - 3', '蜗牛壳', '/upload/demo/woniu/woniu3.jpg', '有一天和一个屌丝讨论做银河系，结果做出来个怪东西', '/upload/demo/woniu/woniu3.html', 1495610835),
(9, 1, '蜗牛壳 - 4', '蜗牛壳', '/upload/demo/woniu/woniu4.jpg', '有一天和一个屌丝讨论做银河系，结果做出来个怪东西', '/upload/demo/woniu/woniu4.html', 1495610878),
(10, 1, '圣诞主题', '圣诞 canvas', '/upload/demo/chrismas/bg-img.jpg', '叮叮当，叮叮当，铃儿响叮当，嘘，不要唱出来', '/upload/demo/chrismas/', 1495611292),
(11, 1, '捕鱼达人', '捕鱼达人 游戏 canvas', '/upload/demo/fish/bg-img.jpg', '你见过自己会死的鱼吗，我的鱼会！', '/upload/demo/fish/', 1495613326),
(12, 1, '家政服务', '家政 demo', '/upload/demo/jiazheng/bg-img.jpg', '帮个忙', '/upload/demo/jiazheng/', 1495614154),
(13, 1, '彩虹圈', 'canvas 彩虹圈', '/upload/demo/circle/bg-img.jpg', '一个漂漂亮亮的彩虹圈，跟随鼠标走动', '/upload/demo/circle', 1495615428),
(14, 1, '个人简历-html5', '简历 resume', '/upload/demo/resume/bg-img.jpg', '曾经为了找工作做的一份简历，然后就是 hr 压根就不看，人家喜欢word', '/upload/demo/resume/', 1495615999),
(15, 1, 'css3-房子', '房子 css3', '/upload/demo/house/bg-img.jpg', '一个怪异的，没有门的房子，优雅的砖块，看着就想给你一转头', '/upload/demo/house/', 1495617067);

-- --------------------------------------------------------

--
-- 表的结构 `rate`
--

DROP TABLE IF EXISTS `rate`;
CREATE TABLE IF NOT EXISTS `rate` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nickName` varchar(10) NOT NULL,
  `tableName` varchar(30) NOT NULL,
  `tableId` int(10) unsigned NOT NULL,
  `content` text NOT NULL,
  `ip` varchar(15) NOT NULL,
  `avatar` tinyint(4) NOT NULL,
  `createTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=37 ;

--
-- 转存表中的数据 `rate`
--

INSERT INTO `rate` (`id`, `nickName`, `tableName`, `tableId`, `content`, `ip`, `avatar`, `createTime`) VALUES
(1, '张三', 'demo', 11, 'aaaaaaaaaa', '', 1, 1496925263),
(2, 'aaaaaa', 'demo', 11, 'aaaaaaa', '::1', 18, 1496927169),
(3, 'bbbbb', 'demo', 11, 'bbbbbbb', '::1', 39, 1496927176),
(4, 'hhhhhhhh', 'demo', 10, 'hhhhhhhhhhhhhhhhhhh', '::1', 38, 1496928018),
(5, 'aaaaaaa', 'demo', 10, 'aaaaaaa', '::1', 15, 1496928121),
(6, 'uuuuuuuuuu', 'demo', 10, 'uuuuuuuuu', '::1', 19, 1496928153),
(7, 'aaaa', 'demo', 10, 'aaaaaaaa', '::1', 14, 1496928423),
(8, '摘星fy', 'demo', 2, '挺酷的', '::1', 20, 1496928828),
(9, ' eeeeeee', 'demo', 2, 'eeeeeeeeeeeeee', '::1', 20, 1496928834),
(10, 'aaaaaaaaaa', 'demo', 2, 'aaaaaaa', '::1', 36, 1496928849),
(11, 'aaaaaa', 'demo', 2, 'aaaaaa', '::1', 24, 1496928859),
(12, 'aaaaaaaaaa', 'demo', 11, 'aaaaaaaaaaaaaaaa', '::1', 13, 1497405240),
(13, 'tttttt', 'demo', 11, 'ttttttttt', '::1', 29, 1497405248),
(14, 'rrrrrrrr', 'demo', 11, 'rrrrrrrrrr', '::1', 14, 1497405330),
(15, 'aaaa', 'demo', 11, 'aaaaaaaaaa', '::1', 39, 1497405334),
(16, 'bbbbb', 'demo', 11, 'bbbbbbbbbb', '::1', 28, 1497405337),
(17, 'ccccccc', 'demo', 11, 'cccccccccc', '::1', 42, 1497405339),
(18, '摘星 going', 'demo', 11, '服刑最后一月越狱国足2-2叙利亚夫妻为买房假离婚女子洗澡疑触电亡杨幂爸爸惊人腕力毕加索戒指将拍卖空姐拒挂中文名牌安邦保险发声明诺奖得主在沪坐诊固体废物走私入境女生自曝曾遭猥亵王传君公开恋情王思聪豆得儿逛街猜对密码转走上万变性女星协议离婚飞机上做不雅之事\n 以下信息根据您的兴趣推荐  ', '::1', 15, 1497405527),
(19, 'king', 'demo', 12, 'noting more', '::1', 9, 1497405608),
(20, '乌拉拉', 'demo', 13, '漂亮', '::1', 24, 1497405989),
(21, 'aaaaa', 'demo', 11, 'aaaaaaaa', '::1', 45, 1497419900),
(22, 'aaaaa', 'demo', 3, 'aaaaaaaaaaa', '::1', 20, 1497421688),
(23, 'eee', 'article', 1, 'eeeeeeeeee', '::1', 12, 1497421716),
(24, 'uuuuu', 'demo', 15, '一间大房子\n', '::1', 22, 1497421933),
(25, 'aaa', 'demo', 15, 'aaaaaaaaaa', '::1', 33, 1497425154),
(26, 'hhhhh', 'demo', 15, 'hhhhhhhhh', '::1', 16, 1497425236),
(27, 'qqqqqqq', 'demo', 15, 'qqqqqqqq', '::1', 27, 1497425269),
(28, 'uuuuuu', 'demo', 15, 'uuuuuuuu', '::1', 43, 1497425363),
(29, 'aaaaa', 'article', 3, 'aaaaaaaa', '::1', 21, 1497525488),
(30, 'vbbbbb', 'article', 3, 'bbbbbbbbb', '::1', 42, 1497525526),
(31, 'ccccc', 'article', 3, 'cccc', '::1', 9, 1497525537),
(32, 'ccccc', 'article', 3, 'dddddd', '::1', 11, 1497525540),
(33, 'aaaaaaa', 'demo', 14, 'aaaaaaaa', '::1', 39, 1497525822),
(34, 'iiiiiiiiii', 'demo', 14, 'iiiiiii', '::1', 27, 1497525866),
(35, 'aaaaaaaa', 'article', 2, 'aaaaaaaaaaa', '::1', 40, 1497533780),
(36, 'eeeeeee', 'article', 2, 'eeeeeeeeeeeeee', '::1', 43, 1497533810);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(64) NOT NULL,
  `level` tinyint(4) NOT NULL DEFAULT '1',
  `ip` varchar(15) NOT NULL,
  `createTime` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `level`, `ip`, `createTime`) VALUES
(1, '摘星', '摘星@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(2, '徐金', '徐金@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(3, '占丹红', '占丹红@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(4, '郭靖', '郭靖@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(5, '胡竹林', '胡竹林@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(6, '崔慧明', '崔慧明@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(7, '邓林源', '邓林源@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(8, '刘辰', '刘辰@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(9, '郑蓉蓉', '郑蓉蓉@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(10, '罗珣', '罗珣@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(11, '毕阳', '毕阳@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(12, '邱梦莹', '邱梦莹@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(13, '王闻天', '王闻天@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(14, '贾宇康', '贾宇康@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(15, '王杰', '王杰@qq.com', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 9, '', 1495112076),
(20, '123', '123@163.com', '84c45e72ebff7042e000b2bfd67b22367b18ddcb723ce4c32f9f1b2064999e08', 9, '192.168.191.1', 1495547171),
(21, '摘星fy', '674857736@qq.com', '84c45e72ebff7042e000b2bfd67b22367b18ddcb723ce4c32f9f1b2064999e08', 1, '::1', 1495594636);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
