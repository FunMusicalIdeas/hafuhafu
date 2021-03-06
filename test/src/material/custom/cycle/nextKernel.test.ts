import { as, Cardinal } from '@musical-patterns/utilities'
import { computeNextKernel, LayerIndex, Sieve } from '../../../../../src/indexForTest'

describe('next kernel', (): void => {
    describe('when mode is zeno', (): void => {
        const AVOIDING_THE_ISSUE_OF_KERNELS_NOT_DIVIDING_EVENLY_INTO_THE_ITERATION_HERE_BECAUSE_IT_IS_TESTED_AT_KERNEL_CYCLE_LEVEL: Cardinal<LayerIndex[]> = as.Cardinal<LayerIndex[]>(0)
        const totalIndices: Cardinal<LayerIndex[]> = AVOIDING_THE_ISSUE_OF_KERNELS_NOT_DIVIDING_EVENLY_INTO_THE_ITERATION_HERE_BECAUSE_IT_IS_TESTED_AT_KERNEL_CYCLE_LEVEL
        const reverse: boolean = false

        it(
            `when the sieve is 2, returns the kernel composed of the same length and members as the original, \
but formed by choosing every other note, starting with the first one, wrapping around the end, until you have chosen each of them`,
            (): void => {
                const sieve: Sieve = as.Multiple<LayerIndex>(2)

                expect(computeNextKernel({
                    previousKernel: as.Block([ 1, 2, 3, 4, 5 ]),
                    reverse,
                    sieve,
                    totalIndices,
                }))
                    .toEqual(as.Block([ 1, 3, 5, 2, 4 ]))
            },
        )

        it(
            `when the sieve is 3, returns the kernel composed of the same length and members as the original, \
but formed by choosing every third note, wrapping around the end, until you have chosen each of them`,
            (): void => {
                const sieve: Sieve = as.Multiple<LayerIndex>(3)

                expect(computeNextKernel({
                    previousKernel: as.Block([ 1, 2, 3, 4, 5 ]),
                    reverse,
                    sieve,
                    totalIndices,
                }))
                    .toEqual(as.Block([ 1, 4, 2, 5, 3 ]))
            },
        )

        it(
            `even works when the sieve is greater than the kernel length (though its just icing on top of the same sieve \
one modulus down (although choosing sieve 1 greater than the length, as shown here, is interesting - because you can't get sieve 1 directly))`,
            (): void => {
                const sieve: Sieve = as.Multiple<LayerIndex>(6)

                expect(computeNextKernel({
                    previousKernel: as.Block([ 1, 2, 3, 4, 5 ]),
                    reverse,
                    sieve,
                    totalIndices,
                }))
                    .toEqual(as.Block([ 1, 2, 3, 4, 5 ]))
            },
        )
    })
})
