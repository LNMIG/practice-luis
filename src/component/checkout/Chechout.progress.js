import './Checkout.progress.css'
import Tick from './check-mark-white.png'

class CheckoutProgress extends PureComponent {
    constructor(props){
        super(props);
        this.state={}
    }

    componentWillUnmount(){
        this.setState({})
    }


    render () {
        let step =(this.props.step)
        let steps = this.props.steps.map(e => e.split("_")[0].toLowerCase())
                
        step = step.split("_")[0]
        step = step.charAt(0).toUpperCase() + step.slice(1).toLowerCase()
        steps = steps.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
        this.setState(state => ({...this.state, [step]: step}))

        console.log(Object.keys(this.state))
        
        return (
            <div className="progressLine">
                {steps && steps.length > 0
                    ? steps.map((each, index) =>
                        <div className={index !== (steps.length-1) ? 'stepWrapper' : 'finalStepWrapper'}>
                            <div className={Object.keys(this.state).includes(each) ? 'linearOn' : 'linearOff'}></div>
                            <div className='wrapper'>
                                {index === (steps.length-1) ?
                                    <div className={Object.keys(this.state).includes(each) ? 'labelOn' : 'labelOff'}>{each}</div>    
                                :   <>
                                    <div className={Object.keys(this.state).includes(each) ? 'circleOn' : 'circleOff'}>
                                        {Object.keys(this.state)[index+1] !== undefined ? <img className="imageTick" src={Tick}/> : (index+1)}
                                    </div>
                                    <div className={Object.keys(this.state).includes(each) ? 'labelOn' : 'labelOff'}>{each}</div>    
                                    </>
                                }
                                
                                
                            </div>
                        </div>
                        )
                    : ''
                }
            </div>
        )
    }
}
export default CheckoutProgress