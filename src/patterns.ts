import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { apply, to } from '@musical-patterns/utilities'
import {
    HAFUHAFU_DURATION_SCALAR,
    HAFUHAFU_INITIAL_BLOCK,
    HAFUHAFU_INITIAL_ITERATION_LENGTH,
    HAFUHAFU_PITCH_SCALAR,
    HAFUHAFU_WITH_PITCH_CIRCULARITY_SCALAR,
} from './constants'
import { buildEntities, buildHafuhafuWithPitchCircularityEntities, buildScales } from './materials'
import { post } from './metadata'
import { HafuhafuPatternSpec } from './types'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const hafuhafuWithPitchCircularityPatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildHafuhafuWithPitchCircularityEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Hafuhafu',
    musicalIdeaIllustrated: 'rhythmic circularity',
}

const hafuhafuWithPitchCircularityPatternMetadata: PatternMetadata = {
    description: 'same as above, just with extraneous and slipshod pitch circularity',
    formattedName: 'Hafuhafu (with pitch circularity)',
    musicalIdeaIllustrated: 'rhythmic circularity',
}

const spec: HafuhafuPatternSpec = {
    block: HAFUHAFU_INITIAL_BLOCK,
    iterationLength: HAFUHAFU_INITIAL_ITERATION_LENGTH,
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: HAFUHAFU_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: HAFUHAFU_PITCH_SCALAR,
}

const hafuhafuWithPitchCircularityPatternSpec: HafuhafuPatternSpec = {
    block: HAFUHAFU_INITIAL_BLOCK,
    iterationLength: HAFUHAFU_INITIAL_ITERATION_LENGTH,
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: apply.Scalar(HAFUHAFU_DURATION_SCALAR, HAFUHAFU_WITH_PITCH_CIRCULARITY_SCALAR),
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: HAFUHAFU_PITCH_SCALAR,
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.HAFUHAFU,
    spec,
}

const hafuhafuWithPitchCircularityPattern: Pattern = {
    material: hafuhafuWithPitchCircularityPatternMaterial,
    metadata: hafuhafuWithPitchCircularityPatternMetadata,
    patternId: PatternId.HAFUHAFU_WITH_PITCH_CIRCULARITY,
    spec: hafuhafuWithPitchCircularityPatternSpec,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
    [ PatternId.HAFUHAFU_WITH_PITCH_CIRCULARITY ]: hafuhafuWithPitchCircularityPattern,
})

export {
    pattern,
    hafuhafuWithPitchCircularityPattern,
    patterns,
    spec,
}
