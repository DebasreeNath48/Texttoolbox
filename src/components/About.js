import React from 'react';

export default function About(props) {
    let myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "#042743" : "white"
    }
    
    return (
        <div className='container my-4' style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Analyze your text with various tools.</strong> This app provides a range of text analysis tools such as converting text to uppercase or lowercase, removing extra spaces, reversing the text, and much more. Use these tools to quickly manipulate and clean up your text for various purposes like writing, editing, and data processing.
                        </div>
                    </div>
                </div>
                {/* Accordion Item 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This app is completely free to use.</strong> Our text utility app does not require any subscriptions or sign-ups. You can access all the features without any hidden costs or restrictions. It's designed to be a helpful tool for students, writers, editors, and anyone who frequently works with text.
                        </div>
                    </div>
                </div>
                {/* Accordion Item 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Works seamlessly on all modern browsers.</strong> Our app is built to be compatible with all modern browsers like Chrome, Firefox, Safari, and Edge. It is responsive and performs efficiently across different devices and screen sizes, ensuring a smooth user experience whether you are on a desktop, tablet, or mobile phone.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
