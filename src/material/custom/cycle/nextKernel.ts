import {
    arraySet,
    as,
    Block,
    Cardinal,
    Cycle,
    DECREMENT,
    indexJustBeyondFinalElementFromElementsTotal,
    INITIAL,
    insteadOf,
    Integer,
    length,
    Multiple,
    negative,
    NEXT,

    Ordinal,
    slice,
    use,
    ZERO_AND_POSITIVE_INTEGERS,
} from '@musical-patterns/utilities'
import { LayerIndex, Sieve } from '../../../types'
import { ComputeNextKernelParameters } from './types'

const computeNextKernel: (parameters: {
    previousKernel: Block,
    reverse: boolean,
    sieve: Sieve,
    totalIndices: Cardinal<LayerIndex[]>,
}) => Block =
    ({ totalIndices, previousKernel, reverse, sieve }: ComputeNextKernelParameters): Block => {
        const kernelLength: Cardinal<Block> = length(previousKernel)

        if (reverse) {
            const nextKernel: Block = as.Block([])
            const terminalKernel: Cycle = use.Cardinal(
                as.Cycle(previousKernel),
                insteadOf<Cardinal, Cycle>(negative(totalIndices)),
            )

            for (
                let terminalKernelIndex: Ordinal = INITIAL;
                terminalKernelIndex < indexJustBeyondFinalElementFromElementsTotal(kernelLength);
                terminalKernelIndex = use.Cardinal(terminalKernelIndex, NEXT)
            ) {
                const nextKernelIndex: Ordinal = use.IntegerModulus(
                    use.Transition(
                        use.Multiple(terminalKernelIndex, insteadOf<Multiple, Ordinal>(sieve)),
                        as.Transition(as.number(use.Cardinal(sieve, DECREMENT))),
                    ),
                    as.IntegerModulus<Ordinal>(as.number(kernelLength)),
                )

                arraySet(nextKernel, nextKernelIndex, use.Ordinal(terminalKernel, terminalKernelIndex))
            }

            return nextKernel
        }

        return as.Block(
            slice(
                ZERO_AND_POSITIVE_INTEGERS,
                INITIAL,
                insteadOf<Ordinal, Integer[]>(indexJustBeyondFinalElementFromElementsTotal(kernelLength)),
            )
                .map(as.Ordinal)
                .map((index: Ordinal) => {
                    const nextIndex: Ordinal = use.Transition(
                        use.Multiple(index, insteadOf<Multiple, Ordinal>(sieve)),
                        as.Transition(as.number(totalIndices)),
                    )

                    return use.Ordinal(as.Cycle(previousKernel), nextIndex)
                }),
        )
    }

export {
    computeNextKernel,
}
