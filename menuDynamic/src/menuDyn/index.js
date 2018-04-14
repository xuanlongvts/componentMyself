import React, { Component } from "react";
import { menuConfig } from './menuConfig';

const renderItem = (key, href, target, callBack, name, isSub) => {
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
                    {menuDyn(isSub)}
                </ul>
            )}
        </li>
    );
    
    sub.push(link);
    return sub;
}

const menuDyn = data => {
    let menuNew = [];
    for (let key in data) {
        if (data[key].hasOwnProperty('sub')) {
            menuNew.push(renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, data[key].sub));
            menuDyn(data[key].sub);
        }
        else {
            menuNew.push(renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, false));
        }
    }
    return menuNew;
};

const menuRender = () => (
    <ul className="menuDyn">
        {menuDyn(menuConfig)}
    </ul>
);



// class menuRender extends Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             isActiveMenu: null
//         }
//         this.onMouseEnter = this.onMouseEnter.bind(this);
//         this.onMouseLeave = this.onMouseLeave.bind(this);
//     }

//     onMouseEnter(key) {
//         this.setState({
//             isActiveMenu: key
//         });
//     }

//     onMouseLeave(key) {
//         this.setState({
//             isActiveMenu: null
//         });
//     }

//     renderItem(key, href, target, callBack, name, isSub) {
//         const { isActiveMenu } = this.state;

//         let link; let sub = [];
//         let liClassName = '';
//         isSub ? (liClassName += 'hasSub') : liClassName;
//         (isActiveMenu === key) && (liClassName += ' active');
        
//         link = (
//             <li key={key} className={liClassName}
//                 onMouseEnter={() => this.onMouseEnter(key)}
//                 onMouseLeave={() => this.onMouseLeave(key)}
//             >
//                 <a href={href} target={target} onClick={callBack && (() => callBack())}>
//                     {name}
//                 </a>
//                 {isSub && (
//                     <ul className="sub">
//                         {this.menuDyn(isSub)}
//                     </ul>
//                 )}
//             </li>
//         );
        
//         sub.push(link);
//         return sub;
//     }
    
//     menuDyn(data){
//         let menuNew = [];
//         for (let key in data) {
//             if (data[key].hasOwnProperty('sub')) {
//                 menuNew.push(this.renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, data[key].sub));
//                 this.menuDyn(data[key].sub);
//             }
//             else {
//                 menuNew.push(this.renderItem(key, data[key].href, data[key].target, data[key].callBack, data[key].name, false));
//             }
//         }
//         return menuNew;
//     };

//     render() {
//         return (
//             <ul className="menuDyn">
//                 {this.menuDyn(menuConfig)}
//             </ul>
//         )
//     }
// }

export default menuRender;