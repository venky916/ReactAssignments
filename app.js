import React from "react";
import ReactDOM from "react-Dom/client";
import './style.css'; // Assuming you have a CSS file named styles.css
import logo from "./logo.png";
import userIcon from "./user icon.png";



//using React  create Element
// const heading1 = React.createElement('h1',{key:"h1"},"heading1");
// const heading2 = React.createElement('h2', {key:"h2"}, "heading2");
// const heading3 = React.createElement('h3', {key:"h3"}, "heading3");
// const div = React.createElement('div',{className:"title"},[heading1,heading2,heading3]);

//using jsx
// const div=(<div className="title">
//     <h1>heading1</h1>
//     <h2>heading2</h2>
//     <h3>heading3</h3>
// </div>)


//one way of using jsx
// const heading1=(<h1 key="h1">heading1</h1>);
// const heading2 = (<h2 key={"h2"}>heading2</h2>);
// const heading3 = (<h3 key={"h3"}>heading3</h3>);

// const div = (
//     <div key="div" className="title">
//         {heading1}
//         {heading2}
//         {heading3}
//     </div>
// )


//using functional components
// const heading1=(<h1 key="h1">heading1</h1>);
// const heading2 = (name1) => {
//     return (
//         <h2 id={name1}>heading2</h2>
//     )
// };
// const Heading2 = (name1)=>{
//     return (
//         <h2 id={name1}>heading2</h2>
//     )
// };
// const DivComponent =(name)=>{
//     return (
//         <div key="div" className="title">
//         {heading1}
//         {heading2('head2')}
//         <Heading2 />
//         <Heading2></Heading2>
//         <h3 style={{color:"white",backgroundColor:"red"}}   key={name}>heading3</h3>
//         </div>
//     );
// }
//passing attribute in functional component
// const DivComponent2 = (name) => {
//     return (
//         <div className={name}>
//             {heading1}
//             {heading2}
//             <h3>heading3</h3>
//         </div>
//     );
// }

// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
// const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

// const TitleElement = () => {
//     return <h2 style={{ color: "red" }}>This Title Element</h2>;
// }; // This is Title Component

// const Header = () => {
//     return (
//         <div className="Title" key="title">
//             {/* This is {TitleComponent} */}
//             {element}
//             <h1 style={{ color: "blue" }} key="h1">
//                 This is h1 tag
//             </h1>
//             {/* This is {<TitleComponent/>} */}
//             <TitleElement />
//             <h2 style={{ color: "palevioletred" }} key="h2">
//                 This is h2 tag
//             </h2>
//             {/* This is {<TitleComponent></TitleComponent>}*/}
//             <TitleElement></TitleElement>
//             <h3 style={{ color: "green" }} key="h3">
//                 This is h3 tag
//             </h3>
//         </div>
//     );
// }

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(div());
// root.render(DivComponent2("title"));
// root.render(<DivComponent />);
// root.render(<DivComponent>title</DivComponent>);
// root.render(<DivComponent />);
// root.render(Header("head")) 


/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

//my way
// const Header = ({ className }) => {
//     return (
//         <div className={className}>
//             <img src={logo} alt="logo" className="logo" />
//             <input type="text" placeholder="Search..." className="search-bar" />
//             <img src={userIcon} alt="user-logo" className="user-icon" />
//         </div>
//     );
// };

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<Header className="header" />);


//github -answer


const Header = () => {
    return (
        <>
            <header className="header">
                <div className="left">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="center">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search anything you want..."
                    />
                    <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                <div className="right">
                    <img src={userIcon} alt="User Icon" />
                </div>
            </header>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />); // we can also write like this for functional component root.render(Header())


