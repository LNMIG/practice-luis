import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import CheckoutProgress from 'Component/checkout/Chechout.progress';

class Checkout extends SourceCheckout {
    render() {
        let checkoutStep = this.props.checkoutStep
        let checkoutSteps = Object.keys(this.stepMap) 

        return (
            <main block="Checkout">
                <CheckoutProgress step={checkoutStep} steps={checkoutSteps}/>
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }

}

export default Checkout