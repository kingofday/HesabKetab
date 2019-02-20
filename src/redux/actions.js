export const actionType = {
    changeHeader:'changeHeader',
    home:'home'
};
export const actionLayout = (customHeader, header) => ({
    type: actionType.changeHeader,
    payload: {
        customHeader,
        header
    }
})

export const actionLayout = (customHeader, header) => ({
    type: actionType.home,
    payload: {
        
    }
})