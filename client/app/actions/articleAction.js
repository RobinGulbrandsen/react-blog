export const getArticle = (id) => {

  return {
    type: 'GET_ARTICLE',
    payload: {
      titleId: 'title_id_1',
      title: '3 Events with nested components in React.js',
      intro: 'When I first started to look at React, I had a hard time figuring out how to pass events through the component stack to the correct child component. Most examples I could find would have the event handler in the same component as the DOM element. So let me show you how to do this.',
      content: 'Content',
      createdAt: 'Tuesday 4th of October 2016',
    }
  }
};