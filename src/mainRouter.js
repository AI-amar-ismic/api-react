import { Route, Switch } from "react-router-dom";

import Home from "./home";
import TradeScreen from "./tradeScreen";

export default function MainRouter(){
    return(
    <div>
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/trade' ><TradeScreen/></Route>
        

        </Switch>
    </div>
    )
}