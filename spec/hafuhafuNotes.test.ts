import { Notes } from '../../../src/types'
import * as from from '../../../src/utilities/from'
import { Count, Index, Scalar } from '../../../src/utilities/nominalTypes'
import offset from '../../../src/utilities/offset'
import scale from '../../../src/utilities/scale'
import * as to from '../../../src/utilities/to'
import { hafuhafuNotes } from '../src/hafuhafuNotes'
import { fiveRhythm } from '../src/rhythms'

describe('hafuhafu notes', () => {
    let result: Notes = []
    const TEST_BAR_COUNT: Count = to.Count(32)
    const CELL_COUNT_OF_FIVE_RHYTHM: Count = to.Count(5)
    const expectedNotesCount: Count = to.Count(from.Count(CELL_COUNT_OF_FIVE_RHYTHM) * from.Count(TEST_BAR_COUNT))
    const expectedSustainAmount: Scalar = to.Scalar(0.8)

    beforeEach(() => {
        result = hafuhafuNotes(fiveRhythm, TEST_BAR_COUNT)
    })

    it('returns a series of x notes, where x is the length of the rhythm times the count of bars', () => {
        expect(to.Count(result.length)).toBe(expectedNotesCount)
    })

    it('keeps a constant gain on the even notes', () => {
        for (let i: Index = to.Index(0); i < to.Index(from.Count(expectedNotesCount)); i = offset(i, to.Offset(2))) {
            expect(result[from.Index(i)].gain).toBe(to.Scalar(1))
        }
    })

    it('gradually reduces the gain on the odd notes until they are silent', () => {
        for (let i: Index = to.Index(1); i < to.Index(from.Count(expectedNotesCount)); i = offset(i, to.Offset(2))) {
            expect(result[from.Index(i)].gain).toBe(
                to.Scalar(Math.pow(2, 1 - (from.Index(i) / from.Count(expectedNotesCount))) - 1),
            )
        }
    })

    it('gradually decreases the duration of the notes from 2 to 1, increasing the tempo from 1/2x to 1x', () => {
        for (let i: Index = to.Index(0); i < to.Index(from.Count(expectedNotesCount)); i = offset(i, to.Offset(1))) {
            expect(from.Time(result[from.Index(i)].duration)).toBe(
                Math.pow(2, 1 - (from.Index(i) / from.Count(expectedNotesCount))),
            )
        }
    })

    it('keeps a constant sustain of the notes, slightly shorter than half the first duration', () => {
        for (let i: Index = to.Index(0); i < to.Index(from.Count(expectedNotesCount)); i = offset(i, to.Offset(1))) {
            expect(result[from.Index(i)].sustain).toBe(to.Time(from.Scalar(expectedSustainAmount)))
        }
    })
})
