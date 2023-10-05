/* interface React.JSX.IntrinsicElements {
       div: ...
   }
*/

type CardOwnProps<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements
> = {
    readonly component: IntrinsicElement
}

type CardPropsBuilder<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements,
    Props = React.JSX.IntrinsicElements[IntrinsicElement]
> = {
    readonly [Prop in keyof Props]: Props[Prop]
}

type CardProps = {
    [IntrinsicElement in keyof React.JSX.IntrinsicElements]:
        CardOwnProps<IntrinsicElement> & CardPropsBuilder<IntrinsicElement>
}[keyof React.JSX.IntrinsicElements]
export type { CardProps }
