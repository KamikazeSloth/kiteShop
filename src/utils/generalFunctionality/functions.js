export const groupById = function(keyToSortBy, array) {
            let categorizedList = {}
    
            array.forEach(element => {
            const valueToSortBy = element[keyToSortBy];
            if(!categorizedList[valueToSortBy]) {
                categorizedList[valueToSortBy] = [];
            }
            categorizedList[valueToSortBy].push(element);
        })
        return categorizedList
    }
