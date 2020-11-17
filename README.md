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

## Desenvolvimento

Coordenador

- [x] Cadastrar um processo
- [x] Buscar por processos e discentes
- [x] Consultar um processo específico
- [x] Consultar submissões dos discentes
- [x] Editar processos
- [ ] Finalizar processos
<!-- - [ ] Excluir processos -->

Discente

- [ ] Consultar processos
- [ ] Realizar submissão em processos
- [ ] Cadastrar documentos .pdf
- [ ] Envio de e-mail para o discente

Geral

- [ ] Mensagens de alerta: erro ou operação concluída
