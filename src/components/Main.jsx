import Typed from 'typed.js';
import React from 'react';

export default function Main() {
	
	const el = React.useRef(null);
	React.useEffect(() => {
		const typed = new Typed(el.current, {
		  strings: ['<i> Web</i> developer.', '<i> React</i> developer.'],
		  typeSpeed: 100,
		  backSpeed: 100,
		  backDelay: 1000,
		  loop: true
		});

		return () => {
			typed.destroy();
		  };
		}, []);
	return (
		<section className='home' id='Home'>
			<div className='wrapper'>
				<div className='bg_shadow'></div>
				<div className='icon_box'>
					<a href='https://linkedin.com/in/tomasz-czelej8'>
						<i class='fa-brands fa-linkedin-in'></i>
					</a>
					<a href='https://github.com/tomekcz8'>
						<i class='fa-brands fa-github'></i>
					</a>
				</div>

				<div className='text_box'>
					<h1>Hi, I'm Tomek</h1>
					<h1>
						and i'm
						<span className='skills' ref={el}></span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id delectus suscipit commodi, error illo ipsa
						officia minima modi esse et asperiores ullam dolore quidem omnis. Qui eligendi animi facere quis?
					</p>
					<button type='buttton' className='btn'>
						Download cv
					</button>
				</div>
				<a type='button' href='#About'>
					<i class='fa-solid fa-chevron-down bounce-top'></i>
				</a>
			</div>
		</section>
	)
}
