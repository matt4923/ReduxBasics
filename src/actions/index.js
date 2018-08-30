

export function selectBook(book){
     console.log({book});
     //selectBook is an ActionCreator, it needs to return an action, an object with a type property.
    return{
        //type (action described) and payload
        type: 'BOOK_SELECTED',
        payload: book
        
    };
}