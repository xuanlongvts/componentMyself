import React, { Component } from "react";
import $ from 'jquery';

class menuRender extends Component {

    constructor(props) {
        super(props);
        
        this.handleMenuClick = this.handleMenuClick.bind(this);

        this.state = {
            getText: null
        }
    }

    componentDidMount() {
        const _this = this;
        $(".hasSub").hover(function() {
            $(this).toggleClass('active');

            let thisBottom = $(window).height() - $(this).offset().top;
            let heightSub = $(this).children('.sub').height();
            if (thisBottom < heightSub) {
                $(this).children('.sub').css({
                    'top': 'auto',
                    'bottom': 0
                });
            }
            else {
                $(this).children('.sub').css({
                    'top': 0,
                    'bottom': 'auto'
                });
            }
        });


        $('.menuDynHeader .menuDyn a').click(function () {
            $('.menuDyn > li').removeClass('curr');
            $(this).parents('li').addClass('curr');
            let node = $(this).parents('li.hasSub').children('a');
            let lengthNode = node.length;
            let getText = '';
            if (lengthNode) {
                getText = node[lengthNode - 1].text;
            }
            else {
                getText = $(this).text();
            }
            _this.setState({
                getText: getText
            });
        });
    }

    handleMenuClick(e, callBack) {
        // console.log('e: ', e.target.parentNode.parentNode.parentNode.classList[0]);

        let node = e.target;
        // while (node.classList[0] !== 'hasSub') {
        //     node = node.parentNode;
        // }
        // console.log('node: ', node.childNodes[0], ', text: ', node.childNodes[0].text);
    }

    renderItem(key, href, target, callBack, name, isSub) {
        let link; let sub = [];
        link = (
            <li key={key} className={isSub ? 'hasSub' : null}>
                <a href={href} target={target}
                    onClick={(e, callBack) => this.handleMenuClick(e, callBack)}
                >
                    {name}
                </a>
                {isSub && (
                    <ul className="sub">
                        {this.menuDyn(isSub)}
                    </ul>
                )}
            </li>
        );
        
        sub.push(link);
        return sub;
    }
    
    menuDyn(data){
        let menuNew = [];
        for (let key in data) {
            const {
                href, target, callBack, name, sub
            } = data[key];

            if (data[key].hasOwnProperty('sub')) {
                menuNew.push(this.renderItem(key, href, target, callBack, name, sub));
                this.menuDyn(data[key].sub);
            }
            else {
                menuNew.push(this.renderItem(key, href, target, callBack, name, false));
            }
        }
        return menuNew;
    };

    render() {
        const { data } = this.props;
        const { getText } = this.state;
        
        let isHeader = true;
        if (isHeader) {
            return (
                <div className="menuDynHeader">
                    <a href="javascript:;" className="menuSelected">{getText}</a>
                    <ul className="menuDyn">
                        {this.menuDyn(data)}
                    </ul>
                </div>
            )
        }

        return (
            <ul className="menuDyn">
                {this.menuDyn(data)}
            </ul>
        )
    }
}

export default menuRender;