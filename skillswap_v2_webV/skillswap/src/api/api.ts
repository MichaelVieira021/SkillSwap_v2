import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://10.0.0.149:8080/api'
})

//CONFIG TOKEN
export const configurarToken = (token:string) => {
    api.defaults.headers.common['Authorization'] = token;
};

export function verificarToken(token:string){
    return api.post("/usuarios/validar/token", null, {
        params: {
            token: token
        }
    });
};



//USER
export function verificarUsuario(login:string, senha:string){
    return api.post("/usuarios/login", {login, senha})
};

export function cadastrarNovoUsuario(login:string, senha:string){
    return api.post("/usuarios/cadastrar", {login, senha})
};


//SKILLS USER
export function skillsUser(userId: number, ordenar?:string){
    return api.get(`usuarioskill/${userId}/skill`)
    // return api.get(`/usuarios/skillsUser?userId=${userId}`)
};

export function obterTodasSkillsUserOrdem(
    userId: number, page?:number, sort?: string, size?: number, level?:number, operacao?:string){
        console.log("naapi chegou:"+sort)
    return api.get(`usuarioskill/${userId}/skill`, {
        params: {
            page:page,
            sort:sort,
            size:size,
            level:level,
            operacao:operacao
        }
    })
};

export function levelUp(userId: number, skillId: number){
    return api.patch(`usuarioskill/${userId}/skill/${skillId}/level/up`)
};

export function levelDown(userId: number, skillId: number){
    return api.patch(`usuarioskill/${userId}/skill/${skillId}/level/down`)
};

export function delUserSkill(userId: number, skillId: number){
    return api.delete(`usuarioskill/${userId}/skill/${skillId}`)
};

export function obterTodasSkillsUserNaoTem(userId: number){
    return api.get(`usuarioskill/${userId}/skill/skillsUserNaoTem`)
};



export function adicionarSkillUser(idUser: number, idSkill: number, level: number){
    return api.post(`usuarioskill/${idUser}/skill/${idSkill}/level/${level}`)
    // , null, {
    //     params: {
    //         idUser: idUser,
    //         idSkill: idSkill,
    //         level: level
    //     }
    // });
};


//SKILL
export function obterTodasSkills(){
    return api.get("/skills")
};


export function obterSkillPorId(id: number){
    return api.get(`/skills/${id}`)
};

