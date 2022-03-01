import { ActionsPlans } from "../ActionsPlans";
import { EventHistory } from "../EventHistory";
import { Inspections } from "../Inspections";
import { Shedule } from "../Shedule";
import { StatusActionPlan } from "../StatusActionPlan";
import { UpdateActionPlan } from "../UpdateActionPlan";

import { Container } from "./style";


export function Dashboard() {
    return ( 
        <Container>
            <h1 className="title">Painel de Controle</h1>
               <div className="grid">
                   <div className="cards"><EventHistory /></div>
                   <div className="cards"><ActionsPlans /></div>
                   <div className="cards"><Inspections /></div>
                   <div className="cards"><StatusActionPlan /></div>
                   <div className="cards"><UpdateActionPlan /></div>
                   <div className="cards"><Shedule /></div>
               </div>
        </Container>
    )
}
