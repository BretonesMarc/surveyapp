export default (submissions = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return submissions;
        default:
            return submissions;
    }
}