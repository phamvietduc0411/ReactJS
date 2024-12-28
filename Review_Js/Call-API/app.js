// AJAX
// let xml = new XMLHttpRequest();

// xml.onreadystatechange = function() {
//  if(this.readyState == 4){
//     const res = JSON.parse(this.responseText)
//     console.log(res);

//     let html = ''
//     res.data.forEach(item => {
//         html += `<div> ${item.first_name
//         } </div>`
//     });
//     document.getElementById('result').innerHTML = html
//  }
    
// }

// xml.open('GET', 'https://reqres.in/api/users?page=2',true)
// xml.send();


// Fetch API

// fetch('https://reqres.in/api/users?page=2')
// //xử lý response từ sever 
// .then(
//     (res)=>{
//         //fetch không thể handle dc lỗi từ sever (404,500,...)
//         if(res.status == 200){
//             console.log('successfully ' + res.status);
            
//         }
//         return res.json()
//     }
// )
// //sử lý data json dc chuyển đổi qua từ  response 
// .then(
//     (data) => {
//         console.log(data);
        
//     }
// )

// AXIOS    

//không giống như fetch thì dùng axios có thể bắt dc lỗi như 404,500
// axios.get('https://reqres.in/api/unknown/23')
//     .then(res => {
//         console.log(res.data);  // In dữ liệu vào console
//         document.getElementById('result').innerText = JSON.stringify(res.data, null, 2);
//     })
//     .catch(error => {
//         console.error('Lỗi:', error);
//     });


const instance = axios.create({
    baseURL: 'https://reqres.in/api'
  });
// mục đích của instance này để tránh lặp lại link api https://reqres.in/api/users và https://reqres.in/api/unknown/23 đều trùng https://reqres.in/api/

let user = {
    name : 'Hosh',
    job : 'Leader'
}

    axios.post('https://reqres.in/api/users',user)
    .then(res => {
        console.log(res);
        
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });

    instance.get('/users/')
    .then(res => {
        console.log(res);
        
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });

    //interceptors
//Interceptor trong code là như vậy!
// Trước khi gửi request → Thêm thông tin, token, headers... gửi những thứ mình muốn gửi
// Khi nhận response → Kiểm tra lỗi, chỉnh sửa dữ liệu trả về , nhận những thông tin mình muốn nhận ví dụ như chỉ nhận data hoặc header thôi    
    instance.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });



