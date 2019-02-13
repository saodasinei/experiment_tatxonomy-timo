-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-19 14:03:08
-- 服务器版本： 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `experiment`
--

-- --------------------------------------------------------

--
-- 表的结构 `tn_info`
--

CREATE TABLE `tn_info` (
  `tn_id` int(11) NOT NULL,
  `tn_name` varchar(100) NOT NULL,
  `tn_dc` text NOT NULL,
  `tn_is` text NOT NULL,
  `tn_dp` varchar(25) NOT NULL,
  `tn_td` varchar(25) NOT NULL,
  `tn_d` varchar(25) NOT NULL,
  `tn_up` varchar(25) NOT NULL,
  `tn_et` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tn_info`
--

INSERT INTO `tn_info` (`tn_id`, `tn_name`, `tn_dc`, `tn_is`, `tn_dp`, `tn_td`, `tn_d`, `tn_up`, `tn_et`) VALUES
(1, '3-12-3 Brainstorming', '3-12-3 Brainstorming is a brainstorming technique with a fixed time limit. The numbers 3-12-3 refer to the number of minutes for each of the three activities: generating, conceptualizing, and discussing ideas.', '1. Ask the participants to test a functional prototype\n2. After using the prototype, ask the participants to indicate their emotions on a 3E template (e.g., draw a face into the human figure) \n3. The drawings can be enriched by speech or thought bubbles, so that the participants can write down further explanations of their emotions\n4. Discuss the emotional feedback based on participants\' drawings and explanations\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(2, '6-3-5 Brainwriting', '6-3-5 Brainwriting is a technique, that enables a group to develop 108 ideas through silent writing or sketching. Six people create three ideas that are refined five times.\n', '1. Define a topic or a problem\n2. Prepare six sheets of paper with a table of three columns and six rows and hand one sheet to each participant\n3. Every participant silently generates three ideas on the topic or problem and writes them to each cell in the top and empty rows of the table\n4. After 5 minutes, all participants push their paper to the neighboring participant - all in the same direction \n5. Repeat the steps 3 and 4 five times\n6. Discuss the generated ideas, eliminate duplicates, and select appropriate solutions\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(3, 'A/B Testing', 'A/B Testing (also known as split testing) is a technique to compare two versions of a design to see which one works better. The technique is particularly useful to compare a new design with an existing one before the release.\n', '1. Interview different actors and ask them how they are involved in a service system and what goals they pursue\n2. Capture the central actor of a service system and his or her function in the middle of a big sheet of paper (or use a mapping tool)\n3. Position the other actors and their functions around the central actor and connect all actors according to their mutual relations\n4. Analyze how different actors are related to each other', 'High-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Experiment'),
(4, 'Actors Mapping', 'An Actors Map visualizes in the form of a network how actors relate to each other. It displays the functions and roles of different actors in a systemic view of a service and the context in which it operates. ', '1. Collect information related to a pre-defined topic or problem (e.g., by interviews or via brainstorming)\n2. Write down central information on sticky notes and stick them to a wall\n3. Read and sort the information on the notes (the notes can be grouped to show a common idea, problem, or solution based on the similarity of the cards)\n4. Develop affinity heading cards for each group of information and place them on the top of the groups\n5. \"Walk the wall\" and use the sorted information to achieve new insights and ideas instead of giving definitions to the groups\n6. Discuss the notes on the wall and come to a shared decision', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(5, 'Behavioral Mapping', 'Behavioral Mapping is used to record and track user behavior within a defined environment over time by systematically observing how participants interact with a design space unobtrusively.\n', '1. Prepare some conceptual ideas of a product or service as paper prototypes and define scenarios in which the product or service is used\n2. Identify personas or different roles (e.g., customer, user, troubleshooter) and scenarios\n3. Each participant acts as a different person and uses the prepared prototypes in the pre-defined scenario\n4. Discuss each scenario and draw some sketches to generate ideas for optimizing the prototypes', 'Release', 'Real-Time', 'Long-Term Study', 'User Attendance', 'Observation'),
(6, 'Bodystorming', 'Bodystorming combines role-play with paper prototypes. Designers immerse themselves in application situations and use paper prototypes. Bodystorming aims to collect emotional feedback and to improve the prototype.', '1. Define a topic or a problem\n2. Give every participant 3 minutes to generate a pool of ideas related to the topic or problem and to write them down on prepared cards (generating)\n3. Split the group of participants into small groups (3 to 4 people per group)\n4. Ask them to develop concepts (e.g., sketches, rough prototypes) for each idea on the cards within 12 minutes (conceptualizing)\n5. Give each group 3 minutes to present their developed concepts and discuss the concepts within the group (discussing) ', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(7, 'Co-Discovery', 'Co-Discovery seeks to collect experience data in a relaxed way by observing how two participants explore the use of a product or service.', '1. Prepare required materials (e.g., functional prototypes, video/ audio recording), a usage scenario, and tasks for the user test\n2. Form teams of two participants (participants are expected to be friends or familiar with each other) for each session\n3. Choose a moderator to explain the test and guide the discussions.\n4. Take notes or record the exploratory process of the participants as they are use the product or service and comment on their activities\n5. Analyze the recorded data', 'High-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(8, 'Cognitive Walkthrough ', 'Cognitive Walkthrough enables teams to evaluate prototypes from the perspective of a potential user. A fully functional prototype and users are not required.', '1. Describe a fictitious user as the target user (e.g., via a persona)\n2. Define an overall task and associated subtasks for the fictitious user\n3. List all necessary actions for each task (description of how the user should use the product or service)\n4. Go through the actions sequence-by-sequence for each task from the perspective of the fictitious user\n5. For each task, examine whether the user will achieve the expected effect and whether the correct sequence of actions is used in order to achieve the expected effect', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Interview'),
(9, 'Collaborative Sketching', 'Collaborative Sketching aims to generate, evaluate, and refine user interface designs. It improves collaboration between designers and clients, and reduces the time it takes to achieve the desired results.', 'Prepare a large sheet of paper \nStick input information (information to guide the sketching such as flowcharts, sitemaps, or user needs) to the sheet of paper\n1. Ask every participant to create up to six sketches (e.g., in 10 to 15 minutes by using a 6-up template) to design an interface, service, or product \n2. Ask all participants to discuss the sketches and select a preferred one\n3. Ask participants to refine the preferred sketch (e.g., in a 1-up template)\n4. If necessary, return to step 3 to design additional elements of the interface, service, or product\n5. Discuss and evaluate the sketches', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(10, 'Concurrent Think-Aloud ', 'Concurrent Think-Aloud is used to reveal the thoughts of participants as they perform a task. By asking participants to verbalize their actions and thoughts, designers gain insights  into the users\' assessment of the detailed functions of a service or product.', '1. Define a task in which the participants use a service or product \n2. Give participants instructions on the task\n3. Ask participants to verbalize their thoughts as they perform the task \n4. After completing the task, ask participants to describe their overall experience with the task\n5. Choose a moderator to make notes during the Think-aloud process', 'High-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(11, 'Desirability Testing with Product Reaction Cards', 'Desirability Testing with Product Reaction Cards aims at understanding users\' nebulous, critical feeling of desirability in the user experience. It can be used to compare iterative designs.', '1. Prepare 118 product-reaction cards\n2. Ask every participant take the 3 to 5 cards best suited to their experience after using a service or product\n3. Ask participants to explain how the words on the cards describe their experience\n4. Collect the selected cards and note how often the same cards have been selected by more than one participant to capture the emotional response of users to the service or product', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(12, 'Diary Studies', 'Diary Studies allow teams to capture the thoughts, feelings, and behaviors of users over several days or weeks to understand their long-term habits. ', '1. Define the purpose and timeframe of a diary study\n2. Provide participants with an instruction and a template (with key questions according to the defined purpose) for journalizing (or using an online tool)\n3. Ask participants to regularly document their thoughts, feelings, and experiences in relation to the defined purpose\n4. Check the diaries regularly\n5. Evaluate the collected data to understand user habits', 'Release', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Questionnaire'),
(13, 'Directed Storytelling', 'Directed Storytelling enables teams to easily gather extensive data about the users\' experiences in order to better understand the users. The technique is useful when time and budget are limited.\n', '1. Prepare guiding questions for the storytelling of participants \n2. Ask participants to \"tell a story about??\"\n3. Document the session (e.g., by using affinity diagramming or recordings) with the goal of finding patterns within and across experiences\n4. Evaluate the information and derive design ideas from it', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(14, 'Experience Clips', 'Experience Clips seek to gain insights into the users\' experiences when using a mobile product or service in natural usage situations. One person uses the mobile product or service, which is recorded in video clips by another person. ', '1. Prepare the required equipment (mobile service or product as well as recording devices) and other materials\n2. Introduce the test procedure: i. Ask two participants to work in a group (one uses the mobile product or service, the other one records the video clips) ii. Explain the technical constraints, such as the best distance for recording\n3. Encourage participants to share their experience of using the mobile product or service\n4. Analyze the video clips to understand how users\' emotional states change during use', 'Release', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(15, 'Experience Prototyping', 'Experience prototyping is carried out when a prototype with existing key elements such as a wireframe is available (no functional prototype, but specific elements are required). This technique helps to understand what it would be like for the user to use the design.\n', '1. Finalize a low-fidelity prototype (key elements need to be included)\n2. Define a specific situation for the simulation\n3. Ask the design team members to act as different roles in the simulation (predefined personas should be included)\n4. Understand the essential factors of the experience with the existing design and improve the design of the low-fidelity prototype', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Observation'),
(16, 'Heuristic Evaluation', 'Heuristic Evaluation enables teams to test the interfaces of their products or services, get feedback and detect usability problems early in the design process.', '1. Find a suitable list of heuristics (Heuristics mean criteria that affect usability; one of the best known sources is Nielsen\'s heuristics)\n2. Select professionals (not end users but usability experts) as evaluators\n3. Give instructions to the evaluators\n4. Ask the evaluators to freely use the product and select specific elements for evaluation\n5. Let the evaluators use the product again and apply the chosen heuristics\n6. Ask the evaluators to record any problems independently\n7. Encourage the evaluators to suggest possible solutions to these problems', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Questionnaire'),
(17, 'Kano Analysis', 'Kano Analysis enables teams to assign design features to four product categories based on customer needs (must-be, delighted, indifferent, performance). In addition, it also supports to determine which features have the greatest impact on customer satisfaction.', '1. Select target features \n2. Prepare a questionnaire that covers questions about the target features \n3. Ask 20 to 30 (potential) customers to complete the questionnaire\n4. Analyze the results and visualize each attribute with regard to the Kano categories in a diagram (see the figure on the front page):\n5. Plot the features along the two axes  of the Kano categories (not fulfilled  to well fulfilled and dissatisfied to  satisfied)\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Questionnaire'),
(18, 'Mental Model Diagramming', 'Mental Model Diagramming enables teams to analyze whether existing design features are compatible with the behavior, emotions, and beliefs of user and supports them in formulating development strategies.', '1. Collect data (e.g., by conducting interviews, diary studies, or observations) and review the results \n2. Create a Mental Model Diagram as follows: i. The upper half of the diagram contains data on behaviors, beliefs, or emotions; ii. The lower half of the diagram contains the available design features; iii. Arrange the data in a logic order with regard to groups of similar behaviors, beliefs, or emotions and the available design features \n3. Identify opportunities from the diagram for future design', 'Planning', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Group Discussion'),
(19, 'Mood Boards', 'Mood Boards are collages of pictures that visualize information that is difficult to describe with words. This technique enables a team to develop a common understanding of an intended final concept at an early stage of the design process.', '1. Prepare materials like cards or paper sheets, pictures, words, shapes, and glue sticks\n2. Ask participants to clarify their views on a given concept and prepare a collage\n3. Ask the participants to present their collages to the group for clarity and insights into the selection and meaning of the images', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(20, 'Motivation Matrix', 'A Motivation Matrix helps to identify and visualize the connection between the actors and the motivation of each individual actor.', '1. Prepare an empty matrix by listing all stakeholders of a service or product in the first column and in the first row of the matrix \n2. Ask all stakeholders to fill the cells of the matrix, where the same services meet, with how these services can contribute to the project, starting with the top left cell and moving towards the bottom right cell (following the path of the blue boxes on the frontpage) \n3. Ask the actors to fill out the remaining squares with explanations on how the related services connect and interact with the other one \n4. Use the matrix to reflect the roles of actors and their interrelationships', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Questionnaire'),
(21, 'Offering Mapping', 'Offering Mapping attempts to systematically describe how a service or product is offered to its users, which contributes to detailing a design idea or generating solution ideas for a design.\n', '1. Define a product or service that needs to be defined in detail\n2. Prepare a large format paper, markers, and sticky notes to create the Offering Map\n3. Ask the participants to discuss the overall scope of the product or service\n4. Make sure to include all specific functions and features that are part of an offering in the Offering Map (start with big concepts and go into detail)\n5. Discuss the results and plan the implementation of the potential offers of the product or service', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(22, 'Personas', 'Personas are fictional profiles of different user types with different needs, goals, and behavioral patterns of potential and real users. A persona makes it possible to humanize the design focus, prepare appropriate test scenarios, and support design communications.\n', '1. Collect as much information and characteristics as possible about the potential users of a product or service\n2. Group different user types into categories based on similarities of their characteristics (create 3-6 groups)\n3. Select the information and characteristics of a user group (e.g., interests, age group, personality) that are relevant for the design of a product or service \n4. Create a persona for each user group by describing in detail a fictional person who represents the selected information and characteristics  \n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(23, 'Photo Elicitation Interviewing', 'Photo Elicitation Interviewing supports teams understand user communities, their experiences, and desires. Photos of everyday activities are used to help people recalling their experience.\n', '1. Define the purpose of the interview\n2. Prepare an interview protocol (time of use, locations, relationships, life events, mental states, and other information associated with the product or service)\n3. Choose a set of photos (which may come from photo diaries) that can help participants remember their experiences of using a product or service (e.g., environment, people)\n4. Instruct participants to sort the photos and remember their experience', 'Planning', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Interview'),
(24, 'Private Camera Conversation', 'Private Camera Conversations seek to avoid the bias of interviewers by asking participants to talk to a camera about a given topic after using a prototype, service, or product.\n', '1. Define a topic or a problem\n2. Prepare a room with a camera\n3. Brief the participants, and explain the task and process to them\n4. After using the prototype, service or product, ask participants to express their opinions while recording their own conversation (alternatively, participants can also have their Private Camera Conversation at home)\n5. Analyze the recordings\n', 'High-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Interview'),
(25, 'Product Experience Tracker', 'Product Experience Tracker is used to monitor changes in user satisfaction over time through regular surveys. \n', '1. Create a questionnaire to determine user satisfaction with a product or service\n2. Ask participants to complete an (online) questionnaire as soon as possible (e.g., minutes, hours or a few days) after the actual use of the product use\n3. Repeat the survey on a regular basis (e.g., weekly, monthly)\n4. Analyze the surveys for changes in user satisfaction with the product or service\n', 'Release', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Questionnaire'),
(26, 'Repertory Grids', 'Repertory Grids seeks to identify how people interpret their experiences. This is to be achieved by interviewing people to elucidate their personal feelings (friendly?Chostile, bad?Cgood, etc.) when confronted with prototypes.\n', '1. Prepare a set of different prototypes (up to 12) of a service or a product\n2. Prepare a grid listing all prototypes in columns but leave the right- and leftmost columns empty (see front page)\n3. Randomly assign three prototypes from the set to each participant\n4. Ask each participant to identify how one of these three prototypes is different from the other two \n5. Ask the participants to describe this difference with two opposite adjective pairs (e.g. friendly?Chostile and bad?Cgood, etc.) \n6. Collect the adjective pairs from step 4 and write them in the empty right- and leftmost cells of the grid \n7. Ask every participant to rate every prototype on a certain predefined scale (e.g. from 1 to 5) with regard to all the collected adjectives and enter this value into the corresponding empty cells\n8. Analyze the results quantitatively', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Experiment'),
(27, 'Retrospective Think-Aloud', 'Retrospective Think-Aloud is used to collect participants\' feedback after they complete a task. By asking participants to remember and verbalize their actions and thoughts, designers gain insights into the users\' assessment of the detailed functions of a service or product. \n', '1. Prepare a task in which the participants use a service or product\n2. Provide instructions for the task\n3. Ask participants to silently complete the tasks and record the participants\' activities\n4. After completing the task, show the participants the recordings and ask them to comment on their activities \n5. Ask participants to describe their overall experience with the task\n', 'High-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Observation'),
(28, 'Role-Playing', 'Role-Playing helps to gain deep insights into user habits and find challenges and opportunities by simulating user roles in a scenario.\n', '1. Select a usage scenario and a corresponding task for a service or product\n2. Prepare roles for different stakeholders of the service or product (e.g., by using personas)\n3. Assign the different roles to the participants\n4. Ask the participants to fulfill the task in the given usage scenario and to play their role\n5. Capture the Role-Playing session by taking photos, notes, or videos\n6. Discuss the perspectives of each stakeholder \n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(29, 'Scenarios', 'A Scenario is a narrative that explains the future use of a service or product from a user\'s point of view. It is designed to help design teams understand the usage environment of people\'s daily life.\n', '1. Analyze results from already collected collection (e.g., interviews, observations, think-aloud sessions) \n2. Describe the use of a service or product to accomplishing a given task in an easy-to-understand language\n3. Include all relevant aspects of the interaction (e.g., continuous interruptions through telephone calls can be relevant for the use of a software platform)\n4. Review and refine the scenarios\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(30, 'Service Blueprints', 'Service Blueprints visualize key activities and connections between activities in service processes from the customer\'s point of view. Blueprints help to generate service innovations and improve service quality and customer experience.\n', '1. Determine the service process that should be \"blueprinted\"\n2. Ask the participants (it is suggested to bring in people from cross-functional teams or customers) to enter: Customers\' activities, Employees\' frontstage and backstage activities, Underlying support processes into the blueprint\n3. Link customers\' and employees\' activities and the support processes\n4. Use the service blueprint to develop a new service or optimize an existing one\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(31, 'Shadowing', 'Shadowing enables teams to understand user behavior by observing users in a natural environment.\n', '1. Select a venue and suitable persons within that venue to be observed \n2. Track and observe a person over a defined period of time\n3. Make field notes and recordings from the observations\n4. Analyze the information collected during the shadowing period \n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(32, 'Stakeholder Walkthrough', 'A Stakeholder Walkthrough helps end users, stakeholders, and the team evaluate early prototypes. It also offers users and stakeholders the opportunity to make actionable recommendations for improvements.\n', '1. Define the scope and objectives of the walkthrough \n2. Define an overall task and the related subtasks\n3. Ask participants (representatives of end users, development team and other stakeholders; less than 20 people) to discuss the usage of prototypes of a service or product to fulfill the pre-defined task\n4. Make notes on how people use the prototypes of the service or product to fulfill the task\n5. Discuss and analyze how to solve problems that have occurred during the walkthrough', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(33, 'Story Sharing', 'Story Sharing enables a team to find common ways of using a service or product in different usage contexts to generate opportunities and solutions.\n', '1. Encourage participants to brainstorm various design alternatives for a service or product\n2. Ask the participants to individually sketch storyboards describing the usage environment, visual/audible/tactile cues, user inputs, outputs, user emotions, technologies, experiences, etc.\n3. Compare the storyboards, discuss the ideas, and choose an alternative design\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(34, 'Storyboarding', 'Storyboarding is a visual representation of the interaction between users and products or services. It covers a sequence of images describing environments, users, and products. This technique helps to generate design alternatives in the early phase of a design process.\n', '1. Prepare post-its and markers as well as a large-format sheet of paper\n2. Gather the participants together in a room with plenty of wall space (each participant should have conducted in-depth interviews with people in the field)\n3. Ask each participant to tell their teammates the most compelling stories from the interviews\n4. Ask participants to document their thoughts to the stories on post-its\n5. Organize the post-its on the wall and consider the shared information to imagine opportunities and solutions', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(35, 'Tomorrow Headlines', 'Tomorrow Headlines are fictional articles that seek to illustrate how a new service or product idea or concept will influence the daily life of users or society in the future.\n', '1. Ask participants to imagine themselves in future\n2. Ask participants to write headlines of newspaper articles that reflect the vision of a product or service\n3. Place the headlines on a wall and present them\n4. Analyze the different directions of visions of a product or a service\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(36, 'Touchpoint Matrix', 'A Touchpoint Matrix visualizes the interaction of users with the different touchpoints in the product-service system. The technique can be used to analyze an existing service system as well as to support a design concept phase.\n', '1. Prepare a Touchpoint Matrix (First row: List the main functions of a service or product; First column: List the touchpoints (touchpoints are elements with which users come into contact during the experience))\n2. Ask participants to take on the role of a persona and to imagine their journey through different touchpoints\n3. Mark the touchpoints and functions with sticky dots in the respective cell and connect the corresponding dots \n4. Highlight design opportunities and user requirements\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Observation'),
(37, 'User Journey Maps', 'User Journey Maps visualize the interactions and touchpoints of users with a product or service in a procedural way. It enables teams to identify pain points. A shared version of a user journey map helps a team optimize a service or product before it comes to a released version. \n', '1. Define the usage process of a product or service\n2. Identify individual touchpoints (people, information, products, etc.) within each process stage\n3. Draw a timeline for the time period that corresponds to an activity of interest\n4. Link the touchpoints\n5. Discuss the user journey map in the team and identify problems and solutions\n', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Observation'),
(38, 'UX Curve', 'UX Curve supports users in retrieving details of interactive experiences with a product or a service. A UX curve is designed to illustrate how relationships between users and products or services evolve over time. \n', '1. Recruit participants for a Long-Term Study (3 to 12 months)\n2. Ask participants to use a product or a service and distribute five empty UX curve templates to each participant\n3. Ask the participants to draw a curve into the templates for the course of time displaying the: Experiences when using the product or service, Attractiveness of the product or service, Ease of using the product or service, Utility of the product or service, Degree of usage\n4. Collect and analyze the results to see how the user experience changes over time\n', 'Release', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Questionnaire'),
(39, 'Wireframing', 'Wireframing is a Low-Fidelity Prototyping technique that enable teams to clearly understand the architecture and functions of the interface of a product or service. \n', '1. Collect content elements and functionalities for an interface of a product or a service\n2. Sketch the interface as an early wireframe by matching different content elements and/or functionalities to each other\n3. Share the wireframe with stakeholders for feedback and iterate the wireframe \n4. Test the iterated wireframe and develop it to a high-fidelity prototype\n', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(40, 'Wizard of Oz', 'The Wizard of Oz technique enables users to interact with a low-cost and non-functional prototype. A \"wizard\" observes the interaction of users with the prototype in a back room and simulates the system responses in real time. \n', '1. Create a low-cost and non-functional prototype for the simulation\n2. Develop a test plan\n3. Ask the participants to simulate the usage of the prototype\n4. Assign a researcher as a \"wizard\" who hides in a back room, observes user interactions, and simulates system responses in real time\n5. Take notes on how people perform during the interaction process\n6. Conduct a feedback session with participants to understand their system experiences', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Experiment');

-- --------------------------------------------------------

--
-- 表的结构 `tn_tags_search`
--

CREATE TABLE `tn_tags_search` (
  `tn_id` int(11) NOT NULL,
  `tn_name` varchar(100) NOT NULL,
  `tag1` int(11) NOT NULL,
  `tag2` int(11) NOT NULL,
  `tag3` int(11) NOT NULL,
  `tag4` int(11) NOT NULL,
  `tag5` int(11) NOT NULL,
  `tag6` int(11) NOT NULL,
  `tag7` int(11) NOT NULL,
  `tag8` int(11) NOT NULL,
  `tag9` int(11) NOT NULL,
  `tag10` int(11) NOT NULL,
  `tag11` int(11) NOT NULL,
  `tag12` int(11) NOT NULL,
  `tag13` int(11) NOT NULL,
  `tag14` int(11) NOT NULL,
  `tag15` int(11) NOT NULL,
  `tag16` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tn_tags_search`
--

INSERT INTO `tn_tags_search` (`tn_id`, `tn_name`, `tag1`, `tag2`, `tag3`, `tag4`, `tag5`, `tag6`, `tag7`, `tag8`, `tag9`, `tag10`, `tag11`, `tag12`, `tag13`, `tag14`, `tag15`, `tag16`) VALUES
(1, '3-12-3 Brainstorming', 0, 45, 10, 0, 0, 0, 5, 15, 0, 5, 0, 10, 0, 0, 0, 0),
(2, '6-3-5 Brainwriting', 0, 45, 10, 0, 0, 0, 5, 15, 0, 5, 0, 10, 0, 0, 0, 0),
(3, 'A/B Testing', 16, 0, 0, 16, 16, 5, 16, 0, 0, 0, 0, 0, 5, 0, 5, 0),
(4, 'Actors Mapping', 20, 10, 30, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 10),
(5, 'Behavioral Mapping', 40, 0, 20, 5, 0, 0, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5),
(6, 'Bodystorming', 0, 16, 0, 5, 16, 5, 5, 16, 0, 0, 0, 11, 0, 11, 0, 5),
(7, 'Co-Discovery', 30, 0, 0, 10, 10, 0, 10, 0, 0, 0, 5, 5, 5, 5, 5, 5),
(8, 'Cognitive Walkthrough ', 0, 0, 11, 0, 11, 16, 11, 21, 0, 0, 0, 5, 0, 5, 0, 0),
(9, 'Collaborative Sketching', 11, 11, 0, 0, 5, 21, 0, 0, 0, 5, 16, 16, 0, 0, 0, 5),
(10, 'Concurrent Think-Aloud ', 16, 0, 0, 21, 5, 5, 16, 0, 0, 0, 11, 16, 0, 0, 0, 5),
(11, 'Desirability Testing with Product Reaction Cards', 15, 0, 0, 20, 0, 5, 10, 5, 0, 0, 5, 5, 10, 5, 0, 5),
(12, 'Diary Studies', 42, 11, 0, 5, 0, 0, 0, 11, 0, 0, 0, 0, 16, 0, 0, 5),
(13, 'Directed Storytelling', 47, 11, 0, 0, 0, 0, 5, 0, 0, 0, 11, 11, 0, 0, 5, 5),
(14, 'Experience Clips', 30, 0, 0, 10, 5, 0, 5, 5, 0, 0, 0, 5, 5, 5, 0, 5),
(15, 'Experience Prototyping', 0, 0, 0, 0, 16, 26, 0, 0, 0, 0, 5, 11, 0, 11, 5, 0),
(16, 'Heuristic Evaluation', 11, 0, 0, 16, 21, 5, 5, 21, 0, 0, 0, 5, 5, 0, 0, 0),
(17, 'Kano Analysis', 35, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 10, 5, 0, 0, 5),
(18, 'Mental Model Diagramming', 0, 25, 20, 0, 0, 0, 15, 0, 5, 0, 5, 0, 5, 0, 0, 0),
(19, 'Mood Boards', 30, 20, 10, 0, 0, 0, 0, 5, 0, 0, 10, 15, 0, 0, 0, 0),
(20, 'Motivation Matrix', 0, 25, 25, 5, 0, 0, 0, 5, 0, 5, 0, 15, 0, 0, 0, 5),
(21, 'Offering Mapping', 0, 20, 30, 0, 0, 5, 0, 10, 0, 0, 0, 10, 0, 5, 0, 5),
(22, 'Personas', 20, 10, 15, 0, 10, 0, 0, 15, 0, 0, 0, 0, 5, 10, 5, 5),
(23, 'Photo Elicitation Interviewing', 45, 10, 0, 5, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 5, 5),
(24, 'Private Camera Conversation', 21, 0, 0, 16, 21, 0, 11, 0, 0, 0, 0, 11, 0, 0, 0, 5),
(25, 'Product Experience Tracker', 15, 0, 0, 25, 5, 0, 10, 0, 10, 0, 5, 5, 10, 0, 0, 0),
(26, 'Repertory Grids', 16, 0, 21, 16, 11, 0, 11, 0, 0, 0, 0, 11, 0, 0, 5, 0),
(27, 'Retrospective Think-Aloud', 11, 0, 0, 26, 11, 0, 11, 0, 0, 0, 16, 11, 0, 0, 0, 5),
(28, 'Role-Playing', 30, 10, 0, 0, 5, 0, 0, 15, 0, 0, 0, 5, 0, 10, 0, 5),
(29, 'Scenarios', 30, 15, 10, 0, 5, 0, 0, 10, 0, 5, 0, 10, 0, 5, 0, 5),
(30, 'Service Blueprints', 30, 0, 20, 0, 5, 5, 0, 0, 0, 0, 0, 10, 5, 0, 0, 0),
(31, 'Shadowing', 50, 10, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0, 0, 5),
(32, 'Stakeholder Walkthrough', 0, 0, 0, 5, 11, 5, 11, 0, 0, 16, 11, 16, 0, 5, 0, 5),
(33, 'Story Sharing', 15, 25, 0, 0, 0, 5, 0, 20, 0, 5, 0, 10, 0, 0, 0, 5),
(34, 'Storyboarding', 20, 35, 10, 0, 5, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 5),
(35, 'Tomorrow Headlines', 25, 30, 0, 0, 10, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0),
(36, 'Touchpoint Matrix', 25, 0, 20, 5, 5, 0, 0, 10, 0, 0, 0, 10, 0, 5, 0, 10),
(37, 'User Journey Maps', 25, 0, 25, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5),
(38, 'UX Curve', 0, 0, 15, 20, 0, 0, 10, 0, 5, 0, 5, 0, 15, 0, 0, 0),
(39, 'Wireframing', 0, 0, 16, 0, 5, 26, 0, 11, 0, 0, 5, 5, 0, 0, 5, 0),
(40, 'Wizard of Oz', 26, 0, 0, 11, 16, 11, 5, 0, 0, 0, 5, 5, 0, 0, 11, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tn_info`
--
ALTER TABLE `tn_info`
  ADD PRIMARY KEY (`tn_id`);

--
-- Indexes for table `tn_tags_search`
--
ALTER TABLE `tn_tags_search`
  ADD PRIMARY KEY (`tn_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `tn_info`
--
ALTER TABLE `tn_info`
  MODIFY `tn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- 使用表AUTO_INCREMENT `tn_tags_search`
--
ALTER TABLE `tn_tags_search`
  MODIFY `tn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
