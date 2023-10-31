import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from '../App';
import PdfCreation from '../pages/pdfCreation/PdfCreation';
import Map from '../pages/maps/Map';
import GeoLocation from '../pages/geoCoding/GeoLocation';
import ExcelSheet from '../pages/excelCreation/ExcelSheet';
import Chart from '../pages/chart/Chart';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/pdfCreation',
        element: <PdfCreation/>
    },
    {
        path: '/createExcel',
        element: <ExcelSheet/>
    },
    {
        path: '/Geocoding',
        element: <GeoLocation/>
    },
    {
        path: '/chart',
        element: <Chart/>
    },
    {
        path: '/maps',
        element: <Map/>
    }
])

function RoutingConfig() {
    return(
        <RouterProvider router={router}/>
    )
}

export default RoutingConfig;