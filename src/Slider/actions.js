export const GET_IMAGES = 'get_images';
export const SET_INDEX = 'set_index';
export const SET_TRANSLATE_VALUE = 'set_translate_value';
export const SET_DESCRIPTION = 'set_description';
export const SET_DESCRIPTION_BACK = 'set_description_back';


let data = [
	{src: "/imgs/1.png", description: "Pacman 1"},
	{src: "/imgs/2.png", description: "Pacman 2"},
	{src: "/imgs/3.png", description: "Pacman 3"},
	{src: "/imgs/4.png", description: "Pacman 4"},
	{src: "/imgs/5.png", description: "Pacman 5"}
]

/* Thunks */
export function fetchImages() {
	return getImagesSuccess(data);
}

/* Action Creators */
export function getImagesSuccess(images) {
  return {
    type: GET_IMAGES,
    images: images
  }
}

export function setIndex(value) {
  return {
    type: SET_INDEX,
    payload: value
  }
}

export function setTranslateValue(value) {
  return {
    type: SET_TRANSLATE_VALUE,
    payload: value
  }
}

export function setDescription(value) {
  return {
    type: SET_DESCRIPTION,
    payload: value
  }
}

export function setDescriptionBack(value) {
  return {
    type: SET_DESCRIPTION_BACK,
    payload: value
  }
}