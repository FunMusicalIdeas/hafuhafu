import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, scaleFromScalarsAndScalar } from '@musical-patterns/pattern'
import { HafuhafuPatternSpec } from '../types'

const buildScales: BuildScalesFunction =
    (patternSpec: HafuhafuPatternSpec): Scale[] => {
        const { nonScale, octaveSeriesScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = scaleFromScalarsAndScalar(
            nonScale.scalars,
            patternSpec.patternDurationScalar,
        )
        const pitchesScale: Scale = scaleFromScalarsAndScalar(
            octaveSeriesScale.scalars,
            patternSpec.patternPitchScalar,
        )

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}