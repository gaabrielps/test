import { Card, Content } from "./style";
import Chart from "react-google-charts";
import { PieChart } from "../PieChart";


const Vector =  require('./../../Assets/Vector.svg')

export const data = [
    ["Inspeções", "Inspeções por mês"],
    ["Realizados", 22],
    ["Em aberto", 3],
    ["Não realizados", 2],
  ];
  
  export const options = {
    pieHole: 0.4,
    is3D: false,
  };
  

export function Inspections() {

    return (
        <>
            <Card>
                <header>
                    <div>
                        <h1>Inspeções</h1>
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