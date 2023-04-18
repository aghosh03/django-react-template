

export const GetDataFromApi = (url)=>{
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


export const GetDataFromLocalMysql = (table)=>{

}

export const GetDataFromLocalPostgres = (table)=>{

}

export const GetDatafromAWSMysql = (table)=>{

}

export const GetDatafromAWSPostgres = (table)=>{

}
