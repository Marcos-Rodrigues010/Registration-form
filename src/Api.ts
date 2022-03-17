const BASEAPI = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';


const apiFetchGet = async () => {
    try{
        const response = await fetch(BASEAPI);

        const json = response.json();

        return json;
    }catch(e){
        alert(`Erro: ${e}`);
        return [];
    }
};

const Api = {
    getStates: async () => {
        const json = await apiFetchGet();
        return json;
    }
};

export default () => Api;

