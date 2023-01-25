import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { StyledEngineProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
// import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <QueryClientProvider client={client}>
       <StyledEngineProvider injectFirst>
       <App />
       </StyledEngineProvider>
     
    </QueryClientProvider>
);
