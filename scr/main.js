class Set {
    constructor() {
        this.item = {}
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.item, element)
    }
    add(element) {
        if (this.has(element)) {
            return false
        }
        else {
            this.item[element] = element
            return true
        }
    }
    delete(element) {
        if (this.has(element)) {
            return false
        }
        else {
            delete this.item[element]
            return true
        }
    }
    clear() {
        this.item = {}
    }
    size() {
        return Object.keys(this.item).length
    }
    values() {
        return Object.values(this.item)
    }
    //并集
    union(otherSet) {
        const unionSet = new Set
        this.values().forEach(item => unionSet.add(item))
        otherSet.values().forEach(item => unionSet.add(item))
        return unionSet
    }
    //交集
    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet
        let smallerSet
        if (this.size() >= otherSet.size()) {
            biggerSet = values
            smallerSet = otherValues
        } else {
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach(items => {
            if (biggerSet.includes(items)) {
                intersectionSet.add(items)
            }
        })
        return intersectionSet
    }
    //差集
    difference(otherSet) {
        const differenceSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        values.forEach(items => {
            if (!(otherValues.includes(items))) {
                differenceSet.add(items)
            }
        })
        return differenceSet
    }
    //子集
    isSubsetOf(otherSet) {
        if (this.values().length === 0) {
            return true
        }
        if (this.size() > otherSet.size()) {
            return false
        }
        let isSubset = true
        this.values().every(items => {
            if (!(otherSet.has(items))) {
                isSubset = false
                return false
            } else {
                return true
            }
        })
        return isSubset
    }


}
let set1 = new Set()
let set2 = new Set()
set1.add(1)
set1.add(5)
set2.add(5)
set2.add(2)
let x = set1.union(set2)
let y = set1.difference(set2)
console.dir(y)
let set3 = new Set()
console.log(set3.size())