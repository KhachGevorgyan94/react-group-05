import React from "react";
import Header from "./components/header/header";
import ProductCard from "./components/productCard";
import natureImage from './assets/imnages/free-nature-images.jpg'

class App extends React.Component{

    users = [
        {
            title:'test',
            isCheck:false,
            description:'qweqweqwe',
            subTitle:'23qelrktjewlkrjtg',
            image:natureImage
        },
        {
            title:'test',
            isCheck:false,
            description:'qweqweqwe',
            subTitle:'23qelrktjewlkrjtg'
        },
        {
            title:'Khachik',
            isCheck:true,
            description:'qweqweqwe',
            subTitle:'23qelrktjewlkrjtg'
        },
        {
            title:'test',
            isCheck:false,
            description:'qweqweqwe',
            subTitle:'23qelrktjewlkrjtg'
        },
        {
            title:'test',
            isCheck:false,
            description:'qweqweqwe',
            subTitle:'23qelrktjewlkrjtg'
        },
        {
            title:'test',
            isCheck:false,
            description:'qweqweqwe',
            subTitle:'23qelrktjewlkrjtg'
        }
    ]


    render() {
        return <div className={'G-flex-column gap-15'}>
            {this.users.map((item,index)=>{
                return <ProductCard title={item.title}
                                    image={item.image}
                                    isCheck={item.isCheck}
                                    description={item.description}
                                    subTitle={item.subTitle}/>
            })}
        </div>
    }

}

export default App

