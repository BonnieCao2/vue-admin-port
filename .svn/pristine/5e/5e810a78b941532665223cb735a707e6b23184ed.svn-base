
        /*对tree的数据做处理*/ 
        function handleTreeData (data, parentId){
            let result = [],
            pId = typeof parentId === 'number' ? parentId : getPId(data),
            step
            
            step = data.filter( v => v.parentId == pId)
            step.map( v => v.children = getChildren(data, v))
            
            // console.log(step)
            return step
        }

        function getChildren (data, parent){
            let id = parent.id
            let children = data.filter( v => v.parentId == id)

            if (children.length !== 0){
                    children.forEach( child => {
                    child.children = getChildren(data, child)
                })
            }

            return children
        }

        function getPId (data){
            let pIdArr = data.map( item => item.parentId).sort( (a, b) => a - b)
            pIdArr = [...new Set(pIdArr)]
            const root = pIdArr.filter( item => !data.some( val => val.id === item))
            return parseInt(root[0])
        }

        export {handleTreeData}