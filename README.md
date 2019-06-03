1) At the codepen.io, Settings/Add External Scripts, to choose react/react-dom, then you can write the react code in pen.
2) React is a Javascript library. React's ultimate purpose is to show content (HTML) to users and handle user interaction. React can work by itself.
3) Component as a class:
  class App extends React.Component { 
    state = {}; // data members
    // mouse move change the state
    onMouseMove = (event) = > {
        ...
    }
    // returned jsx, determines the content of our React app just like normal HTML. This jsx refers the state.
    render() {
        return <div>....</div>
    }
   }
   ReactDOM.render( <App />, document.querySelector("#root"));
   A javascript 'class'
   // Component as a function
  const VideoDetail = (props) =>{
    if (!props.video) {
      return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe width="560" height="315" title="video player" src={videoSrc} />
        </div>
        <div classname="ui segment">
          <h4 className="ui header">{props.video.snippet.title}</h4>
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    )
  }
  export default VideoDetail;

4) React 'component' is made using either javascript function or class. 
    Used to producs HTML (using JSX), to handle feedback from the user (Using Event Handlers)
5) 'React' knows what a component is and how to make components work together. 'ReactDOM' knows how to take a component and make it show up in the DOM.
6) npm i -g create-react-app  # 
   create-react-app jsx   # to create a project with name jsx
   npx create-react-app jsx  # or use this way
7) npm start
8) import React from 'react';  // ES2015 Modules import statement.
   const React = require('react'); // CommonJS Modules import statement.

9) babel is used to translate ES2015JS to ES5JS, to make code simpler.
   For example: 
    const App = () => {
        return <div>Hi there!</div>;
    }
    Will be translated into which is more complicated.
    const App = () => {
        return React.createElement(
            "div",
            null,
            "Hi there!"
        );
    }

10) JSX vs HTML
  multi-line return.
   For example:
    const App = () => {
    const buttonText = "Click me";

    return (
        <div>
            <label className='label' htmlFor='name'>Enter name:</label>
            <input id='name' type='text'/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div>
    );
    }
   HTML: <button style="background-color: blue; color: white">Sumit</button>
   JSX: <button style={{ backgroundColor: 'blue', color: 'white' }}>Sumit</button>
   a) // replace dash '-' to captalization, ';' to ',' which is JSON style. The inner curly bracket represents a js object, e.g, { backgroundColor: 'blue', color: 'white' } for a js object. Outer curly bracket is to evaluate to an expression in JSX.
   b) {buttonText} for js variable.
   c) Adding a class to an element uses different syntax: class to className, for to htmlFor. This is to avoid collision.

10.1) 
    Javascript object Literal vs Json 
    For example:
    var person = {
        firstName: "John",
        lastName: "Doe" }
    While json: {
        "firstName": "John",
        "lastName": "Doe" }  #wrapped inside double quotes
    javascript has built-in support for conversion between. JSON.stringify(obj) JSON.parse(str)
         
=========
11) Communicating with Props:
Component Nesting, Component Resuability, Component Configuration. 

12) http://semantic-ui.com
semantic ui cdn
npm install --save faker  ## to use faker lib

13) Creating a Reusable Configurable component:
    Identify the JSX that appears to be duplicated.
    What is the purpose of that block of JSX. Think of a descriptive name for what it does
    Creae a new file to house this new component - it should have the same name as the component
    Create a new component in the new file, paste the JSX into it.
    make the new component configurable by using React's 'props' system.

export default CommentDetail;  // export 

14) Using props to pass data from parent to child.
Props: System for passing data from a parent component to a child component, Goal is to customize or configure a child component.
   Parent refer the component using '<ComponentName prop1="value" prop2="value2" />', pass the props using attributes, such as <CommentDetail key='value'/>, the child function component has (props) as argument, and refer it using props.key; the child class component has props built-in, you can refer props directly. 

=========
15) Class-Based Components
  Why we need class component, consider a situation:
    JS file loaded by browser
    App component gets created
    We call geo-location service
    App return JSX, get rendered to page as HTML
    ...
    We get result of geolocation!
  Since get geolocation service takes time, we can not achieve the above target by using function component, we have to use class component. Using state, setState (e.g, update state) will cause UI render.
  Must be a JavaScript class, must extend React.Component, Must define a render() method returning some amount of JSX.

16) Rule of State:
    only usable with class components
    you will confuse props with state
    'state' is a JS object that contains data relevant to a component.
    Updating 'state' on a component causes the component re-render.
    State must be initialized when a component is created.
    State can ONLy be updated using the function 'setState'

  Using state:
    We get result of geolocation
    We update the state object with a call to `this.setState`
    React sees we updated the state of a component
    React calls the component `render` method second time, render returns some JSX
    React takes the JSX and update the content on the screen.
    
17) class component props are always there
// FYI, you don't need to create constructor(props) explicitly, props are always there.
class App extends React.Component {
    // Optional
    constructor(props) {
        // must has this inside constructor
        super(props);
        // ...
    }

    // Have to define render to return JSX
    render() {
     return 
    }
}

================================
18) Understanding Lifecycle Methods:
Component Lifecycle: 
    constructor(props) // good place to do one-time setup
    render() // content visible on screen, avoid doing anything besides return JSX.
    componentDidMount() // To do data-loading
    componentDidUpdate() // Good place to do more data-loading when state/props changes.
    componentWillUnmount()  // stop showing this component, do cleanup
Other lifecycle methods (rarely used):
    shouldComponentUpdate()
    getDerivedStateFromProps
    getSnapshotBeforeUpdate

19) Passing state as props:

20) Template literal to evaluate using `` and ${}:
  <i className={`${icon} icon`} />

Thinking about component re-using, such as define a function component Spinner.js.

=======================
21) Handling User Input with Forms and Events
    How do we get feedback from user
    How do we fetch data from some outside API or server
    How do we show list of records
Using example:
   -----  App
  |      /   \
  |     /     \
 searchBar   Imagelist

User clicks on something ---> onClick
User changes text in an input ---> onChange
User submits a form ---> onSubmit

22) Controlled vs Uncontrolled elements.
Flow:
  User types in input
  Callback get invoked
  We call setState with the new value
  Component re-renders
  Input is told what its value is (coming from state)

Before refactor to controlled, what's the value of the input right now? We can only get it from HTML Dom query, it is not inside our react component. 
After, we can get the value from state. We are storing information in state, not in DOM.

23) What is 'this' used for in a class?
Solving Context issues: The common way is to define an arrow function instead of the normal way. Babel will handle the magic for us.

==================
Communicating Child to Parent:
  Using props, at parent, when it calls child, it passes data/function using attribute, such as <Child dataPtr="here" />; At the child it uses this.props.dataPtr

==================
24) Using axios to make API call.
makeing API request with React:
  Our App <----> External API
  The example using unsplash.com as external API.
  React App needs to use lib to do API call, such as using AJAX Client, such as 'axios' lib, 'fetch' which is a function built into modern browsers.
www.unsplash.com:
access key: 0093549877e4c859474ed8bf468dc65441a3283b398005bf3c793b2a6c739c09
secret key: 08f39b80bdbd464e0331351e1ae569b4f8d68014acd082352eb637a5b4ab2e17
application name: pinghuican 

==================
25) async/await syntax:
    async onSearchSubmit(term) {
      // call external API
      const response = await axios.get(...)
      ...
    }
async/await is much simpler than .then().error()...

26) Binding callbacks: 
  Using arrow function to void this hell, such as `onSearchSubmit = async (term) => {...}`

===================
27) map example:
  const numbers = [0,1,2,3,4];
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i] * 10);
  }
  newNumbers;
  let updatedNumbers = numbers.map((n) => n * 10)

List of 'ToDo items'     --->        New rendered lit         --->   Currently in DOM
{id:1, task:'Take out trash'}   <div key=1>Take out trash</div>    
                                                                <div key=1>Take out trash</div>
// react like to use key

28) =================
Grid CSS system.
  <div style="display:grid">
    <img src=""/>
    ...

29) Display Images:
  Let the ImageCard render itself and its image
  Reach into the DOM and figure out the height of the image
    // not using document.querySelector('img').clientHeight, but using `React Refs`
  Set the image height on state to get the component to re-render
  When re-rendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space
  Using "React.createRef()" to create a ref such as X, and put this ref=refX in the JSX. Then in js, you can refer it, such as this.refX.current;

30) React Refs: (see example pics)
  Gives access to a single DOM element
  We create refs (React.createRef()) in the constructor, assign them to instance variables, then pass to a particular JSX element as 'ref' property.
  For example:
    in ImageCard constructor, constructor(props) {..., this.imageRef = React.createRef(); }
    in render() return JSX, <img ref={this.imageRef}, alt=... />
    in lifecycle method, componentDidMount, add this.imageRef.current.addEventListener('load', this.setSpans )
      setSpans = () => {const height = this.imageRef.current.clientHeight; }     
      // you can dump out this.imageRef, and see the `current`.

    Try to understand why print clientHeight=0 //console.log(this.imageRef.current.clientHeight);
    It is because when the component first rendered, the image is not loaded yet, thus you see 0, that is why you need to addEventListener(...)
      componentDidMount() {
        // it shows 0 because image not loaded yet.
        //console.log(this.imageRef.current.clientHeight);

        // Vanila callback
        this.imageRef.current.addEventListener('load', this.setSpans )
      }

  Dynamic span:
    // in the return JSX part, the style shows style 'grid-row-end: span xxx'
    render() {
     const {description, urls} = this.props.image;

     console.log("This spans value " + Math.ceil(this.state.spans));
     return (
       <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
  
         <img
           alt={description} src={urls.regular}
           ref={this.imageRef}
         />
     </div>
     )
   }

===================
31) pic app overview:
  App.js: 
    // state = {images: [] }, 
    // onSearchSubmit = async (term) => { ..., this.setState({ images: response.data.results}) };
    // at render(), return, <SeachBar onSubmit={this.onSearchSubmit} />, FYI, onSubmit passed down to child SearchBar as props, you can see it in SearchBar class.
  SearchBar.js:
    // <form onSubmit={this.onFormSubmit} className="ui form">...
    // onFormSubmit = (event) => { event.preventDefault(); this.props.onSubmit(this.state.term)}; it calls back to parent onSearchSubmit function.
    // The issue we had: value of this related with callback function. How to solve: use arrow function syntax, such as onFormSubmit = event => {...}; React will play magic to bind this properly.
  ImageList.js
    // import './ImageList.css'; to import css file.
    // use map function to return a list. const images = props.images.map(image => { return <ImageCard key={image.id} image={image} />; }); 
    // when you return a list, normally to add key property such as above.  
  ImageCard.js:
    // Ref system to reach the DOM from react level. 1) Use React.createRef() to create this.imageRef in ctor 2) Wire up to individual element, such as in render() <img ref="this.imageRef" ../> 3) later on we can access this DOM. Vanila callback: this.imageRef.current.addEventListener('load', this.setSpans). FYI, you can console.log to dump out this.imageRef value to see .current is the one should add.
  Grid CSS system.


================
32) Another APP from youtube API:
  - SearchBar
  - VideoDetail
  - VideoList
    - VideoItem

React APP <-> Axios <-> Youtube API
  // In order to call youtube API, you have to get API key from console.developers.google.com, you might need to create a project (if there is none), choose 'Youtube Data API v3' from WebBrowser javascript, API key.
  // AIzaSyAoVuCjcDYWSHhGpdETgotO4DHz2z984gY
  // you can limit this api access

Using semantic-ui.com, on elements page, find list.
    Component                     ClassName
  VideoList                      ui relaxed divided list
    VideoItem                             item
    VideoItem                             item
    VideoItem                             item
    VideoItem                             item
                      APP
                 ----------------------
                |      State:          |
                |  videos: [video, ...]|
                |  selectedVideo: video|
                 ----------------------
           ------------------|-----------------
          |                  |                 | props: { videos:[], onVideoSelected:()=>{} } 
      __________          ___________       _________
     | SearchBar|        |VideoDetail|     |VideoList| 
      ----------          -----------       ---------
                                               |
                              ----------------------------------
                             |                 |                | props: {video: video, onVideoSelected:()=>{} }
                         ---------         ---------         ---------
                        |VideoItem|       |VideoItem|       |VideoItem|
                         ---------         ---------         ---------
Communication between parent to child is using props.

===============
Conditional check.

=============================
Display vido player on screen
  Using iframe tag.
  You can find the youtube iframe example from a video->Share->embed

=======================
semantic-ui built-in grid system

=============
Default behavior:
  componentDidMount() {
    this.onSearchSubmit('buildings');
  }


=========================================
=============== Redux ===================
=========================================
Is using a mix of Redux state and React local component state ok?
  It is totally fine to use a mix of React component state and Redux state. 
  The official Redux FAQ  has a good list of rules of thumb for determining what kind of data should put into Redux. 
  https://redux.js.org/faq/organizing-state#organizing-state-only-redux-state
1) What is Redux:
  State management library
  Makes creating complex applications easier
  Not required to create a React app!
  Not explicitly designed to worked with React!
2) Redux Cycle
  ActionCreator->Action->Dispatch->Reducers->State
   Analog (using insurance company):
  Person Dropping off the form -> The form -> form receiver -> Departments -> Compiled department data. 
  ActionCreator: to change state of our app

3) Redux in action using example:
  codepen:
  -------
  console.clear();
  // create Policy
  const createPolicy = (name, amount) => {
    return {
      type: 'CREATE_POLICY,
      payload: {
        name: name,
        amount: amount
      }
    };
  }
  // delete policy 
  const deletePolicy = (name) => {
    return {
      type: 'DELETE_POLICY',
      payload: {
        name: name
      }
    };
  }
  // create claim 
  const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: 'CREATE_CLAIM',
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
    };
  }

  // Reducers (Departments)
                               // oldListOfClaims is the redux State
                               // default to empty array
  const claimHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
      // we care about this action (FORM!)
      // FYI, ...object,
      return [...oldListofClaims, action.payload];
    }

    return oldListOfClaims;
  }
  const accounting = (bagOfMoney = 100, action) => {
    ...
  }
  const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY')
      return [...listOfPoclicies, action.payload.name];
    else if (action.type === 'DELETE_POLICY')
      return listOfPoclicies.filter(name => name !== action.playload.name);

    return listOfPoclicies;
  }
  ... ...

  // Redux functions
  const { createStore, combineReducers } = Redux;
  
  const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies 
  }); 
  const store = createStore(ourDepartments);
  
  const action = createPolicy('Alex' 20);
  store.dispatch(action);
  store.dispatch(createPolicy('Bob', 50);
  store.dispatch(createPolicy('Jack', 50);
  store.dispatch(createClaim('Alex', 50);
  store.dispatch(deletePolicy('Bob');

  console.log(store.getState());  // check the state 

4) To return a new array
  const numbers = [1,2,3];
  const newNumbers = [...numbers, 4];  // [1,2,3,4]
  const filteredNumvers = numbers.filter( num => num !== 2); // [1,3]

5) React + Redux
  npm install --save redux react-redux

Without Redux:
                      APP
                 ----------------
                |  List of songs |
                |  Selected song |
                 ----------------
           --------------|--------------
          | List of songs               | Selected song
          | onSongSelect                |
      __________                    __________
     | SongList |                  |SongDetail| 
      ----------                    ----------
With Redux:
                        APP
           --------------|--------------
          |                             | 
          |                             |
      __________                    __________
     | SongList |                  |SongDetail| 
      ----------                    ----------
    Redux:
      ------------------------                --------- 
     |    Store               | -----------> | Provider|<-----------
     |------------------------|               ---------     |       |
     | Reducers:              |                   |         |       |
     |   Song list reducer    |               ---------     |       | 
     |   Selected song reducer|              |   App   |    |The changes to the list of songs
      ------------------------                ---------     |       |
       -----------------                          |         |       |
      | Action Creators |                     ----------    |       |Song list
      |  Select song    |------------------> | Connect  |-----------
       -----------------                      ---------- 
                                                  |
                                                  |
                                              ----------
                                             | SongList | From connect to get list of songs and selected song.
                                              ----------
Using React-Redux library:
  /src
      /actions
      /components
      /reducers
      index.js

6) Code template:
  ------ Provider ---------
  at src/index.js
  import { Provider } from 'react-redux';  // named export
  import { createStore } from 'redux';
  import reducers from './reducers';
  ReactDOM.render(
    <Provider store={createStore(reducers)} >
      <App />
    </Provider>,
    document.querySelector("#root")
  );
  ------src/reducer/index.js------ 
  import { combineReducers } from 'redux';  // redux uses named export, thus {};
  // with reducer logic which impact the state
  const selectedSongReducer = (selectedSong=null, action) => {
    if(...) {}  // the condition I need to adjust state
    return selectedSong;
  }
  const songsReducer = () => {
    // return song list  
  }
  export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
  })
  ------ connect ---------
  e.g, on a component impl, such as SongList.js:
  import { connect } from 'react-redux';
  // state is all inside redux store
  const mapStateToProps = (state) => {
    // thus this.props === { songs: state.songs }
    return { songs: state.songs };
  }
  // using connect(mapStateToProps), you can refer this.props
  export default connect(mapStateToProps, {selectSong: selectSong})(SongList);
  ------src/action/index.js--------
  export const selectSong = (song)=>{
    return { type: 'SONG_SELECTED', payload: song }
  };
  
7) semantics-ui grid system.
   Many magics with regarding to CSS.

8) Calling Action Creators from component
  on connect method to pass 2nd argument as object {} for creators, thus the props has the creator function selectSong(..) inside.
  For <button, add onClick={()=>this.props.selectSong(song)} ...>
9) Redux is NOT magic: it doesn't automatically detect action creator being called; it doesn't automatically detect a function returning an object that is an 'action'.
10) No explicit dispatch() method in the code, when we pass the action function via the `export default connect(mapStateToProps, {actions})(SongList);`, the connect function wraps the actions in another js function, when we call the new function, the connect method will call the dispatch function when the action gets called. 
11) An example with all codes are in a file:
<script type="text/babel" data-plugins="proposal-class-properties" data-presets="env,react">
    // Action Creators - You don't need to change these
    const increment = () => ({ type: 'increment' });
    const decrement = () => ({ type: 'decrement' });
    
    const Counter = (props) => {
        return (
            <div>
                <button className="increment" onClick= {props.increment}>Increment</button>
                <button className="decrement" onClick= {props.decrement}>Decrement</button>
                Current Count: <span>{props.count}</span>
            </div>
        );
    };
    
    const mapStateToProps = (state) => {
        return {count: state.count};
    };
    
    const WrappedCounter = ReactRedux.connect(mapStateToProps, {increment, decrement})(Counter);
    
    const store = Redux.createStore(Redux.combineReducers({
        count: (count = 0, action) => {
            if (action.type === 'increment') {
                return count + 1;
            } else if (action.type === 'decrement') {
                return count - 1;
            } else {
                return count;
            }
        }
    }));

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <WrappedCounter />
        </ReactRedux.Provider>, 
        document.querySelector('#root')
    );
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/redux@4.0.1/dist/redux.js"></script>
<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

============
SECTION 14: Async Actions with Redux-Thunk
Understanding the purpose of reducers
understanding making API request with Redux
Understand the purpose of redux-thunk
-------------------------------------
              Post Title
PostList      icon  body of the pose
              Author Name
-----------------------------------------
our App | Axios <---> JSONPlaceholder API: jsonplaceholder.typicode.com

react-redux     Integration layer between react and redux
axios           helps us make network requests
redux-thunk     Middleware to help us make requests in a redux application

1) How to fetch data in a redux app?
  Component gets rendered onto the screen                             |
  Component's 'componentDidMount' lifecycle method gets called        |
  We call action creator from 'componentDidMount'                     |
  Action creator runs code to make an API request
  API responds with data
  Action creator returns an 'action' with the fetched data on the 'payload' property --- This is where Redux-Thunk comes into play
  Some reducer sees the action, returns the data off the 'payload'    | Get fetched data by generating new state in redux store,
  Redux/react-redux cause re-render                                   | then getting that into component through mapStateToProps

// IF I use async/await axios call for action, I got Error: Actions must be plain objects. Use custom middleware for async actions.
// What's wrong? Action creators must return plain JS objects with a type property, but it doesn't. By the time of action getting 
// to reducer, we wont have fetched the data.
// basically async/await makes difference.
export const fetchPosts = async () => {
  // It breaks the Redux with above Error.
  const response = await jsonPlaceholder.get('/posts');
  // return an action
  return {
    type: 'FETCH_POSTS',
    playload: response
  }
};
// You can use promise instead of async/await, but it makes things very complicated.
Synchronous action creator
Asynchronous action creator: You have middleware to handle it.
  ActionCreator->Action->dispatch->Middleware->Reducers->State

2) Middleware in Redux:
  Function that gets called with every action we dispatch
  Has the ability to STOP,MODIFY, or otherwise mess around with actions
  Ton of open source middleware exists
  Most popular use of middleware is for dealing with async actions

3)      normal Action Rules                                               Rules with Redux Thunk
  Action creator must return action objects                     Action creators can return action objects
                                                                Action creators can return functions
                                                                If an action objects gets returned, it must have a type
                                                                If an ............................, it can optionally have a payload
4) Action creator
              --------------
             |Action Creator|
              --------------
         ------------|----------------------
        |Action either an object or function|      
         -----------------------------------
               ------|---                           
              | Dispatch |<----------------------------new action
               ----------                                  |
               ------|---                               Get data
              | Action   |                            Wait to finish     
               ----------                                  ^ 
                /       \                                  |
          NotFunc      Function----------------------------  
      ----|-----         
     | Reducers |   
      ----------
With redux-thunk, we can manually dispatch the action

5) ActionCreators (fetchPosts) --> Action {type:'FETCH_POSTS',payload:response} -->Store (Reducers: postsReducer)
6) Rules of Reducers:
  Must return any value besides 'undefined'
  Produces 'state', or data to be used inside of your app using only previous state and the action (reducers are pure)
  Must not return reach 'out of itself' to decide what value to return
  Must not mutate its input 'state' argument: If you just change state, react will not get notify for the change.
              ---------------------            ------
             |Previous State (data)|          |Action| 
              ---------------------            ------
                         \                    / 
                          --------------------    (BAD!!!)
                         |    reducer         | ---------- API Request
                          --------------------
                          --------|-------- 
                         |    New State    |
                          -----------------
   Since reducers are supposed to be “pure” (as in, they don’t change anything outside their scope) we can’t do any API calls or dispatch actions from inside a reducer.
7) const color = ['red', 'green'];
   const newColor = [...colors, 'blue']
8) Using template literal format: `literail ${variable}`
    const response = await jsonPlaceholder.get(`/users/${id}`);                                    
9) ownProps
// state of redux
const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}
10) optimization. The /users/${id} was called many times.
Using lodash lib, _.memoize(func, [resolver]);
export const fetchUser = (id) => {
}
11) App Summary:
  at index.js, action will send to redux-thunk first, thunk will dispatch() or action()
    import { createStore, applyMiddleware } from 'react-redux';  
    import reducers from './reducers';
    const store = createStore(reducers, applyMiddleware(thunk));
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
  at action creator which is a function to create action, now you can use thunk to do async:
    export const fetchPosts = () => async dispatch => {
      const response = await axiosClient.get('/posts');
      dispatch ({type: 'FETCH_POSTS', payload: response.data});
    }
  at reducers:
    index.js, just import individual reducer, and export default combineReducers({posts: postsReducer, users: usrReducer});
    individual reducer, such as postsReducer.js, it takes args (state, action), and update redux state:
      export default (state = [], action) => {
        switch (action.type) {
         case 'FETCH_USER':
          return [...state, action.payload];  # need to return a new array, since react use === to compare old and new
         default:
            return state;
        }
      }    

Section 16: Navigation with React Router (similar to twitch.com)
  Streamer's computer(could be many)
                                                  ---------------------
                                                 | WebServer that knows| 
                                                 | current streamers   |--------------                                                           
                                                  ---------------------               |
                                                          ^                           |
  -------------------                             --------|------------               --> Viewer's browser
 | Open Broadercaster| video stream + stream key | RealTime Messaging  |  video feed      Viewer's browser
 |  Software (OBS)   |-------------------------> |Protocol(RTMP) server|----------------> Viewer's browser
  -------------------                             ---------------------                   Viewer's browser
  This app has many pages (mockups)
  User not logged in, he can view a list of all streams/channels, can view video for a single stream.
  User logged in, he can create a new stream/channel, edit/delete stream/channel they created
1) App Challenges
  Need to be able to navigate around to separate pages 
  Need to allow a user to login/logout
  Need to handle forms in Redux
  Need to master CRUD operations in React/Redux
  Need good error handling
2) Separate projects under
  mkdir streams; cd streams; create-react-app client;
  npm install --save react-router-dom 
3) Bad Navigation
  <a href="/pagetwo">Nav</a> and click it
  The browser makes a request to localhost:3000/pagetwo
  Development server responds with index.html file //even if u try /pagetwo
  Browser receives index.html, dump old HTML file it ws showing (including all react state!) 
  ...
  Our app starts up. // it caused reloading the app.
  ----
  Fix: import Link: import { BrowserRouter, Route, Link } from 'react-router-dom';
    Then:  <Link to="/pagetwo">Navigate page two</Link>
4) BrowserRouter, HashRouter, MemoryRouter
     localhost:3000/#/pagetwo
   React dev server will return index.html page instead of 404 if no routing matching.
5) About error: "You should not use <Link> outside a <Router>"
   Put it inside the <BrowserRouter>

Section 17: Handling Authentication with React
1)  Using google oauth2 flow, this is normally what we saw a pop out "This app wants to - know your email, - access your profile, Accept/Cancel"
  OAuth Authentication:
    User Authentication with outside service provider such as Google, Facebook
    User authorizes our app to access their information
    Outside provider tells us about the user
    We trust the outside provider 
    OAuth can be used for 1) User identification in our app 2) our app making actions on behalf of user
2)  Search Google Oauth scope, google sign-in for details

3)OAuth for Servers:
    Results in a token that a server can use to make requests on behalf of the user
    Usually used when we have an app that needs to access user data when they are not logged in
    Difficult to setup because we need to store a lot of info about the use

  OAuth for JS Browser Apps:
    Results in a token that a server can use to make requests on behalf of the user
    Usually used when we have an app that needs to access user data when they are not logged in
    Easy to setup because google's JS lib to automate flow.
4) Flow
      User's Browser                      Google's Servers
           |                                    |
  User clicks 'login with google' button
           |
  We use google's JS lib to initiate -----> Google's JS lib makes auth request to Google
         OAuth process                          |
           |                                Google display confirmation screen 
           |                                    to user in popup window 
           |                                    |
           |                                User accepts
           |                                    |
  Google JS lib invokes a callback   <----- Popup window closes
    in our React/Redux app                      | 
           |                                    |
  Callback provided with token                  |
     and profile info for user
           |
5) How to:
  Create a new project at console.developers.google.com
  Setup an OAuth confirmation screen
  Generate an OAuth Client ID
  Install Google's API library, initialize it with the OAuth ClientID
  Make sure the lib gets called any time when the user clicks on the "Login with Google" button
ClientID:
67349563804-4duihnb3tkjsfh0a8oieus69ui39d9cj.apps.googleusercontent.com
In index.html file, include google API lib: <script src="https://apis.google.com/js/api.js"></script>
After page reload, on Console, type 'gapi', you should see something {load: f}
 you can type: gapi.load("client:auth2");
To load in component, such as: 
  componentDidMount() {
    window.gapi.load('client:auth2');
  }
===
Whatever you can do on devTool console, on code, it is 'window.xxx'
Search 'gapi documentation' for doc.
You might need to set the redirect-url information on console.developer page.
From devTool page, I can run gapi.auth2.getAuthInstance().signIn() or other method.
JS object __proto__. 

6) Difference:
  <button onClick={this.onSignOut()} className="ui red google button">
   vs 
  <button onClick={this.onSignOut} className="ui red google button">
  The first one will call onSignOut() method when the instance of this component is rendered on the screen.
  So it is not what you want.

7)  npm install --save redux react-redux 
  How to hookup with redux?
  1st way to hook GoogleAuth Component with Redux store
      Redux Store           Action Creators         GoogleAuth Component 
                                                    onSignInClick() ----->--------
                                                    onSignOutClick() ---->--------|
      Auth State <------------- signin()  <--------  onAuthChange() <------ GAPI Auth2
        |    ^------------------signOut() <------------|     ^
         ----------------------------------------------------|
                      isSignedIn: true/false
   2nd way:
      Redux Store           Action Creators         GoogleAuth Component 
      Auth State <------------- changeAuth() 
                    |
      GAPI Auth2 -->        |---trySignIn() <----------onSignInClick()
            ^_______________|---trySignOut() <---------onSignOutClick()
      
8) gapi.auth2.getAuthInstance().currentUser.get().getId()
9) A middle summary:
  At index.js: 
    import { Provider } from 'react-redux'; 
    import { connect } from 'redux'; 
    const store = createStore(reducers);
    ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.querySelector("#root"));
  At: actions/index.js to define action:
    export const signIn = (userId) => { return {type: 'SIGN_IN', payload: xxx }}
  At: reducers/index.js to defined combineReducers.
    import { combineReducers } from 'redux';
    import authReducer from './authReducer';
    export default combineReducers({
      auth: authReducer
    })  
    # define reducers, such as authReducer.js inside reducers folder:
      // state of this reducer
    export default (state = {some object based on your need}, action) => {
      switch (action.type) {
        case SIGN_IN:
          return { ...state, isSignedIn: true};
        case SIGN_OUT:
          return { ...state, isSignedIn: false};
        default:
          return state;
      }
    } 
  At: components/GoogleAuth.js class component:
    import { connect } from 'react-redux';
    import { signIn, signOut } from '../actions';
    
    class GoogleAuth extends React.Component {
      ...
    }
    const mapStateToProps = (state) => {
      return { isSignedIn: state.auth.isSignedIn};
    }
    export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);

10) Using Redux Dev Tools to inspect the store:
    github.com/zalmoxisus/redux-devtools-extension
    # this is browser extension which helps to debug, please read the README.md for details.
    localhost:3000?debug_session=<some_string> # Saves all data in Redux Store between refreshes of page.

Section 19: Handling Forms with Redux Form
1) npm install redux-form@8.1.0 # to stall a specific version
2) Handle inputs without Redux
    Class Component             DOM
      State ----------------->value 
    setState <----------------onChange from input element

  With Redux-form:
    ReduxStore                                 Class Component         DOM
    Redux Form ---->redux Form mapStateToProps-----> props------------>value 
      Reducer <-----refux From Action creator<------ handler< ---------onChange from input element
  Redux-form writes reducer, mapStateToProps and action creators for us, also the connect logic.
  # redux-form.com
3) setup:
   At reducers/index.js, import { reducer } from 'redux-form'; and export it. 
   At StreamCreate.js:
    export default reduxForm({
      form: 'streamCreate'
    })(StreamCreate);
4) ES2015 way:
  funcName(formProps) { ... }  
  funcName({input, label, meta}) { ... }  # Directly refer the members inside formProps.
5) Write simple code:
  const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;

Section 20: REST-Based React Apps
1)  Please refer the diagram above, there is API Server to hold the streamer list information.
  We are going to use 'npmjs.com/package/json-server'. This is the same server who powered typeio
 Setup:
  mkdir server
  npm init 
  npm i --save json-server
  create db.json at home directory with content: {"streams": []}
  upate the package.json scripts tag: "start": "json-server -p 3001 -w db.json"
2) After we created the server, on client module, we "npm install --save axios redux-thunk", and restart the client
3) on connect method to pass 2nd argument as object {} for creators, even for the case of one creator.
  export default connect(null, {createStream})(formWrapped);
4) For the callback function caused 'TypeError: Cannot red property props of undefined' issue, just need to change the callback function to arrow function.  

5) Reducer state:
  Removing an element from an araray        state.filter(element => element !== 'hi')     NOT: state.pop()
  Adding an element to an array             [...state, 'hi']                               NOT: state.push('hi')
  Replacing an element in an array          state.map(el => el === 'hi' ? 'bye' : el)     NOT: state[0] = 'hi'
  Updating a property in an object:         {...state, name:'Sam'}                        NOT:  state.name = 'Sam'            
  Adding a property to an object            {...state, age:30}                            NOT: state.age =30
  Removing a property from an object        {...state, age: undefined}, or _.omit(state, 'age')  NOT: delete state.name
-----
  const newState = {...state}; // just return a new state.
  { ...animalSounds, [animal]: sound} // here [animal] is key interperation, not array

6) Intentional Navigation: user clicks on a Link component
  Programmatic Navigation: 
    Such as user submits the form, 
    we make request to backend API to create stream, 
      We navigate user back to the list of streams //// This is bad 
    API responds with success or error  /// This is good
    We either show error to the user or navigate them back to list of streams.
    // We can do it in the actions/index.js createStream function.
 
7) BrowserRouter create a history and pass down it to component as prop. The component is very easy to trigger navigation in a component.
   But if we do navigation from action creator (not react component), it is a little bit challenging. 
                      -------------
  History----------->|BrowserRouter|
                     |-------------
        ---<---------     |
       |                  |
       |       /-----------------\  
  history     Route              Route
       |     path="/"         path="/pagetwo"
       |       |                 |
       |    ---------          ---------
        -->| pageOne |        | PageTwo |
           |component|        |component|
        --  ---------          ---------
  histo|ry   -------------
        --> |ActionCreator|
             -------------
  Sol: a) You can pass history from comoponent to Action Creator as an argument.
       b) Create our own Browser History, and use Plain Router instead of BrowserRouter 
         history.js
          import { createBrowserHistory} from 'history';
          export default createBrowserHistory();
         App.js:
          import { Router, ..} instread of {BrowserRouter, ..}
          import history from '../history';
          change BrowserRouter tag to Router 
8) From streams/ page, change from 
    <button className="ui button primiary">Edit</button> 
    to 
    <Link to={`/streams/edit/${stream.id}` className="ui button primary">Edit</Link>
   At StreamEdit.js:
    ----------------
    const StreamEdit = (props) => {
      console.log(props);
      return <div>StreamEdit</div>
    };
    // ownProps refers to the props above
    const mapStateToProps = (state, ownProps) => {
      return { stream: state.streams[ownProps.match.params.id]}
    }
    export default connect(mapStateToProps)(StreamEdit);
  But we noticed an issue, at the /streams/edi/id page, if you refresh the page, on the console.log(props), you can see the stream object is null. But if you navigate back to list, and come back, you will see the stream object.
  Rule: With React-Router, each component needs to be designed to work in isolation (fetch its own data!).
     
9) Re-use code
      StreamCreate            StreamEdit
          |                      |onSubmit
  onSubmit|                      |initialValues
          ------------------------
         |     StreamForm         |
          ------------------------
10) Difference between those two: with or without "" onSubmit value.
  Good:
  <div>
    <h3>Create a Stream</h3>
    <StreamForm onSubmit={this.onSubmit}/>
  </div>
  Bad: now onSubmit value is a string, not a function.
  <div>
    <h3>Create a Stream</h3>
    <StreamForm onSubmit="{this.onSubmit}"/>
  </div>

11) PUT: to update ALL properties of a record. So if you only specify one property of a json object, then all the other properties will be null.
    PATCH: to update some properties of a record.

Section 21: Using React Portals
  Normally, all components are a child of 'div with id root', but modal is not.
  Portal let us get around this. 
        Body
   Div with id 'root'
       Provider
         App
 Route   Route   Route
     StreamDelete      
        Modal
        Button
1) Delete a stream: 
    Using Modal window.
2) Some CSS knowledge: .class-name, using '-', 'name: value;', z-index,
<html>
 <head>
  <style>
    .sidebar {
      postion: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 300px;
      background-color: green;
    }     
    .content {
      margin-left: 300px;
    }
    .modal-body {
      background-color: white;
      margin: auto;
      height: 30%;
      width: 30%
    }
    .modal {
      heigh: 100%;
      width: 100%;
      position: fixed;
      background-color: grey;
      left: 0;
      top: 0;
      z-index: 10;
    }
    .positioned {
      position: relative;
      z-index: 0;
    }
  </style> 
 </head>
 <body>
  <div class="positioned">
    <div class="modal">
      <div class="modal-body"><h1>I am a modal</h1></div>
    <div>
  </div>
  <div class="sidebar">I am a sidebar</div>
  <div class="content"><h1>I am some content</h1></div>
 </body>
</html>
=====================
3: portal
The above code builds a 'stacking context' using 'position: relative; z-index:0' with 'z-index:10'
If z-index is same, the later element wins.
Portal allows us NOT to render a modal component as a direct child, but as a child under some html element, such as body.
For example, the StreamDelete component originally was a child under .root, but using portal, you can render StreamDelete as body element child.
                  Body
  Position        Sidebar           Modal
 z-index: 0      z-index: 0       z-index: 999
 <body>
  <div class="modal">
    <div class="modal-body"><h1>I am a modal</h1></div>
  <div>
  <div class="positioned">
    something else.
  </div>
  <div class="sidebar">I am a sidebar</div>
  <div class="content"><h1>I am some content</h1></div>
 </body>

4: Hiding a Modal
  semantic-ui.com // select menu>Modual section>Modal. You can see the jquery example.
5: Event popup until hits an event handler.
  Use ` onClick={(e) => e.stopProgation()} ` to stop.  

6) <React.Fragment> to wrap multiple elements inside, otherwise it complains about the syntax
7) go back to history 
    <div className="ui dimmer modals visible active" onClick={ () => history.push('/') }>
    <div className="ui dimmer modals visible active" onClick={ props.onDismiss }>
8) Use OwnProps
  const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
  }
9) Just to repeat, in JSX, you have to wrap {} for js element:
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={this.onDismiss}
        />
      </div>
    )
  }

10) How to handle Delete Stream failure, such as display some content when fails?
  Sol 1: At the actions/index.js deleteStream method, wrap existing code with try and catch block, such as:
    a)
    export const deleteStream = (id) => async (dispatch) => {
      try {
       await streams.delete(`/streams/${id}`);
        dispatch ({type: DELETE_STREAM, payload: id})

       // Do some programmtic navigation to list of Streams
        history.push('/');
      } catch (error) {
        console.log("Delete has an error, failed to delete")
        dispatch({type: "ERROR_DELETE_STREAM", payload: id})
      }
    }
  b) add a reducer to handle this action. 
  c) in the reducers/index.js to import this new reducer.
  d) At StreamDelete.js, 1: mapStateToProp to return this new actionState in props, 2: Add renderContent() to handle this case.
 
Section 22: Implementing Streaming Video
1) Using <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
2) With this route, those two matching at the same time:
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:id" exact component={StreamShow} />
   Sol: By wrapping these Routes inside <Switch> element, it will break after the first match. Of course need to import { Router, Route, Switch } from 'react-router-dom';
3) RTMP Server Setup:
  mkdir rtmpserver
  npm init
  // github.com/illuspas/Node-Media-Server
  npm install node-media-server 
  make an index.js file, and copy the start code from github README.md
  update package.json start script.
4) Structure:
                                        Web Server for Stream Info ------------>--------
  StreamComputer                                  /\                            Viewer's| Browser
                                                  || 
OpenBroardcasterSoftware(OBS) ------>  RealTimeMessagingProtocol(RTMP) Server <---------
5) About OBS: obsproject.com 
 Install OBS software, and you will see a screen about the OBS interface.
6) How to use OBS:
  6.1) Create a scene 
  6.2) Once you select a scene, configure sources, you can right click to make a choice for audio and vedio.
7) From github.com/illuspas/Node-Media-Server, it shows how to start the media server, also how to read Accessing the live stream.
  npmjs.com/package/flv.js
  As we see npm has package flv.js, so we just need to import flc from 'flv.js'; in the StreamShow.js
  At the StreamShow.js, render() method, to create a <video ref={this.videoRef} /> ## Since it is JSF, not html, so need to use refer for DOM. 
    constructor(props) {
      super(props);
      this.videoRef = React.createRef();
    }
  Then in the JSX code, to stick this ref to that element in render() method:
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%'}} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  After this hookup, you can refer the DOM in js code, such as: this.player.attachMediaElement(this.videoRef.current); 

Section 23: The Context System With React.
1)  Context System: Gets data from a parent component to any nested child component
  Props System: Gets data from a parent component to a direct child component  
  Props:
        App ---------------> Header -----------------> Button  
    data:      buttonText               buttonText
  Context: 
        App ---------------> Header -----------------> Button  
    data:|                                               ^
          ----------------------buttonText----------------
  But why we still need props or redux:
   ??   
2) Project: Using context 
    Type 1:
            App
             |
             | language: dutch 
          UserCreate
         /          \ language
        /            \ 
      Field        Button

    Type 2:
    --------App
   |          |
   |       UserCreate
   |       /        \
   |   Field        Button
   |----^             ^
    __________________|
3) Getting date out of Context
  SourceOfData          default_value         or          Parent Component, Provider
                            |                                       |
                             ---------------------------------------
                                               | ContextObject
                                               |
                            ----------------------------------------
  Thing that               |                                        | 
  users data             this.context                            Consumer
                            ----------- nexted child ---------------
4) how to use:
  a) Create a context object, such as export default React.createContext('english');
  b) import context;
  c) define context in the component: static contextType = LanguageContext;
  d) use it, such as console.log(this.context);
5) how to change the value inside the context?
  The example is in App.js to wrap <UserCreate /> which includes Button and Field with:
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>  
  Each separate use of LanguageContext.Provider creates a new, separate 'pipe' of information!
6) Using Consumer to access data:
7) this.context vs <LanguageContext.Consumer>
   You can add multiple <LanguageContext.Consumer> inside for different contexts. For example in a component, you can refer LanguageContext, also ColorContext (for example).

Section 24) Replacing Redux with Context?
1) Compare between these two:
      Redux                                      Context
  Distribute data to various components       Distribute data to various components  
  Centrializes data in a store
  Provides mechanism for chaning 
    data in the store
  ====
  Using Context, it is very hard to build a 'store' component with cross cutting concerns.

Section 25: Hooks with Functional Components
1) ClassBased Components: State, LifeCycle Methods
   Function Based components: Not much
2) Using Hooks, it makes Function-Based Components have State and Lifeclcye Methods. Hooks make it easy to share logic between components.
3) Basic about Hook:
 Name              Goal
useState    Allow a functional component to use component-level state
useEffect   Allow a functional component to use lifecycle methods
useContext  Allow a functional component to use context sysstem
useRef      To use ref system
useReducer  To store data through a reducer
4) 
> const colors = [ 'red', 'green' ]
> const [mycolorThree, mycolorFour ] = colors    # array destruction
> myclorThree 
red
> # you can use to destruct the dict, such as 
> {resource} = props  # props is k,v pairs dict ?
5)   -------
    |  APP  |
     -------
        |
        |resource
        |
       \|/
   --------------
  | ResourceList |
   --------------
For example, in App.js, it is functional component, and it uses useState('xxx'), it can use the way as we do to pass the value down to child using the props. 
6) using jsonplaceholder.typicode.com as a dummy json provider.
 npm install --save axios  # to install axios package.
7) componentDidMount() vs componentDidUpdate(prevProps)
If using class based component ^^.
Switch to using hook implementation.
8)  First Render:       useEffect(() => {}, ['posts'])
                                                |    
                                                | caused func called again    
                                               \|/
    Second Render:      useEffect(() => {}, ['todos'])


useEffect(() => {}, [{color: 'red'}])
useEffect(() => {}, [{color: 'red'}])  #even same literal obj, but js thinks those two obj are different, so it always gets called.


useEffect(() => {}, [10, 10])
useEffect(() => {}, [10, 10])  # the inner func will not get called again.

9)    resource prop
            |
           Hook
            |
      resources array


