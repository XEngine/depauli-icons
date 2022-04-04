module.exports = {
    name: 'removeGroups',
    type: 'visitor',
    fn: (root, params) => {
        return {
            element: {
                enter: (node, parentNode) => {
                    for(let child of node.children){
                        console.log(child)
                    }
                },
            }
        }
    }
}
