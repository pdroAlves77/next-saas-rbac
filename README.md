# next-saas-rbac **WORK IN PROGRESS**

Sistema RBAC (Role-Based Access Control) para aplicações SaaS utilizando Next.js, TypeScript e validação de permissões com Zod.

## Descrição

O **next-saas-rbac** é um projeto em desenvolvimento focado em fornecer uma estrutura robusta e extensível de autenticação e controle de acesso baseada em papéis (roles) para aplicações multi-tenant SaaS. O sistema permite definir permissões detalhadas para cada tipo de usuário, facilitando a gestão de recursos por organizações, projetos e faturamento.

## Principais Funcionalidades

- **Controle de acesso por papéis** (`ADMIN`, `MEMBER`, `BILLING`)
- **Validação de permissões com Zod**: schemas para usuário, projeto, organização e billing.
- **Subjects separados** para entidades do sistema: user, project, organization, invite e billing.
- **Permissões detalhadas**:
  - `ADMIN`: pode gerenciar tudo, inclusive transferir propriedade de organizações das quais é owner.
  - `MEMBER`: pode criar e gerenciar seus próprios projetos, acessar informações de usuário.
  - `BILLING`: acesso total ao módulo de billing.
- **Integração modular**: fácil de adaptar e integrar em projetos Next.js.
- **Pronto para multi-tenant**: projetado para SaaS com múltiplas organizações e usuários.

## Estrutura do Projeto

- `apps/api/` — API principal da aplicação
- `packages/auth/` — Biblioteca de autenticação, roles, permissões e schemas de entidades
- `pages/` — Rotas Next.js (interface web, se aplicável)
- `components/` — Componentes reutilizáveis de UI

---

Desenvolvido por [pdroAlves77](https://github.com/pdroAlves77)
