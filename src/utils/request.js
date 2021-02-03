import axios from 'axios'

export function getData(url) {
    axios.get(url).then(
        response => {
            console.log('I get u', response.data)
        },
        error => {
            console.log('errorMsg=> ', error)
        }
    )
}
