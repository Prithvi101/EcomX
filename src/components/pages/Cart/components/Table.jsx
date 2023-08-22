import React, { useMemo } from 'react'

function Table() {
    const data = useMemo(

        () => [
     
          {
     
            col1: 'Hello',
     
            col2: 'World',
     
          },
     
          {
     
            col1: 'react-table',
     
            col2: 'rocks',
     
          },
     
          {
     
            col1: 'whatever',
     
            col2: 'you want',
     
          },
     
        ],
     
        []
     
      )




  return (
    <div>  
    <ReactTa  
        data={data}  
        columns={columns}  
        defaultPageSize = {2}  
        pageSizeOptions = {[2,4, 6]}  
    />  
</div>       
  )
}

export default Table