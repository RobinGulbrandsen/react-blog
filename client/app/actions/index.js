export const selectArticle = (article) => {
    console.log("You clicked on article:", article.title);
    return {
        type: 'ARTICLE_SELECTED',
        payload: article
    }
};
