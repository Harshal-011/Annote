// import React from 'react'

// const selectMenu1 = (props) => {

// const [state,setState]=useState("");
// const MENU_HEIGHT = 150;
// const allowedTags = [
//   {
//     id: "page-title",
//     tag: "h1",
//     label: "Page Title",
//   },
//   {
//     id: "heading",
//     tag: "h2",
//     label: "Heading",
//   },
//   {
//     id: "subheading",
//     tag: "h3",
//     label: "Subheading",
//   },
//   {
//     id: "paragraph",
//     tag: "p",
//     label: "Paragraph",
//   },
//   {
//     id: "image",
//     tag: "img",
//     label: "Image",
//   },
// ];

//     // Define the absolute position before rendering
//     const x = props.position.x;
//     const y = props.position.y - MENU_HEIGHT;
//     const positionAttributes = { top: y, left: x };
//     return (
//         <div>
//       <div className="SelectMenu" style={positionAttributes}>
//         <div className="Items">
//           {this.state.items.map((item, key) => {
//             const selectedItem = this.state.selectedItem;
//             const isSelected = this.state.items.indexOf(item) === selectedItem;
//             return (
//               <div
//                 className={isSelected ? "Selected" : null}
//                 key={key}
//                 role="button"
//                 tabIndex="0"
//                 onClick={() => this.props.onSelect(item.tag)}
//               >
//                 {item.label}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//         </div>
//     )
// }

// export default selectMenu1
