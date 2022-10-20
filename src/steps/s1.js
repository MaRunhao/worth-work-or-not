import { Button } from "antd-mobile";

export function S1 (props) {
    return <div className="s1 tip" style={{paddingTop: '15vh'}}>
        <h1>这B班到底值不值得上?</h1>
        <Button block color="primary" onClick={props.next} style={{marginTop: '10vh'}}>前去康康</Button>
    </div>
}

export default {
    S1
}