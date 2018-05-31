import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(
                    {
                      key: Math.random(), 
                      name: action.placeName,
                      image: {
                        uri: "https://s.hs-data.com/bilder/teamfotos/640x360/543.jpg"
                      }
                    })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                })
            };
        default:
            return state;
        
    }
};

export default reducer;