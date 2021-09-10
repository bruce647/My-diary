import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[{
        id: 1,
        title: 'Social Focus',
        imgURL: 'https://rollerresearch.files.wordpress.com/2018/09/social-environment.jpg?w=424&h=282'
    },
    {
        id: 2,
        title: 'Paint',
        imgURL: 'https://www.owatrolusa.com/wp-content/uploads/2019/11/paints.jpg'
    }],
    articleList:[{
        id:1,
        title:'How a Prada Boutique Has Appeared in the Texas Desert',
        desc:'A perfect illustration of how we perceive cultural artefacts out of their intended environment, this Prada boutique stands in the West Texas desert.',
        imgURL: 'https://westbound.mauer.co/wp-content/uploads/2018/07/RX59ZR-1024x768.jpg'
    },{
        id:2,
        title:'How a Prada Boutique Has Appeared in the Texas Desert',
        desc:'A perfect illustration of how we perceive cultural artefacts out of their intended environment, this Prada boutique stands in the West Texas desert.',
        imgURL: 'https://westbound.mauer.co/wp-content/uploads/2018/07/RX59ZR-1024x768.jpg'
    },{
        id:3,
        title:'How a Prada Boutique Has Appeared in the Texas Desert',
        desc:'A perfect illustration of how we perceive cultural artefacts out of their intended environment, this Prada boutique stands in the West Texas desert.',
        imgURL: 'https://westbound.mauer.co/wp-content/uploads/2018/07/RX59ZR-1024x768.jpg'
    },{
        id:4,
        title:'How a Prada Boutique Has Appeared in the Texas Desert',
        desc:'A perfect illustration of how we perceive cultural artefacts out of their intended environment, this Prada boutique stands in the West Texas desert.',
        imgURL: 'https://westbound.mauer.co/wp-content/uploads/2018/07/RX59ZR-1024x768.jpg'
    }],
    recommendList: [{
        id:1,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
    },{
        id:2,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    }]
});

export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}