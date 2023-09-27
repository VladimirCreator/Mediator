import type { TabsListProps } from "@radix-ui/react-tabs"

type SegmentedControlOwnProps<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements
> = {
    readonly type: IntrinsicElement
}

type SegmentedControlPropsBuilder<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements,
    Props = React.JSX.IntrinsicElements[IntrinsicElement]
> = {
    readonly [Prop in keyof Props]: Props[Prop]
}

type SegmentedControlProps<
    IntrinsicElement extends keyof React.JSX.IntrinsicElements
> = Partial<
    SegmentedControlOwnProps<IntrinsicElement>
> & SegmentedControlPropsBuilder<IntrinsicElement> & TabsListProps

export type { SegmentedControlProps }
