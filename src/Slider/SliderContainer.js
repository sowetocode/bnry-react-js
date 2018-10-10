import React from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import Slider from './Slider';
import Button from './Button';
import * as SliderActions from './actions'

class SliderContainer extends React.Component {  

	componentDidMount = () => { 
		this.props.fetchImages();
		//his.props.setDescription(this.props.slider.images[0].description,);
	}
	
	renderSlides = () => {
		const { images } = this.props
		return images.map((curr, i) =>
			<Slider 
				key={i} 
				image={this.props.images[i]} 
			/>
		)
	}

	goToBackSlide = () => {
		const { 
			index, 
			translateValue, 
			setTranslateValue, 
			setIndex,
			setDescription
		} = this.props
	  
		if(index === 0)
			return;
		  
		setIndex(index + 1);
		setTranslateValue(translateValue + this.slideWidth());
		setDescription("xxx");
	}

	goToNextSlide = () => {
		const { 
			images, 
			index, 
			translateValue,
			setTranslateValue, 
			setIndex,
			setDescription,
			setDescriptionBack,
		} = this.props;


		if(index === images.length - 1) {
			setTranslateValue(0);
			return setIndex(0);
		}

		if(index <= images.length - 3) {
			setDescription(images[index + 2].description);
			setDescriptionBack(images[index].description);
		} else {
			setDescription(images[0].description);
			setDescriptionBack("");
		}

		
		setIndex(index + 1);
		setTranslateValue(translateValue - this.slideWidth());
		//setDescription(images[index - 1].description,);
		
	}

	slideWidth = () => {
		 return document.querySelector('.slide').clientWidth;
	}

	toolTipBack = () => {
		const { 
			images, 
			index, 
			translateValue,
			setTranslateValue, 
			setIndex,
			setDescription
		} = this.props;

		console.log('toolTipBack', images[index - 1].description);
		if(index === images.length - 1) {
			return ;
		}
		console.log('toolTipBack', images[index - 1].description);
		return images[index - 1].description ;

		
	}
	
    render() {
		const {
			images,
			index,
			translateValue,
			description,
			descriptionBack
			} = this.props
		console.log('SliderContainer this.props', this.props);
		return (
				<div className="slider">
					<div className="slider-wrapper"
						style={{
						transform: `translateX(${translateValue}px)`,
						transition: 'transform ease-out 0.45s'
						}}>
						{ this.renderSlides() }
					</div>

					<Button 
					goToSlide={this.goToBackSlide} 
					className="btnBack"
					text="Back"
					toolTip={descriptionBack}
					/>
	
					<Button 
						goToSlide={this.goToNextSlide} 
						className="btnNext"
						text="Next"
						toolTip={description}
					/>					
				</div>
		)
    }
  }
  
const mapStateToProps = (state) => {
    return {
		images: state.slider.images,
		index: state.slider.index,
		translateValue: state.slider.translateValue,
		description: state.slider.description,
		descriptionBack: state.slider.descriptionBack,
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      ...SliderActions
    }, dispatch)
  }


export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);