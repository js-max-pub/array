import array from './raw.mjs';

Object.defineProperties(Array.prototype, {
	// trim: { value: function () { return array.trim(this) } },

	remove: { value: function (value) { return array.remove(this, value) } },
	removeIndex: { value: function (value) { return array.removeIndex(this, value) } },
	intersection: { value: function (other) { return array.intersection(this, other) } },

	// union: { value: function (other) { return array.union(this, other) } },
	union: {
		value: function (other) {
			return [...this, ...other]
		}
	},

	unique: { get: function () { return array.unique(this) } },
	clean: { get: function () { return array.clean(this) } },


	first: {
		get: function () {
			return this[0];
		}
	},
	last: {
		get: function () {
			return this.slice(-1)[0];
		}
	},
	shuffle: {
		get: function () {
			let a = JSON.parse(JSON.stringify(this)); // deep copy
			for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
			}
			return a;
		}
	},
});



