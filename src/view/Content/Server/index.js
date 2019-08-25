import React from 'react';
import { connect } from 'react-redux';
import { showImg } from 'redux/actions';
import Card from 'component/Card/index';
import Title from 'component/TitleContent/Title';
import TitleContent from 'component/TitleContent/TitleContent';
import { title } from 'component/data';
import ListContent from 'component/ListContent';

import h1 from 'static/h1.jpg';
import h2 from 'static/h2.jpg';
import h3 from 'static/h3.jpg';
import h4 from 'static/h4.jpg';
import h5 from 'static/h5.jpg';
import h6 from 'static/h6.jpg';
import h7 from 'static/h7.jpg';
import h8 from 'static/h8.jpg';

import './style.scss';

const text = [
    [
        "日媒曝光“不被废柴男吸引法则”",
        "腐女做的蛋糕太屌了",
        "国外玩家狂喷游戏海量付费DLC",
        "日本推出柯南智能侦探眼镜"
    ],
    [
        "《刀剑神域》诗乃最新手办",
        "御宅与御宅爱好之间的战争！",
        "为了祖国花朵文化部才怒下重手？",
        "那些年天朝“翻拍”过的日本动画"
    ],
    [
        " 芦月祭3.0·首届东营动漫文化节",
        "《hurly burly》唯美旗袍弱音 Cos",
        "学习机变成游戏机到底谁该背锅",
        "《黑子的篮球》中的逆天技能"
    ],
    [
        "年套餐购买最新优惠",
        "月套餐购买热门",
        "日套餐购买推荐"
    ]
];
const imgs = [h1, h2, h3, h4, h5, h6, h7, h8];
const html = {
    资料: [
        "年套餐购买最新优惠",
        "月套餐购买热门",
        "日套餐购买推荐"
    ],
    推荐: [
        "会员登陆方式",
        "会员账号管理",
        "个人资料提交/更改"
    ]
};

class Server extends React.Component {
    state = {
        id: '4'
    }
    handleLeft = () => {
        if (this.props.showId > 0) {
            this.props.dispatch(showImg(`${--this.state.id}`))
        } else { return false }
    }
    handleRight = () => {
        if (this.props.showId < 7) {
            this.props.dispatch(showImg(`${++this.state.id}`))
        } else { return false }
    }

    render() {
        return (
            <Card>
                <p className="sertitle">
                    会员服务
                </p>
                <div className="serbody">
                    <div className="serpackage">
                        <ListContent content={"年套餐购买"} />
                        <ListContent content={"月套餐购买"} />
                        <ListContent content={"日套餐购买"} />
                    </div>
                    <div className="sercontent">
                        <div className="head"><Title onClick={this.props.onClick} currentcontent="server" title={title.server} /></div>
                        <div className="content">
                            <TitleContent handleLeft={this.handleLeft} handleRight={this.handleRight} imgs={imgs} shows={'showServer'} currentitle={'头像'} content={text[0]} />
                            <TitleContent html={html} shows={'showServer'} currentitle={'资料'} content={text[1]} />
                            <TitleContent html={html} shows={'showServer'} currentitle={'会员功能'} content={text[2]} />
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default connect(state => ({ showId: state.show.showId }))(Server);