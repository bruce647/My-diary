import React, { Component } from 'react';
import Tipic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft><img className='banner-img' alt='' src="https://westbound.mauer.co/wp-content/uploads/2019/05/GW37XN-scaled-1690x975.jpg" />
                    <Tipic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;