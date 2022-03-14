import React from 'react';

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "Tren inferior",
                    imageUrl: "https://www.hola.com/imagenes/estar-bien/20200416165847/ejercicios-casa-reafirmar-gluteos-piernas-abdomen/0-812-307/sentadilla-bulgara-a.jpg",
                    id: 1,
                    linkUrl: "lower",
                },
                {
                    title: "Tren superior",
                    imageUrl: "https://www.hola.com/imagenes/estar-bien/20200624170894/ejercicios-para-mover-todo-el-cuerpo/0-840-268/flexion-a.jpg",
                    id: 2,
                    linkUrl: "upper",
                },
                {
                    title: "Núcleo y abdominales",
                    imageUrl: "https://i.ibb.co/1zdSxF4/abs.png",
                    id: 3,
                    linkUrl: "core",
                },
            ],
        };
    }


    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    < MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}


export default Directory;
