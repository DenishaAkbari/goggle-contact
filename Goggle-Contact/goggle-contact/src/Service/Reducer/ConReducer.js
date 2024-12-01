const initial = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    contact: null,
    isLoading: false,
    isError: false,
    errorMsg: 'some error occurred'
};

const ConReducer = (state = initial, action) => {
    switch (action.type) {
        case "contacts":
            const allData = action.payload;
            localStorage.setItem('contacts', JSON.stringify(allData));
            return {
                ...state,
                contacts: allData,
                contact: null,
                isError: false,
                isLoading: false
            };

        case "loading":
            return {
                ...state,
                isLoading: true
            };

        case "error":
            return {
                ...state,
                isError: true,
                errorMsg: "Network error"
            };

        case "singleData":
            return {
                ...state,
                contact: action.payload,
                isLoading: false,
                isError: false
            }

        case "imageuploaded":
            return {
                ...state,
                contact: {
                    ...state.contact,
                    image: action.payload
                }
        }    

        default:
            return state;
    }
};

export default ConReducer;