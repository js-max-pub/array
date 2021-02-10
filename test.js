import './raw.js'
import { cartesian } from './raw.mjs'
import test from '../test/raw.js'

test.equal('remove', [1, 2, 3].remove(1), [2, 3])
test.equal('remove', [1, 2, 3].remove(2), [1, 3])
test.equal('remove', [1, 2, 3].remove(3), [1, 2])
test.equal('remove', [1, 2, 3].remove(4), [1, 2, 3])

test.equal('intersection', [1, 2, 3].intersection([2, 3, 4]), [2, 3])

test.equal('cartesian',
	cartesian([1, 2], [1, 2, 3, 4], [1, 2, 3]),
	[
		[1, 1, 1], [1, 1, 2], [1, 1, 3],
		[1, 2, 1], [1, 2, 2], [1, 2, 3],
		[1, 3, 1], [1, 3, 2], [1, 3, 3],
		[1, 4, 1], [1, 4, 2], [1, 4, 3],
		[2, 1, 1], [2, 1, 2], [2, 1, 3],
		[2, 2, 1], [2, 2, 2], [2, 2, 3],
		[2, 3, 1], [2, 3, 2], [2, 3, 3],
		[2, 4, 1], [2, 4, 2], [2, 4, 3]
	]
)

test.equal('first', [1,2,3].first, 1)
test.equal('first', [1,2,3].last, 3)

test.summary()