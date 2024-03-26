import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [agree, setAgree] = useState(false); // Initialize agree state as false
    const [showAlert, setShowAlert] = useState(false); // Initialize showAlert state as false
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // Function to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    // Function to handle click on the terms link
    const handleTermsClick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        toggleModal(); // Toggle modal visibility
    };

    // useEffect to show alert when agree state changes
    useEffect(() => {
        if (agree) {
            setShowAlert(true); // Show the alert when agree is true
            // Hide the alert after 3 seconds
            const timeout = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            // Clear the timeout to prevent memory leak
            return () => clearTimeout(timeout);
        }
    }, [agree]);

    // Event handler for checkbox change
    const handleAgreeChange = (event) => {
        setAgree(event.target.checked); // Update the agree state
    };


    return (
        <div className="container" style={{ maxWidth: "50%" }}>
            <div className="text-center"> {/* Added text-center class */}
                <h1>Sign up</h1>
                <p>Begin your spiritual journey here</p>
            </div>
            <div style={{ paddingTop: "20px" }}>
                <div className="mb-3"> {/* Added margin bottom class */}
                    <label htmlFor="" className="form-label">Your full name</label>
                    <input className="form-control form-control-sm" type="text" placeholder="Your name" aria-label=".form-control-sm example"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input className="form-control form-control-sm" type="text" placeholder="johndoe@email.com" aria-label=".form-control-sm example"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input className="form-control form-control-sm" type="text" placeholder="username" aria-label=".form-control-sm example"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Set up your secure password</label>
                    <input className="form-control form-control-sm" type="password" placeholder="Type your password" aria-label=".form-control-sm example"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm your password</label>
                    <input className="form-control form-control-sm" type="password" placeholder="reconfirm password" aria-label=".form-control-sm example"/>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={handleAgreeChange}
                            checked={agree}
                        />
                        <label className="form-check-label">
                            I agree to the <a href="/" className="text-primary" onClick={handleTermsClick}><span>DivineDestinyConnect</span></a> Terms and Privacy
                        </label>
                    </div>
                </div>
                {/* Bootstrap alert */}
                {showAlert && (
                    <div className="alert alert-success" role="alert">
                        You have agreed to the terms and conditions.
                    </div>
                )}
                {/* Bootstrap Modal */}
                {showModal && (
                    // Inside the JSX return
                <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Terms and Conditions</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    These terms and conditions govern your use of the DivineDestinyConnect mobile application (the "App") operated by [Your Company Name] ("us", "we", or "our").
                                    By accessing or using the App, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the App.
                                </p>
                                <h2>1. Account Registration</h2>
                                <ul>
                                    <li>You must be at least 18 years old to use the App.</li>
                                    <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                                    <li>You agree to provide accurate, current, and complete information during the registration process.</li>
                                </ul>
                                <h2>2. User Content</h2>
                                <ul>
                                    <li>You retain ownership of any content you submit, post, or display on or through the App ("User Content").</li>
                                    <li>By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute it.</li>
                                </ul>
                                <h2>3. Prohibited Conduct</h2>
                                <ul>
                                    <li>You may not use the App for any illegal or unauthorized purpose.</li>
                                    <li>You may not interfere with or disrupt the operation of the App or servers.</li>
                                    <li>You may not attempt to gain unauthorized access to any part of the App or its systems.</li>
                                </ul>
                                <h2>4. Intellectual Property</h2>
                                <p>
                                    The App and its original content, features, and functionality are owned by [Your Company Name] and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                                </p>
                                <h2>5. Privacy</h2>
                                <p>
                                    We collect and use your personal information in accordance with our Privacy Policy.
                                </p>
                                <h2>6. Termination</h2>
                                <p>
                                    We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
                                </p>
                                <h2>7. Changes to Terms</h2>
                                <p>
                                    We reserve the right to modify or replace these terms at any time.
                                </p>
                                <h2>8. Governing Law</h2>
                                <p>
                                    These terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                                </p>
                                <h2>9. Contact Us</h2>
                                <p>
                                    If you have any questions about these terms, please contact us at [Your Contact Information].
                                </p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                )}

                <div className="d-grid">
                    <Link to={"/"} className="btn btn-primary" type="button">Join now</Link>
                </div>

                <div className="text-center">
                    <p>Already a member?<Link to="/Login">Login</Link></p>
                </div>

            </div>
        </div>
    )
}
