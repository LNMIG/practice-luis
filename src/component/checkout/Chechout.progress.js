import './Checkout.progress.css'

class CheckoutProgress extends PureComponent {
    constructor(props){
        super(props)
    }

    render () {
        let step = this.props.step
        let steps = this.props.steps.map(e => e.split("_")[0].toLowerCase())
        
        step = step.split("_")[0]
        step = step.charAt(0).toUpperCase() + step.slice(1).toLowerCase()
        steps = steps.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
        console.log(steps)

        return (
            <div className="progressLine">
                {steps && steps.length > 0
                    ? steps.map((each, index) =>
                        <div className='stepsWrapper'>
                            <div className='linear'></div>
                            <div className='wrapper'>
                                <div className="circle">{index+1}</div>
                                <div className="label">{each}</div>
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