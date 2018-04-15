import React, { Component } from "react";
import { menuConfig } from './menuConfig';
import $ from 'jquery';

class menuRender extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
    }

    renderItem(key, href, target, callBack, name, isSub) {
        let link; let sub = [];
        link = (
            <li key={key} className={isSub ? 'hasSub' : null}>
                <a href={href} target={target} onClick={callBack && (() => callBack())}>
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
            if (data[key].permission) {
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
        }
        return menuNew;
    };

    render() {
        return (
            <ul className="menuDyn">
                {this.menuDyn(menuConfig)}
            </ul>
        )
    }
}

export default menuRender;