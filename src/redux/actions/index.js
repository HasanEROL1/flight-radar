import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
    // parametreleri belirle
    const params = {
        bl_lat: '35.8',
        bl_lng: '25',
        tr_lat: '42.1',
        tr_lng: '44.8',
        limit: '300',
        speed: '2,999',
    }

    // api isteği at
    const res = await api.get("/flights/list-in-boundary", { params })

    // dizileri nesneye çevir
    const formatted = res.data.aircraft.map((i) => ({
        id: i[0],
        code: i[1],
        lat: i[2],
        lng: i[3],
        deg: i[4],
    }))

    // slice a aktarılacak payloadı belirle


    return formatted
})

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
    const params = {
        flight: id,
    }
    // parametreleri belirle
    const res = await api.get("/flights/detail", { params })

    //console.log(res)

    // api dan detayları al
    api.get("flights/detail")

    //aksiyonun payloadını belirle
    return res.data
})