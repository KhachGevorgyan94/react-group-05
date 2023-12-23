import React from "react";
import Header from "./components/header/header";
import ProductCard from "./components/productCard";
import natureImage from './assets/imnages/free-nature-images.jpg'
import TextBox from "./components/TextBox";

class App extends React.Component {

    users = [
        {
            title: 'test',
            isCheck: false,
            description: 'qweqweqwe',
            subTitle: '23qelrktjewlkrjtg',
            image: natureImage
        },
        {
            title: 'test',
            isCheck: false,
            description: 'qweqweqwe',
            subTitle: '23qelrktjewlkrjtg'
        },
        {
            title: 'Khachik',
            isCheck: true,
            description: 'qweqweqwe',
            subTitle: '23qelrktjewlkrjtg'
        },
        {
            title: 'test',
            isCheck: false,
            description: 'qweqweqwe',
            subTitle: '23qelrktjewlkrjtg'
        },
        {
            title: 'test',
            isCheck: false,
            description: 'qweqweqwe',
            subTitle: '23qelrktjewlkrjtg'
        },
        {
            title: 'test',
            isCheck: false,
            description: 'qweqweqwe',
            subTitle: '23qelrktjewlkrjtg'
        }
    ]


    render() {
        return <div className={'G-flex-column G-center gap-15'}>
            {/*{this.users.map((item, index) => {*/}
            {/*    return <ProductCard*/}
            {/*        key={'product-card' + index}*/}
            {/*        title={item.title}*/}
            {/*        image={item.image}*/}
            {/*        isCheck={item.isCheck}*/}
            {/*        description={item.description}*/}
            {/*        subTitle={item.subTitle}/>*/}
            {/*})}*/}

            <TextBox title={'asdasd'} description={'asdasd'}/>
            <TextBox title={'asdasd'} description={'asdasd'}/>
            <TextBox title={'asdasd'} description={'asdasd'}/>
        </div>
    }

}

export default App

