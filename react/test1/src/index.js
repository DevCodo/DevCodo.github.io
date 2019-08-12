import "@babel/polyfill";

import * as ArticlesModel from './js/articles';


// async function process() {
//   let articles = await ArticlesModel.all()
//   console.log(articles.length)
  
//     // берём случайный индекс
//     let ind = Math.floor(Math.random() * articles.length);
//     console.log('select index ' + ind + ', id = ' + articles[ind].id)

//     // получаем статью по id
//     let article = await ArticlesModel.one(articles[ind].id)
//     console.log(article);

//    // пробуем удалить её
//    let res = await ArticlesModel.remove(article.id)
//    console.log('что с удалением? - ' + res);

//    let articlesAfter = await ArticlesModel.all()
//    console.log(articlesAfter.length)
// }

// process().catch((e) => {
//   console.log( e)
// });
// ArticlesModel.all((articles) => {
//     console.log('articles count = ' + articles.length);
    
//     // берём случайный индекс
//     let ind = Math.floor(Math.random() * articles.length);
//     console.log('select index ' + ind + ', id = ' + articles[ind].id)

//     // получаем статью по id
//     ArticlesModel.one(articles[ind].id, (article) => {
//         console.log(article);

//         // пробуем удалить её
//         ArticlesModel.remove(article.id, (res) => {
//             console.log('что с удалением? - ' + res);

//             // а сколько статей в базе сейчас
//             ArticlesModel.all((articles) => {
//                 console.log('articles count = ' + articles.length);
//             }, (error) => {
//                 console.log(error + ' in articles list after delete');
//             });
//         }, (error) => {
//             console.log(error + ' in articles delete');
//         })

//     }, (error) => {
//         console.log(error + ' in articles one');
//     });

// }, (error) => {
//     console.log(error + ' in articles list');
// });


let obj = {
  key: 13,
  name: "ivan"
}

console.log("dfsf" in obj)