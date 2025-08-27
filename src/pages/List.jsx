import { useDispatch, useSelector } from "react-redux"
import Loader from './../components/Loader';
import Error from './../components/Error';
import "bootstrap/dist/css/bootstrap.min.css"
import c from './../utils/nullCheck';
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {

    const dispatch = useDispatch();
    const { isLoading, error, flights } = useSelector((store) => store.flight)

    // kaçpncı elemandandan itibaren kesilecek
    const [start, setStart] = useState(0)

    // sayfa başına kaç eleman gösterilecek
    const perPage = 12

    // kaçıncı elemana kadar kesilecek
    const end = start + perPage

    // slice methodu ile başlangıç ve bitiş elemanlarını belirleyip kesiyoruz
    const currFlights = flights.slice(start, end)

    // toplam sayfa sayısı
    const total = Math.ceil(flights.length / perPage)

    // yeni sayfaya tıklandığında çalışacak fonksiyon
    const handlePage = (event) => {
        setStart(event.selected * perPage);

    }




    if (isLoading)
        return (
            <div className="list-wrapper">
                <Loader />
            </div>
        )

    if (error)
        return (
            <div className="list-wrapper">
                <Error message={error} />
            </div>
        )

    return <div className="list-container">
        <table className="table table-hover  table-responsive">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Kuyruk Kodu</th>
                    <th>Enlem</th>
                    <th>Boylam</th>
                    <th>Derece</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {currFlights.map((flight) => (
                    <tr key={flight.id}>
                        <td>{c(flight.id)}</td>
                        <td>{c(flight.code)}</td>
                        <td>{c(flight.lat)}</td>
                        <td>{c(flight.lng)}</td>
                        <td>{c(flight.deg)}</td>
                        <td>
                            <button onClick={() => dispatch(open(flight.id))}>Detay</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>

        <div className="pagination-wrapper">
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                className="pagination"
                pageCount={total}
                pageRangeDisplayed={1}
                onPageChange={handlePage}
                renderOnZeroPageCount={null}
            />
        </div>

    </div>


}









export default List
