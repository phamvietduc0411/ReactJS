// setting axios
class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000",
      timeout: 10000,
    });

    this.instance.interceptors.request.use(
      (config) => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`
        }
        return config
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (config) => {
        return config.data;
      },
      (error) => {
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  http
    .post("login", { username, password })
    .then((res) => {
      console.log(res);
      localStorage.setItem('access_token',res.data.access_token);
      localStorage.setItem('refresh_token',res.data.refresh_token);
    })
    .catch((error) => {
      console.error("Lỗi:", error);
    });
});

const fetchProfile = () => {
  http
    .get('profile')
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
}

document
  .getElementById('btn-get-profile')
  .addEventListener('click', (event) => {
    fetchProfile()
  })