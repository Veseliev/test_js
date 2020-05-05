function attempt(avaible, allowed, preferred) {
    let result = [];

    if (!allowed.includes('any')) {
        avaible = avaible.filter(x => allowed.includes(x));
    }
    if (avaible.length == 0) {
        return result;
    }
    if (preferred.includes('any')) {
        result = avaible;
    }
    else {
        for (let i = 0; i< preferred.length; i++) {
            const elem = preferred[i];
            const largerElem = avaible[avaible.length - 1];
            if (avaible.includes(elem)) {
                result.push(elem);
            }
            else if (!result.includes(largerElem)) {
                result.push(largerElem);
            }
        }
    }
    return result;
}