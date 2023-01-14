var questions = [
  {
    person:'John F. Kennedy',
    title: 'Born into the prominent Kennedy family in Brookline, Massachusetts,',
    choices: ['React js', 'Python', 'Angular', 'Vue js'],
    answer: 'Python',
  },
  {
    person:'George W. Bush',
    title: 'Which language is suitable for mobile application?',
    choices: ['Vue js', 'Javascript', 'Java', 'golang'],
    answer: 'Java',
  },
  {
    person:'Barack Obama',
    title: 'In what year was the JavaScript language unveiled?',
    choices: ['1990', '1993', '1998', '2001'],
    answer: '1990',
  },
  {
    person:'Bill Clinton',
    title: 'Who is the creator of JavaScript language?',
    choices: ['Brendan Eich', 'James Arthur Gosling', 'Guido van Rossum', 'Rasmus Lerdorf'],
    answer: 'Brendan Eich',
  },
  {
    person:'Abraham Lincoln',
    title: 'Which is a php framework?',
    choices: ['fluter', 'laravel', 'django', 'solidity'],
    answer: 'laravel',
  },
  {
    person:'George Washington',
    title: 'Which is a php framework?',
    choices: ['fluter', 'laravel', 'django', 'solidity'],
    answer: 'laravel',
  },
  {
    person:'Franklin D. Roosevelt',
    title: 'Which is a php framework?',
    choices: ['fluter', 'laravel', 'django', 'solidity'],
    answer: 'laravel',
  },
  {
    person:'Thomas Jefferson',
    title: 'Which is a php framework?',
    choices: ['fluter', 'laravel', 'django', 'solidity'],
    answer: 'laravel',
  },

];

questions.map((item) => {

  const div = document.getElementById("div");
  div.classList.add("main-content")
  const itemWraper = document.createElement("div");
  itemWraper.classList.add("Wrpaer-content");
  const itemHeader = document.createElement("div");
  itemHeader.classList.add("header-content");
  const headerParam =document.createElement("span")
  headerParam.textContent=`${item.person}`
  itemHeader.appendChild(headerParam)
  const header = document.createElement("p");
  header.textContent = `${item.title}`;
  itemWraper.appendChild(itemHeader)
  itemWraper.appendChild(header);

  const content = document.createElement("p");
  content.textContent = `${item.choices}`;
  itemWraper.appendChild(content);

  const paragraph = document.createElement("p");
  paragraph.textContent = `${item.answer}`;
  itemWraper.appendChild(paragraph);
  div.appendChild(itemWraper)

})











