import React, { Component } from 'react';
import Image from './Image';
import Button from './Button';

export default class Slider extends Component {
	constructor(props) {
		super(props)


		this.state = {
			images: [
				{src: "/imgs/1.png", description: "Pacman 1"},
				{src: "/imgs/2.png", description: "Pacman 2"},
				{src: "/imgs/3.png", description: "Pacman 3"},
				{src: "/imgs/4.png", description: "Pacman 4"},
				{src: "/imgs/5.png", description: "Pacman 5"}
			],
			currentIndex: 0,
			currentDescription: "",
			translateValue: 0
		}
	}

	goToBackSlide = () => {
		if(this.state.currentIndex === 0)
			return;
		
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex - 1,
			currentDescription: this.state.images[this.state.currentIndex - 1].description,
			translateValue: prevState.translateValue + this.slideWidth()
		}))
	}

	goToNextSlide = () => {
		// Exiting the method early if we are at the end of the images array.
		// We also want to reset currentIndex and translateValue, so we return
		// to the first image in the array.
		if(this.state.currentIndex === this.state.images.length - 1) {
			return this.setState({
				currentIndex: 0,
				currentDescription: "",
				translateValue: 0
			})
		}
		
		// This will not run if we met the if condition above
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			currentDescription: this.state.images[this.state.currentIndex + 1].description,
			translateValue: prevState.translateValue + -(this.slideWidth())
		}));
	}

	slideWidth = () => {
		 return document.querySelector('.slide').clientWidth
	}

	render() {
		console.log('>> state', this.state.images);
		console.log('>> currentIndex', this.state.currentIndex);
		console.log('>> Object.keys(data).map(k => data[k])', Object.keys(this.state.images).map(k => this.state.images[this.state.currentIndex]));
		console.log('----->> ', this.state.images[0].description);

		
		return (
			<div className="slider">

				<div className="slider-wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}>
						{
							this.state.images.map((image, i) => (
								<Image key={i} image={image} />
							))
						}
				</div>

				<Button 
					goToSlide={this.goToBackSlide} 
					className="btnBack"
					text="Back"
					toolTip={this.state.currentDescription}
				/>

				<Button 
					goToSlide={this.goToNextSlide} 
					className="btnNext"
					text="Next"
					toolTip={this.state.currentDescription}
				/>				

			</div>
		);
	}
}
