export const domFaqData = [
  {
    question: "What is the DOM?",
    answer: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page."
  }, {
    question: "What is the difference between onClick={(item) => handleItem(item)} and onClick={handleItem(item)}?",
    answer: "Using onClick={handleItem(item)} will immediately call the handleItem function as soon as the component renders, rather than when the click event occurs. In contrast, onClick={(item) => handleItem(item)} defines an arrow function that will call handleItem with the item argument when the click event happens. Therefore, to prevent the function from being called automatically and to ensure it is called only on a click event, you should use an arrow function."
  },
  {
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by libraries such as React. It allows efficient updates to the document."
  },
  {
    question: "What is the difference between the DOM and the Virtual DOM?",
    answer: "DOM: The actual document structure loaded in the browser. || Virtual DOM: An in-memory representation of the real DOM. __ DOM: Manipulating it directly can be slow and cause performance issues. || Virtual DOM: Allows efficient updates by batching changes and minimizing direct manipulation."
  },
  {
    question: "Why is the Virtual DOM needed?",
    answer: "The Virtual DOM improves performance by reducing the number of direct manipulations to the real DOM. It batches updates and applies them in a more efficient way, minimizing reflows and repaints in the browser."
  },
  {
    question: "How does React's reconciliation algorithm (React Fiber) work?",
    answer: "React Fiber is the new reconciliation algorithm in React 16 and above. It breaks down rendering work into units and spreads them out over multiple frames, making it more efficient and allowing for smoother updates."
  },
  {
    question: "How does React efficiently manipulate the DOM?",
    answer: "React efficiently manipulates the DOM using the Virtual DOM and the reconciliation algorithm. By comparing the Virtual DOM with a previous version of itself, React can determine the minimum number of changes needed to update the real DOM."
  },
  {
    question: "Explain the difference between the DOM and Virtual DOM.",
    answer: "The DOM is the actual document structure loaded in the browser, whereas the Virtual DOM is an in-memory representation of the real DOM. The Virtual DOM updates only the necessary parts of the real DOM, making updates more efficient."
  },
  {
    question: "Why is the Virtual DOM faster than the real DOM?",
    answer: "The Virtual DOM is faster because it reduces the number of direct manipulations to the real DOM, batches updates, and applies them more efficiently, minimizing reflows and repaints."
  },
  {
    question: "How does React's reconciliation process work?",
    answer: "React's reconciliation process involves comparing the current Virtual DOM with the previous version to determine the minimum number of changes needed to update the real DOM. This process makes DOM updates more efficient."
  },
  {
    question: "What is React Fiber?",
    answer: "React Fiber is the new reconciliation algorithm introduced in React 16. It allows React to break down rendering work into units and spread it out over multiple frames, making updates more efficient and enabling smoother interactions."
  },
  {
    question: "How does React update the actual DOM from the Virtual DOM?",
    answer: "React updates the actual DOM from the Virtual DOM by comparing the current Virtual DOM with the previous version, identifying the differences, and applying only the necessary changes to the real DOM."
  },
  {
    question: "What are the advantages of using the Virtual DOM?",
    answer: "The advantages of using the Virtual DOM include improved performance, efficient updates, reduced direct manipulation of the real DOM, and minimized reflows and repaints in the browser."
  },
  {
    question: "What is the Shadow DOM?",
    answer: "The Shadow DOM is a web standard that encapsulates the internal structure of web components, allowing developers to keep the styles and scripts of a component isolated from the rest of the document."
  },
  {
    question: "How does the Shadow DOM differ from the Virtual DOM?",
    answer: "Shadow DOM: Encapsulates a component's internal structure, styles, and scripts. || Virtual DOM: An abstraction of the real DOM used for efficient updates. __ Shadow DOM: Aimed at creating isolated components. || Virtual DOM: Aimed at optimizing rendering performance."
  },
  {
    question: "What is a reflow in the context of the DOM?",
    answer: "A reflow is the process by which the browser recalculates the positions and geometries of elements in the document. It is triggered by changes to the DOM or its styles and can be performance-intensive."
  },
  {
    question: "What is a repaint in the context of the DOM?",
    answer: "A repaint occurs when changes to an element's appearance that do not affect its layout (like background color) are made. It is less performance-intensive than a reflow."
  },
  {
    question: "Can you explain the concept of diffing in the Virtual DOM?",
    answer: "Diffing is the process by which React compares the new Virtual DOM with the previous version to identify changes. React then updates the real DOM only where changes are necessary, improving performance."
  },
  {
    question: "What triggers a re-render in React?",
    answer: "A re-render in React can be triggered by state changes, prop changes, or context changes. Whenever React detects any of these changes, it re-renders the affected components."
  },
  {
    question: "How can you minimize re-renders in React?",
    answer: "To minimize re-renders in React, you can use techniques like memoization with React.memo, using PureComponent, and managing state efficiently to avoid unnecessary updates."
  },
  {
    question: "What is the role of keys in React lists?",
    answer: "Keys in React lists help identify which items have changed, been added, or been removed. They are essential for efficient updates and should be unique and stable for each list item."
  }
];

export default domFaqData;