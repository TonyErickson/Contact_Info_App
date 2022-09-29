import React from "react"
import Footer from "./footer"
import StarRating from "./StarReview"
import { useNavigate } from "react-router-dom";


export default function ReviewForm() {
	const navigate = useNavigate();
    const onSubmit = async () => {
        (window.confirm("Youe review has been submitted. Thank you for the feedback!"))
	
	navigate("/");
};
return(
    <div>
	<h1>Contact App Survey Form</h1>
	<form className="form2">
		<div className="form-control">
			<label className="nameform">
				Name
			</label>
            <br></br>
			<input type="text" className= "nameonform" placeholder="Enter your name" />
            <br></br>
			<label className="email">
				Email
			</label>
            <br></br>
			<input type="text" className="nameonform"	placeholder="Enter your email" />
		    <br></br>
			<label className="comment">
				Any comments or suggestions:
			</label>
            <br></br>
            <br></br>
			<textarea className= "textarea" placeholder="Enter your comment here">
			</textarea>
            <br></br>
			<label className="label" text-align="center">
				Please leave a star rating of the website
			</label>
			<StarRating />
		</div>
		<button type="submit" className="btn btn-warning" id="reviewbtn"value="submit" onClick={() => onSubmit()}>
			Submit
		</button> 
        <br></br>
        <br></br>
	</form>
    <Footer />
    </div>
)
}
