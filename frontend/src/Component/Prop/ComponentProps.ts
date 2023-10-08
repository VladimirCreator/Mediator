type ComponentOwnProps<T> = T extends infer IntrinsicElement ?
    IntrinsicElement extends keyof React.JSX.IntrinsicElements ? {
        readonly component: IntrinsicElement
    } : {

    }
: never

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
