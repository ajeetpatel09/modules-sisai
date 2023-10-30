import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from '../App';
import PdfCreation from '../pages/pdfCreation/PdfCreation';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/pdfCreation',
        element: <PdfCreation/>
    }
])

function RoutingConfig() {
    return(
        <RouterProvider router={router}/>
    )
}

export default RoutingConfig;