const categories = {
  1: 'General Interest',
  2: 'Career & Education',
  3: 'Mobile Development',
  4: 'Freelancing',
  5: 'Game Development',
  6: 'Web & JavaScript',
  7: 'Microsoft & .NET',
  8: 'Python',
  9: 'PHP',
  10: 'Ruby',
  11: 'C++, C, C#',
  12: 'Java',
  13: 'Data Science & Machine Learning',
  14: 'Agile/Scrum',
  15: 'DevOps',
  16: 'Cloud',
  17: 'Databases',
  18: 'Design, UI/UX & CSS',
  19: 'Product Management',
  20: 'Startups & Entrepreneurship'.
  21: 'Digital Marketing & Strategy',
  22: 'Functional Programming',
  23: 'Embedded & IoT'
}

// Categories are listed in order of relevance
let podcast_categories = {
  163: [6, 18],
  164: [19, 18],
  165: [19],
  166: [20, 19],
  167: [20, 19, 21],
  168: [20, 19, 21],
  169: [20, 19, 21],
  170: [21, 20, 19],
  171: [8, 17, 6, 15],
  172: [20, 21, 19],
  173: [8, 13],
  174: [9, 6],
  175: [6, 1],
  176: [9, 6],
  177: [11],
  178: [12],
  179: [12],
  180: [12],
  181: [9, 6],
  182: [20, 21, 1],
  183: [6, 18, 20, 1],
  184: [20, 21, 19, 1],
  185: [6],
  186: [18, 6],
  187: [6, 18],
  188: [6, 18],
  189: [18, 6],
  190: [6],
  191: [5],
  192: [5],
  193: [5],
  194: [5],
  195: [4, 2, 20],
  196: [4, 2, 20],
  197: [20, 4, 2],
  198: [20, 4, 2],
  199: [20, 4, 2, 6],
  200: [19],
  201: [19, 20],
  202: [1],
  203: [20, 19],
  204: [12],
  205: [10],
  206: [10],
  207: [1],
  208: [14, 20],
  210: [14, 20],
  211: [15],
  212: [15],
  213: [15],
  214: [16],
  215: [16],
  216: [16],
  217: [16, 7],
  218: [16, 7],
  219: [6, 16],
  221: [16],
  222: [1, 16, 17],
  223: [17],
  224: [17],
  225: [17],
  226: [17],
  227: [14, 20],
  228: [6],
  229: [14, 20],
  230: [13],
  231: [22, 1],
  232: [22, 1],
  233: [22],
  234: [1],
  235: [1],
  236: [9, 6],
  237: [6, 9]
  238: [14],
  239: [23],
  240: [1],
  241: [14],
  242: [6],
  243: [12],
  244: [13],
  245: [13],
  246: [13],
  247: [13],
  248: [13],
  249: [13],
  250: [13],
  251: [17],
  252: [17],
  253: [6, 18, 1],
  254: [2, 1, 6],
  255: [1],
  256: [2, 1],
  257: [2, 6, 1],
  258: [6, 2, 1],
  259: [1],
  260: [1],
  261: [1],
  262: [1],
  263: [1, 6],
  264: [1],
  266: [2, 1],
  267: [1],
  268: [6],
  269: [1],
  270: [1],
  271: [1, 6],
  272: [1],
  273: [1],
  274: [1, 2],
  275: [2, 1, 6],
  276: [1],
  277: [2, 1],
  278: [1],
  279: [1],
  280: [1],
  281: [1],
  282: [1],
  283: [1, 6],
  284: [1, 6],
  285: [1, 6],
  286: [1],
  287: [2, 1],
  288: [1],
  289: [2, 1],
  290: [3],
  292: [2],
  293: [2],
  294: [1],
  295: [3],
  296: [3],
  297: [3],
  298: [1],
  299: [6, 1, 18],
  300: [18, 21, 1],
  301: [6],
  302: [6],
  303: [18],
  304: [6, 18],
  305: [6, 1, 20, 21],
  306: [3, 6],
  307: [6],
  308: [3],
  309: [3],
  310: [1],
  312: [1],
  313: [1],
  314: [1, 6],
  315: [1],
  316: [7],
  317: [7],
  318: [7],
  319: [1],
  320: [7],
  322: [1],
  323: [6, 18, 19, 1],
  324: [7, 16] 
}
