// tslint:disable no-magic-numbers max-file-line-count

import {
    as,
    Block,
    Cardinal, Duration,
    Frequency,
    Hz,
    Logarithm,
    Ms,
    ofNotAs, Pitch, Point,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    SEMITONE,
    SQUARE_ROOT_OF_THREE,
} from '@musical-patterns/utilities'
import { Layer } from '../nominals'
import { LayerIndex, Sieve, SieveFractalRepetitions } from '../types'
import { ExistenceStyle, HafuhafuMode } from './types'

const HAFUHAFU_INITIAL_BASIS_FREQUENCY: Pitch = as.Point<Hz>(100)
const HAFUHAFU_INITIAL_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(350)
const HAFUHAFU_INITIAL_KERNEL: Block = as.Block([ 0, 12, 0, 0, 12 ])
const HAFUHAFU_INITIAL_MODE: HafuhafuMode = HafuhafuMode.ZENO
const HAFUHAFU_INITIAL_EXISTENCE_STYLE: ExistenceStyle = ExistenceStyle.FADE
const HAFUHAFU_INITIAL_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions = as.Multiple<Cardinal<LayerIndex[]>>(40)
const HAFUHAFU_INITIAL_PITCH_STEP: Logarithm<Frequency> = SEMITONE
const HAFUHAFU_INITIAL_REVERSE: boolean = false
const HAFUHAFU_INITIAL_SIEVE: Sieve = as.Multiple<LayerIndex>(2)
const HAFUHAFU_INITIAL_LAYER_COUNT: Cardinal<Layer[]> = as.Cardinal<Layer[]>(2)
const HAFUHAFU_INITIAL_STRETCH_PITCH: boolean = false

const POPCORN_PRESET_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(225)
const POPCORN_PRESET_BASIS_FREQUENCY: Pitch =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.B ][ ScientificPitchOctaveNumber._3 ]
const POPCORN_PRESET_KERNEL: Block = as.Block([ 12, 10, 12, 7, 3, 7, 0, -1 ])
const POPCORN_PRESET_SIEVE: Sieve = as.Multiple<LayerIndex>(3)
const POPCORN_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions = as.Multiple<Cardinal<LayerIndex[]>>(64)

const AASB_SIEVEWISE_PRESET_SIEVE: Sieve = as.Multiple<LayerIndex>(6)

const MONOCOT_PRESET_KERNEL: Block = as.Block([ 1 ])
const MONOCOT_PRESET_SIEVE: Sieve = as.Multiple<LayerIndex>(5)
const MONOCOT_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions = as.Multiple<Cardinal<LayerIndex[]>>(8)

const SCALE_SCRAMBLE_PRESET_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(343)
const SCALE_SCRAMBLE_PRESET_BASIS_FREQUENCY: Pitch = as.Point<Hz>(77)
const SCALE_SCRAMBLE_PRESET_KERNEL: Block = as.Block([ 0, 1, 2, 3, 4, 5, 6 ])
const SCALE_SCRAMBLE_PRESET_PITCH_STEP: Logarithm<Frequency> = as.Logarithm<Frequency>(1.25992104989)
const SCALE_SCRAMBLE_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions =
    as.Multiple<Cardinal<LayerIndex[]>>(49)
const SCALE_SCRAMBLE_PRESET_SIEVE: Sieve = as.Multiple<LayerIndex>(3)

const AASB_KERNELWISE_PRESET_KERNEL: Block = as.Block([ 0, 0, 0, 12, 0, 12, 12 ])
const AASB_KERNELWISE_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions =
    as.Multiple<Cardinal<LayerIndex[]>>(56)

const THREE_PHASER_PRESET_KERNEL: Block = as.Block([ 0, 0, 12, 0, 0, 12, 12 ])
const THREE_PHASER_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions = as.Multiple<Cardinal<LayerIndex[]>>(28)

const RECURSIEVE_PRESET_KERNEL: Block = as.Block([ 0, 3, 4, 7, 9 ])
const RECURSIEVE_PRESET_LAYER_COUNT: Cardinal<Layer[]> = as.Cardinal<Layer[]>(6)
const RECURSIEVE_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions = as.Multiple<Cardinal<LayerIndex[]>>(32)
const RECURSIEVE_PRESET_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(150)
const RECURSIEVE_PRESET_BASIS_FREQUENCY: Pitch = as.Point<Hz>(175)

const SHOW_TEXTURE_PRESET_KERNEL: Block = as.Block([ 0 ])
const SHOW_TEXTURE_LAYER_COUNT: Cardinal<Layer[]> = as.Cardinal<Layer[]>(4)
const SHOW_TEXTURE_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions = as.Multiple<Cardinal<LayerIndex[]>>(4)
const SHOW_TEXTURE_PRESET_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(200)
const SHOW_TEXTURE_PRESET_BASIS_FREQUENCY: Pitch = as.Point<Hz>(200)

const CHORTLES_PRESET_LAYER_COUNT: Cardinal<Layer[]> = as.Cardinal<Layer[]>(3)
const CHORTLES_PRESET_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(250)
const CHORTLES_PRESET_KERNEL: Block = as.Block([ 0, 3, 8, 1, 7 ])
const CHORTLES_PRESET_BASIS_FREQUENCY: Pitch =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._4 ]

const CATERPILLAR_PRESET_LAYER_COUNT: Cardinal<Layer[]> = as.Cardinal<Layer[]>(3)
const CATERPILLAR_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions = as.Multiple<Cardinal<LayerIndex[]>>(80)
const CATERPILLAR_PRESET_KERNEL: Block = as.Block([ 0, -1, 0, 0, -1 ])
const CATERPILLAR_PRESET_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(250)
const CATERPILLAR_PRESET_BASIS_FREQUENCY: Pitch = as.Point<Hz>(150)

const SIEVELIZATION_III_PRESET_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(250)
const SIEVELIZATION_III_PRESET_PITCH_STEP: Logarithm<Frequency> = as.Logarithm<Frequency>(SQUARE_ROOT_OF_THREE)
const SIEVELIZATION_III_PRESET_KERNEL: Block = as.Block([ 1, 0 ])
const SIEVELIZATION_III_PRESET_LAYER_COUNT: Cardinal<Layer[]> = as.Cardinal<Layer[]>(4)
const SIEVELIZATION_III_PRESET_SIEVE_FRACTAL_REPETITIONS: SieveFractalRepetitions =
    as.Multiple<Cardinal<LayerIndex[]>>(3)
const SIEVELIZATION_III_PRESET_SIEVE: Sieve = as.Multiple<LayerIndex>(3)

export {
    HAFUHAFU_INITIAL_BASIS_FREQUENCY,
    HAFUHAFU_INITIAL_BASIS_DURATION,
    HAFUHAFU_INITIAL_KERNEL,
    HAFUHAFU_INITIAL_MODE,
    HAFUHAFU_INITIAL_EXISTENCE_STYLE,
    HAFUHAFU_INITIAL_SIEVE_FRACTAL_REPETITIONS,
    HAFUHAFU_INITIAL_PITCH_STEP,
    HAFUHAFU_INITIAL_REVERSE,
    HAFUHAFU_INITIAL_SIEVE,
    HAFUHAFU_INITIAL_LAYER_COUNT,
    HAFUHAFU_INITIAL_STRETCH_PITCH,
    POPCORN_PRESET_BASIS_DURATION,
    POPCORN_PRESET_BASIS_FREQUENCY,
    POPCORN_PRESET_KERNEL,
    POPCORN_PRESET_SIEVE,
    AASB_SIEVEWISE_PRESET_SIEVE,
    MONOCOT_PRESET_KERNEL,
    MONOCOT_PRESET_SIEVE,
    SCALE_SCRAMBLE_PRESET_BASIS_DURATION,
    SCALE_SCRAMBLE_PRESET_BASIS_FREQUENCY,
    SCALE_SCRAMBLE_PRESET_KERNEL,
    SCALE_SCRAMBLE_PRESET_PITCH_STEP,
    SCALE_SCRAMBLE_PRESET_SIEVE,
    SCALE_SCRAMBLE_PRESET_SIEVE_FRACTAL_REPETITIONS,
    AASB_KERNELWISE_PRESET_KERNEL,
    THREE_PHASER_PRESET_KERNEL,
    THREE_PHASER_PRESET_SIEVE_FRACTAL_REPETITIONS,
    RECURSIEVE_PRESET_BASIS_DURATION,
    RECURSIEVE_PRESET_BASIS_FREQUENCY,
    RECURSIEVE_PRESET_SIEVE_FRACTAL_REPETITIONS,
    RECURSIEVE_PRESET_KERNEL,
    RECURSIEVE_PRESET_LAYER_COUNT,
    SHOW_TEXTURE_PRESET_KERNEL,
    SHOW_TEXTURE_LAYER_COUNT,
    SHOW_TEXTURE_SIEVE_FRACTAL_REPETITIONS,
    SHOW_TEXTURE_PRESET_BASIS_DURATION,
    SHOW_TEXTURE_PRESET_BASIS_FREQUENCY,
    CHORTLES_PRESET_LAYER_COUNT,
    CHORTLES_PRESET_BASIS_DURATION,
    CHORTLES_PRESET_BASIS_FREQUENCY,
    CHORTLES_PRESET_KERNEL,
    POPCORN_PRESET_SIEVE_FRACTAL_REPETITIONS,
    MONOCOT_PRESET_SIEVE_FRACTAL_REPETITIONS,
    AASB_KERNELWISE_PRESET_SIEVE_FRACTAL_REPETITIONS,
    CATERPILLAR_PRESET_BASIS_DURATION,
    CATERPILLAR_PRESET_BASIS_FREQUENCY,
    CATERPILLAR_PRESET_KERNEL,
    CATERPILLAR_PRESET_LAYER_COUNT,
    CATERPILLAR_PRESET_SIEVE_FRACTAL_REPETITIONS,
    SIEVELIZATION_III_PRESET_BASIS_DURATION,
    SIEVELIZATION_III_PRESET_PITCH_STEP,
    SIEVELIZATION_III_PRESET_KERNEL,
    SIEVELIZATION_III_PRESET_LAYER_COUNT,
    SIEVELIZATION_III_PRESET_SIEVE_FRACTAL_REPETITIONS,
    SIEVELIZATION_III_PRESET_SIEVE,
}
