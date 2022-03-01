
import { Card, Content } from "./style";

import { PieChart } from "../PieChart";

const Vector =  require('./../../Assets/Vector.svg')

export function StatusActionPlan() {
    return (
        <>
            <Card>
            <header>
                    <div>
                        <h1>Plano de ação</h1>
                        <img src={Vector} alt="config" />
                    </div>         
                    <p>status do dia</p>
                </header>
                <Content>
                   <PieChart/> 
            </Content>
            </Card>
        </>
    )

}