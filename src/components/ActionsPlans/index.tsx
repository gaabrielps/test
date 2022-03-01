import { Card, Content} from "./style";
import { PieChart } from "../PieChart";


const Vector =  require('./../../Assets/Vector.svg')

export function ActionsPlans() {
    return (
        <>
            <Card>
            <header>
                    <div>
                        <h1>Planos de ação</h1>
                        <img src={Vector} alt="config" />
                    </div>         
                    <p>Visão geral</p>
            </header>
            <Content>
                   <PieChart/> 
            </Content>
            
            </Card>
        </>
    )

}