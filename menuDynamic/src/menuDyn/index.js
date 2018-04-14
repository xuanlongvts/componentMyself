import React, { Component } from "react";
import { menuConfig } from './menuConfig';
import $ from 'jquery';

// const renderItem = (key, href, target, callBack, name, isSub) => {
//     let link; let sub = [];
//     let liClassName = '';
//     isSub ? (liClassName += 'hasSub') : liClassName;

//     link = (
//         <li key={key} className={liClassName}>
//             <a href={href} target={target} onClick={callBack && (() => callBack())}>
//                 {name}
//             </a>
//             {isSub && (
//                 <ul className="sub">
//                     {menuDyn(isSub)}
//                 </ul>
//             )}
//         </li>
//     );
    
//     sub.push(link);
//     return sub;
// }

// const menuDyn = data => {
//     let menuNew = [];
//     for (let key in data) {
//         if (data[key].hasOwnProperty('sub')) {
//             menuNew.push(renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, data[key].sub));
//             menuDyn(data[key].sub);
//         }
//         else {
//             menuNew.push(renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, false));
//         }
//     }
//     return menuNew;
// };

// const menuRender = () => {
//     return (
//         <ul className="menuDyn">
//             {menuDyn(menuConfig)}
//         </ul>  
//     );
// };



class menuRender extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(".hasSub").hover(function() {
            $(this).toggleClass('active');
        });
    }

    renderItem(key, href, target, callBack, name, isSub) {

        let link; let sub = [];
        let liClassName = '';
        isSub ? (liClassName += 'hasSub') : liClassName;
        
        link = (
            <li key={key} className={liClassName}>
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
            if (data[key].hasOwnProperty('sub')) {
                menuNew.push(this.renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, data[key].sub));
                this.menuDyn(data[key].sub);
            }
            else {
                menuNew.push(this.renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, false));
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