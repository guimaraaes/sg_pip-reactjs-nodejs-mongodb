# spPIP: Sistema de Gestão do Programa Institucional de Permanência Acadêmica

> aplicação web para o gerenciamento de bolsas do programa institucional de permanência da UFERSA

## Quick Start

Para iniciar a aplicação no seu computador é necessário ter o Docker instalado e seguir os seguintes passos:

```bash
# clone o repertório na sua máquina local
git clone github.com/guimaraaes/web.git

# Direcione-se para o diretório
cd web

# Construa a aplicação utilizando Docker
docker-compose build

# Compile a aplicação utilizando Docker
docker-compose up
```

## O sistema

A proposta inicial do trabalho é desenvolver uma aplicação web para um conjunto de atividades específicas que o SIGAA realiza. Dessa forma, a aplicação não servirá para substituir este, mas deve auxiliar no processo seletivo de bolsas do Programa Institucional de Permanência da UFERSA.

O sistema busca centralizar o processo seletivo PIP apenas para a aplicação web com o intuito de dispensar a necessidade do discente ter que preencher formulários no SIGAA e ainda precisar comparecer presencialmente para entregar a documentação. Além disso, é possível gerenciar e salvar a documentação entregue de modo que o discente pode apenas atualizar documentos que sofreram alteração, mas não necessita mais entregar os mesmos documentos a cada processo seletivo que participa.


### :mailbox: Dúvidas? Me manda um [e-mail](sguimaraaes@gmail.com) 

<img src="https://raw.githubusercontent.com/guimaraaes/guimaraaes/master/assets/card-readme.png" >

### :globe_with_meridians: para me encontrar na web
[![LinkedIn](https://img.shields.io/badge/-LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sara-guimar%C3%A3es-negreiros-aa2382155/)
[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://guimaraaes.github.io/guimaraaes/)
[<img height="25" src="https://i.imgur.com/2iVxee6.png">![Lattes](https://img.shields.io/badge/lattes-%23100000?logoColor=blue&style=for-the-badge)](http://lattes.cnpq.br/7082901769077209)


<!-- 
## Desenvolvimento
Coordenador
- [x] Cadastrar um processo
- [x] Buscar por processos e discentes
- [x] Consultar um processo específico
- [x] Consultar submissões dos discentes
- [x] Editar processos
- [ ] Finalizar processos
Discente
- [ ] Consultar processos
- [ ] Realizar submissão em processos
- [ ] Cadastrar documentos .pdf
Geral
- [ ] formata data para DateTime
- [ ] descartar um documento e pedir confirmação
- [ ] visualizar documentos
- [ ] boolean para documento selecionado
- [ ] vincular documento por typo e pelo id do discente
- [ ] id discente único, mas participando de vários processes
- [ ] Mensagens de alerta: erro ou operação concluída
-->
