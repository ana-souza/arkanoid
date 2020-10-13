import React from 'react';
import './Tabuleiro.css';
class Tabuleiro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            children: [
              {key: 1, name: "Hello"},
              {key: 2, name: "World"},
              {key: 3, name: "etc"}
            ]
          }
        
    }

    tamanhoMatriz () {

        
    }

    render() {

        let teste = new Array (10);

        for (let i = 0; i<teste.length; i++) {
            teste[i] = i;
        }
        let children = teste.map((val) => {
            return (
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            )
        });
          // the div with children inside
          return (
            <div>
              {children}
            </div>
          );
    }
}

export default Tabuleiro;