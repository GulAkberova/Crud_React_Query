import React from 'react'
import axios from "axios";
import { useQuery } from "react-query";
import { DataGrid } from '@mui/x-data-grid';
function CategoriesQuery() {
    const { data, isLoading, isError, error, isFetching } = useQuery(
        "categories",
        () => {
          return axios
            .get("https://northwind.vercel.app/api/categories")
            .then((res) => res.data);
            console.log(res.data);
        },
        {
          //   cacheTime: 5000,
          //   staleTime: 15000,
        }
      );
      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
       
      ];
   
   
      console.log(`isLoading ${isLoading} isFetching ${isFetching}`);
    
      if (isLoading) return <h1>loading ...</h1>;
    
      if (isFetching) return <h1>updating ...</h1>;
    
      if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    
    
    </>
  )
}

export default CategoriesQuery