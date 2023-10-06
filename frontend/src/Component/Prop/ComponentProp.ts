/* Last Modified: 10:45 AM Fri 06 Oct 2023
*/
/* interface React.JSX.IntrinsicElements {
       div: ...
   }
*/

type ComponentOwnProps<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements
> = {
    readonly component?: IntrinsicElement
}

type ComponentPropsBuilder<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements,
    Props = React.JSX.IntrinsicElements[IntrinsicElement]
> = {
    readonly [Prop in keyof Props]: Props[Prop]
}

export type ComponentProps = {
    [IntrinsicElement in keyof React.JSX.IntrinsicElements]:
        ComponentOwnProps<IntrinsicElement> &
        ComponentPropsBuilder<IntrinsicElement>
}[keyof React.JSX.IntrinsicElements]
