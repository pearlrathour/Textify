// import React  from 'react'

// export default function About(props) {
//     // const [myStyle, setMyStyle] = useState({
//     //     color: 'black',
//     //     backgroundColor: 'white'
//     // })

//     let myStyle={
//         color: props.mode ==='dark'? 'white': '#15202B' ,
//         backgroundColor: props.mode === 'dark'? '#15202B':'white',
//     }

//     // const [btntext, setBtnText] = useState("Enable Dark Mode")

//     // const toggleStyle = () => {
//     //     if (myStyle.color === 'black') {
//     //         setMyStyle({
//     //             color: 'white',
//     //             backgroundColor: 'black',
//     //         })
//     //         setBtnText("Enable Light Mode")
//     //     }
//     //     else {
//     //         setMyStyle({
//     //             color: 'black',
//     //             backgroundColor: 'white'
//     //         })
//     //         setBtnText("Enable Dark Mode")
//     //     }
//     // }


//     return (
//         <>
//             <div className="container">
//                 <div className="accordion accordion-flush" id="accordionFlushExample" style={{color: props.mode ==='dark'?'white':'#042743'}}>
//                     <h2 className='my-4'>About Us</h2>
//                     <div className="accordion-item" style={myStyle}>
//                         <h2 className="accordion-header" id="flush-headingOne">
//                             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//                                 Analyze your text
//                             </button>
//                         </h2>
//                         <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//                             <div className="accordion-body" style={myStyle}>
//                                 Textutils gives you a way to analyze your text quickly and efficiently.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item">
//                         <h2 className="accordion-header" id="flush-headingTwo">
//                             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//                                 Browser Compatible
//                             </button>
//                         </h2>
//                         <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
//                             <div className="accordion-body">
//                                 This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item">
//                         <h2 className="accordion-header" id="flush-headingThree">
//                             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//                                 Free to use
//                             </button>
//                         </h2>
//                         <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//                             <div className="accordion-body" style={myStyle}></div>
//                             TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
//                         </div>
//                     </div>
//                     {/* <div className="container my-2">
//                         <button onClick={toggleStyle} type="button" className="btn btn-outline-info">
//                             {btntext}
//                         </button>
//                     </div> */}
//                 </div>
//             </div>
//         </>
//     )
// }
