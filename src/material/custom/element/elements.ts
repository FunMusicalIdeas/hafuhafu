import { PitchDurationGainSustainScale } from '@musical-patterns/material'
import {
    Amplitude,
    as,
    Block,
    Cardinal,
    ContourElement,
    Frequency,
    insteadOf,
    notAs,
    Ordinal,
    Scalar,
    Time,
    UnitScalar,
    use,
} from '@musical-patterns/utilities'
import { Layer } from '../../../nominals'
import { ExistenceStyle, HafuhafuMode } from '../../../spec'
import { LayerIndex, Sieve } from '../../../types'
import { computeDuration } from './duration'
import { computeGain } from './gain'
import { computePitchIndex, computePitchScalar } from './pitch'
import { computeSustain } from './sustain'
import { ComputeElementParameters, ComputeLayerProgressParameters } from './types'

const computeLayerProgress: (parameters: {
    iterationIndex: Ordinal<Block>,
    layerIndices: LayerIndex[],
    layersProgresses: UnitScalar[][],
}) => UnitScalar =
    ({ layerIndices, iterationIndex, layersProgresses }: ComputeLayerProgressParameters): UnitScalar => {
        const layerIndex: LayerIndex = insteadOf<Ordinal, Layer[]>(use.Ordinal(
            layerIndices,
            insteadOf<Ordinal, LayerIndex[]>(iterationIndex)),
        )

        return use.Ordinal(
            use.Ordinal(
                layersProgresses,
                insteadOf<Ordinal, UnitScalar[][]>(layerIndex),
            ),
            insteadOf<Ordinal, UnitScalar[]>(iterationIndex),
        )
    }

const computeElement: (parameters: {
    existenceStyle: ExistenceStyle,
    iterationIndex: Ordinal<Block>,
    iterationKernel: Block,
    layerCount: Cardinal<Layer[]>,
    layerIndices: LayerIndex[],
    layersProgresses: UnitScalar[][],
    mode: HafuhafuMode,
    reverse: boolean,
    sieve: Sieve,
    stretchPitch: boolean,
    totalIndices: Cardinal<LayerIndex[]>,
}) => ContourElement<PitchDurationGainSustainScale> =
    (
        {
            existenceStyle,
            iterationIndex,
            iterationKernel,
            layerCount,
            layerIndices,
            layersProgresses,
            mode,
            reverse,
            sieve,
            stretchPitch,
            totalIndices,
        }: ComputeElementParameters,
    ): ContourElement<PitchDurationGainSustainScale> => {
        const layerProgress: UnitScalar = computeLayerProgress({ iterationIndex, layerIndices, layersProgresses })

        const pitchIndex: Ordinal =
            computePitchIndex({ iterationIndex, iterationKernel })
        const duration: Scalar<Time> =
            computeDuration({ iterationIndex, layerCount, mode, reverse, sieve, totalIndices })
        const gain: Scalar<Amplitude> =
            computeGain({ existenceStyle, layerProgress, mode })
        const sustain: Scalar<Time> =
            computeSustain({ sieve })
        const pitchScalar: Scalar<Frequency> =
            computePitchScalar({ layerCount, layerProgress, mode, sieve, stretchPitch })

        return as.ContourElement<PitchDurationGainSustainScale>([
            notAs.Ordinal(pitchIndex),
            notAs.Scalar<Time>(duration),
            notAs.Scalar<Amplitude>(gain),
            notAs.Scalar<Time>(sustain),
            notAs.Scalar<Frequency>(pitchScalar),
        ])
    }

export {
    computeElement,
}
