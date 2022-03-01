
import { Card, Content } from "./style";
import { BarChart } from "../BarChart";

const Vector =  require('./../../Assets/Vector.svg')



export function EventHistory() {
    return (
        <>
            <Card>
            <header>
                    <div>
                        <h1>Histórico de eventos</h1>
                        
                       <button className="buttonHeader"><strong>Diário</strong></button> <img src={Vector} alt="config" />
                    </div>        
            </header>
            <Content>
                <BarChart/>
            </Content>
            
            </Card>
        </>
    )

}