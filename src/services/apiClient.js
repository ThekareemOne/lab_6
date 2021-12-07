const apiClient = {
  getTodos: () => {
    return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .catch((error) => error);
  },
};

export default apiClient;
