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

type CardProps<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements
> = Partial<
    CardOwnProps<IntrinsicElement>
> & CardPropsBuilder<IntrinsicElement>
export type { CardProps }
