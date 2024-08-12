export const examCardsData = [
    {
        img: "https://cdn-icons-png.freepik.com/512/9716/9716188.png?ga=GA1.1.1932890936.1716893291",
        title: 'Cyber Security'
        // title: "IBPS Clerk"
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/2828/2828883.png?ga=GA1.1.1932890936.1716893291",
        title: 'Full Stack Developers'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/13191/13191281.png?ga=GA1.1.1932890936.1716893291",
        title: 'UI/UX Designers'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/10169/10169729.png?ga=GA1.1.1932890936.1716893291",
        title: 'Frontend Developer'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/5486/5486350.png?ga=GA1.1.1932890936.1716893291",
        title: 'Java Developer'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/10435/10435242.png?ga=GA1.1.1932890936.1716893291",
        title: 'Testing'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/3578/3578749.png?ga=GA1.1.1932890936.1716893291",
        title: 'Digital Marketing'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/381/381702.png?ga=GA1.1.1932890936.1716893291",
        title: 'Python Developers'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/3305/3305572.png?ga=GA1.1.1932890936.1716893291",
        title: 'Cloud Computing'
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/12574/12574697.png?ga=GA1.1.1932890936.1716893291",
        title: 'Mobile Apps'
    }, {
        img: "https://cdn-icons-png.freepik.com/512/4861/4861179.png?ga=GA1.1.1932890936.1716893291",
        title: 'Graphic Design'
    }, {
        img: "https://cdn-icons-png.freepik.com/512/5024/5024212.png?ga=GA1.1.1932890936.1716893291",
        title: 'Content Writing'
    },
]





export const questions = [
    {
        id: 1,
        questionText: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<css>", "<script>", "<link>"],
        correctOptionIndex: 0,
    },
    {
        id: 2,
        questionText: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<br>", "<break>", "<newline>"],
        correctOptionIndex: 1,
    },
    {
        id: 3,
        questionText: "Which HTML attribute is used to define inline styles?",
        options: ["font", "styles", "style", "class"],
        correctOptionIndex: 2,
    },
    {
        id: 4,
        questionText: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "text-style", "font-style"],
        correctOptionIndex: 0,
    },
    {
        id: 5,
        questionText: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        correctOptionIndex: 2,
    },
    {
        id: 6,
        questionText: "How do you select an element with id 'demo' in CSS?",
        options: ["#demo", ".demo", "*demo", "demo"],
        correctOptionIndex: 0,
    },
    {
        id: 7,
        questionText: "Which built-in method combines the text of two strings and returns a new string?",
        options: ["append()", "concat()", "attach()", "add()"],
        correctOptionIndex: 1,
    },
    {
        id: 8,
        questionText: "Which of the following is correct about JavaScript?",
        options: [
            "JavaScript is a compiled language.",
            "JavaScript is an interpreted language.",
            "JavaScript is a server-side scripting language.",
            "JavaScript is a low-level programming language.",
        ],
        correctOptionIndex: 1,
    },
    {
        id: 9,
        questionText: "How do you create a function in JavaScript?",
        options: [
            "function = myFunction()",
            "function:myFunction()",
            "function myFunction()",
            "function => myFunction()",
        ],
        correctOptionIndex: 2,
    },
    {
        id: 10,
        questionText: "What is the correct syntax to create a functional component in React?",
        options: [
            "function Component() { return <div></div>; }",
            "const Component = () => { return <div></div>; }",
            "class Component extends React.Component { render() { return <div></div>; } }",
            "Both A and B",
        ],
        correctOptionIndex: 3,
    },
    {
        id: 11,
        questionText: "Which method is used to update the state in a React class component?",
        options: ["updateState", "setState", "changeState", "refreshState"],
        correctOptionIndex: 1,
    },
    {
        id: 12,
        questionText: "What is the purpose of the useEffect hook in React?",
        options: [
            "To manage state in a functional component.",
            "To perform side effects in a functional component.",
            "To return HTML elements.",
            "To bind event handlers.",
        ],
        correctOptionIndex: 1,
    },
    {
        id: 13,
        questionText: "Which HTTP method is used to submit data to be processed to a specified resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctOptionIndex: 1,
    },
    {
        id: 14,
        questionText: "What is the purpose of the 'viewport' meta tag in HTML?",
        options: [
            "To specify the color of the viewport.",
            "To set the character encoding for the document.",
            "To control the layout on mobile browsers.",
            "To link to external stylesheets.",
        ],
        correctOptionIndex: 2,
    },
    {
        id: 15,
        questionText: "Which of the following is NOT a JavaScript framework?",
        options: ["Angular", "Vue", "React", "Django"],
        correctOptionIndex: 3,
    },
    {
        id: 16,
        questionText: "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correctOptionIndex: 2,
    },
    {
        id: 17,
        questionText: "What does CSS stand for?",
        options: [
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
        ],
        correctOptionIndex: 3,
    },
    {
        id: 18,
        questionText: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "src", "title", "longdesc"],
        correctOptionIndex: 0,
    },
    {
        id: 19,
        questionText: "In JavaScript, which method is used to find the index of an item in an array?",
        options: ["findIndex()", "indexOf()", "getIndex()", "locateIndex()"],
        correctOptionIndex: 1,
    },
    {
        id: 20,
        questionText: "Which of the following is used to add a comment in a JavaScript file?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "Both A and C"],
        correctOptionIndex: 3,
    },
    {
        id: 21,
        questionText: "What is the default display value of a <div> element?",
        options: ["inline", "block", "inline-block", "flex"],
        correctOptionIndex: 1,
    },
    {
        id: 22,
        questionText: "Which of the following is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Rails"],
        correctOptionIndex: 0,
    },
    {
        id: 23,
        questionText: "Which property is used in CSS to change the font of text?",
        options: ["font-style", "font-family", "font-weight", "font-size"],
        correctOptionIndex: 1,
    },
    {
        id: 24,
        questionText: "Which HTML element is used for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        correctOptionIndex: 2,
    },
    {
        id: 25,
        questionText: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<section>", "<footer>", "<foot>"],
        correctOptionIndex: 2,
    },
    {
        id: 26,
        questionText: "In JavaScript, which statement creates a new object?",
        options: ["var obj = new Object();", "var obj = Object();", "var obj = new object();", "var obj = object();"],
        correctOptionIndex: 0,
    },
    {
        id: 27,
        questionText: "Which HTML element is used to define a client-side script?",
        options: ["<script>", "<code>", "<scripting>", "<client>"],
        correctOptionIndex: 0,
    },
    {
        id: 28,
        questionText: "What does the 'a' in a tag stand for?",
        options: ["anchor", "attribute", "alt", "article"],
        correctOptionIndex: 0,
    },
    {
        id: 29,
        questionText: "What is the correct HTML element for playing video files?",
        options: ["<media>", "<movie>", "<video>", "<film>"],
        correctOptionIndex: 2,
    },
    {
        id: 30,
        questionText: "Which CSS property is used to change the left margin of an element?",
        options: ["padding-left", "margin-left", "indent-left", "spacing-left"],
        correctOptionIndex: 1,
    },
];