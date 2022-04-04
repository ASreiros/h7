import Gyvunas from "./Gyvunas"
import { v4 as uuidv4 } from 'uuid';

export default function Ganykla({karves, avys, run}) {
    return(
        <div className="ganykla">
            <div className="tvartas">
                <h2>Karvės</h2>
                {
                    karves.map(e => {
                       return <Gyvunas run={run} key={uuidv4()} info={e}></Gyvunas>
                    } )
                }
            </div>
            <div className="tvartas">
                <h2>Avys</h2>
                {
                   avys.map(e => {
                       return <Gyvunas run={run} key={uuidv4()} info={e}></Gyvunas>
                    } )
                }
            </div>
        </div>
    )
}