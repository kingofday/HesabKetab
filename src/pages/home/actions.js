export default types = {
    setIds: 'Set_Ids'

};
export const setIds = (ids) => ({
    type: types.setIds,
    payload: {
        ids
    }
})