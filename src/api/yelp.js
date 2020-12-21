import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
            'Bearer u2vBwuksZwVBxinjILJXEY6vcrGI_90sLi19iKB-DQ0PI6J1mLDIq-Y8cln1JH9Vsr0AzR1DKS0yIQiqEGYfDz5TM0nngh4WpbpIYBz1652NPnN432gYXGB6wzfgX3Yx'

    }
});