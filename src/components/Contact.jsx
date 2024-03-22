export default function Contact() {
	return (
		<section className='contact' id='Contact'>
            <h1 className="title">Contact <span>Me</span></h1>
            <form className="form">
                <div className="input_box">
                    <input type="text" placeholder="First name" required/>
                    <input type="text" placeholder="Last name" required/>
                </div>
                <div className="input_box">
                    <input type="email" placeholder="Email" required/>
                    <input type="number" placeholder="Number" required/>
                </div>
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
                <input type="submit" className="btn" value={"Send message"}/>
            </form>
		</section>
	)
}