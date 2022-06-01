import { json } from "express";

export const adminDashboard = async (req, res) => {
  // console.log("This is admin dashboard");
  res.json([
    {
      sn: 1,
      fname: "Roshan Pradhan",
      age: 23,
      address: "Biratnagar-12, Nepal",
      email: "roshanpradhan694@gmail.com",
    },
    {
      sn: 2,
      fname: "Gopal Shrestha",
      age: 25,
      address: "Belbari-01, Nepal",
      email: "gopal.Shrestha@gmail.com",
    },
    {
      sn: 3,
      fname: "Balendra Shah",
      age: 35,
      address: "Kathmandu-11, Nepal",
      email: "balendrashah8848@gmail.com",
    },
  ]);
};
export const adminDashboard2 = async (req, res) => {
  // console.log("This is admin dashboard");
  res.json([
    {
      sn: 1,
      title: "What is React?",
      post: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
    },
    {
      sn: 2,
      title: "What is Node.js?",
      post: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.",
    },
    {
      sn: 3,
      title: "What is Express.js?",
      post: "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js. The original author, TJ Holowaychuk, described it as a Sinatra-inspired server,[5] meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library.",
    },
  ]);
};
export const adminDashboard3 = async (req, res) => {
  // console.log("This is admin dashboard");
  res.json([
    {
      sn: 1,
      title: "Facebook.com",
      user: "@roshan694",
      password: "**********",
    },
    {
      sn: 2,
      title: "Gmail.com",
      user: "roshan_pradhan",
      password: "************",
    },
    {
      sn: 3,
      title: "Github.com",
      user: "Roshan-Pradhan",
      password: "**************",
    },
  ]);
};
