import aspireAfrik from './aspireafrik.png';
import todo from './todo.png';
import leaderboard from './leaderboard.png';
import bookstore from './bookstore.png';
import mathMagician from './maths.png';

const projects = [
  {
    id: 1,
    title: 'aspireAfrik',
    screenshot: aspireAfrik,
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://sparkly-aspireafrik.netlify.app/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/aspireafrik',
    description: 'I used JavaScript, HTML5, and CSS3 to create a responsive website for AspireAfrik International Ltd. The website features a dynamically rendered speaker section that showcases the company\'s programs and expert resource persons.',
  },
  {
    id: 2,
    title: 'To-do',
    screenshot: todo,
    stack: ['HTML/CSS', 'React', 'Tailwind'],
    liveLink: 'https://get-todo-app.netlify.app/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/todo-app',
    description: 'Todo app is a simple application that allows users to keep track of their tasks. Users can create new tasks, edit existing tasks, and mark tasks as complete. Todo app is a great way to stay organized and on top of your work.',
  },
  {
    id: 3,
    title: 'Leaderboard',
    screenshot: leaderboard,
    stack: ['HTML/CSS', 'JavaScript', 'rest-api'],
    liveLink: 'https://starlit-leaderboard.netlify.app/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/Leaderboard',
    description: 'This project is an application that allows users to post and receive game scores from a leaderboard list. It utilizes an API to send and receive data to and from the leaderboard.',
  },
  {
    id: 4,
    title: 'Bookstore',
    screenshot: bookstore,
    stack: ['HTML/CSS', 'React', 'rest-api'],
    liveLink: 'https://okechukwu-muokwugwo.github.io/bookstore/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/bookstore',
    description: 'In this project, I built a React-Redux API based Bookstore. This allows users to add and delete books from the API. I styled the App using Zeplin as a collaboration tool.',
  },
  {
    id: 5,
    title: 'Math Magician',
    screenshot: mathMagician,
    stack: ['HTML/CSS', 'React', 'Big-js'],
    liveLink: 'https://mathmagiciansapps.netlify.app/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/math-magicians',
    description: 'Mathmagician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
  },

];

export default projects;
