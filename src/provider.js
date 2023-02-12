import axios from "axios";

/* Qualquer coisa será necessário gerar
seu próprio endpoint no crudcrud caso já
esteja expirado as requests diárias,
substituindo o link atual da baseURL
pelo seu */

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/d0096411b12540c09680fd47cbfb06a6",
  timeout: 10000,
});
