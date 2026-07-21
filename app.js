// const heading = React.createElement("h1", {id : "heading", xyz : "abc"}, "Hello from React World!!");  // first one is the tag name, second is the attribute and the last one is the children

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


/*
    <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div>
*/


const parent = React.createElement("div", {id : "parent"} , [React.createElement("div", {id : "child1"} , React.createElement("h1", {id : "heading1"} , "Hi from H1 Tag of Child 1")), React.createElement("div", {id : "child2"} , [React.createElement("h1", {id : "heading2"} , "Hi from H1 Tag of Child 2"), React.createElement("h2", {id : "heading4"} , "Hi from H2 Tag of Child 2")]) ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);