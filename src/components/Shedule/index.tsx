import { Card, Content } from "./style";

import { useEffect } from "react";
import { api } from "../../Services/api";


const Vector =  require('./../../Assets/Vector.svg')
export function Shedule() {
    useEffect(()=> {
        api.get('inspections')
        .then(response => console.log(response.data))

    }, [])




    return (
            <Card>
            <header>
                    <div>
                        <h1>Inspeções agendadas</h1>
                        <button className="buttonHeader"><strong>Diário</strong></button> <img src={Vector} alt="config" />
                        
                    </div> 
                <input type="text" placeholder=" Pesquise" className="search" />       
            </header>
            <Content>
                <table>
                    <thead>
                        <tr>
                            <th className="name">Nome</th>
                            <th>Planejado</th>
                            <th>Realizado</th>
                            <th>Ultima atualização</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="name">Larissa Silva Goncalves</td>
                            <td>10</td>
                            <td>10</td>
                            <td>12/12/12</td>
                        </tr>
                        <tr>
                            <td className="name">Gabriel Lopes Araujo</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/12/12</td>
                        </tr>
                        <tr>
                        <td className="name">Gabriel Lopes Araujo</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10/12/12</td>
                        </tr>
                    </tbody>
                </table>
            </Content>
            </Card>
    )

}