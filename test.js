import * as array from './mod.js'
import * as object from '../object/mod.js'
import * as test from '../test/mod.js'

object.extend(Array, [array.removeValue, array.sortBy, array.unique], [array.first, array.last])

test.equal('remove', [1, 2, 3].removeValue(1), [2, 3])
test.equal('remove', [1, 2, 3].removeValue(2), [1, 3])
test.equal('remove', [1, 2, 3].removeValue(3), [1, 2])
test.equal('remove', [1, 2, 3].removeValue(4), [1, 2, 3])

test.equal('sortBy', [{ a: 3 }, { a: 1 }, { a: 2 }].sortBy('a'), [{ a: 1 }, { a: 2 }, { a: 3 }])

test.equal('unique', [1, 2, 1, 2, 3, 3].unique(), [1, 2, 3])
test.equal('unique', [{ id: 1, name: 'a' }, { id: 2 }, { id: 1, name: 'b' }].unique('id').sortBy('id'), [{ id: 2 }, { id: 1, name: 'b' }].sortBy('id'))

test.equal('intersection', array.intersection([1, 2, 3], [2, 3, 4]), [2, 3])

test.equal('cartesian',
	array.cartesian([1, 2], [1, 2, 3, 4], [1, 2, 3]),
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

test.equal('first', [1, 2, 3].first, 1)
test.equal('first', [1, 2, 3].last, 3)


// test.summary()