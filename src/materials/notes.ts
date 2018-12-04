import { NoteSpec } from '@musical-patterns/compiler'
import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { apply } from '@musical-patterns/utilities'
import { PITCH_INDEX_BASE_OFFSET } from '../constants'
import { BuildHafuhafuNoteSpecParameters } from '../types'

const buildNoteSpec: (buildHafuhafuNoteSpecParameters: BuildHafuhafuNoteSpecParameters) => NoteSpec =
    ({ cell, gain, duration, sustain, pitch }: BuildHafuhafuNoteSpecParameters): NoteSpec => ({
        durationSpec: {
            scalar: duration,
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        gainSpec: {
            scalar: gain,
        },
        pitchSpec: {
            index: apply.Offset(cell, PITCH_INDEX_BASE_OFFSET),
            scalar: pitch,
            scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
        },
        sustainSpec: {
            scalar: sustain,
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
}