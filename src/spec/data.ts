import { SpecDataFor } from '@musical-patterns/pattern'
import { HafuhafuSpec } from '../types'
import { attributes } from './attributes'
import { hafuhafuWithPitchCircularityInitial, initial } from './initial'
import { validationFunction } from './validation'

const specData: SpecDataFor<HafuhafuSpec> = {
    attributes,
    initial,
    validationFunction,
}

const hafuhafuWithPitchCircularitySpecData: SpecDataFor<HafuhafuSpec> = {
    attributes,
    initial: hafuhafuWithPitchCircularityInitial,
}

export {
    specData,
    hafuhafuWithPitchCircularitySpecData,
}