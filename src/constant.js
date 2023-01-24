import moment from "moment/moment";

export const url_params ={
    per_page: 80,
    page: 1, 
    from: moment().format('Y-M-d'),
    to: moment().format('Y-M-d')
}