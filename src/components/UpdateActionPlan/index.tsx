
import { Card, Content } from "./style";



const Arrow =  require('./../../Assets/Vector.svg')
const Vector =  require('./../../Assets/Vector.svg')

export function UpdateActionPlan() {
    return (
            <Card>
            <header>
                    <div>
                        <h1>Planos de ação</h1>
                        <img src={Vector} alt="config" />
                    </div>         
                    <p>Atualizações</p>
                    <input type="text" placeholder=" Pesquise" className="search" />
                    <button className="buttonHeader"><strong>pendente</strong></button>
            </header>
            <Content>
            <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <strong>Nome do plano de ação</strong>
                            <p className="subtitle">responsável: Bruno Barros</p>
                            </td>
                            <td>
                                <button>Pendente</button> <img src={Arrow} alt="arrow" /><button>Realizado</button>
                                <p className="date">12/12/12</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <strong>Nome do plano de ação</strong>
                            <p className="subtitle">responsável: Bruno Barros</p>
                            </td>
                            <td>
                               <button className="button">Realizado</button>
                                <p className="date">12/12/12</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <strong>Nome do plano de ação</strong>
                            <p className="subtitle">responsável: Bruno Barros</p>
                            </td>
                            <td>
                               <button className="button">Realizado</button>
                                <p className="date">12/12/12</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <strong>Nome do plano de ação</strong>
                            <p className="subtitle">responsável: Bruno Barros</p>
                            </td>
                            <td>
                               <button className="button">Realizado</button>
                                <p className="date">12/12/12</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <strong>Nome do plano de ação</strong>
                            <p className="subtitle">responsável: Bruno Barros</p>
                            </td>
                            <td>
                               <button className="button">Realizado</button>
                                <p className="date">12/12/12</p>
                            </td>
                        </tr>                        <tr>
                            <td>
                            <strong>Nome do plano de ação</strong>
                            <p className="subtitle">responsável: Bruno Barros</p>
                            </td>
                            <td>
                               <button className="button">Realizado</button>
                                <p className="date">12/12/12</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <strong>Nome do plano de ação</strong>
                            <p className="subtitle">responsável: Bruno Barros</p>
                            </td>
                            <td>
                               <button className="button">Realizado</button>
                                <p className="date">12/12/12</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Content>
            </Card>
    )
}