import React from 'react'
import '../styles/QNA.css'
import { Link } from 'react-router-dom';

function QNA() {
  return (
    <div className="container">
      <div className="faq-item">
        <h3 className="faq-question">What is `Emmet`?</h3>
        <p className="faq-answer">
          `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What is `CDN`? Why do we use it?</h3>
        <p className="faq-answer">
          A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
          The goal is to provide high availability and performance by distributing the service spatially relative to end users.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Why is `React` known as React?</h3>
        <p className="faq-answer">
          And it's called `React` because it `reacts`. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What is `crossorigin` in script tag?</h3>
        <p className="faq-answer">
          The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
          The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
        </p>
        <p className="faq-answer">
          <strong>Syntax</strong>
          <br />
          <code>&lt;script crossorigin="anonymous|use-credentials"&gt;</code>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What is the difference between `React` and `ReactDOM`?</h3>
        <p className="faq-answer">
          `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
        </p>
        <p className="faq-answer">
          The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What is the difference between `react.development.js` and `react.production.js` files via `CDN`?</h3>
        <p className="faq-answer">
          `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
          `Development build` is several times (maybe 3-5x) `slower` than the `production build`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What are `async` and `defer` attributes in {`<script>`} tag?</h3>
        <p className="faq-answer">
          <strong>Async</strong> - The async attribute is a `boolean attribute`. The script is downloaded in `parallel (in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
        </p>
        <p className="faq-answer">
          <strong>Syntax</strong>
          <br />
          <code>&lt;script async src="demo_async.js"&gt;&lt;/script&gt;</code>
        </p>
        <p className="faq-answer">
          <strong>Defer</strong> - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel (in the background)` to parsing the page, and `executed after the page` has finished parsing (when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
        </p>
        <p className="faq-answer">
          <strong>Syntax</strong>
          <br />
          <code>&lt;script defer src="demo_defer.js"&gt;&lt;/script&gt;</code>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Difference between a `Library` and `Framework`?</h3>
        <p className="faq-answer">
          A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.
        </p>
        <p className="faq-answer">
          A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
        </p>
        <p className="faq-answer">
          The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.
        </p>
      </div>


      <div className="faq-item">
        <h3 className="faq-question">Q: What is `npm`?</h3>
        <p className="faq-answer">
          A: `npm` is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use `npm` to share software.
        </p>
        <p className="faq-answer">
          npm is lots of things:
        </p>
        <ul className="faq-answer">
          <li className="faq-answer">`npm` is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.</li>
          <li className="faq-answer">The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.</li>
          <li className="faq-answer">`npm` alternative is `yarn`</li>
        </ul>
        <p className="faq-answer"><strong>How to initialize `npm`?</strong></p>
        <pre className="faq-answer">
          npm init
        </pre>
        <p className="faq-answer">`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.</p>
        <p className="faq-answer">`npm` is the command line client that allows developers to install and publish those packages.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Parcel/Webpack`? Why do we need it?</h3>
        <p className="faq-answer">
          A: `Parcel` and `webpack` are the bundlers used mostly for `JavaScript` or `Typescript` code that helps you to `minify, clean, and make your code compact` so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.
        </p>
        <p className="faq-answer">Use of `Parcel/Webpack`:</p>
        <p className="faq-answer">Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.</p>
        <p className="faq-answer"><strong>installation commands:</strong></p>
        <p className="faq-answer"><strong>Install:</strong></p>
        <pre className="faq-answer">
          npm install -D parcel
        </pre>
        <p className="faq-answer">`-D` is used for development and as a development dependency.</p>
        <p className="faq-answer"><strong>Parcel Commands :</strong></p>
        <p className="faq-answer">For development build:</p>
        <pre className="faq-answer">
          npx parcel &lt;entry_point&gt;
        </pre>
        <p className="faq-answer">For production build :</p>
        <pre className="faq-answer">
          npx parcel build &lt;entry_point&gt;
        </pre>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Why is `.parcel-cache` folder?</h3>
        <p className="faq-answer">
          A: `cache folder` (or `.parcel-cache in parcel v2`) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `npx`?</h3>
        <p className="faq-answer">
          A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is difference between `dependencies vs devDependencies`?</h3>
        <p className="faq-answer">
          A: `"dependencies"` : Packages required by your application in production. `"devDependencies"` : Packages that are only needed for local development and testing.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Tree Shaking? in Parcel?</h3>
        <p className="faq-answer">
          A: `Tree shaking`, also known as `dead code elimination`, is the practice of `removing unused code in your production build`. It's important to ship as little code to your end-users as possible. By statically analyzing our source code, we can determine what's not being used and exclude it from our final bundle.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Hot Module Replacement?</h3>
        <p className="faq-answer">
          A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.</h3>
        <h4 className="faq-subquestion">Parcel features:</h4>
        <ul className="faq-answer">
          <li className="faq-answer">Dev Build - parcel provides us develop build</li>
          <li className="faq-answer">Local Server - parcel also provides us a local server, which can be used to see live changes in our application.</li>
          <li className="faq-answer">HMR = Hot Module Replacement - exchanges, adds, or removes modules while an application is running, without a full reload</li>
          <li className="faq-answer">File Watching Algorithm - written in C++</li>
          <li className="faq-answer">Caching - Faster Builds</li>
          <li className="faq-answer">Image Optimization</li>
          <li className="faq-answer">Minification</li>
          <li className="faq-answer">Bundling</li>
          <li className="faq-answer">Compress</li>
          <li className="faq-answer">Consistent Hashing</li>
          <li className="faq-answer">Code Splitting</li>
          <li className="faq-answer">Differential Bundling - support older browsers</li>
          <li className="faq-answer">Diagnostic</li>
          <li className="faq-answer">Error Handling</li>
          <li className="faq-answer">HTTPs</li>
          <li className="faq-answer">Tree Shaking - remove unused code</li>
          <li className="faq-answer">Different Build for dev and prod bundles</li>
        </ul>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `.gitignore`? What should we add and not add into it?</h3>
        <p className="faq-answer">
          A: gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo. / will ignore directories with the name.
        </p>
        <p className="faq-answer">In our code we shouldn't add the files, which we can re-generate in future e.g, `node_modules`, `dist` etc.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the difference between `package.json` and `package-lock.json` files?</h3>
        <p className="faq-answer">
          A: Both of these files have the same format, and perform similar functions in the root of a project. The difference is that `package-lock.json` cannot be published, and it will be ignored if found in any place other than the root project.
        </p>
        <p className="faq-answer">
          The `package.json` is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The `package-lock.json` is solely used to lock dependencies to a specific version number.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Why should I not modify `package-lock.json`?</h3>
        <p className="faq-answer">
          A: It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit `package-lock.json` to your code repository.
        </p>
        <p className="faq-answer">
          You should avoid updating the `package-lock.json` manually since it could break the synchronization between `package.json` and `package-lock.json`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `node_modules`? Is it a good idea to push that on git?</h3>
        <p className="faq-answer">
          A: The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.
        </p>
        <p className="faq-answer">
          It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.
        </p>
        <p className="faq-answer">
          Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via `package.json`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the `dist` folder?</h3>
        <p className="faq-answer">
          A: The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.
        </p>
        <p className="faq-answer">
          Parcel's default directory for your output is named `dist`. The `--dist-dir public` tag defines the output folder for your production files and is named public to avoid confusion with the `dist` default directory.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `browserlists`?</h3>
        <p className="faq-answer">
          A: Browserslist defines and shares the list of target browsers between various frontend build tools.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `JSX`?</h3>
        <p className="faq-answer">
          A: JSX stands for JavaScript XML.<br />
          JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.<br />
          JSX makes it easier to write and add HTML in React.<br />
          JSX converts HTML tags into react elements.
        </p>
        <p className="faq-answer">
          <strong>Example 1 using JSX:</strong>
          <pre>
            {`
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`}
          </pre>
        </p>
        <p className="faq-answer">
          <strong>Example 2 Without JSX:</strong>
          <pre>
            {`
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Superpowers of `JSX`.</h3>
        <p className="faq-answer">
          A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
        </p>
        <p className="faq-answer">
          <strong>Example:</strong>
          <pre>
            {`
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Role of `type` attribute in script tag? What options can I use there?</h3>
        <p className="faq-answer">
          A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.
        </p>
        <p className="faq-answer">
          <strong>type attribute can be of the following types:</strong>
        </p>
        <ul>
          <li>text/javascript: It is the basic standard of writing javascript code inside the &lt;script&gt; tag.</li>
          <li>text/ecmascript: This value indicates that the script is following the EcmaScript standards.</li>
          <li>module: This value tells the browser that the script is a module that can import or export other files or modules inside it.</li>
          <li>text/babel: This value indicates that the script is a babel type and required babel to transpile it.</li>
          <li>text/typescript: As the name suggests the script is written in TypeScript.</li>
        </ul>
        <p className="faq-answer">
          <strong>Syntax for text/javascript:</strong>
          <pre>
            {`
<script type="text/javascript"></script>
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: {`{TitleComponent}`} vs {`{<TitleComponent/>}`} vs {`{<TitleComponent></TitleComponent>}`} in `JSX`.</h3>
        <p className="faq-answer">
          A: The Difference is stated below:
        </p>
        <ul>
          <li>{`{TitleComponent}`}: This value describes the `TitleComponent` as a javascript expression or a variable. The `{ }` can embed a javascript expression or a variable inside it.</li>
          <li>&lt;TitleComponent/&gt;: This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` is a function that is returning a JSX value. A component is written inside the {`<  />`} expression.</li>
          <li>&lt;TitleComponent&gt;&lt;/TitleComponent&gt;: &lt;TitleComponent /&gt; and &lt;TitleComponent&gt;&lt;/TitleComponent&gt; are equivalent only when `TitleComponent` has no child components. The opening and closing tags are created to include the child components.</li>
        </ul>
        <p className="faq-answer">
          <strong>Example:</strong>
          <pre>
            {`
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
`}
          </pre>
        </p>
        <p className="faq-answer">
          <strong>If there are no child elements, then we can write:</strong>
          <pre>
            {`
<TitleComponent />
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Is `JSX` mandatory for React?</h3>
        <p className="faq-answer">
          A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.
        </p>
        <p className="faq-answer">
          <strong>Example of `JSX`:</strong>
          <pre>
            {`
const sample = <h2>Greetings</h2>;
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Is `ES6` mandatory for React?</h3>
        <p className="faq-answer">
          A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
          ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: {`{TitleComponent}`} vs {`{<TitleComponent/>}`} vs {`{<TitleComponent></TitleComponent>}`} in `JSX`.</h3>
        <p className="faq-answer">
          A: The Difference is stated below:
        </p>
        <ul>
          <li>{`{TitleComponent}`}: This value describes the `TitleComponent` as a javascript expression or a variable or React element. The `{ }` can embed a javascript expression or a variable or React element inside it.</li>
          <li>&lt;TitleComponent/&gt;: This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the {`<  />`} expression.</li>
          <li>&lt;TitleComponent&gt;&lt;/TitleComponent&gt;: &lt;TitleComponent /&gt; and &lt;TitleComponent&gt;&lt;/TitleComponent&gt; are equivalent only when `TitleComponent` has no child components. The opening and closing tags are created to include the child components.</li>
        </ul>
        <p className="faq-answer">
          <strong>Example:</strong>
          <pre>
            {`
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: How can I write `comments` in JSX?</h3>
        <p className="faq-answer">
          A: JSX comments are written as follows:
        </p>
        <ul>
          <li>{`{/*  */}`}- for single or multiline comments</li>
        </ul>
        <p className="faq-answer">
          <strong>Example:</strong>
          <pre>
            {`
{/* A JSX comment */}
{/*
  Multi
  line
  JSX
  comment
*/}
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `<React.Fragment></React.Fragment>` and `<></>`?</h3>
        <p className="faq-answer">
          A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
          `<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.
        </p>
        <p className="faq-answer">
          <strong>Example:</strong>
          <pre>
            {`
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Reconciliation` in React?</h3>
        <p className="faq-answer">
          A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
          React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
          React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.
        </p>
        <p className="faq-answer">
          <strong>Or:</strong>
        </p>
        <p className="faq-answer">
          Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `React Fiber`?</h3>
        <p className="faq-answer">
          A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
          The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
          Because Fiber is asynchronous, React can:
        </p>
        <ul>
          <li>Pause, resume, and restart rendering work on components as new updates come in</li>
          <li>Reuse previously completed work and even abort it if not needed</li>
          <li>Split work into chunks and prioritize tasks based on importance</li>
        </ul>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Why do we need `keys` in React?</h3>
        <p className="faq-answer">
          A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
          Keys should be given to the elements within the array to give the elements a stable identity.
        </p>
        <p className="faq-answer">
          <strong>Example:</strong>
          <pre>
            {`
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Can we use `index as keys` in React?</h3>
        <p className="faq-answer">
          A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
          Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `props in React`? Ways to.</h3>
        <p className="faq-answer">
          A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
        </p>
        <p className="faq-answer">
          <strong>Example:</strong>
          <pre>
            {`
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Config Driven UI`?</h3>
        <p className="faq-answer">
          A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic.
          It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
          A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Difference between `Virtual DOM` and `Real DOM`?</h3>
        <p className="faq-answer">
          A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
        </p>
        <ul>
          <li>
            <strong>Virtual DOM:</strong>
            <ul>
              <li>The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.</li>
              <li>Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.</li>
              <li>Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.</li>
            </ul>
          </li>
          <li>
            <strong>Real DOM:</strong>
            <ul>
              <li>The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .</li>
            </ul>
          </li>
        </ul>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Real DOM</th>
              <th>Virtual DOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DOM manipulation is very expensive</td>
              <td>DOM manipulation is very easy</td>
            </tr>
            <tr>
              <td>There is too much memory wastage</td>
              <td>No memory wastage</td>
            </tr>
            <tr>
              <td>It updates Slow</td>
              <td>It updates fast</td>
            </tr>
            <tr>
              <td>It can directly update HTML</td>
              <td>It can’t update HTML directly</td>
            </tr>
            <tr>
              <td>Creates a new DOM if the element updates.</td>
              <td>Update the JSX if the element update</td>
            </tr>
            <tr>
              <td>It allows us to directly target any specific node (HTML element)</td>
              <td>It can produce about 200,000 Virtual DOM Nodes / Second.</td>
            </tr>
            <tr>
              <td>It represents the UI of your application</td>
              <td>It is only a virtual representation of the DOM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the difference between `Named export`, `Default export`, and `* as export`?</h3>
        <p className="faq-answer">
          A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: <strong>named export</strong> and <strong>default export</strong>.
          In <strong>Named export</strong>, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{ }` braces. The name of the imported module has to be the same as the name of the exported module.
        </p>
        <p className="faq-answer">
          In <strong>Named export</strong>, the component is exported from MyComponent.js file like:
          <pre>
            {`
export const MyComponent = () => {}
export const MyComponent2 = () => {}
`}
          </pre>
          and the component is imported from MyComponent.js file like: here we must use `{ }` in MyComponent.
          <pre>
            {`
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
`}
          </pre>
        </p>
        <p className="faq-answer">
          In <strong>Default export</strong>, one can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
          In <strong>Default export</strong>, the component is exported from MyComponent.js file like:
          <pre>
            {`
const MyComponent = () => {}
export default MyComponent;
`}
          </pre>
          and the component is imported from MyComponent.js file like: here we must omit `{ }` in MyComponent.
          <pre>
            {`
import MyComponent from "./MyComponent";
`}
          </pre>
        </p>
        <p className="faq-answer">
          In <strong>* as export</strong>, it is used to import the whole module as a component and access the components inside the module.
          In <strong>* as export</strong>, the component is exported from MyComponent.js file like:
          <pre>
            {`
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
`}
          </pre>
          and the component is imported from MyComponent.js file like:
          <pre>
            {`
import * as MainComponents from "./MyComponent";
`}
          </pre>
          Now we can use them in JSX as:
          <pre>
            {`
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
`}
          </pre>
        </p>
        <p className="faq-answer">
          We can use <strong>Named export</strong> and <strong>Default export</strong> together. So you should export like:
          <pre>
            {`
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
`}
          </pre>
          and import like:
          <pre>
            {`
import MyComponent, { MyComponent2 } from "./MyComponent";
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What are `React Hooks`?</h3>
        <p className="faq-answer">
          A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
          Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
        </p>
        <p className="faq-answer">
          <strong>React provides a bunch of standard in-built hooks:</strong>
          <ul>
            <li><strong>useState:</strong> To manage states. Returns a stateful value and an updater function to update it.</li>
            <li><strong>useEffect:</strong> To manage side-effects like API calls, subscriptions, timers, mutations, and more.</li>
            <li><strong>useContext:</strong> To return the current value for a context.</li>
            <li><strong>useReducer:</strong> A useState alternative to help with complex state management.</li>
            <li><strong>useCallback:</strong> It returns a memorized version of a callback to help a child component not re-render unnecessarily.</li>
            <li><strong>useMemo:</strong> It returns a memoized value that helps in performance optimizations.</li>
            <li><strong>useRef:</strong> It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.</li>
            <li><strong>useLayoutEffect:</strong> It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.</li>
            <li><strong>useDebugValue:</strong> Helps to display a label in React DevTools for custom hooks.</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Why do we need `useState Hook`?</h3>
        <p className="faq-answer">
          A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
          The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
        </p>
        <p className="faq-answer">
          <strong>Syntax for useState hook</strong>
          <pre>
            {`
const [state, setState] = useState(initialstate);
`}
          </pre>
        </p>
        <p className="faq-answer">
          <strong>Importing:</strong> To use useState you need to import useState from react as shown below:
          <pre>
            {`
import React, { useState } from "react";
`}
          </pre>
        </p>
        <p className="faq-answer">
          We can use Hooks in Functional Components
          <pre>
            {`
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Microservice`?</h3>
        <p className="faq-answer">
          A: `Microservice` - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams.
          Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
          It means we are dividing software into small, well-defined modules enabling teams to use functions for multiple purposes.
        </p>
        <p className="faq-answer">
          <strong>Benefits of Microservices:</strong>
          <ul>
            <li>Flexible Scaling</li>
            <li>Easy Deployment</li>
            <li>Technological Freedom</li>
            <li>Reusable Code</li>
            <li>Resilience</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Monolith architecture`?</h3>
        <p className="faq-answer">
          A: A `Monolith architecture` is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.
          It means we are not dividing software into small, well-defined modules, we use every service like a database, server, or a UI of the application, in one Application file.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the difference between `Monolith and Microservice`?</h3>
        <p className="faq-answer">
          A: With `monolithic architectures`, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.
        </p>
        <p className="faq-answer">
          With a `microservices architecture`, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Why do we need a `useEffect Hook`?</h3>
        <p className="faq-answer">
          A: `useEffect Hook` is a JavaScript function provided by `react`. The useEffect Hook allows you to `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc. which can lead to unwarranted side-effects.
          useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.
        </p>
        <p className="faq-answer">
          <pre>
            {`
useEffect(() => {}, [])
`}
          </pre>
          The {`() => {}`} is a callback function and `[]` is called an empty dependency array.
          If anything that we pass (suppose currentState) inside the `[]` it triggers the callback function and changes the state of the application.
        </p>
        <p className="faq-answer">
          <pre>
            {`
useEffect(() => {
    setCurrentState("true");
}, [currentState])
`}
          </pre>
          If we do not pass an empty dependency array then the useEffect runs every time when the UI is rendered.
        </p>
        <p className="faq-answer">
          <pre>
            {`
useEffect(() => {})
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Optional Chaining`?</h3>
        <p className="faq-answer">
          A: `Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null`, it returns `undefined` instead of throwing an error.
          `Optional Chaining` (`?.`) is a good way of accessing the object keys, it prevents the application from crashing if the key that we are trying to access is not present. If the key is not present then instead of throwing a key error, it returns `undefined`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Shimmer UI`?</h3>
        <p className="faq-answer">
          A: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI is currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
          Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the difference between `JS expression and JS statement`?</h3>
        <p className="faq-answer">
          A: A `JS expression` returns a value that we use in the application. for example:
          <pre>
            {`
1 + 2 // expresses
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
`}
          </pre>
        </p>
        <p className="faq-answer">
          A `JS statement`, does not return a value. for example:
          <pre>
            {`
let x; // variable declaration
if () { } // if condition
`}
          </pre>
          If we want to use a `JS expression` in JSX, we have to wrap it in `{/* expression slot */}` and if we want to use a `JS statement` in JSX, we have to wrap it in {`(/* statement slot */)`};
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `Conditional Rendering`? explain with a code example.</h3>
        <p className="faq-answer">
          A: `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:
          <pre>
            {`
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `CORS`?</h3>
        <p className="faq-answer">
          A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
          CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `async and await`?</h3>
        <p className="faq-answer">
          A: `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
          `Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
          for example:
          <pre>
            {`
// async function getRestaurant to fetch Swiggy API data
async function getRestaurants() {
  const data = await fetch(
    "Swiggy_API_URL"
  );
  const json = await data.json();
  // we get the Swiggy API data in json format
  console.log(json);
}
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?</h3>
        <p className="faq-answer">
          A: The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
          so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
          `data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.
          so `data.json()` returns a promise resolved to a `JSON object`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What are various ways to `add images` into our App? Explain with `code examples`.</h3>
        <p className="faq-answer">
          A: Using the `full URL of the image` for the web (CDN) or any public images.
          Example:
          <pre>
            {`
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
`}
          </pre>
          Adding the image into the project
          `Drag your image into your project` and `import it` into the desired component
          <pre>
            {`
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
`}
          </pre>
          The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.
          <pre>
            {`
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What would happen if we do `console.log(useState())`?</h3>
        <p className="faq-answer">
          A: If we do `console.log(useState())`, we get an array `[undefined, function]` where the first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: How will `useEffect` behave if we `don't add` a `dependency array`?</h3>
        <p className="faq-answer">
          A: Syntax of `useEffect` is:
          <pre>
            {`
useEffect(() => {}, []);
`}
          </pre>
          Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
          Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
          Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is `SPA`?</h3>
        <p className="faq-answer">
          A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the difference between `Client Side Routing` and `Server Side Routing`?</h3>
        <p className="faq-answer">
          A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.
          In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is the order of life cycle method calls in `Class Based Components`?</h3>
        <p className="faq-answer">
          A: Following is the order of lifecycle methods calls in `Class Based Components`:
          <ol>
            <li>constructor()</li>
            <li>render()</li>
            <li>componentDidMount()</li>
            <li>componentDidUpdate()</li>
            <li>componentWillUnmount()</li>
          </ol>
          For more reference <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">React-Lifecycle-methods-Diagram</a>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Why do we use `componentDidMount`?</h3>
        <p className="faq-answer">
          A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. We can run any piece of react code to modify the components. For example, it's the best place to make API calls.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: Why do we use `componentWillUnmount`? Show with example.</h3>
        <p className="faq-answer">
          A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA (Single Page Application), the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance. For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users move to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issues. To avoid such situations, the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: (Research) Why do we use `super(props)` in constructor?</h3>
        <p className="faq-answer">
          A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component. `super()` is used inside the constructor of a class to derive the parent's all properties inside the class that extended it. If `super()` is not used, then `Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor` is thrown in the console. The main difference between `super()` and `super(props)` is the `this.props` is undefined in the child's constructor with `super()` but `this.props` contains the passed props if `super(props)` is used.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: (Research) Why can't we have the `callback function` of `useEffect async`?</h3>
        <p className="faq-answer">
          A: `useEffect` expects its callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What are Custom Hooks?</h3>
        <p className="faq-answer">
          A: Custom Hooks are JavaScript functions that follow the naming convention of starting with `use` and enable you to use state and other React features in functional components. They allow you to extract component logic into reusable functions. Custom Hooks offer a way to share logic between components without having to use higher-order components or render props.
          <br />
          Example:
          <pre>
            {`
import React, &#123; useState &#125; from 'react';

function useCounter(initialValue) &#123;
const [count, setCount] = useState(initialValue);

const increment = () => &#123;
setCount(count + 1);
&#125;;

const decrement = () => &#123;
setCount(count - 1);
&#125;;

return [count, increment, decrement];
&#125;;

export default useCounter;
              `}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Modularity in Code?</h3>
        <p className="faq-answer">
          A: Modularity in code refers to breaking down the application into smaller, independent modules or components. Each module or component focuses on a specific functionality or feature of the application. Modularity helps in organizing the codebase, making it easier to maintain, debug, and scale. It also promotes reusability, as modules or components can be reused across different parts of the application.
          <br />
          Example:
          <pre>
            {`
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Modular Bundling?</h3>
        <p className="faq-answer">
          A: Modular bundling is the process of bundling or packaging modules or components of an application into separate bundles or files. This helps in optimizing the loading time and performance of the application, as only the required modules or components are loaded when needed. Modular bundling is commonly used in modern JavaScript frameworks and libraries to improve the efficiency of web applications.
          <br />
          Example:
          <pre>
            {`
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
`}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Code Splitting?</h3>
        <p className="faq-answer">
          A: Code splitting is a technique used in modern web development to split the codebase of an application into smaller chunks or bundles. This helps in optimizing the loading time and performance of the application, especially for large-scale applications. Code splitting allows the application to load only the required code or modules when needed, instead of loading the entire codebase upfront. This results in faster initial loading times and improved user experience.
          <br />
          Example:
          <pre>
            {`
 const Module = React.lazy(() =&gt; import('./Module'));
 `}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Lazy Loading?</h3>
        <p className="faq-answer">
          A: Lazy loading is a technique used to defer the loading of non-critical resources or components of a web application until they are actually needed. Instead of loading all resources or components upfront, lazy loading allows the application to load them on-demand, as the user interacts with the application. This helps in optimizing the initial loading time and performance of the application, as only the essential resources are loaded initially, and additional resources are loaded asynchronously when required.
          <br />
          Example:
          <pre>
            {`
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() &#123;
  return (
    <div>
      <Suspense fallback={'<div>Loading...</div>'}>
        <LazyComponent />
      </Suspense>
    </div>
);

export default App;
          `}
          </pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Separation of a React Application into UI-Layer and Data-Layer?</h3>
        <p className="faq-answer">
          A: Separation of a React Application into UI-Layer and Data-Layer involves organizing your application's code into two distinct layers: the UI layer responsible for rendering components and handling user interactions, and the data layer responsible for managing application data and state. This separation of concerns helps in improving code maintainability, scalability, and reusability.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What are Controlled and Uncontrolled Components?</h3>
        <p className="faq-answer">
          A: Controlled components are React components where form data is handled by React state. The value of form elements is controlled by React state and is updated via onChange handlers. In contrast, uncontrolled components allow form data to be handled by the DOM itself. The value of form elements is not controlled by React state and is instead directly accessed via refs.
          <pre>{`
// Controlled Component Example
function ControlledComponentExample() {
  const [value, setValue] = useState('');

const handleChange = (event) => {
  setValue(event.target.value);
};

return (
  <div>
    <input type="text" value={value} onChange={handleChange} />
    <p>Value: {value}</p>
  </div>
);
}

// Uncontrolled Component Example
function UncontrolledComponentExample() {
  const inputRef = React.createRef();

const handleSubmit = () => {
  console.log('Input Value:', inputRef.current.value);
};

return (
  <div>
    <input type="text" ref={inputRef} />
    <button onClick={handleSubmit}>Submit</button>
  </div>
);
}
      `}</pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Prop Drilling?</h3>
        <p className="faq-answer">
          A: Prop drilling is a pattern in React where data is passed down through multiple layers of components via props, even when some intermediate components do not need the data. While prop drilling is simple and easy to understand, it can lead to code verbosity and maintenance issues in larger applications.
          <pre>{`
function GrandparentComponent() {
const data = 'Hello from Grandparent';
return <ParentComponent data={data} />;
}

function ParentComponent({ data }) {
  return <ChildComponent data={data} />;
}

function ChildComponent({ data }) {
  return <p>{data}</p>;
}
      `}</pre>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Context API in React?</h3>
        <p className="faq-answer">
          A: Context API is a feature in React that allows you to manage global state in your application and share data between components without having to pass props manually through every level of the component tree. It provides a way to pass data through the component tree without having to explicitly pass props down manually at every level.
        </p>
        <Link to={'/context'}> <p> Context Example</p></Link>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What are the advantages of using Redux Toolkit over Redux?</h3>
        <p className="faq-answer">
          A: Redux Toolkit is a library that simplifies the process of managing state in Redux applications. It offers several advantages over using plain Redux, such as:
          <ul>
            <li>Reduces boilerplate code: Redux Toolkit provides utilities like createSlice and createReducer that reduce the amount of boilerplate code required to set up and manage Redux state.</li>
            <li>Built-in Immutability: Redux Toolkit uses Immer internally, which allows for writing simpler immutable update logic.</li>
            <li>Built-in Middleware: Redux Toolkit includes several built-in middleware functions, such as Redux Thunk and Redux DevTools Extension, making it easier to handle asynchronous actions and debug Redux applications.</li>
            <li>Performance optimizations: Redux Toolkit includes performance optimizations like the use of memoized selectors and the useSelector hook, which can help improve the performance of Redux applications.</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is a Dispatcher?</h3>
        <p className="faq-answer">
          A: In the context of Redux, a Dispatcher is a function that dispatches actions to the Redux store. It is responsible for sending action objects to the store, which triggers the appropriate reducers to update the application state accordingly.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is a Reducer?</h3>
        <p className="faq-answer">
          A: A Reducer is a pure function in Redux that specifies how the application state should change in response to dispatched actions. It takes the current state and an action object as arguments, and returns the new state based on the action type. Reducers are responsible for updating specific parts of the application state in a predictable and immutable way.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is a Slice?</h3>
        <p className="faq-answer">
          A: In Redux Toolkit, a Slice is a collection of Redux-related code for a specific feature or domain of your application. It includes reducers, action creators, and selectors that are related to a particular slice of the application state. Slices help in organizing and managing Redux code in a modular and reusable way, making it easier to maintain and scale Redux applications.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is a Selector?</h3>
        <p className="faq-answer">
          A: A Selector is a function in Redux that extracts specific pieces of data from the Redux store state. It allows you to derive computed state or extract data from the store in a memoized and efficient way. Selectors help in keeping the component logic separate from the Redux store structure, making it easier to manage and reuse state data in React components.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is createSlice and the configuration it takes?</h3>
        <p className="faq-answer">
          A: createSlice is a function in Redux Toolkit that generates a Slice object containing reducers, action creators, and a slice of the Redux store state. It takes a configuration object as an argument, which includes the following properties:
          <ul>
            <li>name: A string value representing the name of the slice.</li>
            <li>initialState: An object representing the initial state of the slice.</li>
            <li>reducers: An object containing reducer functions that define how the slice state should be updated in response to actions.</li>
            <li>extraReducers (optional): An object containing additional reducer functions that can handle actions dispatched by other slices.</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What are the different types of Testing?</h3>
        <p className="faq-answer">
          A: There are several types of testing in software development, including:
          <ul>
            <li>Unit Testing: Testing individual units or components of a software application in isolation to ensure they behave as expected.</li>
            <li>Integration Testing: Testing the interaction between different components or modules to ensure they work together correctly.</li>
            <li>Functional Testing: Testing the functionality of the software application as a whole, including user interactions and system behavior.</li>
            <li>End-to-End Testing: Testing the entire application from start to finish to simulate real-world user scenarios and ensure the application works as expected.</li>
            <li>Regression Testing: Testing to ensure that changes or updates to the software do not introduce new bugs or regressions.</li>
            <li>Performance Testing: Testing the performance and scalability of the software application under various conditions to ensure it meets performance requirements.</li>
            <li>Security Testing: Testing the security of the software application to identify and address potential security vulnerabilities.</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is React Testing Library and how is it set up?</h3>
        <p className="faq-answer">
          A: React Testing Library is a popular testing utility for testing React components. It provides a set of helper functions for rendering components, interacting with them, and asserting their behavior in tests. It encourages writing tests that resemble how users interact with the application.
          <br />
          React Testing Library can be set up in a React project using tools like Jest and React Testing Library's utilities like render, fireEvent, and screen.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: What is Jest and why do we use it?</h3>
        <p className="faq-answer">
          A: Jest is a JavaScript testing framework developed by Facebook. It is widely used for testing JavaScript code, including React applications. Jest provides a simple and intuitive interface for writing and running tests, along with features like automatic mocking, code coverage reporting, and snapshot testing. We use Jest for testing React components and other JavaScript code to ensure they work as expected and to catch bugs early in the development process.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Q: How do you set up Jest and install its related dependencies?</h3>
        <p className="faq-answer">
          A: Jest can be set up in a React project by following these steps:
          <ol>
            <li>Install Jest and its related dependencies by running <pre>{`npm install --save-dev jest @testing-library/react @testing-library/jest-dom`}</pre></li>
            <li>Add a test script to your package.json file, such as <pre>{`"test": "jest"`}</pre></li>
            <li>Create test files with the .test.js or .spec.js extension and write your test cases using Jest syntax</li>
            <li>Run tests using the npm test command</li>
          </ol>
        </p>
      </div>
    </div>
  )
}

export default QNA;
